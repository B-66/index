from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.product_route import router as product_router

app = FastAPI(
    title="鞋子購買平台 API",
    description="使用 FastAPI + MongoDB 實作",
    version="1.0.0"
)

# CORS 設定，允許前端請求（可依需求調整）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 允許所有來源，也可指定前端網址
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 路由註冊
app.include_router(product_router, prefix="/api/products", tags=["產品"])
