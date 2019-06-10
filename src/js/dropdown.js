document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-dropdown');

	const init = function() {
    	
    	const action = function(e) {
    	    
    	    const _this = e.currentTarget.parentNode;
    	    
    	    if (_this.classList.contains('is-open')) {
        	    _this.classList.remove('is-open');
        	    
    	    } else {
    	        for (let j = 0; j < el.length; j ++) {
                	el[j].parentNode.classList.remove('is-open');
            	}

    	        _this.classList.add('is-open');
    	    }
    	
    	    e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
    	};
    	
    	for (let i = 0; i < el.length; i ++) {
        	el[i].addEventListener('click', action);
    	}
	};
	

    el.length > 0 ? init() : false;

    
}, false);
