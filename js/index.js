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

const navBar = document.getElementById('navbar');
const container__navBar = document.getElementById('container__navbar');

// ABRIR MENU
function openMenu (){
    container__navBar.classList.add('abrirMenu');
    container__navBar.classList.remove('fecharMenu');
    navBar.classList.add('active');
    navBar.classList.remove('disable');
}

//FECHAR MENU
function closeMenu (){
    setTimeout(()=>{
    navBar.classList.add('disable');
    }, 500);
    setTimeout(()=>{
    navBar.classList.remove('active');
    }, 500);
    container__navBar.classList.add('fecharMenu');
    container__navBar.classList.remove('abrirMenu');
}


//DESABILITAR SCROLL
function disableScroll (){
    const positionScroll = window.scrollY;
    document.body.style.overflow = "hidden";
    window.scrollTo(0, positionScroll);
}

//ATIVAR SCROLL
function enableScroll (){
    document.body.style.overflow = "auto";
}

const botoesMenu = document.querySelectorAll('.item__text');

openNav.addEventListener("click", openMenu);
openNav.addEventListener("click", disableScroll);
closeNav.addEventListener("click", closeMenu);
closeNav.addEventListener("click", enableScroll);

botoesMenu.forEach((ev)=>{
    ev.addEventListener("click", closeMenu);
    ev.addEventListener("click", enableScroll);
})


// SCROLL LINK INTERNO

const linksInternos = document.querySelectorAll('.nav-bar__item a[href^="#"]');

function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    console.log(section);

    window.scrollTo({
        top: topo - 100,
        behavior: 'smooth',
    });
}

linksInternos.forEach((link) =>{
    link.addEventListener('click', scrollToSection);
})

