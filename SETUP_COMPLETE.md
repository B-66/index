鞋子購買平台 - 開發環境建置完成報告

本文件說明本平台開發環境之建置狀態與配置，包含前端、後端、資料庫與基本測試流程。

技術選型

- 前端框架：React + Vite
- 後端框架：Node.js + Express
- 資料庫：MongoDB（本地或 MongoDB Atlas）
- 資料模型工具：Mongoose
- 版本控制：Git + GitHub

 開發環境安裝項目

| 項目              | 狀態       | 備註                      |
|-------------------|------------|---------------------------|
| Node.js           | ✅ 已安裝  | v18.x 推薦               |
| npm / yarn        | ✅ 已安裝  | 用於套件管理              |
| MongoDB 本地端    | ✅ 已安裝  | 或使用 MongoDB Atlas     |
| Postman           | ✅ 已安裝  | API 測試工具              |
| Git               | ✅ 已安裝  | 搭配 GitHub 使用         |
| Vite + React 專案 | ✅ 建置完成 | 初始化 + 路由配置        |
| Express 專案架構  | ✅ 建置完成 | 設定基本 REST API 結構   |
| Mongoose Schema   | ✅ 設定完成 | 含 user / shoes / order 等 |

資料庫設定

- 已建立 `shoe_platform` 資料庫
- 已建置以下資料集合（Collections）：
  - users
  - shoes
  - orders
  - favorites
  - comments

專案目錄結構

```plaintext
/shoe-platform
├── client/           # React 前端
├── server/           # Node.js 後端
│   ├── models/       # Mongoose 模型
│   ├── routes/       # API 路由
│   ├── controllers/  # 業務邏輯
│   └── config/       # DB 設定與中介層
└── .env              # 環境變數（含 DB URI）
