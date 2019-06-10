(function() {
    let scroll_pos = window.pageYOffset || window.scrollY,
        status = false;
    
    const el = document.getElementsByClassName('js-top')[0];
    
    const action = function() {
        
        scroll_pos = window.pageYOffset || window.scrollY;
        
        if (scroll_pos > 80) {
            if (status === false) {
                
//                el.classList.add('is-narrow');
                document.body.classList.add('is-scrolled');
                status = true;
            }
        } else {
            if (status === true) {
            
//                el.classList.remove('is-narrow');
                document.body.classList.remove('is-scrolled');
                status = false;
            }
        }
    }
    
    el ? window.addEventListener('scroll', action) : false;
    
    
})();