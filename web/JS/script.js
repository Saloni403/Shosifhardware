let menushow=document.querySelector("#menuicon");
let menu=document.querySelector(".hiddennav")
let closing=document.querySelector("#closing")

let Productlistbtn=document.querySelector("#Productlistbtn")
let ourproducts=document.querySelector(".ourproducts")
let closinglist=document.querySelector("#closinglist")

menushow.addEventListener("click",function(){
    menu.style.right="0"
     ourproducts.style.right="-350px"
})
closing.addEventListener("click",function(){
    menu.style.right="-350px"
   
})

Productlistbtn.addEventListener("click",function(){
    ourproducts.style.right="0"
     menu.style.right="-350px"
})
closinglist.addEventListener("click",function(){
    ourproducts.style.right="-350px"
})
