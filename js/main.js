let personHead = document.querySelector('.person__head');
let eyeAnimation = document.querySelectorAll('.person__eye');
let mouthAnimation = document.querySelector('.person__mouth');
personHead.addEventListener('mouseover', ()=>{
    eyeAnimation.forEach((e)=>{
        e.classList.add('person__eye_animation')
    });
    mouthAnimation.classList.add('person__mouth_animation');

})
personHead.addEventListener('mouseleave', ()=>{
    eyeAnimation.forEach((e)=>{
        e.classList.remove('person__eye_animation')
    });
    mouthAnimation.classList.remove('person__mouth_animation');
})



let formBlock = document.querySelector('.form__block');
for( i = 1; i<=25; i++){
   
    const FORM_FIELD_SET = document.createElement('fieldset');
    FORM_FIELD_SET.className = "form__fieldset";


    const FORM_LABEL = document.createElement('label');
    FORM_LABEL.className = "form__label";
    FORM_LABEL.textContent = i;
    FORM_LABEL.setAttribute("for",i);


    const FORM_CHECK_BOX = document.createElement('input');
    FORM_CHECK_BOX.id = i;
    FORM_CHECK_BOX.value = i;
    FORM_CHECK_BOX.type = 'checkbox';
    FORM_CHECK_BOX.className = 'form__checkbox';
    FORM_CHECK_BOX.name = 'seat';
    
    FORM_FIELD_SET.appendChild(FORM_LABEL);
    FORM_FIELD_SET.appendChild(FORM_CHECK_BOX);
    formBlock.appendChild(FORM_FIELD_SET);
}


let form = document.querySelector('.form');
let 
let seatList = [];
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let seats = document.getElementsByName('seat');
    for(let i = 0; i < seats.length; i++){
        if(seats[i].checked == true){
            console.log(seats[i].value);
        }
    }
    
})
