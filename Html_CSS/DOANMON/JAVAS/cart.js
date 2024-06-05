var listItems = document.querySelectorAll(".row-item");
var listChoosen = [];
var idAuto = 1;

listItems.forEach((item)=>{
    let btnCart = item.querySelector("#danhmuc-cart");
    btnCart.onclick = ()=>{

        var itemObject = {};
        let name = item.querySelector("h1").textContent;
        let price = item.querySelector(".price").textContent;
        itemObject.name = name;
        itemObject.price = price;
        itemObject.id = idAuto;
        idAuto++;
        listChoosen.push(itemObject);
    }
})
var isOpen = false;
var modal = document.querySelector(".cart-modal");
document.querySelector(".menu-cart").onclick = ()=>{
    modal.style.display = "block";
    console.log(listChoosen);
    renderItem(listChoosen);
    document.querySelectorAll(".item .btnDelete").forEach((e, idnex)=>{
        e.onclick = ()=>{
            console.log(listChoosen)
            let index = listChoosen.findIndex((itemCart)=>e.parentElement.parentElement.querySelector(".id").textContent === itemCart.id);
            listChoosen = listChoosen.toSpliced(index, 1);
            
            document.querySelector(".cart-modal-center").removeChild(e.parentElement.parentElement);
        }
    })

}

function renderItem(listChoosen){
    var body = document.querySelector(".cart-modal-center");
    body.innerHTML = "";
    body.innerHTML += listChoosen.map((e, index)=>`   <div class="item" style="display: flex; border: none; align-items: center;height: 30px;box-shadow: 0 4px 6px rgb(32 33 36 / 28%);">
                                                    <span class="id" style="flex: 1;">${e.id}</span>
                                                    <span class="name" style="flex: 2;font-size: 14px;font-weight: 700; ">${e.name}</span>
                                                    <span style="flex: 1;color: #C92127;">${e.price}</span>
                                                    <div style="flex: 1; font-size:12px">
                                                    <button class="btnDelete" style="width: 0px;" value="${index}">X</button>
                                                    </div>
                                                </div>`);
   
}

document.querySelector(".cart-modal .cart-close").onclick = ()=> modal.style.display = "none";

// document.querySelector("#btthanhtoan").onclick = ()=> location.href = "./Html_CSS/DOANMON/HTML/cart.html";


