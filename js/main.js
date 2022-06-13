let curBalance = document.querySelector('.current-balance');
let cash = 1000;
curBalance.innerHTML = cash

let balanceSubmit = document.getElementById('balance-submit');
let balanceInput = document.getElementById('balance-input');
balanceSubmit.addEventListener('click', ()=>{
    cash = cash + parseInt(balanceInput.value);
    curBalance.innerHTML = cash;

});


let phoneList = [
    {
        type: 'phone',
        title:'Apple iPhone 13',
        subtitle: 'Pro 128GB Silver',
        price: 594990,
        img: './images/phone1.png',
    },
    {
        type: 'phone',
        title:'Apple iPhone 11',
        subtitle: '64GB Black Slim Box',
        price: 299990,
        img: './images/phone2.png',
    },
    {
        type: 'phone',
        title:'Apple iPhone SE',
        subtitle: '64GB 2020 Black',
        price: 269990,
        img: './images/phone3.png',
    }
    ,{
        type: 'phone',
        title:'Xiaomi Redmi 9A',
        subtitle: '32GB Sky Blue',
        price: 594990,
        img: './images/phone4.png',
    },
    {
        type: 'phone',
        title:'Samsung Galaxy A52',
        subtitle: '128GB Awesome Black',
        price: 169890,
        img: './images/phone5.png',
    }
]
let laptopList = [
    {
        type: 'laptop',
        title:'Apple MacBook Pro 14',
        subtitle: 'M1 Pro/16GB/512GB SSD',
        price: 1180990,
        img: './images/laptop1.png',
    },
    {
        type: 'laptop',
        title:'Lenovo V14 IGL',
        subtitle: '82C2000YRU',
        price: 153090,
        img: './images/laptop2.png',
    },
    {
        type: 'laptop',
        title:'Asus TUF Gaming',
        subtitle: 'F15 FX506LH I5165SGN ',
        price: 450690,
        img: './images/laptop3.png',
    }
    ,{
        type: 'laptop',
        title:'Acer Aspire 3',
        subtitle: 'A315-34 C41TUN',
        price: 154690,
        img: './images/laptop4.png',
    },
    {
        type: 'laptop',
        title:'Acer Nitro 5',
        subtitle: 'AN515-55',
        price: 489990,
        img: './images/laptop5.png',
    }
]

let techList = [
    {
        type: 'phone',
        title:'Apple iPhone 13',
        subtitle: 'Pro 128GB Silver',
        price: 594990,
        img: './images/phone1.png',
    },
    {
        type: 'phone',
        title:'Apple iPhone 11',
        subtitle: '64GB Black Slim Box',
        price: 299990,
        img: './images/phone2.png',
    },
    {
        type: 'phone',
        title:'Apple iPhone SE',
        subtitle: '64GB 2020 Black',
        price: 269990,
        img: './images/phone3.png',
    }
    ,{
        type: 'phone',
        title:'Xiaomi Redmi 9A',
        subtitle: '32GB Sky Blue',
        price: 594990,
        img: './images/phone4.png',
    },
    {
        type: 'phone',
        title:'Samsung Galaxy A52',
        subtitle: '128GB Awesome Black',
        price: 169890,
        img: './images/phone5.png',
    },
    {
        type: 'laptop',
        title:'Apple MacBook Pro 14',
        subtitle: 'M1 Pro/16GB/512GB SSD',
        price: 1180990,
        img: './images/laptop1.png',
    },
    {
        type: 'laptop',
        title:'Lenovo V14 IGL',
        subtitle: '82C2000YRU',
        price: 153090,
        img: './images/laptop2.png',
    },
    {
        type: 'laptop',
        title:'Asus TUF Gaming',
        subtitle: 'F15 FX506LH I5165SGN ',
        price: 450690,
        img: './images/laptop3.png',
    }
    ,{
        type: 'laptop',
        title:'Acer Aspire 3',
        subtitle: 'A315-34 C41TUN',
        price: 154690,
        img: './images/laptop4.png',
    },
    {
        type: 'laptop',
        title:'Acer Nitro 5',
        subtitle: 'AN515-55',
        price: 489990,
        img: './images/laptop5.png',
    }


]

