# Discord Translation Bot / Discord 多語言翻譯機器人

[English](#overview) | [中文](#概述)

## Overview

This is a powerful Discord translation bot that allows users to trigger message translations using emoji reactions, especially suitable for multilingual community servers.

### Features

- 🔄 **Emoji-Triggered Translations**: Users can get translations by simply adding a reaction emoji to any message
- 💬 **Reply-based Translation**: Translations appear as replies to the original message, keeping channels organized
- 🌍 **Multi-language Support**: Supports translation into multiple languages, freely configurable
- ⏱️ **Auto-Cleanup**: Translation messages are automatically deleted after 2 minutes
- 🚫 **Avoid Duplication**: The same message won't be translated multiple times in the same language
- ⚙️ **Easy Management**: Administrators can easily set up emoji-to-language mappings through the menu

### Installation

#### Prerequisites

- Node.js 16.11.0 or higher
- A Discord account and configured bot application

#### Steps

1. Clone this repository
```bash
git clone https://github.com/Tinycute00/discord-translation-bot.git
cd discord-translation-bot
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Copy `.env.example` to `.env` and fill in your Discord bot token and other settings.

4. Start the bot
```bash
npm start
```

### Usage

#### Basic Usage

1. Invite the bot to your Discord server
2. Send a message, then add the configured emoji to the message (e.g., 🌐 for English)
3. The bot will reply to the original message with the translation

#### Admin Commands

- `/addlang` - Add an emoji-to-language mapping
- `/removelang` - Remove an emoji-to-language mapping
- `/listlang` - List all configured emoji-to-language mappings

### Developer Information

#### Tech Stack

- Discord.js v14 - Discord API interaction
- axios - API request handling
- DeepL and Google Translate APIs - Translation services
- Express - Web interface (optional)

#### File Structure

- `src/` - Main source code
  - `index.js` - Application entry point
  - `commands/` - Slash commands
  - `events/` - Event handling
  - `utils/` - Utility functions
  - `web/` - Web interface (optional)
  - `database/` - Database operations

---

## 概述

這是一個功能強大的 Discord 翻譯機器人，讓用戶可以透過表情符號觸發訊息翻譯，特別適用於多語言社群伺服器。

### 功能特點

- 🔄 **表情符號觸發翻譯**：用戶只需對訊息添加表情符號即可獲得該語言的翻譯
- 💬 **回覆式翻譯**：翻譯以回覆原始訊息的方式呈現，整潔不雜亂
- 🌍 **多語言支援**：支援多種語言的翻譯，可根據需求自由配置
- ⏱️ **自動清理**：翻譯訊息在2分鐘後自動刪除，保持頻道整潔
- 🚫 **避免重複**：同一訊息不會重複產生相同語言的翻譯
- ⚙️ **易於管理**：管理員可以輕鬆通過選單設置表情符號與語言的對應關係

### 安裝指南

#### 前提條件

- Node.js 16.11.0 或更高版本
- 一個 Discord 帳號和已設置的機器人應用程式

#### 步驟

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

### 使用方法

#### 基本使用

1. 將機器人邀請到您的 Discord 伺服器
2. 發送訊息，然後對訊息添加已設置的表情符號（例如：🌐 表示英文）
3. 機器人會回覆原始訊息，提供翻譯結果

#### 管理員命令

- `/addlang` - 添加表情符號和語言的對應關係
- `/removelang` - 移除表情符號和語言的對應關係
- `/listlang` - 列出目前所有設置的表情符號和對應語言

### 開發者資訊

#### 技術棧

- Discord.js v14 - Discord API 交互
- axios - API 請求處理
- DeepL 和 Google 翻譯 API - 翻譯服務
- Express - Web 介面（可選）

#### 文件結構

- `src/` - 主要源代碼
  - `index.js` - 應用入口點
  - `commands/` - 斜線命令
  - `events/` - 事件處理
  - `utils/` - 工具函數
  - `web/` - Web 介面（可選）
  - `database/` - 資料庫操作

## License / 授權

This project is licensed under the ISC License - see the LICENSE file for details.
此專案使用 ISC 授權 - 詳情請參閱 LICENSE 文件。

---

If you have any questions or suggestions, please submit an Issue or Pull Request.
如有任何問題或建議，請提交 Issue 或 Pull Request。