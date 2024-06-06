document.querySelector("#btright").onclick = () => location.href = "./cart.html";
// danhmuc.js------>
 const items = document.querySelectorAll(".danhmuc-left-li")
 items.forEach(function(menu,index) {
    menu.addEventListener("click",function () {
        menu.classList.toggle("block")
    })
 })
 document.querySelector(".cart-content-right-button button").onclick = () => location.href = "./delivery.html";
