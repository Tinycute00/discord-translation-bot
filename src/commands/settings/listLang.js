/**
 * 列出表情符號與語言對應關係的斜線命令
 * List emoji to language mapping slash command
 */
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { getAllLanguageMappings } = require('../../database/languageSettings');
const { getSupportedLanguages } = require('../../utils/translator');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('listlang')
    .setDescription('列出所有表情符號與語言對應關係 / List all emoji to language mappings')
    .addBooleanOption(option => 
      option.setName('global')
        .setDescription('是否僅顯示全局設定 / Show only global settings')
        .setRequired(false)),
  
  async execute(interaction) {
    // 獲取參數 / Get parameters
    const showGlobalOnly = interaction.options.getBoolean('global') || false;
    
    // 獲取設定 / Get settings
    const guildId = interaction.guild ? interaction.guild.id : null;
    const mappings = getAllLanguageMappings(showGlobalOnly ? null : guildId);
    
    // 獲取支援的語言名稱 / Get supported language names
    const supportedLanguages = getSupportedLanguages();
    
    // 檢查是否有設定 / Check if there are settings
    if (Object.keys(mappings).length === 0) {
      return interaction.reply({
        content: `沒有找到${showGlobalOnly ? '全局' : ''}表情符號語言映射 / No ${showGlobalOnly ? 'global' : ''} emoji language mappings found`,
        ephemeral: true
      });
    }
    
    // 創建嵌入訊息 / Create embedded message
    const embed = new EmbedBuilder()
      .setColor(0x3498DB)
      .setTitle('表情符號與語言對應關係 / Emoji to Language Mappings')
      .setDescription(`以下是${showGlobalOnly ? '全局' : '當前可用的'}表情符號與語言的對應關係 / The following are the ${showGlobalOnly ? 'global' : 'currently available'} emoji to language mappings`)
      .setTimestamp();
    
    // 添加所有映射，並按語言分類 / Add all mappings, categorized by language
    const mappingsByLang = {};
    
    // 組織映射 / Organize mappings
    Object.entries(mappings).forEach(([emoji, langCode]) => {
      if (!mappingsByLang[langCode]) {
        mappingsByLang[langCode] = [];
      }
      mappingsByLang[langCode].push(emoji);
    });
    
    // 添加到embed / Add to embed
    Object.entries(mappingsByLang).forEach(([langCode, emojis]) => {
      const langName = supportedLanguages[langCode]?.name || langCode;
      const fieldValue = emojis.join(' ');
      embed.addFields({ 
        name: `${langName} (${langCode})`, 
        value: fieldValue,
        inline: true
      });
    });
    
    // 添加使用說明 / Add usage instructions
    embed.addFields({
      name: '如何使用 / How to use',
      value: '在任何訊息上添加相應的表情符號，機器人將為您翻譯該訊息，翻譯結果將在2分鐘後自動刪除 / Add the corresponding emoji to any message, the bot will translate the message for you, and the translation will be automatically deleted after 2 minutes',
      inline: false
    });
    
    // 回覆 / Reply
    await interaction.reply({
      embeds: [embed],
      ephemeral: false
    });
  }
};