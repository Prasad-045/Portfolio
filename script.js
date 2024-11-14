function fn(){
    document.getElementById("arrow").style.color="white"
    document.getElementById("arrow").style.backgroundColor="black"

}
function toggleMenu(){
    var menu = document.querySelector(".menu-links");
    var icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
