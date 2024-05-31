// danhmuc.js------>
 const items = document.querySelectorAll(".danhmuc-left-li")
 items.forEach(function(menu,index) {
    menu.addEventListener("click",function () {
        menu.classList.toggle("block")
    })
 })