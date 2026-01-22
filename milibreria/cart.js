// ============================================
// SHOPPING CART FUNCTIONALITY
// ============================================

// Cart state
let cart = [];

// DOM Elements
const cartToggle = document.getElementById('cart-toggle');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartClose = document.getElementById('cart-close');
const cartBody = document.getElementById('cart-body');
const cartBadge = document.getElementById('cart-badge');
const cartTotal = document.getElementById('cart-total');
const cartEmpty = document.getElementById('cart-empty');
const cartCheckout = document.getElementById('cart-checkout');
const cartClear = document.getElementById('cart-clear');

// Initialize cart from localStorage
function initCart() {
    const savedCart = localStorage.getItem('fscf-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('fscf-cart', JSON.stringify(cart));
}

// Open cart
function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close cart
function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Add item to cart
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: parseFloat(product.price),
            image: product.image,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showCartNotification();

    // Auto-open cart after adding item
    setTimeout(() => {
        openCart();
    }, 500);
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// Update item quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);

    if (item) {
        item.quantity += change;

        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

// Clear cart
function clearCart() {
    if (cart.length === 0) return;

    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
        cart = [];
        saveCart();
        updateCartUI();
    }
}

// Calculate total
function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Update cart UI
function updateCartUI() {
    // Update badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;

    if (totalItems === 0) {
        cartBadge.style.display = 'none';
    } else {
        cartBadge.style.display = 'flex';
    }

    // Update total
    const total = calculateTotal();
    cartTotal.textContent = `${total.toFixed(2)}€`;

    // Update cart body
    if (cart.length === 0) {
        cartEmpty.style.display = 'flex';
        cartBody.innerHTML = '';
        cartBody.appendChild(cartEmpty);
    } else {
        cartEmpty.style.display = 'none';
        renderCartItems();
    }
}

// Render cart items
function renderCartItems() {
    cartBody.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price.toFixed(2)}€</div>
                <div class="cart-item-actions">
                    <div class="cart-item-quantity">
                        <button onclick="updateQuantity('${item.id}', -1)" aria-label="Disminuir cantidad">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity('${item.id}', 1)" aria-label="Aumentar cantidad">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" aria-label="Eliminar producto">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;

        cartBody.appendChild(cartItem);
    });
}

// Show cart notification
function showCartNotification() {
    const notification = document.getElementById('cart-notification');

    if (!notification) return;

    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }

    const total = calculateTotal();
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    alert(`¡Gracias por tu compra!\n\nTotal de productos: ${itemCount}\nTotal a pagar: ${total.toFixed(2)}€\n\nEsta es una demo. En una aplicación real, aquí se procesaría el pago.`);

    // Clear cart after checkout
    cart = [];
    saveCart();
    updateCartUI();
    closeCart();
}

// Event Listeners
if (cartToggle) {
    cartToggle.addEventListener('click', openCart);
}

if (cartClose) {
    cartClose.addEventListener('click', closeCart);
}

if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCart);
}

if (cartCheckout) {
    cartCheckout.addEventListener('click', checkout);
}

if (cartClear) {
    cartClear.addEventListener('click', clearCart);
}

// Add to cart buttons
document.addEventListener('click', function (e) {
    if (e.target.closest('.add-to-cart-btn')) {
        e.preventDefault();
        e.stopPropagation();

        const button = e.target.closest('.add-to-cart-btn');
        const productCard = button.closest('.product-card');

        if (productCard) {
            const product = {
                id: productCard.dataset.id,
                name: productCard.dataset.name,
                price: productCard.dataset.price,
                image: productCard.dataset.image
            };

            addToCart(product);
        }
    }

    // Also handle the old add-to-cart class for shop products
    if (e.target.closest('.add-to-cart')) {
        e.preventDefault();
        e.stopPropagation();

        const button = e.target.closest('.add-to-cart');
        const productCard = button.closest('.shop-product-card');

        if (productCard) {
            // Extract product info from the card
            const productName = productCard.querySelector('.product-name')?.textContent.trim();
            const productPriceText = productCard.querySelector('.sale-price, .product-price')?.textContent.trim();
            const productPrice = productPriceText ? parseFloat(productPriceText.replace('€', '').replace(',', '.')) : 0;
            const productImage = productCard.querySelector('img')?.src || '';

            const product = {
                id: productCard.dataset.category + '-' + Date.now(),
                name: productName,
                price: productPrice,
                image: productImage
            };

            addToCart(product);
        }
    }
});

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', initCart);

// Close cart with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && cartSidebar.classList.contains('active')) {
        closeCart();
    }
});
