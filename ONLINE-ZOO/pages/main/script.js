const burger = document.querySelector('.burger');
const burger_1 = document.querySelector('.burger_1');
const burger_2 = document.querySelector('.burger_2');
const burger_3 = document.querySelector('.burger_3');
const fon = document.querySelector('.fon');
const petstory = document.querySelector('.petstory');
const nav_text = document.querySelectorAll('.nav_text');
const header = document.querySelector('.header');
const array = ['item']

burger.addEventListener('click', function(){
    burger_1.classList.toggle('burger_1_active');
    burger_2.classList.toggle('burger_2_active');
    burger_3.classList.toggle('burger_3_active');
    fon.classList.toggle('fon_active');
    petstory.classList.toggle('petstory_active');
    header.classList.toggle('header_active');   
    nav_text.forEach(item => {
        item.classList.toggle('nav_text_active');
    })
})




