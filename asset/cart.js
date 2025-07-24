if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
  const cartContainer = document.getElementById('cartItems');
  cartContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    cartContainer.innerHTML += `
      <div class="cart-item d-flex border rounded p-3 mb-3 shadow-sm align-items-center">
        <img src="${item.image || 'placeholder.jpg'}" alt="${item.name}" class="me-3" style="width:100px;height:100px;object-fit:cover;border-radius:5px;">
        <div class="flex-grow-1">
          <h5>${item.name}</h5>
          <p class="mb-1">尺寸：${item.size || '未設定'}</p>
          <p class="mb-1">單價：NT$${item.price}</p>
          <p class="mb-1">小計：NT$${itemTotal}</p>
          <div class="mt-2">
            <button class="btn btn-sm btn-outline-secondary me-2" onclick="updateQuantity(${index}, -1)">−</button>
            ${item.quantity}
            <button class="btn btn-sm btn-outline-secondary ms-2" onclick="updateQuantity(${index}, 1)">＋</button>
            <button class="btn btn-sm btn-danger ms-3" onclick="removeItem(${index})">刪除</button>
          </div>
        </div>
      </div>
    `;
  });

  document.getElementById('total').textContent = total;
}

function updateQuantity(index, delta) {
  if (cart[index].quantity + delta > 0) {
    cart[index].quantity += delta;
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function checkout() {
  if (cart.length === 0) {
    alert('沒有商品。');
    return;
  }

  const history = JSON.parse(localStorage.getItem('history')) || [];
  history.push({
    date: new Date().toLocaleString(),
    items: cart
  });
  localStorage.setItem('history', JSON.stringify(history));
  localStorage.removeItem('cart');
  alert('完成購入，謝謝。');
  cart = [];
  renderCart();
}

function addToCart() {
  const sizeInput = document.getElementById('sizeInput');
  const quantityInput = document.getElementById('quantityInput');
  const productName = '紳士皮鞋';
  const productPrice = 2390;
  const productImageElement = document.getElementById('productImage');
  const productImage = productImageElement ? productImageElement.src : 'placeholder.jpg';

  const size = sizeInput ? sizeInput.value : '未設定';
  const quantity = quantityInput ? parseInt(quantityInput.value, 10) : 1;

  if (quantity <= 0 || isNaN(quantity)) {
    alert('請輸入有效數量');
    return;
  }

  const product = {
    name: productName,
    price: productPrice,
    size: size,
    quantity: quantity,
    image: productImage,
  };

  const existingIndex = cart.findIndex(item => item.name === product.name && item.size === product.size);
  if (existingIndex !== -1) {
    cart[existingIndex].quantity += product.quantity;
  } else {
    cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert('已加入購物車');
  renderCart();
}

renderCart();
