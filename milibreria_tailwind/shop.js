// ============================================
// FILTER FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    const filterCheckboxes = document.querySelectorAll('input[name="category"]');
    const filterLabels = document.querySelectorAll('.filter-label');

    // Handle filter checkbox changes
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const selectedValue = this.value;

            // Update visual state of labels
            filterLabels.forEach(label => label.classList.remove('highlight'));
            if (this.checked) {
                this.nextElementSibling.classList.add('highlight');
            }

            // Uncheck all other checkboxes
            filterCheckboxes.forEach(cb => {
                if (cb !== this) {
                    cb.checked = false;
                }
            });

            // Make sure at least one is checked
            if (!this.checked) {
                this.checked = true;
                return;
            }

            // Handle navigation based on selected filter
            handleFilterNavigation(selectedValue);
        });
    });

    // ============================================
    // PRODUCT CARD CLICK HANDLERS
    // ============================================

    const productCards = document.querySelectorAll('.shop-product-card');
    productCards.forEach(card => {
        // Make the entire card clickable except for the button
        card.style.cursor = 'pointer';

        card.addEventListener('click', function (e) {
            // Don't navigate if clicking the add to cart button
            if (e.target.classList.contains('add-to-cart') ||
                e.target.closest('.add-to-cart')) {
                return;
            }

            // Get product ID from card or image
            const productName = this.querySelector('.product-name').textContent.trim();
            const productId = getProductIdFromName(productName);

            if (productId) {
                window.location.href = `producto-detalle.html?id=${productId}`;
            }
        });
    });


    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            showCartNotification();
        });
    });
});

// ============================================
// NAVIGATION HANDLER
// ============================================

function handleFilterNavigation(category) {
    const currentPage = window.location.pathname;
    const isTienda = currentPage.includes('tienda.html');

    if (isTienda) {
        // If we are on the main shop page, we can just filter the DOM
        const productCards = document.querySelectorAll('.shop-product-card');
        productCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });

        // However, if the user specifically selects "tazas", 
        // they might expect to go to the specialized tazas page for different layout
        // but for "all" and "libros" they stay here.
        if (category === 'tazas') {
            window.location.href = 'tazas.html';
        }
    } else {
        // If we are on a specific page (like tazas.html), we navigate back to tienda for "all" or "libros"
        switch (category) {
            case 'all':
                window.location.href = 'tienda.html';
                break;
            case 'tazas':
                if (!currentPage.includes('tazas.html')) {
                    window.location.href = 'tazas.html';
                }
                break;
            case 'libros':
                window.location.href = 'tienda.html';
                break;
            case 'bolsas':
                alert('Página de bolsas próximamente');
                break;
            case 'otros':
                alert('Página de otros productos próximamente');
                break;
        }
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

// ============================================
// SEARCH FUNCTIONALITY (Optional Enhancement)
// ============================================

const searchInput = document.querySelector('.search-form input[type="search"]');
if (searchInput) {
    searchInput.addEventListener('input', function (e) {
        const searchTerm = e.target.value.toLowerCase();
        const productCards = document.querySelectorAll('.shop-product-card');

        productCards.forEach(card => {
            const productName = card.querySelector('.product-name').textContent.toLowerCase();
            const productDescription = card.querySelector('.product-description')?.textContent.toLowerCase() || '';

            if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// ============================================
// HELPER FUNCTIONS
// ============================================

function getProductIdFromName(productName) {
    const nameMap = {
        'Sinopsis cuántica': 'sinopsis-cuantica',
        'Sinopsis Cuántica': 'sinopsis-cuantica',
        'Los jardines de neón': 'jardines-neon',
        'Los Jardines de Neón': 'jardines-neon',
        'Partitura del Vacío': 'partitura-vacio',
        'Taza Star Voyager': 'taza-star-voyager',
        'Taza Neon Rain': 'taza-neon-rain',
        'Taza Dragon\'s Peak': 'taza-dragons-peak'
    };

    return nameMap[productName] || null;
}
