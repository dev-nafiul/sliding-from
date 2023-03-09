




const container=document.querySelector(".container");
const bluebg=document.querySelector(".bluebg");
const singinBtn=document.querySelector(".singinBtn");
const singUpBtn=document.querySelector(".singUpBtn");
const fromBx=document.querySelector(".fromBx");
const body=document.querySelector("body");



singUpBtn.addEventListener("click",()=>{
   fromBx.classList.add('active');
   body.classList.add('active');
});
singinBtn.addEventListener("click",()=>{
    fromBx.classList.remove('active');
    body.classList.remove('active');
    
})

