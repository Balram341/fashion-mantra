const wrap = document.querySelector('.wrap');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btn-login');
const iconClose = document.querySelector('.icon-close');

registerlink.addEventListener('click', ()=>
{
    wrap.classList.add('active');
});

loginlink.addEventListener('click',  ()=>
{
    wrap.classList.remove('active');
});


btnPopup.addEventListener('click',  ()=>
{
    wrap.classList.add('active-popup');
});


iconClose.addEventListener('click',  ()=>
{
    wrap.classList.remove('active-popup');
});