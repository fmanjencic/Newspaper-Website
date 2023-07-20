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

//On Load
//closeMenu();