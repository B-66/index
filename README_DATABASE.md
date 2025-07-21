鞋子購買平台 - MongoDB 資料庫設定

資料庫選型

* 類型：非關聯式 NoSQL 資料庫
* 技術：MongoDB（建議使用 MongoDB Atlas 雲端版）
* ODM 工具：Mongoose（Node.js 使用）

資料庫結構設計（Schema）

 1️⃣ 使用者（Users）

| 欄位        | 型態       | 說明                |
| --------- | -------- | ----------------- |
| \_id      | ObjectId | 自動生成              |
| name      | String   | 使用者名稱             |
| email     | String   | 登入信箱（唯一）          |
| password  | String   | 加密密碼（Hash）        |
| role      | String   | 使用者角色（user/admin） |
| createdAt | Date     | 註冊時間              |

2️⃣ 鞋子商品（Shoes）

| 欄位          | 型態        | 說明          |
| ----------- | --------- | ----------- |
| \_id        | ObjectId  | 自動生成        |
| seller      | ObjectId  | 賣家（對應使用者）   |
| title       | String    | 鞋子標題        |
| brand       | String    | 品牌名稱        |
| size        | String    | 尺寸          |
| price       | Number    | 價格          |
| description | String    | 商品描述        |
| images      | \[String] | 商品圖片 URL 陣列 |
| isSold      | Boolean   | 是否已售出       |
| createdAt   | Date      | 上架時間        |

3️⃣ 收藏（Favorites）

| 欄位        | 型態       | 說明       |
| --------- | -------- | -------- |
| \_id      | ObjectId | 自動生成     |
| userId    | ObjectId | 收藏者 ID   |
| shoeId    | ObjectId | 收藏的鞋子 ID |
| createdAt | Date     | 收藏時間     |

 4️⃣ 訂單（Orders）

| 欄位        | 型態       | 說明                         |
| --------- | -------- | -------------------------- |
| \_id      | ObjectId | 自動生成                       |
| buyer     | ObjectId | 購買者 ID                     |
| shoe      | ObjectId | 購買的鞋子 ID                   |
| status    | String   | 訂單狀態（pending/paid/shipped） |
| createdAt | Date     | 建立時間                       |

 5️⃣ 留言（Comments）

| 欄位        | 型態       | 說明       |
| --------- | -------- | -------- |
| \_id      | ObjectId | 自動生成     |
| userId    | ObjectId | 留言者      |
| shoeId    | ObjectId | 留言的鞋子 ID |
| content   | String   | 留言內容     |
| createdAt | Date     | 留言時間     |


 MongoDB 建立流程（本地或雲端）

 使用本地端

1. 安裝 MongoDB Server（Community Edition）
2. 啟動 MongoDB：

```bash
mongod --dbpath=/your/data/dir
```

3. 建立資料庫 `shoe_platform`

使用 MongoDB Atlas

1. 前往 [https://cloud.mongodb.com](https://cloud.mongodb.com)
2. 建立 Cluster → 建立 Database `shoe_platform`
3. 建立 User 與密碼（連線用）
4. 在 `.env` 檔中設定：

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/shoe_platform
```

安全性建議

* 密碼使用 bcrypt 加密儲存
* 使用 JWT 驗證登入請求
* 限制 API 存取權限（使用者／管理員）
