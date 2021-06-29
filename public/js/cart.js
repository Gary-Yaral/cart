const cartBtn = document.querySelector('#cart');
const cartModal = document.querySelector('#cart-modal');
const cartContainer = document.querySelector('#cart-render')
const buttonsContainer = document.querySelector('#cart-btn-container');
const totalContainer = document.querySelector('#cart-total');


cartBtn.addEventListener('click', () => {
    cartModal.classList.toggle('modal-hidden');
    renderCart();
})

const renderCart = () => {
    new Cart(cartContainer,buttonsContainer,totalContainer).new()  
} 

class Cart {
    constructor(cartContainer, buttonsContainer, totalContainer){
        this.container = cartContainer;
        this.buttonsContainer = buttonsContainer;
        this.totalContainer = totalContainer
        this.total = 0;
    }

    new(){
        const data = JSON.parse(localStorage.getItem('cart'));
        if(data.length === 0){
            this.container.innerHTML ='<label>No hay productos en su carrito</label>';
            this.totalContainer.classList.add('cart-total-hidden');
        }else{
            this.container.innerHTML = "";
            data.forEach(element => {
                const items = [];
                object.forEach(section => {
                    section.items.forEach(item => {
                        if(parseFloat(element.id) === item.id){
                            items.push(item);
                            this.total = this.total + (element.counter * item.price);
                        }
                    })
                })
                const card = `
                <div class="card-selected" cardnumber="`+items[0].id+`">
                    <div class="btn-delete">
                        <i class="flaticon-delete"></i>
                    </div>  
                    <div class="block">
                        <img src="`+items[0].src+`" alt="">
                        <div class="cart-data">
                            <div class="cart-title">`+items[0].name+`</div>
                            <div class="cart-price">$`+items[0].price.toFixed(2)+`</div>
                            <div class="cart-btn">
                                <div class="btn-minus">-</div>     
                                <input type="number" align="center" value="`+element.counter+`"/>
                                <div class="btn-plus">+</div>
                            </div>
                        </div>
                    </div>                                 
                </div>
                ` 
            this.container.innerHTML = this.container.innerHTML + card;
            })
            this.addTotal();
            this.addButtons();
        }
    }

    addButtons(){
        const buttonsContainer = this.buttonsContainer;
        buttonsContainer.innerHTML= `
            <div class="btn-clear">Vaciar</div>
            <div class="btn-next">Pedir</div>`;
    }
    addTotal(){ 
        const totalContainer = this.totalContainer;
        totalContainer.innerHTML = `
            <label class="total-title">Total:</label>
            <label id="total" class="total">$`+this.total.toFixed(2)+`</label>`;
        totalContainer.classList.remove('cart-total-hidden');
    }
}

const addOneItem = (e) => {
    const btn = e.target;   
    if(btn.classList.contains('btn-plus')){
        const cardId = btn.parentNode.parentNode.parentNode.parentNode.getAttribute('cardnumber');
        const storage = JSON.parse(localStorage.getItem('cart'));
        storage.forEach(item => {
            if(item.id === cardId){
                item.counter++
                localStorage.setItem('cart',JSON.stringify(storage))
                renderCart()
                const session = JSON.parse(localStorage.getItem('cart'));
                updateCounter(session)
            }
        })      
    }
}

const substractOneItem = (e) => {
    const btn = e.target;   
    if(btn.classList.contains('btn-minus')){
        const cardId = btn.parentNode.parentNode.parentNode.parentNode.getAttribute('cardnumber');
        const storage = JSON.parse(localStorage.getItem('cart'));
        storage.forEach(item => {
            if(item.id === cardId){
                if(item.counter >1){
                    item.counter--;
                    localStorage.setItem('cart',JSON.stringify(storage))
                    renderCart()
                    const session = JSON.parse(localStorage.getItem('cart'));
                    updateCounter(session)
                }
            }
        })      
    }

}

const removeItem = (e) => {
    let btn = e.target; 
    if(btn.classList.contains('flaticon-delete')){
        btn = e.target.parentNode;
    }

    if(btn.classList.contains('btn-delete')){
        const cardId = btn.parentNode.getAttribute('cardnumber');
        const storage = JSON.parse(localStorage.getItem('cart'));
        const newStorage = [];
        storage.forEach(item => {
            if(item.id !== cardId){
                newStorage.push(item);
                localStorage.setItem('cart',JSON.stringify(newStorage))
                renderCart()
                const session = JSON.parse(localStorage.getItem('cart'));
                updateCounter(session)             
            }else{
                if(storage.length === 1) {
                    localStorage.setItem('cart',JSON.stringify(newStorage))
                    renderCart()
                    const session = JSON.parse(localStorage.getItem('cart'));
                    updateCounter(session)
                    cartContainer.innerHTML = '<label>No hay productos en su carrito</label>';
                    buttonsContainer.innerHTML="";
                }
            }
        })   
    }

}

const updateCounter=(session)=>{
    counter.innerHTML="";
    counter.innerHTML=countItems(session)

}


const removeAll = (e) => {
    const btn = e.target;   
    if(btn.classList.contains('btn-clear')){
        const cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        const session = JSON.parse(localStorage.getItem('cart'));
        updateCounter(session)
        renderCart()
        buttonsContainer.innerHTML = "";
        totalContainer.innerHTML ="";                    
    }
}
  