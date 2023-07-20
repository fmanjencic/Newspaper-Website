const closeMenu = () => {
    let x = document.getElementById('mobile-menu')
    x.style.display = "none";
}

const openMenu = () => {
    let x = document.getElementById('mobile-menu')
    let y = document.getElementById('mobile-navbar')
    x.style.display = "block";
    x.style.visibility = "visible";
    y.style.display = "none";
}