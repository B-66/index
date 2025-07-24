鞋子購買平台後端 API

技術棧建議（可選）

* 語言：Node.js（Express）、Python（Django / Flask）、Java（Spring Boot）
* 資料庫：MySQL / PostgreSQL / MongoDB
* 驗證：JWT / OAuth 2.0
* 文件：Swagger / Postman

---

API 架構模組

1.使用者（Users）

| 方法       | 路徑                  | 說明          |
| -------- | ------------------- | ----------- |
| `POST`   | `/api/register`     | 使用者註冊       |
| `POST`   | `/api/login`        | 使用者登入       |
| `GET`    | `/api/user/profile` | 查看個人資料（需驗證） |
| `PUT`    | `/api/user/profile` | 更新個人資料（需驗證） |
| `DELETE` | `/api/user/delete`  | 刪除帳號（需驗證）   |

---

2.商品（Products / Shoes）

| 方法       | 路徑                  | 說明                    |
| -------- | ------------------- | --------------------- |
| `GET`    | `/api/products`     | 取得所有鞋子列表（可篩選分類、品牌、價格） |
| `GET`    | `/api/products/:id` | 查看單一鞋子詳情              |
| `POST`   | `/api/products`     | 新增鞋子（僅限管理者）           |
| `PUT`    | `/api/products/:id` | 修改鞋子資訊（僅限管理者）         |
| `DELETE` | `/api/products/:id` | 刪除鞋子（僅限管理者）           |

---

3.購物車（Cart）

| 方法       | 路徑                  | 說明           |
| -------- | ------------------- | ------------ |
| `GET`    | `/api/cart`         | 查看購物車內容（需驗證） |
| `POST`   | `/api/cart`         | 加入商品到購物車     |
| `PUT`    | `/api/cart/:itemId` | 更新購物車中商品數量   |
| `DELETE` | `/api/cart/:itemId` | 從購物車中移除商品    |

---

4.訂單（Orders）

| 方法     | 路徑                       | 說明             |
| ------ | ------------------------ | -------------- |
| `POST` | `/api/orders`            | 建立訂單（從購物車結帳）   |
| `GET`  | `/api/orders`            | 查看所有訂單（使用者自己的） |
| `GET`  | `/api/orders/:id`        | 查看單一訂單詳情       |
| `PUT`  | `/api/orders/:id/cancel` | 取消訂單（可設定可取消條件） |
| `GET`  | `/api/admin/orders`      | 查看所有用戶訂單（管理者）  |

---

5.付款（Payment）

| 方法     | 路徑                      | 說明                          |
| ------ | ----------------------- | --------------------------- |
| `POST` | `/api/payment/checkout` | 發起付款流程                      |
| `POST` | `/api/payment/webhook`  | 金流平台回調通知（例如 Stripe, TapPay） |

---

6.評價與評論（Reviews）

| 方法       | 路徑                          | 說明              |
| -------- | --------------------------- | --------------- |
| `GET`    | `/api/products/:id/reviews` | 查看鞋子的評論         |
| `POST`   | `/api/products/:id/reviews` | 發表評論（需購買過）      |
| `DELETE` | `/api/reviews/:reviewId`    | 刪除評論（使用者自己或管理員） |

---

驗證與授權

* JWT 驗證：登入後給使用者 token，後續 API 操作需帶入 token
* 權限控管：使用 middleware 判斷是否為管理者或使用者
