# Events Directory / 事件處理目錄

[English](#events-directory) | [中文](#事件處理目錄-1)

This directory contains handlers for Discord events.

## File Descriptions

- `ready.js` - Bot startup ready event handler
- `interactionCreate.js` - Handles slash commands and other interactions
- `messageReactionAdd.js` - Handles user adding emoji reactions
- `messageCreate.js` - Handles new message creation events

## Event Handler Format

Each event handler file should follow this format:

```javascript
module.exports = {
  name: 'eventName', // Discord.js event name
  once: false, // Whether to execute only once
  
  execute(eventArgs, client) {
    // Event handling logic
  }
};
```

---

# 事件處理目錄

這個目錄包含處理Discord事件的處理程序。

## 文件說明

- `ready.js` - 機器人啟動就緒事件處理
- `interactionCreate.js` - 處理斜線命令和其他交互
- `messageReactionAdd.js` - 處理用戶添加表情符號反應
- `messageCreate.js` - 處理新消息創建事件

## 事件處理格式

每個事件處理文件應該遵循以下格式：

```javascript
module.exports = {
  name: 'eventName', // Discord.js 事件名稱
  once: false, // 是否僅執行一次
  
  execute(eventArgs, client) {
    // 事件處理邏輯
  }
};
```