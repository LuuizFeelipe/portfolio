AOS.init();

//BOTÃO TOPO
const btn_top = document.getElementById('btn-top');
function scrollTop (){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
}
function scrollBlockNone (){
    const scrollY = window.scrollY;
    
    if(scrollY > 200){
        btn_top.style.display = "block";
    } else {
        btn_top.style.display = "none"
    }
}
btn_top.addEventListener("click", scrollTop);
window.addEventListener("scroll", scrollBlockNone);

//NAVBAR
const openNav = document.getElementById('header__menu');
const closeNav = document.getElementById('close__nav-bar');

// ABRIR MENU
function openMenu (){
    const navBar = document.getElementById('navbar');
    const containerNavBar = document.getElementById('container__navbar');
    navBar.style.display = "block";
}

//FECHAR MENU
function closeMenu (){
    const navBar = document.getElementById('navbar');
    navBar.style.display = "none";
}

//DESABILITAR SCROLL
function disableScroll (){
    const positionScroll = window.scrollY;
    document.body.style.overflow = "hidden";
    window.scrollTo(0, positionScroll);
}

function enableScroll (){
    document.body.style.overflow = "auto";
}

openNav.addEventListener("click", openMenu);
openNav.addEventListener("click", disableScroll);
closeNav.addEventListener("click", closeMenu);
closeNav.addEventListener("click", enableScroll);
