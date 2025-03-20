/**
 * 清理語言設定文件中的無效表情符號
 * Clean invalid emojis from language settings file
 */
const fs = require('fs');
const path = require('path');

// 語言設定文件路徑 / Language settings file path
const SETTINGS_FILE = path.join(process.cwd(), 'data', 'languageSettings.json');

// 空白語言設定 / Empty language settings
const EMPTY_SETTINGS = {
  global: {},
  guilds: {}
};

/**
 * 簡單檢查是否為有效的Discord表情符號
 * @param {string} emoji - 要檢查的表情符號
 * @returns {boolean} - 是否為有效表情符號
 */
function isValidEmoji(emoji) {
  if (!emoji || typeof emoji !== 'string') return false;
  
  // 移除所有空白字符
  const trimmedEmoji = emoji.trim();
  
  // 檢查表情符號長度
  if (trimmedEmoji.length === 0) return false;
  
  // 檢查是否包含問號（Unicode無法識別的字符）
  if (trimmedEmoji.includes('?')) return false;
  
  // 檢查是否為Discord自定義表情符號格式 <:name:id> 或 <a:name:id>
  if (trimmedEmoji.match(/^<(a)?:[a-zA-Z0-9_]+:[0-9]+>$/)) {
    return true;
  }
  
  // 對於國旗和其他Unicode表情符號，我們改用簡單的長度和編碼檢查
  // 大多數正規表情符號的 length 會是 1-2，而國旗表情符號通常是 4 或更多
  return [...trimmedEmoji].every(char => {
    const code = char.codePointAt(0);
    // 檢查是否為表情符號範圍（包括國旗、膚色修飾符等）
    return code >= 0x1F000 || char === '️'; // 包含變體選擇符 U+FE0F
  });
}

function cleanLanguageSettings() {
  console.log('開始清理語言設定文件...');
  
  try {
    // 檢查文件是否存在
    if (!fs.existsSync(SETTINGS_FILE)) {
      console.log('語言設定文件不存在，創建空白設定');
      fs.writeFileSync(SETTINGS_FILE, JSON.stringify(EMPTY_SETTINGS, null, 2), 'utf8');
      console.log('已創建空白語言設定');
      return;
    }
    
    // 讀取當前設定
    const settingsData = JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf8'));
    console.log('當前設定：', JSON.stringify(settingsData, null, 2));
    
    // 清理全局設定中的無效表情符號
    const cleanedGlobal = {};
    let globalInvalidCount = 0;
    
    for (const [emoji, langCode] of Object.entries(settingsData.global || {})) {
      if (isValidEmoji(emoji)) {
        cleanedGlobal[emoji] = langCode;
      } else {
        console.log(`移除全局設定中的無效表情符號：'${emoji}' -> ${langCode}`);
        globalInvalidCount++;
      }
    }
    
    // 清理伺服器設定中的無效表情符號
    const cleanedGuilds = {};
    let guildInvalidCount = 0;
    
    for (const [guildId, guildSettings] of Object.entries(settingsData.guilds || {})) {
      cleanedGuilds[guildId] = {};
      
      for (const [emoji, langCode] of Object.entries(guildSettings)) {
        if (isValidEmoji(emoji)) {
          cleanedGuilds[guildId][emoji] = langCode;
        } else {
          console.log(`移除伺服器 ${guildId} 設定中的無效表情符號：'${emoji}' -> ${langCode}`);
          guildInvalidCount++;
        }
      }
      
      // 如果伺服器設定為空，則不保留該伺服器的設定
      if (Object.keys(cleanedGuilds[guildId]).length === 0) {
        delete cleanedGuilds[guildId];
      }
    }
    
    // 保存清理後的設定 - 不再使用預設值
    const cleanedSettings = {
      global: cleanedGlobal,
      guilds: cleanedGuilds
    };
    
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(cleanedSettings, null, 2), 'utf8');
    
    console.log(`清理完成！移除了 ${globalInvalidCount} 個全局無效表情符號和 ${guildInvalidCount} 個伺服器無效表情符號`);
    console.log('清理後的設定：', JSON.stringify(cleanedSettings, null, 2));
    
  } catch (error) {
    console.error('清理語言設定失敗:', error);
  }
}

// 執行清理
cleanLanguageSettings();