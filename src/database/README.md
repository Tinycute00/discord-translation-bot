# Database Operations Directory / 數據庫操作目錄

[English](#database-operations-directory) | [中文](#數據庫操作目錄-1)

This directory contains modules related to database operations for storing and retrieving bot settings.

## File Descriptions

- `languageSettings.js` - Manages emoji to language mapping settings
- `channelSettings.js` - Manages channel automatic translation settings

## Technical Implementation

Currently using SQLite as the database solution, suitable for lightweight applications. Database files are stored in the `data` folder at the project root.

## Data Storage

- Emoji language mapping table: Stores the mapping between emojis and target languages
- Channel settings table: Stores automatic translation configurations for channels

---

# 數據庫操作目錄

這個目錄包含與資料庫操作相關的模組，用於存儲和檢索機器人設置。

## 文件說明

- `languageSettings.js` - 管理表情符號與語言的對應關係設置
- `channelSettings.js` - 管理頻道自動翻譯設置

## 技術實現

目前使用 SQLite 作為資料庫解決方案，適合輕量級應用。資料庫文件存儲在項目根目錄的 `data` 資料夾下。

## 資料存儲

- 表情符號語言映射表：存儲表情符號與目標語言的對應關係
- 頻道設置表：存儲頻道的自動翻譯配置