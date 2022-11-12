let scrollPage = () => {
    let arrow = document.getElementById("arrow-up");
    let pos = document.documentElement.scrollTop; 

    if (pos > 100) {
        arrow.style.display = 'inline';
        arrow.style.display = TransitionEvent;
    } else {
        arrow.style.display = 'none';

    }
};

window.onscroll = scrollPage;
window.onload = scrollPage;