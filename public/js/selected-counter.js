const body =document.querySelector('body');
const storageName = 'cart';
const counter = document.querySelector('#counter');
const modalInfo = document.querySelector('#information');


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
  removeAll(e)
  openModal(e);

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

const openModal = (e) =>{
  let className = e.target.className;
  let imgContainer = modalInfo.querySelector('img');
  let codeContainer = modalInfo.querySelector('.info-code-code');
  let descriptionContainer = modalInfo.querySelector('.info-description');
  let infoPrice = modalInfo.querySelector('.info-price-label');
  let infoTitle = modalInfo.querySelector('.info-title-title');
  let imgSrc;
  let itemCode;
  switch(className){
    case 'item':
      itemCode = e.target.id;
      codeContainer.innerHTML = itemCode;
      object.forEach(item => {
        item.items.forEach(element => {
          if(element.id.toString() === itemCode){
              infoTitle.innerHTML = element.name;
              descriptionContainer.innerHTML = element.description;
              infoPrice.innerHTML = "$"+element.price.toFixed(2);
          }
        })
      })

      modalInfo.classList.remove('info-hidden');
      imgContainer.src = e.target.querySelector('img').src 
      break;
    case 'item-title':
      itemCode = e.target.parentNode.id;
      codeContainer.innerHTML = itemCode;
      object.forEach(item => {
        item.items.forEach(element => {
          if(element.id.toString() === itemCode){
              infoTitle.innerHTML = element.name;
              descriptionContainer.innerHTML = element.description;
              infoPrice.innerHTML = "$"+element.price.toFixed(2);
          }
        })
      })

      imgSrc = e.target.parentNode.querySelector('img').src;
      imgContainer.src = imgSrc;
      modalInfo.classList.remove('info-hidden');
      break;
    case 'item-img':
      itemCode = e.target.parentNode.id;
      codeContainer.innerHTML = itemCode;
      object.forEach(item => {
        item.items.forEach(element => {
          if(element.id.toString() === itemCode){
              infoTitle.innerHTML = element.name;
              descriptionContainer.innerHTML = element.description;
              infoPrice.innerHTML = "$"+element.price.toFixed(2);
          }
        })
      })

      imgSrc = e.target.src;
      imgContainer.src = imgSrc;
      modalInfo.classList.remove('info-hidden');
      break;
    case 'item-price':
      itemCode = e.target.parentNode.parentNode.id;
      codeContainer.innerHTML = itemCode;
      object.forEach(item => {
        item.items.forEach(element => {
          if(element.id.toString() === itemCode){
              infoTitle.innerHTML = element.name;
              descriptionContainer.innerHTML = element.description;
              infoPrice.innerHTML = "$"+element.price.toFixed(2);
          }
        })
      })
      imgSrc = e.target.parentNode.parentNode.querySelector('img').src;
      imgContainer.src = imgSrc;
      modalInfo.classList.remove('info-hidden');
      modalInfo.classList.remove('info-hidden');
      break;
    case 'item-label':
      itemCode = e.target.parentNode.parentNode.id;
      codeContainer.innerHTML = itemCode;
      object.forEach(item => {
        item.items.forEach(element => {
          if(element.id.toString() === itemCode){
              infoTitle.innerHTML = element.name;
              descriptionContainer.innerHTML = element.description;
              infoPrice.innerHTML = "$"+element.price.toFixed(2);
          }
        })
      })

      imgSrc = e.target.parentNode.parentNode.querySelector('img').src;
      imgContainer.src = imgSrc;
      modalInfo.classList.remove('info-hidden');
      modalInfo.classList.remove('info-hidden');
      break;

      case 'price-container':
        itemCode = e.target.parentNode.id;
        codeContainer.innerHTML = itemCode;
        object.forEach(item => {
          item.items.forEach(element => {
            if(element.id.toString() === itemCode){
                infoTitle.innerHTML = element.name;
                descriptionContainer.innerHTML = element.description;
                infoPrice.innerHTML = "$"+element.price.toFixed(2);
                imgContainer.src = element.src
            }
          })
        })
  
        modalInfo.classList.remove('info-hidden');
        break;
  }
}

