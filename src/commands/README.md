# 命令目錄

這個目錄包含機器人的所有斜線命令，按功能分類放在不同的子目錄中。

## 目錄結構

- `settings/` - 與機器人設置相關的命令，如語言和表情符號設置
  - `addLang.js` - 添加表情符號與語言對應
  - `removeLang.js` - 移除表情符號與語言對應
  - `listLang.js` - 列出所有設置的語言
  - `addChannel.js` - 添加頻道自動翻譯設置
  - `removeChannel.js` - 移除頻道翻譯設置
  - `listChannel.js` - 列出所有設置的頻道

- `bot/` - 機器人基本管理命令（如幫助、狀態等）

## 命令格式

每個命令文件都應該導出一個包含以下屬性的對象：

```javascript
module.exports = {
  data: SlashCommandBuilder, // Discord.js 指令構建器
  execute: async function(interaction) {} // 執行函數
};
```