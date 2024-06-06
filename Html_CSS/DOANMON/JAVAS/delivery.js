        let ten = document.getElementById("hoten")
        let em = document.getElementById("email")
        let sodt = document.getElementById("sdt")
        let diachi = document.getElementById("diachi")
        var error = document.querySelectorAll(".erro-text")
var btclick =document.querySelector('#bt-thanhtoan')
 btclick.onclick = () => {
    
    if (ten.value.trim().length == 0 || em.value.trim().length == 0 || sodt.value.trim().length == 0 || diachi.value.trim().length == 0) {
        if (ten.value.trim().length == 0) {
            var err = document.querySelector(".erro-ten")
            ten.focus();
            err.style.display = "block"
        }
        else {
            var err = document.querySelector(".erro-ten")
            err.style.display = "none"
        }
        if (em.value.trim().length == 0) {
            var err = document.querySelector(".erro-email")
            em.focus();
            err.style.display = "block"
        }
        else {
            var err = document.querySelector(".erro-email")
            err.style.display = "none"
        }
        if (sodt.value.trim().length == 0) {
            var err = document.querySelector(".erro-sdt")
            sodt.focus();
            err.style.display = "block"
        }
        else {
            var err = document.querySelector(".erro-sdt")
            err.style.display = "none"
        }
        if (diachi.value.trim().length == 0) {
            var err = document.querySelector(".erro-diachi")
            diachi.focus();
            err.style.display = "block"
        }
        else {
            var err = document.querySelector(".erro-diachi")
            err.style.display = "none"
        }
    }
    else {
        location=alert("Thanh Toán Thành Công");
    }
}
