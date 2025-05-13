let menushow = document.querySelector("#menuicon");
let menu = document.querySelector(".hiddennav");
let closing = document.querySelector("#closing");

let Productlistbtn = document.querySelector("#Productlistbtn");
let ourproducts = document.querySelector(".ourproducts");
let closinglist = document.querySelector("#closinglist");

let hiddenlist = document.querySelector(".hiddenlist");
let shopclosing=document.querySelector(".shopclosing");

let quantity = document.querySelector("#value");
let i = 1;
let totalquantity = document.querySelector("#qt");
// totalquantity.innerHTML=i;

// console.log(totalquantity)
menushow.addEventListener("click", function () {
  menu.style.right = "0";
  ourproducts.style.right = "-350px";
});
closing.addEventListener("click", function () {
  menu.style.right = "-350px";
});

Productlistbtn.addEventListener("click", function () {
  ourproducts.style.right = "0";
  menu.style.right = "-350px";
});
closinglist.addEventListener("click", function () {
  ourproducts.style.right = "-350px";
});

const dots = document.getElementById("threeDots");
dots.addEventListener("click", () => {
 
  hiddenlist.style.right="0px"
});

shopclosing.addEventListener("click",()=>{
     hiddenlist.style.right="-350px";
})

function addition() {
  ++i;
  quantity.textContent = i;
  totalquantity.innerHTML = i;
}
function deletion() {
  if (i > 0) {
    --i;
    quantity.textContent = i;
    totalquantity.innerHTML = i;
  }
}
