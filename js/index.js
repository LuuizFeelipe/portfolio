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

