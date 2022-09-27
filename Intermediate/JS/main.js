// Convert NodeList/HTML Collection into Array
let santa = Array.from(document.getElementsByClassName("santa"));

const hide = () => {
    for(let i in santa){
        santa[i].addEventListener("click",() =>{
            santa[i].style.opacity ="0";
            
            document.getElementById("start").style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
        });
    }
}

window.addEventListener("load",hide);