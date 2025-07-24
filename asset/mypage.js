document.addEventListener('DOMContentLoaded', () => {
  const userInfo = document.getElementById('userInfo');
  const historyList = document.getElementById('historyList');
  const logoutBtn = document.getElementById('logoutBtn');

  // 讀取本地儲存的使用者資訊
  const user = JSON.parse(localStorage.getItem('user'));

  // 讀取購買履歷，若沒有則使用初始範例資料
  let history = JSON.parse(localStorage.getItem('purchaseHistory')) || [];

  if (history.length === 0) {
    history = [
      { name: '純色百搭皮鞋', size: 26, quantity: 1, price: 2390, date: '2025-06-12' },
      { name: '輕盈樂福鞋', size: 27, quantity: 1, price: 1390, date: '2025-06-10' }
    ];
    localStorage.setItem('purchaseHistory', JSON.stringify(history));
  }

  // 顯示使用者資料
  if (user) {
    userInfo.innerHTML = `
      <div class="container mt-4">
        <h2 class="mb-3">會員資料</h2>
        <ul class="list-group">
          <li class="list-group-item"><strong>姓名：</strong> ${user.name}</li>
          <li class="list-group-item"><strong>性別：</strong> ${user.gender}</li>
          <li class="list-group-item"><strong>鞋子尺寸：</strong> ${user.size} cm</li>
          <li class="list-group-item"><strong>電子郵件：</strong> ${user.email}</li>
          <li class="list-group-item"><strong>地址：</strong> ${user.address}</li>
          <li class="list-group-item"><strong>電話：</strong> ${user.phone}</li>
        </ul>
      </div>
    `;
  } else {
    userInfo.innerHTML = `
      <div class="alert alert-warning mt-4" role="alert">
        尚未登入或找不到會員資訊。請先登入。
      </div>
    `;
  }

  // 顯示購買履歷
  if (history.length === 0) {
    historyList.innerHTML = `<li class="list-group-item text-muted">尚無購買紀錄。</li>`;
  } else {
    historyList.innerHTML = '';

    history.forEach(item => {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex align-items-center';

      li.innerHTML = `
        <div>
          <p class="mb-1"><strong>${item.name}</strong></p>
          <p class="mb-0">
            尺寸：${item.size} cm ｜ 數量：${item.quantity} ｜ 價格：NT$${item.price.toLocaleString()} ｜ 時間：${item.date}
          </p>
        </div>
      `;

      historyList.appendChild(li);
    });
  }

  // 登出按鈕事件
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('user');
    alert('已登出');
    window.location.href = 'login.html';
  });
});
