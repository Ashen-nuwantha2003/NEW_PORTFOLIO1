var typed = new Typed(".multiple-text",{
    strings:["Frontend Developer","Backend Developer","A Passionate Software_Engineer"],
    typeSpeed:80,
    backSpeed:80,
    backDelay:100,
    loop: true
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}



