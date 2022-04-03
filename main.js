window.addEventListener("scroll", function(){
    const header=document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY > 0);
}) ;



const servicesModals = document.querySelectorAll(".services-modal"); 
const learnmoreBtns =document.querySelectorAll(".learn-more-btn");
const modalCloseBtns =document.querySelectorAll(".modal-close-btn");



var modal=function(modalClick){
    servicesModals[modalClick].classList.add("active");
} 

learnmoreBtns.forEach((learnmoreBtns, i) => {
    learnmoreBtns.addEventListener("click",() => {modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtns) => {
    modalCloseBtns.addEventListener("click",() => {
        servicesModals.forEach((modalView) =>  {
           modalView.classList.remove("active"); 
        });
    });
});

// scrool to the up part

const scrolltotop=document.querySelector(".scrolltothetop");
window.addEventListener("scroll",function(){
    scrolltotop.classList.toggle("active",window.scrollY>500);
});

scrolltotop.addEventListener("click", () =>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
});

window.addEventListener("scroll", () => {
 const section = documnet.querySelectorAll("section");
 const scrollY = window.pageXOffset;

 sections.forEach(current => { 
     let sectionHeight = current.offsetHeight;
     let sectionTop =current.offsetHeight -50;
     let id = current.getAttribute("id");


     if(scrollY> sectionTop && scrollY <= sectionTop+ sectionHeight){
         documnet.querySelector(".nav-items a[href*=" +id + "]").classList.add("active");
     } else{

        documnet.querySelector(".nav-items a[href*=" +id + "]").classList.remove("active");
     }
 });

});
   


const themebtn = document.querySelector(".theme-btn");

themebtn.addEventListener("click" , () => {
    document.bodyclassList.toggle("dark-theme");
    themebtn.classList.toggle("sun");


    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-theme", getCurrentTheme());

});
//  darktheme
// const getCurrentTheme = () =>document.body.classList.contains("dark-theme") ? "dark" : "light";
// const getCurrentIcon = () => themebtn.classList.contains("sun") ? "sun" : "moon";
//    const savedTheme = localStorage.getItem("saved-theme");
//    const savedIcon = localStorage.getItem("saved-icon");

//    if(savedTheme){
//        document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme") ;
//           themebtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun"); 
//     }
    // 