const nav=document.querySelector('.mobile-nav'),
navMenuBtn=document.querySelector('.nav-menu-btn'),
navCloseBtn=document.querySelector('.nav-close-btn');

navToggleBtn=()=>{
    nav.classList.toggle('active')
}
navMenuBtn.addEventListener('click',navToggleBtn);
navCloseBtn.addEventListener('click',navToggleBtn);


const themebtn=document.querySelectorAll('.theme-btn');

for(let i=0;i<themebtn.length;i++){
    themebtn[i].addEventListener('click',()=>{
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');
        for(let j=0;j<themebtn.length;j++){
            themebtn[j].classList.toggle('light');
            themebtn[j].classList.toggle('dark');
        }
    });
}