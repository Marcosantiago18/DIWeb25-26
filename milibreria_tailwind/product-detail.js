// ============================================
// PRODUCT DETAIL PAGE FUNCTIONALITY
// ============================================

// Product database
const products = {
    'sinopsis-cuantica': {
        name: 'Sinopsis Cuántica',
        category: 'Libro',
        price: 25.00,
        image: 'images/sinopsis-cuantica.jpg',
        description: 'Conciencias a través de redes neuronales cuánticas, donde los pensamientos se vuelven en realidades alternativas. Una obra maestra de la ciencia ficción que explora los límites de la conciencia humana y la tecnología cuántica.',
        features: [
            'Tapa dura de alta calidad',
            'Envío gratuito en pedidos superiores a 30€',
            'Garantía de satisfacción',
            'Devoluciones en 30 días'
        ]
    },
    'jardines-neon': {
        name: 'Los Jardines de Neón',
        category: 'Libro',
        price: 21.00,
        originalPrice: 30.00,
        discount: '-30%',
        image: 'images/jardines-neon.jpg',
        description: 'Planetas que respiran luz y color, donde las plantas son organismos conscientes. Una aventura épica a través de mundos bioluminiscentes donde la naturaleza y la tecnología se fusionan de formas inimaginables.',
        features: [
            'Edición especial con descuento',
            'Envío gratuito en pedidos superiores a 30€',
            'Garantía de satisfacción',
            'Devoluciones en 30 días'
        ]
    },
    'partitura-vacio': {
        name: 'Partitura del Vacío',
        category: 'Libro',
        price: 28.00,
        image: 'images/partitura-vacio.jpg',
        description: 'Melodía en la inmensa oscuridad, una civilización que aprende a componer "Partitura del Vacío". Una historia fascinante sobre la música como lenguaje universal en el espacio profundo.',
        features: [
            'Incluye ilustraciones exclusivas',
            'Envío gratuito en pedidos superiores a 30€',
            'Garantía de satisfacción',
            'Devoluciones en 30 días'
        ]
    },
    'taza-star-voyager': {
        name: 'Taza Star Voyager',
        category: 'Taza',
        price: 15.00,
        image: 'images/taza_star_voyager.png',
        description: 'Taza de cerámica de alta calidad con diseño exclusivo de Star Voyager. Perfecta para los amantes de la ciencia ficción. Apta para lavavajillas y microondas.',
        features: [
            'Cerámica de alta calidad',
            'Capacidad: 350ml',
            'Apta para lavavajillas',
            'Diseño exclusivo impreso'
        ]
    },
    'taza-neon-rain': {
        name: 'Taza Neon Rain',
        category: 'Taza',
        price: 18.00,
        image: 'images/taza_neon_rain.png',
        description: 'Taza de cerámica premium con diseño cyberpunk Neon Rain. Colores vibrantes que no se desvanecen. Ideal para café o té.',
        features: [
            'Cerámica premium',
            'Capacidad: 350ml',
            'Apta para lavavajillas y microondas',
            'Colores vibrantes permanentes'
        ]
    },
    'taza-dragons-peak': {
        name: 'Taza Dragon\'s Peak',
        category: 'Taza',
        price: 20.00,
        image: 'images/taza_dragons_peak.png',
        description: 'Taza de cerámica artesanal con diseño de Dragon\'s Peak. Acabado mate de alta calidad. Perfecta para coleccionistas.',
        features: [
            'Cerámica artesanal',
            'Capacidad: 400ml',
            'Acabado mate premium',
            'Edición limitada'
        ]
    }
};

// ============================================
// LOAD PRODUCT DATA
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // Get product ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId && products[productId]) {
        loadProductData(productId);
    } else {
        // Default product if no ID specified
        loadProductData('sinopsis-cuantica');
    }

    // Setup cart button
    const addToCartBtn = document.querySelector('.add-to-cart-detail');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function () {
            showCartNotification();
        });
    }

    // Setup buy now button
    const buyNowBtn = document.querySelector('.buy-now-button');
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function () {
            alert('Redirigiendo al proceso de compra...');
        });
    }
});

// ============================================
// LOAD PRODUCT DATA FUNCTION
// ============================================

function loadProductData(productId) {
    const product = products[productId];

    // Update product name
    document.getElementById('product-name').textContent = product.name;

    // Update category
    document.getElementById('product-category').textContent = product.category;

    // Update image
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-image').alt = product.name;

    // Update description
    document.getElementById('product-description').textContent = product.description;

    // Update price
    const priceContainer = document.getElementById('price-container');
    if (product.originalPrice) {
        // Has discount
        priceContainer.innerHTML = `
            <span class="original-price">${product.originalPrice.toFixed(2)}€</span>
            <span class="current-price">${product.price.toFixed(2)}€</span>
        `;
        document.getElementById('discount-badge').textContent = product.discount;
        document.getElementById('discount-badge').style.display = 'block';
    } else {
        // No discount
        priceContainer.innerHTML = `
            <span class="current-price">${product.price.toFixed(2)}€</span>
        `;
        document.getElementById('discount-badge').style.display = 'none';
    }

    // Update features
    const featuresList = document.getElementById('product-features');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle"></i> ${feature}`;
        featuresList.appendChild(li);
    });
}

// ============================================
// QUANTITY CONTROLS
// ============================================

function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);
    if (currentValue < 10) {
        quantityInput.value = currentValue + 1;
    }
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

// ============================================
// CART NOTIFICATION
// ============================================

function showCartNotification() {
    const notification = document.getElementById('cart-notification');

    if (!notification) {
        console.error('Cart notification element not found');
        return;
    }

    // Show notification with animation
    notification.classList.add('show');

    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}