let boughtList = [];
let desiredList = [];

function buyItems(el, arr){
    el.forEach((e)=>{
        e.addEventListener('click',()=>{
            console.log("btn"+e.value);
            if(cash >= arr[e.value].price){
                cash = cash - arr[e.value].price;
                curBalance.innerHTML = cash;
                alert('Оплата прошла успешно');
                boughtList.push(arr[e.value].title);
                console.log(boughtList);
            }else{
                alert('У вас не достаточно средств на балансе')
            } 
        })
    })
}

function desireItems(el, arr){
    el.forEach((e)=>{
        e.addEventListener('click',()=>{
            console.log("btn"+e.value);
            desiredList.push(arr[e.value].title);
            console.log(desiredList);
        })
    })
}



let cards = document.getElementById('cards');
function renderItems(arr){
    if (arr.length === 0) {
        console.log(cards.firstChild)
        while (cards.firstChild) {
            cards.removeChild(cards.lastChild);
        }

    }
    for(let i = 0; i < arr.length; i++){

        let shopCard = document.createElement('div');
        let shopCardImg = document.createElement('img');
        let shopCardBody = document.createElement('div');
        let shopCardTitle = document.createElement('h5');
        let shopCardSubTitle = document.createElement('p');
        let shopCardPrice = document.createElement('p');
        let shopCardFooter = document.createElement('div');
        let shopCardPrimBtn = document.createElement('button');
        let shopCardSucBtn = document.createElement('button');
    
        shopCard.className = "card mb-5";
        shopCard.style.width = "18rem";
    
        shopCardImg.className = "card-img-top card-img";
    
        shopCardBody.className = "card-body";
    
        shopCardTitle.className = "card-title";
    
        shopCardSubTitle.className = "card-text";
    
        shopCardPrice.className = "card-text";
    
        shopCardFooter.className = "card-footer";
    
        shopCardSucBtn.className = "btn btn-success mx-1 buy-btn";
        shopCardSucBtn.textContent = 'Купить';
        shopCardSucBtn.value = i;
    
        shopCardPrimBtn.className = "btn btn-primary mx-1 desired";
        shopCardPrimBtn.textContent = 'В корзину';
        shopCardPrimBtn.value = i;
        
        shopCardFooter.appendChild(shopCardPrimBtn);
        shopCardFooter.appendChild(shopCardSucBtn);
        
    
        shopCardBody.appendChild(shopCardTitle);
        shopCardBody.appendChild(shopCardSubTitle);
        shopCardBody.appendChild(shopCardPrice);
    
        shopCardTitle.textContent = arr[i].title;
        shopCardSubTitle.textContent = arr[i].subtitle;
        shopCardPrice.textContent = `${arr[i].price} тг`;
    
        shopCard.appendChild(shopCardImg);
        shopCard.appendChild(shopCardBody);
        shopCard.appendChild(shopCardFooter);
    
        shopCardImg.src = arr[i].img;
        
        cards.appendChild(shopCard);

    }
    let buy = document.querySelectorAll('.buy-btn');
    let desired = document.querySelectorAll('.desired');
    buyItems(buy, arr);
    desireItems(desired, arr);

}

let searchBtn = document.getElementById('search-submit');
let searchInput = document.getElementById('search-input');
let showBtn = document.getElementById('show-submit');
showBtn.addEventListener('click', ()=>{
    renderItems([])
    renderItems(techList);

})
searchBtn.addEventListener('click',()=>{
    console.log('searchBtn', searchInput.value)
    if(searchInput.value == 'laptop'){
        renderItems([])
        renderItems(laptopList);
    }
    else if(searchInput.value == 'phone'){
        renderItems([])
        renderItems(phoneList);
    }
})


function showList(listener,list, arr){
    listener.addEventListener('click', ()=>{
        list.textContent = `${arr}`;
    
    })
    
}
let showBoughtItems = document.getElementById('show-bought');
let boughtItems = document.querySelector('.bought-list');
showList(showBoughtItems,boughtItems,boughtList);

let showDesiredItems = document.getElementById('show-desired');
let desiredItems = document.querySelector('.desired-list');
showList(showDesiredItems,desiredItems,desiredList);



