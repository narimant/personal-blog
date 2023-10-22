const nav=document.querySelector('.mobile-nav'),
navMenuBtn=document.querySelector('.nav-menu-btn'),
navCloseBtn=document.querySelector('.nav-close-btn');

navToggleBtn=()=>{
    nav.classList.toggle('active')
}
navMenuBtn.addEventListener('click',navToggleBtn);
navCloseBtn.addEventListener('click',navToggleBtn);