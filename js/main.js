

let cash = 10000;
let curCash = document.querySelector('.cur__cash');
curCash.textContent = `your current cash: ${cash}`;


let phoneList = []
let iphone = {
    title: 'iphoneX',
    price: 800
}
let xiaomi = {
    title: 'xiaomi redmi note 9pro',
    price: 500
}
phoneList.push(iphone);
phoneList.push(xiaomi);

let laptopList = []
let asus = {
    title: 'asus rog',
    price: 2000
}
let acer = {
    title: 'acer aspire 7',
    price: 1200
}
laptopList.push(asus);
laptopList.push(acer);

let quantity = "quantity";
acer[quantity] = 64;
asus[quantity] = 48;
iphone[quantity] = 182;
xiaomi[quantity] = 96;


let allItems = phoneList.concat(laptopList);
console.log(allItems);

let boughtItems = [];

let itemsBlock = document.querySelector('.item__block');
const LIST_ITEMS = document.createElement('ul');
itemsBlock.appendChild(LIST_ITEMS)

function showItems(list, nodeParent){
   
    for(let i=0; i<list.length; i++){

        const TITLE = document.createElement('li');
        TITLE.textContent = `Title: ${list[i].title}`;

        const PRICE = document.createElement('li');
        PRICE.textContent = `Price: ${list[i].price}`;
        PRICE.className = "mt-2"

        const QUANTITY = document.createElement('li');
        QUANTITY.className = "mt-2 mb-3"
        QUANTITY.textContent = `Quantity: ${list[i].quantity}`;

        nodeParent.appendChild(TITLE);
        nodeParent.appendChild(PRICE);
        nodeParent.appendChild(QUANTITY);
    }
    

}

let phoneBtn = document.getElementById('phones').addEventListener('click', ()=>{
    showItems(phoneList, LIST_ITEMS);
});

let laptopBtn = document.getElementById('laptops').addEventListener('click', ()=>{
    showItems(laptopList, LIST_ITEMS);
});
let showAll = document.getElementById('all').addEventListener('click', ()=>{
    showItems(allItems, LIST_ITEMS);
});



let saleForm = document.forms.sale_form;
let saleItem = saleForm.item_name;
let saleQuant = saleForm.item_quant;



let saleBtn = document.querySelector('.sale-btn');
saleBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    let abc = /[a-z]/i;
    let num = /[0-9]/;
    
    if(abc.test(saleItem.value) && num.test(saleQuant.value)){
        for(i in allItems){
            if(allItems[i].title.includes(saleItem.value)){
                let price = allItems[i].price * saleQuant.value;

                if(cash >= price){
                    cash = cash - price;
                    console.log(cash)
                    curCash.textContent = `your current cash: ${cash}`;
                    
                    let userItem = {
                        title: allItems[i].title,
                        quantity: saleQuant.value
                    }
                    boughtItems.push(userItem);
                    let userItems = document.querySelector('.user__items');
                    const USER_ITEMS = document.createElement('ul');
                    userItems.appendChild(USER_ITEMS);
                    showItems(boughtItems, USER_ITEMS);
                
                }else{
                    alert(`У вас не доастаточно средств: текущий баланс равен: ${cash}`)
                }
            }
        }
    }else{
        alert('Данные введены не корректно');
        
    }
    saleForm.reset();

})



