# logout.py
from fastapi import APIRouter, Response, status, Depends
from fastapi.responses import JSONResponse
from auth import get_current_user

router = APIRouter()

@router.post("/logout", status_code=status.HTTP_200_OK)
def logout(response: Response, current_user: dict = Depends(get_current_user)):
    # 假設 JWT 是儲存在 cookie 中
    response.delete_cookie("access_token")
    return JSONResponse(content={"message": "登出成功，期待您再次回來！"})
