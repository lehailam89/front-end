const buttonMenu = document.querySelector("#buttonMenu");
const buttonClose = document.querySelector("#buttonClose");
const menu = document.querySelector("#menu");   

buttonMenu.onclick = function(){
    menu.classList.add("show");
}
buttonClose.onclick = function(){
    menu.classList.remove("show");
};