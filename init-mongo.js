db = db.getSiblingDB('shoe_store');  // 指定要建立/使用的資料庫名稱

// 建立管理員帳號（選擇性）
db.createUser({
  user: "admin",
  pwd: "admin123",
  roles: [
    {
      role: "readWrite",
      db: "shoe_store"
    }
  ]
});

// 建立產品初始資料
db.products.insertMany([
  {
    name: "Air Zoom Pegasus 39",
    brand: "Nike",
    category: "Running",
    size: [7, 8, 9, 10],
    price: 120.0,
    stock: 25,
    description: "輕盈跑鞋，適合日常訓練使用",
    image: "https://example.com/pegasus39.jpg",
    rating: 4.5,
    numReviews: 32
  },
  {
    name: "Ultraboost 22",
    brand: "Adidas",
    category: "Running",
    size: [6, 7, 8, 9],
    price: 180.0,
    stock: 15,
    description: "彈性舒適，適合長距離跑步",
    image: "https://example.com/ultraboost22.jpg",
    rating: 4.7,
    numReviews: 50
  }
]);

// 可加上其他 collections，例如 users、orders 等
