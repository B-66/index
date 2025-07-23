document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    document.getElementById('name').value = user.name || '';
    document.getElementById('gender').value = user.gender || '';
    document.getElementById('size').value = user.size || '';
    document.getElementById('email').value = user.email || '';
    document.getElementById('address').value = user.address || '';
    document.getElementById('phone').value = user.phone || '';
  }

  document.getElementById('editForm').addEventListener('submit', e => {
    e.preventDefault();
    const updatedUser = {
      name: document.getElementById('name').value.trim(),
      gender: document.getElementById('gender').value,
      size: document.getElementById('size').value,
      email: document.getElementById('email').value.trim(),
      address: document.getElementById('address').value.trim(),
      phone: document.getElementById('phone').value.trim(),
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    alert('會員資料已更新');
    window.location.href = 'mypage.html';  // 
  });
});
