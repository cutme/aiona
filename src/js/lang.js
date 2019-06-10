document.addEventListener('DOMContentLoaded',function() {

    const lang = document.getElementsByClassName('js-lang')[0];

    const init = function() {
    
        const action = function() {
            
            if (lang.classList.contains('is-open')) {
                lang.classList.remove('is-open');
            } else {
                lang.classList.add('is-open');
            }
            
        };

        lang.addEventListener('click', action);
    };


    lang ? init() : false;

}, false);