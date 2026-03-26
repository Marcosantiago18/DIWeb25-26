/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'sky-light': '#87CEEB',
                'sky-pale': '#B0E0E6',     // Light background end
                'sky-soft': '#ADD8E6',     // Header end
                'sky-bright': '#5DADE2',   // Nav start
                'sky-medium': '#85C1E9',   // Nav end
                'sky-dark': '#3498DB',     // Button hover
                'sky-deep': '#2980B9',     // Button active
                'yellow-main': '#F4D03F',
                'yellow-light': '#F9E79F',
                'dark-blue': '#2C3E50',
                'dark-grey': '#34495E',
                'grey-muted': '#7F8C8D',
                'red-bright': '#E74C3C',
                'red-dark': '#C0392B',
            },
            fontFamily: {
                'cinzel': ['Cinzel', 'serif'],
                'roboto': ['Roboto', 'sans-serif'],
            },
            boxShadow: {
                'nav': '0 4px 15px rgba(0, 0, 0, 0.1)',
                'card': '0 6px 20px rgba(0, 0, 0, 0.15)',
                'card-hover': '0 12px 30px rgba(0, 0, 0, 0.2)',
                'btn': '0 4px 10px rgba(0, 0, 0, 0.1)',
                'btn-hover': '0 6px 15px rgba(0, 0, 0, 0.2)',
            },
            backgroundImage: {
                'body-gradient': 'linear-gradient(135deg, #87CEEB 0%, #B0E0E6 100%)',
                'header-gradient': 'linear-gradient(135deg, #87CEEB 0%, #ADD8E6 100%)',
                'nav-gradient': 'linear-gradient(135deg, #5DADE2 0%, #85C1E9 100%)',
                'hero-gradient': 'linear-gradient(135deg, rgba(173, 216, 230, 0.9) 0%, rgba(135, 206, 235, 0.9) 100%)',
                'card-gradient': 'linear-gradient(135deg, rgba(173, 216, 230, 0.8) 0%, rgba(176, 224, 230, 0.8) 100%)',
                'btn-gradient': 'linear-gradient(135deg, #5DADE2 0%, #3498DB 100%)',
                'btn-hover-gradient': 'linear-gradient(135deg, #3498DB 0%, #2980B9 100%)',
                'sidebar-item-gradient': 'linear-gradient(135deg, rgba(93, 173, 226, 0.5) 0%, rgba(133, 193, 233, 0.5) 100%)',
                'sidebar-item-hover-gradient': 'linear-gradient(135deg, rgba(93, 173, 226, 0.7) 0%, rgba(133, 193, 233, 0.7) 100%)',
                'cart-sidebar-gradient': 'linear-gradient(135deg, rgba(173, 216, 230, 0.98) 0%, rgba(176, 224, 230, 0.98) 100%)',
                'cart-sidebar-header-gradient': 'linear-gradient(135deg, #5DADE2 0%, #85C1E9 100%)',
                'checkout-btn-gradient': 'linear-gradient(135deg, #27AE60 0%, #2ECC71 100%)',
                'clear-btn-gradient': 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)',
            }
        },
    },
    plugins: [],
}
