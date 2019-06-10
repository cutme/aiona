import ScrollToPlugin from 'gsap/ScrollToPlugin';
const bodyScrollLock = require('body-scroll-lock');
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

document.addEventListener('DOMContentLoaded',function() {

    const gotop = document.getElementsByClassName('js-gotop'),
          gotop_btn = document.getElementsByClassName('c-gotop')[0],
          nav = document.getElementsByClassName('js-nav')[0],
          hamburger = document.getElementsByClassName('js-hamburger')[0];

   
    const init = function() {
    
        // Monitor position
        
        let scroll_pos = window.pageYOffset || window.scrollY,
            status = false;
    
        const showElement = function() {
            scroll_pos = window.pageYOffset || window.scrollY;
            
            if (scroll_pos > 200) {
                if (status === false) {
                      gotop_btn.classList.add('is-visible');
                    status = true;
                }
            } else {
                if (status === true) {
                
                    gotop_btn.classList.remove('is-visible');
                    status = false;
                }
            }
        }
        
       window.addEventListener('scroll', showElement);


       // Fire action

       const scrollUp = function(e) {
        
            if (nav.classList.contains('is-visible')) {
                enableBodyScroll(nav);
                nav.classList.remove('is-visible');
                hamburger.classList.remove('is-active');
            }
            
            cutme.Helpers.scrollTo(0, 1, 0);
            e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
       }

       for (let i = 0; i < gotop.length; i ++) {
           gotop[i].addEventListener('click', scrollUp);
       }

	};



    gotop.length > 0 ? init() : false;
    
    
}, false);
