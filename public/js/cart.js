const cartBtn = document.querySelector('#cart');
const cartModal = document.querySelector('#cart-modal');
class Cart {
    constructor(cartModal){
        this.container = cartModal;
    }
    new(){
        const navbar = document.createElement('div');
        const cart = document.createElement('div');
        cart.classList.add('cart-container')
        navbar.classList.add('modal-navbar');
        const backBtn = document.createElement('div');
        backBtn.innerHTML = '<';
        const title = document.createElement('div');
        title.innerHTML = 'Productos de sus carrito';
        navbar.appendChild(backBtn)
        navbar.appendChild(title)
        this.container.appendChild(navbar);
        this.container.appendChild(cart);
    }
}

cartBtn.addEventListener('click', () => {
    cartModal.classList.toggle('modal-hidden');
    
})

const showCart = () => {
    alert('ready')
} 