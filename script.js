const x=document.querySelector(".mobile-navbar-button");
let nav=document.querySelector(".header");
const Toggle=()=>{
    //  alert("please hello say");
    
    nav.classList.toggle("active");

};
x.addEventListener("click",()=>Toggle());