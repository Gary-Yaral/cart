const body =document.querySelector('body');
const cart = [];
const counter = document.querySelector('#counter');


body.onclick=(e)=>{ 
  const btn = e.target;
  if(btn.classList.contains('btn')){
    if(cart == false){
       insertFirstItem(btn);
    }else{
      let isRepeated={status:false};
      insertRepeatedItem(isRepeated,btn);
      insertNewItem(isRepeated,btn);     
    } 
    showMessage()
  }
}

const insertFirstItem=(btn)=>{
  const item = {
    id:btn.id,
    counter: 1
  }
  cart.push(item)
  showCounter()
}

const insertRepeatedItem=(isRepeated,btn)=>{
  cart.forEach(item=>{
      if(item.id===btn.id){
        item.counter=item.counter+1;
        isRepeated.status=true;
        showCounter();
        return isRepeated  
      }
  })
}

const insertNewItem =(isRepeated, btn)=>{
  if(isRepeated.status===false){
    insertFirstItem(btn)
    showCounter()
  }
}

const countItems=()=>{
  let itemsCounter=0;
  cart.forEach(item=>{itemsCounter=itemsCounter+item.counter});
  return itemsCounter;
}

const showCounter=()=>{
  counter.innerHTML="";
  counter.innerHTML=countItems()
  showMessage
}

const showMessage = () => {
      const msg = document.querySelector('#msg');
      msg.classList.remove('hidden');
      msg.classList.add('visible');
      setTimeout(()=>{
        msg.classList.remove('visible');
        msg.classList.add('hidden');
      },1000)
}
