let menushow = document.querySelector("#menuicon");

let ourproducts = document.querySelector(".ourproducts");
let closinglist = document.querySelector("#closinglist");

let hiddenlist = document.querySelector(".hiddenlist");
let shopclosing=document.querySelector(".shopclosing");

let quantity = document.querySelector("#value");
let i = 1;
let totalquantity = document.querySelector("#qt");

menushow.addEventListener("click", function () {
  ourproducts.style.right = "0";
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
