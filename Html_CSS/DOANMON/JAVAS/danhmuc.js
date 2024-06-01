// danhmuc.js------>
 const items = document.querySelectorAll(".danhmuc-left-li")
 items.forEach(function(menu,index) {
    menu.addEventListener("click",function () {
        menu.classList.toggle("block")
    })
 })
// cart-modal------>
 const openmodalclick = document.querySelector(".sub-cart")
 const iconclose = document.querySelector(".cart-modal-head .cart-close")
 const modal = document.querySelector(".cart-modal")

function togglemodal(a) {
    modal.classList.toggle("hidden")
}

 openmodalclick.addEventListener("click",togglemodal)
 iconclose.addEventListener("click",togglemodal)
 modal.addEventListener("click",function (a) {
        if (a.target === a.currentTarget) {
            togglemodal()
        }
 })