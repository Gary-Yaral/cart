const object =[
    {
        category:'Gaseosas',
        items: [
            {
                id:1,
                name: 'Coca Cola',
                price: 2.50,
                src: 'assets/coca_cola.jpg'
            },
            {
                id:2,
                name: 'Pepsi',
                price: 2.50,
                src: 'assets/pepsi_cola.webp'
            },
            {
                id:3,
                name: 'Inca Cola',
                price: 2.50,
                src: 'assets/inca_cola.jpg'
            },
            {
                id:4,
                name: 'Fanta',
                price: 2.50,
                src: 'assets/fanta_cola.jpg'
            }
        ]
    },
    {
        category:'Licores',
        items: [
            {
                id:5,
                name: 'Ron Fiesta',
                price: 5.50,
                src: 'assets/ron_barcelo.jpg'
            },
            {
                id:6,
                name: 'Vino tinto',
                price: 5.50,
                src:'assets/vino_tinto.jpg'
            },
            {
                id:7,
                name: 'Ron',
                price: 5.50,
                src:'assets/ron_cartavio.jpg'
            },
            {
                id:8,
                name: 'Cerveza en lata',
                price: 5.50,
                src:'assets/cerveza_lata.jpg'
            }
        ]
    },
    {
        category:'Cereales',
        items: [
            {
                id:9,
                name: 'Zuck',
                price: 5.50,
                src: 'assets/suck.jpg'
            },
            {
                id:10,
                name: 'Avena 1kg',
                price: 5.50,
                src:'assets/avena.jpg'
            },{
                id:11,
                name: 'Arroz 1kg',
                price: 5.50,
                src:'assets/arroz.jpg'
            }
        ]
    },
];



const container = document.querySelector('#container');
window.addEventListener('DOMContentLoaded', () => {
    new Section(object,container).new();
    createSession();
})

window.onchange = () =>{
    alert('reay')
}
/* Object section*/
class Section{
    constructor(object, container){
        this.object = object
        this.container =container
        this.container.classList.add('section')
    }
    new(){ 
        
        this.object.forEach(block => {
            const sectionContainer = document.createElement('div');
            sectionContainer.setAttribute('id','section_'+block.category)
            const sectionTitleContainer = document.createElement('div');
            sectionTitleContainer.classList.add('title');
            const itemsContainer = document.createElement('div');
            itemsContainer.classList.add('items')
            const sectionTitle = document.createElement('div');
            sectionTitle.innerHTML = block.category;
            const underline = document.createElement('hr');   
            underline.classList.add('underline');
            sectionTitleContainer.appendChild(sectionTitle);
            sectionTitleContainer.appendChild(underline);
            this.generateItems(block, itemsContainer)
            this.insertSectionInContainer(sectionContainer, sectionTitleContainer, itemsContainer)
        });
    }

    generateItems (block, itemsContainer){
        block.items.forEach(item => {
            const itemCard = document.createElement('div');
            const img = document.createElement('img');
            const btn = document.createElement('div');
            btn.classList.add('btn');
            btn.innerHTML = 'Añadir'
            img.src = item.src;
            itemCard.classList.add('item');
            itemCard.setAttribute('id',item.id);
            itemCard.appendChild(img);
            itemCard.appendChild(btn)
            itemsContainer.appendChild(itemCard);
        })
    }

    insertSectionInContainer(sectionContainer, sectionTitleContainer, itemsContainer){
        sectionContainer.appendChild(sectionTitleContainer)
        sectionContainer.appendChild(itemsContainer)    
        this.container.appendChild(sectionContainer);
    }
}

const createSession = () => {
    const cart = [];
    if(localStorage.getItem('cart')){
        const exists = {status: true}
        const session = JSON.parse(localStorage.getItem('cart'));
        startCounter(exists, session);
    }else{
        localStorage.setItem('cart', JSON.stringify(cart));
        const session = JSON.parse(localStorage.getItem('cart'));
        const exists = {status: false}
        startCounter(exists,session);
    }
}

const countItemsStorage=(exists, session)=>{
    let itemsCounter=0;
    if(exists.status === false){
        itemsCounter = 0;
        return itemsCounter;
    }else{
        session.forEach(item=>{itemsCounter=itemsCounter+item.counter});
        return itemsCounter;
    }

    
  }
  
  const startCounter=(exists,session)=>{
    const counter = document.querySelector('#counter');
    counter.innerHTML="";
    counter.innerHTML=countItemsStorage(exists,session)
  }
  