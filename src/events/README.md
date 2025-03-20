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