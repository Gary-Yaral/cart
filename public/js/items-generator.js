const object =[
    {
        category:'Gaseosas',
        items: [
            {
                id:1,
                name: 'Coca Cola',
                price: 0.50,
                src: 'assets/coca_cola.jpg',
                description: "Bebida gaseosa fabricado por 'The Coca Cola Company'"
            },
            {
                id:2,
                name: 'Pepsi',
                price: 0.60,
                src: 'assets/pepsi_cola.webp',
                description: "Bebida gaseosa fabricado por 'The Coca Cola Company'"
            },
            {
                id:3,
                name: 'Inca Cola',
                price: 0.50,
                src: 'assets/inca_cola.jpg',
                description: "Bebida gaseosa fabricado por 'The Coca Cola Company'"
            },
            {
                id:4,
                name: 'Fanta',
                price: 0.55,
                src: 'assets/fanta_cola.jpg',
                description: "Bebida gaseosa fabricado por 'The Coca Cola Company'"
            }
        ]
    },
    {
        category:'Licores',
        items: [
            {
                id:5,
                name: 'Ron Fiesta',
                price: 5.00,
                src: 'assets/ron_barcelo.jpg',
                description: "Bebida alcoholica con 40 grados de alcohol"
            },
            {
                id:6,
                name: 'Vino tinto',
                price: 5.50,
                src:'assets/vino_tinto.jpg',
                description: "Bebida alcoholica con 25 grados de alcohol"
            },
            {
                id:7,
                name: 'Ron',
                price: 4.50,
                src:'assets/ron_cartavio.jpg',
                description: "Bebida alcoholica con 40 grados de alcohol"
            },
            {
                id:8,
                name: 'Cerveza en lata',
                price: 1.35,
                src:'assets/cerveza_lata.jpg',
                description: "Bebida alcoholica con 5 grados de alcohol"
            }
        ]
    },
    {
        category:'Cereales',
        items: [
            {
                id:9,
                name: 'Zuck',
                price: 0.40,
                src: 'assets/suck.jpg',
                description: "Cereal crocante de 500 gramos"
            },
            {
                id:10,
                name: 'Avena 1kg',
                price: 0.80,
                src:'assets/avena.jpg',
                description: "Paquete de de avena entera de 1kg"
            },{
                id:11,
                name: 'Arroz 1kg',
                price: 0.70,
                src:'assets/arroz.jpg',
                description: "Arroz flor integral, funda de 1kg"
            }
        ]
    },
];



const container = document.querySelector('#container');

window.addEventListener('DOMContentLoaded', () => {
    new Section(object,container).new();
    createSession();
    renderCategories();
})

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
            sectionContainer.setAttribute('id','section_'+block.category);
            sectionContainer.classList.add('scroll-top');
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
            const title = document.createElement('div');
            const priceContainer = document.createElement('div');
            const label = document.createElement('div');
            const price = document.createElement('div');
            const btn = document.createElement('div');
            title.innerHTML = item.name;
            label.innerHTML = "Precio: ";
            price.innerHTML = "$"+item.price.toFixed(2);
            price.classList.add('item-price');
            img.classList.add('item-img');
            label.classList.add('item-label');
            title.classList.add('item-title');
            priceContainer.classList.add('price-container');

            btn.classList.add('btn');
            btn.innerHTML = 'Añadir'
            img.src = item.src;
            priceContainer.appendChild(label);
            priceContainer.appendChild(price);
            itemCard.classList.add('item');
            itemCard.setAttribute('id',item.id);
            itemCard.appendChild(img);
            itemCard.appendChild(title);
            itemCard.appendChild(priceContainer);
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
  

  const renderCategories = () =>{
    const ul = document.querySelector('#category-list');
    object.forEach(array => {
        let li = document.createElement('li');
        li.classList.add('category-li');
        let link = document.createElement('a');
        link.classList.add('category-a');
        link.setAttribute('href','#section_'+array.category);
        link.innerHTML = array.category;
        li.appendChild(link);
        ul.append(li);
    })
  }