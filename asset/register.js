document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const data = new FormData(this);
    const user = {
        name: data.get('name'),
        gender: data.get('gender'),
        size: data.get('size'),
        email: data.get('email'),
        address: data.get('address'),
        phone: data.get('phone')
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('成功登入');

   
    window.location.href = "mypage.html";
});
