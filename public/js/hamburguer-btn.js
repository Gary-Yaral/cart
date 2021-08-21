let btn= document.getElementById("toogle");
let category = document.getElementById('category-modal');
let cart = document.getElementById('cart-modal');;
btn.onclick = function(){
  let bar = document.getElementById("bar");
  bar.classList.toggle("active");
  if(bar.classList.contains('active')){
    category.classList.remove('category-hidden');
    cart.classList.add('modal-hidden');
  }

  if(!bar.classList.contains('active')){
    category.classList.add('category-hidden');
  }
}

