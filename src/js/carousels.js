import Glide from '@glidejs/glide';
import css from '../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss';

document.addEventListener('DOMContentLoaded',function() {

    const home = document.getElementById('homeCarousel'),
          gallery = document.getElementById('gallery');

    const homeCarousel = function() {

        const glide = new Glide(home, {
            type: 'carousel',
            animationDuration: 600,
            autoplay: 4000,
            hoverpause: true,
            gap: 0
        });
        
        setTimeout(function() {
            glide.mount();
        }, 1000)
    };
    
    
    const galleryCarousel = function() {
        
        const items = gallery.getElementsByClassName('js-items')[0],
              img = gallery.getElementsByClassName('js-image'),
              item = gallery.getElementsByClassName('js-item');
        
        const glide = new Glide(gallery, {
            type: 'carousel',
            animationDuration: 600,
            autoplay: false,
            gap: 0
        });

        
        const removeClick = function(e) {
            e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
        };
        
        let status = false;

        const check = function() {
            
            let ww = window.innerWidth;
            
            if (ww <= 500) {
                if (status === false) {
                    
                    for (let i = 0; i < img.length; i ++) {
                        img[i].classList.add('glide__slide');
                    }
                    
                    for (let j = 0; j < item.length; j ++) {
                        item[j].classList.remove('js-image');
                        
                        item[j].addEventListener('click', removeClick);
                    }
                    
                    items.classList.add('glide__slides');
                    status = true;
                    
                    setTimeout(function() {
                        glide.mount();
                    }, 1000)
                }

            } else {
                if (status === true) {                    
                    
                    for (let j = 0; j < item.length; j ++) {
                        item[j].classList.add('js-image');
                        item[j].removeEventListener('click', removeClick);
                    }
                    
                    for (let i = 0; i < img.length; i ++) {
                        img[i].classList.remove('glide__slide');
                    }

                    items.classList.remove('glide__slides');
                    status = false;
                    
                    setTimeout(function() {
                        console.log('destroy');
                        glide.destroy();
                    }, 1000)
                }
            }
        }

        check();

        window.addEventListener('resize', check);
    };

    gallery ? galleryCarousel() : false;
    home ? homeCarousel() : false;

}, false);