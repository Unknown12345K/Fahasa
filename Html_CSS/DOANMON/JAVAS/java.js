    const header = document.querySelector('header')
    window.addEventListener("scroll",function(){
       x = window.pageYOffset
       if(x>0){
            header.classList.add("scrollY")
       }
       else {
        header.classList.remove("scrollY")
       }
    })

    const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
    const imgContainer = document.querySelector(".aspect-ratio-169")
    const dotitem = document.querySelectorAll(".dot")
    //console.log(imgPosition)
    imgPosition.forEach(function(image,index){
        image.style.left  = index*100 + "%"
        dotitem[index].addEventListener("click",function(){
            slider(index)
        })
    })
    
    let imgNumber = imgPosition.length
    let index = 0
    function imgSlider(){
        index++
        if(index>=imgNumber){index=0}
        slider(index)
       
    }
    function slider(index){
        imgContainer.style.left = "-" +index*100+"%"
        const dotActive = document.querySelector(".active")
        dotActive.classList.remove("active")
        dotitem[index].classList.add("active")
    }
    setInterval(imgSlider,3000)