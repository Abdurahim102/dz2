const itemSnow = document.querySelector('.snow_item')

function makeSnow(){

    const newi = document.createElement ("i");
    newi.setAttribute("class", "fa-solid fa-leaf snow")
    newi.style.left = Math.random() * window.innerWidth + "px"
    newi.style.opacity = Math.random() + 0.3;
    newi.style.animationDuration = Math.random() * 3 + 2 + 's'
    newi.style.fontSize = Math.random() * 10 + 10 + 'px'
    itemSnow.appendChild(newi)
    setTimeout(()=>{
        newi.remove();
    },2000)
    
   
}

setInterval (makeSnow, 100)

makeSnow()