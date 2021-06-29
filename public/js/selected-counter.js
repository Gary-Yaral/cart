const body =document.querySelector('body');
const storageName = 'cart';
const counter = document.querySelector('#counter');


body.onclick=(e)=>{ 
  if(localStorage.getItem(storageName)){
    const session =JSON.parse(localStorage.getItem(storageName)); ;
    const btn = e.target;
    if(btn.classList.contains('btn')){
      if(session == false){
        insertFirstItem(btn,session);
      }else{
        let isRepeated={status:false};
        insertRepeatedItem(isRepeated,btn, session);
        insertNewItem(isRepeated,btn,session);

      } 
      renderCart();
      showMessage()
    }  
  }else{
    console.error('')
    window.location = '';
  }
  addOneItem(e);
  substractOneItem(e)
  removeItem(e);
}

const insertFirstItem=(btn,session)=>{
  const item = {
    id:btn.parentNode.id,
    counter: 1
  }
  session.push(item);
  localStorage.setItem(storageName,JSON.stringify(session));
  showCounter(session)
}

const insertRepeatedItem=(isRepeated,btn,session)=>{
  session.forEach(item=>{
      if(item.id === btn.parentNode.id){
        item.counter=item.counter+1;
        isRepeated.status=true;
        localStorage.setItem(storageName,JSON.stringify(session));
        showCounter(session);
        return isRepeated  
      }
  })
}

const insertNewItem =(isRepeated, btn, session)=>{
  if(isRepeated.status === false){
    insertFirstItem(btn,session)
    showCounter(session)
  }
}

const countItems=(session)=>{
  let itemsCounter=0;
  session.forEach(item=>{itemsCounter=itemsCounter+item.counter});
  return itemsCounter;
}

const showCounter=(session)=>{
  counter.innerHTML="";
  counter.innerHTML=countItems(session)
  showMessage()
}

const showMessage = () => {
      const msg = document.querySelector('#msg');
      msg.classList.remove('hidden');
      msg.classList.add('visible');
      setTimeout(()=>{
        msg.classList.remove('visible');
        msg.classList.add('hidden');
      },200)
}
