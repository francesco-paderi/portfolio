let scrollPage = () => {
    let arrow = document.getElementById("arrow-up");
    let navbar = document.getElementById("navbar");
    let pos = document.documentElement.scrollTop; 

    if (pos > 100) {
        arrow.style.display = 'inline';
        navbar.style.boxShadow = '0px 4px 11px 0px #000000';
    } else {
        arrow.style.display = 'none';
        navbar.style.boxShadow = 'none';
    }
};

window.onscroll = scrollPage;
window.onload = scrollPage;
