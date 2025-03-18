const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const menuIcon = document.getElementById("menuIcon");

menuIcon.addEventListener("click", () => {
    menu.style.left = "0px";
    overlay.style.display = "block";
});

overlay.addEventListener("click", () => {
    menu.style.left = "-100%";
    overlay.style.display = "none";
});
