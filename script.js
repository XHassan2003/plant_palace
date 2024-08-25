// All DOM elements
const menuIcon = document.getElementById("menu-icon");
const cartButton = document.getElementById("cart-btn");
const navLinks = document.getElementById("nav-links");
const menuButton = document.getElementById("menu-btn");
const cart = document.getElementById("cart");
const cartCloseIcon = document.getElementById("cart-close-icon")
const allLinkElements = navLinks.querySelectorAll('a');
// const allProducts = document.getElementById('all-products')

const animation = lottie.loadAnimation({
    container: document.getElementById('animation-container'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assests/Animation - 1724414374069.json' // the path to the animation json
  });
  

// All event listeners
// 1 - Event listener - click menu to toggle nav links
menuButton.addEventListener('click', e => {
    if (!navLinks.classList.contains('show')) {
        navLinks.classList.add('show');
        menuIcon.className = 'fa-solid fa-xmark';
    } else {
        navLinks.classList.remove('show');
        menuIcon.className = 'fa-solid fa-bars';
    }
});

// 2 - Event listener - click cart to toggle cart UI
cartButton.addEventListener('click', e => {
    if (!cart.classList.contains('show')) {
        cart.classList.add('show');
    } else {
        cart.classList.remove('show');
    }
});


// 3 - Event listener - Click cart close button to close cart UI
cartCloseIcon.addEventListener('click', e =>{
    cart.classList.remove('show');
})

// 4 - Event listener - hide nav links on clicking any link also

allLinkElements.forEach(link => {
    link.addEventListener('click', e => {
        navLinks.classList.remove('show');
        document.getElementById("menu-icon").className = 'fa-solid fa-bars';
    })
});






