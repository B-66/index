鞋子購買平台 - 開發環境建置說明

開發技術選型

層級	技術	說明
前端	React.js	使用 Vite 快速建立開發環境
後端	Node.js + Express.js	提供 RESTful API
資料庫	MongoDB + Mongoose	非關聯式資料儲存
API 測試	Postman / Insomnia	API 測試與驗證工具
版本控制	Git + GitHub	原始碼管理與協作

系統需求

Node.js v18+

MongoDB 6.x（本地或 Atlas）

Git

VSCode（建議）

專案結構
bash
複製程式碼
shoe-platform/
├── client/    # 前端
├── server/    # 後端
└── README.md
 建置流程
1️⃣ Clone 專案
bash
複製程式碼
git clone https://github.com/your-org/shoe-platform.git
cd shoe-platform
2️⃣ 後端安裝與啟動
bash
複製程式碼
cd server
npm install
建立 .env 檔：

ini
複製程式碼
PORT=5000
MONGO_URI=mongodb://localhost:27017/shoeshop
JWT_SECRET=your-secret
啟動伺服器：

bash
複製程式碼
npm run dev
3️⃣ 前端安裝與啟動
bash
複製程式碼
cd ../client
npm install
npm run dev

測試與埠號

前端埠號：5173

後端埠號：5000

可用 Postman 測試 API

預設帳號（測試用）
角色	帳號	密碼
管理員	admin@example.com	admin123
用戶	user@example.com	user123
