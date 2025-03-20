# Web Interface Directory / Web 介面目錄

[English](#web-interface-directory) | [中文](#web-介面目錄-1)

This directory contains files related to the optional Web management interface.

## Directory Structure

- `public/` - Static resource files
- `views/` - Page templates
- `webServer.js` - Web server entry file (not yet implemented)

## Feature Description

The Web interface is an optional feature that allows bot administrators to manage bot settings through a web interface.

To enable this feature, set the following in the `.env` file:

```
ENABLE_WEB_INTERFACE=true
```

And make sure that the related Discord OAuth2 information is configured.

---

# Web 介面目錄

這個目錄包含可選的 Web 管理界面相關文件。

## 目錄結構

- `public/` - 靜態資源文件
- `views/` - 頁面模板
- `webServer.js` - Web服務器入口文件 (尚未實現)

## 功能說明

Web 界面是一個可選功能，允許機器人管理員通過網頁界面來管理機器人設置。

要啟用此功能，需要在 `.env` 文件中設置：

```
ENABLE_WEB_INTERFACE=true
```

並確保已配置相關的 Discord OAuth2 信息。