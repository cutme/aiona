document.addEventListener('DOMContentLoaded',function() {

    const cover = document.getElementById('cover');
    
    window.onload = function() {
        document.body.removeAttribute('style');
        document.body.classList.add('is-loaded');
        
        cover.addEventListener("transitionend", function() {
            cover.remove();
            window.animsInit();
        }, false);
    };

}, false);