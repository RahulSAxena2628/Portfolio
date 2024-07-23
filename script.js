const x=document.querySelector(".mobile-navbar-button");
let nav=document.querySelector(".header");
const Toggle=()=>{
    //  alert("please hello say");
    
    nav.classList.toggle("active");

};
x.addEventListener("click",()=>Toggle());


// function scrollToNextSection() {
//     const currentSection = document.activeElement.closest('section');
//     const nextSection = currentSection.nextElementSibling;
  
//     if (nextSection) {
//       nextSection.scrollIntoView();
//     }
//   }

let sections=document.querySelectorAll('section')
let link1=document.querySelector('.link1')
link1.addEventListener("click",()=>Toggle());
let link2=document.querySelector('.link2')
link2.addEventListener("click",()=>Toggle());
let link3=document.querySelector('.link3')
link3.addEventListener("click",()=>Toggle());
let link4=document.querySelector('.link4')
link4.addEventListener("click",()=>Toggle());
let link5=document.querySelector('.link5')
link5.addEventListener("click",()=>Toggle());




// window.onscroll=()=>{
//     sections.forEach(sec=>{
//         let top=window.scrollY;
//         let offset=sec.offsetTop-150;
//         let height=sec.height;
//         let id=sec.getAttribute('id')
//         if(top>=offset && top<=offset+height){
//             links.forEach(link=>{
//                 link.classList.remove('active');
//                 document.querySelector('header nav a[href=`+ id+`]').classlist.add('active')
//             })

//         }
//     })
// }

