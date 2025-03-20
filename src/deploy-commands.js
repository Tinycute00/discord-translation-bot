/**
 * 斜線命令部署腳本
 * 用於手動註冊斜線命令到Discord
 */
require('dotenv').config();
const { REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');

// 收集所有斜線命令
const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(commandsPath);

console.log('正在載入命令...');

for (const folder of commandFolders) {
  const folderPath = path.join(commandsPath, folder);
  
  if (fs.statSync(folderPath).isDirectory()) {
    const commandFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'));
    
    for (const file of commandFiles) {
      const filePath = path.join(folderPath, file);
      const command = require(filePath);
      
      if ('data' in command && 'execute' in command) {
        commands.push(command.data.toJSON());
        console.log(`已載入命令: ${command.data.name}`);
      } else {
        console.log(`[警告] 命令 ${filePath} 缺少必要的 "data" 或 "execute" 屬性`);
      }
    }
  }
}

// 檢查是否有命令要註冊
if (commands.length === 0) {
  console.log('沒有找到任何命令可供註冊');
  process.exit(0);
}

// 初始化REST API客戶端
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);

// 部署命令
(async () => {
  try {
    console.log(`開始註冊 ${commands.length} 個斜線命令...`);
    
    // 決定是全局部署還是特定伺服器部署
    let data;
    if (process.env.DISCORD_GUILD_ID) {
      // 部署到特定伺服器
      data = await rest.put(
        Routes.applicationGuildCommands(
          process.env.DISCORD_CLIENT_ID,
          process.env.DISCORD_GUILD_ID
        ),
        { body: commands }
      );
      console.log(`成功在伺服器 ${process.env.DISCORD_GUILD_ID} 註冊了 ${data.length} 個斜線命令`);
    } else {
      // 全局部署
      data = await rest.put(
        Routes.applicationCommands(process.env.DISCORD_CLIENT_ID),
        { body: commands }
      );
      console.log(`成功全局註冊了 ${data.length} 個斜線命令`);
    }
  } catch (error) {
    console.error('註冊命令時發生錯誤:', error);
  }
})();