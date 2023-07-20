const closeMenu = () => {
    let x = document.getElementById('mobile-menu')
    let y = document.getElementById('mobile-navbar');
    x.style.display = "none";
    y.style.display = "block";
}

const openMenu = () => {
    let x = document.getElementById('mobile-menu');
    let y = document.getElementById('mobile-navbar');
    y.style.display = "none";
    x.style.display = "block";
}

const removeMobileIcon = () => {
    let w = document.documentElement.clientWidth;
    let y = document.getElementById('mobile-navbar');
    if (w > 600) {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}

window.addEventListener("resize", removeMobileIcon)

//On Load
//closeMenu();