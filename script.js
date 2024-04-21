let box = document.querySelectorAll(".box");

box.forEach ((item)=>{
    item.addEventListener("click",() => {
        box.forEach((index) =>{
         index.style.filter="none"
        })
        item.style.filter= "drop-shadow(0 6mm 2mm rgb(20, 20, 20))";
    })
})