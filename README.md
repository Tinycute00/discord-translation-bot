# Discord 多語言翻譯機器人

這是一個功能強大的 Discord 翻譯機器人，讓用戶可以透過表情符號觸發訊息翻譯，特別適用於多語言社群伺服器。

## 功能特點

- 🔄 **表情符號觸發翻譯**：用戶只需對訊息添加表情符號即可獲得該語言的翻譯
- 💬 **回覆式翻譯**：翻譯以回覆原始訊息的方式呈現，整潔不雜亂
- 🌍 **多語言支援**：支援多種語言的翻譯，可根據需求自由配置
- ⏱️ **自動清理**：翻譯訊息在2分鐘後自動刪除，保持頻道整潔
- 🚫 **避免重複**：同一訊息不會重複產生相同語言的翻譯
- ⚙️ **易於管理**：管理員可以輕鬆通過選單設置表情符號與語言的對應關係

## 安裝指南

### 前提條件

- Node.js 16.11.0 或更高版本
- 一個 Discord 帳號和已設置的機器人應用程式

### 步驟

1. 克隆此儲存庫
```bash
git clone https://github.com/Tinycute00/discord-translation-bot.git
cd discord-translation-bot
```

2. 安裝依賴
```bash
npm install
```

3. 配置環境變數
將 `.env.example` 複製為 `.env` 並填入您的 Discord 機器人令牌和其他設定。

4. 啟動機器人
```bash
npm start
```

## 使用方法

### 基本使用

1. 將機器人邀請到您的 Discord 伺服器
2. 發送訊息，然後對訊息添加已設置的表情符號（例如：🌐 表示英文）
3. 機器人會回覆原始訊息，提供翻譯結果

### 管理員命令

- `/addlang` - 添加表情符號和語言的對應關係
- `/removelang` - 移除表情符號和語言的對應關係
- `/listlang` - 列出目前所有設置的表情符號和對應語言

## 開發者資訊

### 技術棧

- Discord.js v14 - Discord API 交互
- axios - API 請求處理
- DeepL 和 Google 翻譯 API - 翻譯服務
- Express - Web 介面（可選）

### 文件結構

- `src/` - 主要源代碼
  - `index.js` - 應用入口點
  - `commands/` - 斜線命令
  - `events/` - 事件處理
  - `utils/` - 工具函數
  - `web/` - Web 介面（可選）
  - `database/` - 資料庫操作

## 授權

此專案使用 ISC 授權 - 詳情請參閱 LICENSE 文件

---

如有任何問題或建議，請提交 Issue 或 Pull Request。