const name =[
    {
        category:'Gaseosas',
        items: [
            {
                id:1,
                name: 'Coca Cola',
                price: 2.50,
                src: 'https://th.bing.com/th/id/Rf963599c43481a448b7e23142337477c?rik=ssly7UY1nM1TAw&pid=ImgRaw'
            },
            {
                id:2,
                name: 'Pepsi',
                price: 2.50,
                src: 'https://scene7.samsclub.com/is/image/samsclub/0001200010010_B?$DT_Zoom$'
            },
            {
                id:3,
                name: 'Inca Cola',
                price: 2.50,
                src: 'https://th.bing.com/th/id/Rd802be26a642b4fd29891f55ddb4049e?rik=v0dkJYmxypoWnw&pid=ImgRaw'
            },
            {
                id:5,
                name: 'Fanta',
                price: 2.50,
                src: 'https://th.bing.com/th/id/OIP.DyFcUMRIaqghPkjGlw8D3QHaHa?pid=ImgDet&w=500&h=500&rs=1'
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
                src: 'https://th.bing.com/th/id/Raef0ba2eee6a750bbda5ce42daaf9082?rik=pY4KorWBc6yGSw&pid=ImgRaw'
            },
            {
                id:6,
                name: 'Vino tinto',
                price: 5.50,
                src:'https://s.cornershopapp.com/product-images/390784.jpg?versionId=dYpufIO1gYLdjF1CzX6kzb5wK1we6HHH'
            },
            {
                id:7,
                name: 'Ron',
                price: 5.50,
                src:'https://th.bing.com/th/id/OIP.WgZA9_J_vS6vO_fcmwn1dwHaHa?pid=ImgDet&rs=1'
            },
            {
                id:8,
                name: 'Cerveza en lata',
                price: 5.50,
                src:'https://th.bing.com/th/id/Ree695ae42e0b353603638eb63de02643?rik=c44jPsk%2b1PIB1Q&pid=ImgRaw'
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
                src: 'https://th.bing.com/th/id/R65f9cb9769800c1a659d6fa6c822276c?rik=hZsJWQBv4HFL9w&pid=ImgRaw'
            },
            {
                id:10,
                name: 'Avena 1kg',
                price: 5.50,
                src:'https://th.bing.com/th/id/Rf1a60427f6527071cee1a0fea270a7c8?rik=J3P5wVvsUy4gZA&pid=ImgRaw'
            },{
                id:11,
                name: 'Arroz 1kg',
                price: 5.50,
                src:'https://th.bing.com/th/id/Re740d939588ab03d4870a783e30ddd09?rik=Vwn8vEJoiBA2ag&pid=ImgRaw'
            }
        ]
    },
];
const parentNode = document.querySelector('#container');
window.addEventListener('DOMContentLoaded', () => {
    const section = new Section();
    section.new(name,parentNode)
})

/* Object section*/
class Section{
    new(object, parentNode){ 
        parentNode.classList.add('section')
        object.forEach(element => {
            const section = document.createElement('div');
            section.setAttribute('id','section_'+element.category)
            const title = document.createElement('div');
            title.classList.add('title');
            const items = document.createElement('div');
            items.classList.add('items')
            const line = document.createElement('hr');
            const category = document.createElement('div');
            category.innerHTML = element.category;
            line.classList.add('underline');
            title.appendChild(category);
            title.appendChild(line);
            
            element.items.forEach(item => {
                const itemCard = document.createElement('div');
                const img = document.createElement('img');
                const btn = document.createElement('div');
                btn.classList.add('btn');
                btn.innerHTML = 'A??adir'
                img.src = item.src;
                itemCard.classList.add('item');
                itemCard.setAttribute('id',item.id);
                itemCard.appendChild(img);
                itemCard.appendChild(btn)
                items.appendChild(itemCard);
            })
            section.appendChild(title)
            section.appendChild(items)    
            parentNode.appendChild(section);
        });
    }
}


const generateSections = () => {
}