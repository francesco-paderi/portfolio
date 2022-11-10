const icon = document.getElementById("icon");
const body = document.querySelector('body');

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "https://images2.imgbox.com/9e/65/FsKeCWeJ_o.png";
        body.style.transition = '600ms';
    } else {
        icon.src = "https://images2.imgbox.com/19/f7/ODBoe2FT_o.png";
        body.style.transition = '600ms';
    }
}