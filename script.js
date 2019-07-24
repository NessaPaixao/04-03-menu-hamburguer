let hamburguer = document.querySelector("#mobile");
let menu = document.querySelector("section");

function controlarMenu(){
    menu.classList.toggle("aparecerMenu");
}

mobile.onclick = controlarMenu;