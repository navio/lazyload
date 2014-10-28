function LazyLoad(cssClass,tagParam){
		function init(){
			var ver;
			var stat = true; //user control of the loop.
			var lazyImages = [];
			/*
			*Receive an array of DOM elements and updates the SRC from Assigned parameter
			*
			*@method load
			*@param {Array} Images Elements
			*/
			var load =
			function(images){
				if (ver) { return; }
				if (!images) { images = lazyImages }
				ver = true;
				while(images.length > 0 && stat === true){
					var el = images.shift();
					loadImage(el);
				}
				ver = null;
			};

			var stop =
			function(){
				stat = false;
			};

			/*
			*Receive an array of DOM elements and if any is render on ViewPort it updates the SRC.
			*
			*@method loadviewport
			*@param {Array} Images Elements;
			*@param {Boolean} Store on component.
			*@return {Array} Images found not lazyloaded.
			*/
			var loadViewport =
			function(images,lazyReturn){
				if (loopStatus()){ stop(); }
				
				if (images === undefined) { images = lazyImages; } // if no images pass use stack.
				var lazybucket []; 
				
				images.forEach(function(image){
					if(isOnViewport(image)){
							loadImage(image);
						}else{
							lazybucket.push(image);
						}
				});
				
				if (lazyReturn === true){ lazyImages.concat(lazybucket).unique(); }
				
				return lazybucket;
			};

			/*
			*Retrieves element location on the document return true if is render in the view port.
			*
			*@method isOnViewport
			*@param {Object} DOM element
			*@return {Boolean} If the element is visible in the viewPort
			*/
			var isOnViewport =
			function(el) {
					var rect = el.getBoundingClientRect();
					return (
						rect.top >= 0 &&
						rect.left >= 0 &&
						rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
						rect.right <= (window.innerWidth || document.documentElement.clientWidth)
						);
			};

			/*
			*Updates image object, changing the parameter on SRC for the one on @tagParam
			*
			*@method loadImage
			*/
			var loadImage =
			function(el){
				el.setAttribute("src",el.getAttribute(tagParam));
				//el.className = el.className.replace('/\b'+cssClass+'\b/','');
				
				if (el.classList)
					el.classList.remove(cssClass);
				else
  				el.className = 
					el.className.replace(new RegExp('(^|\\b)' + cssClass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			};
			/*
			*
			*@private
			*@methodloopStatus
			*@return Retunr status of load method.
			*/
			function loopStatus(){
				return ( !ver && stat );
			}

			return {
					load:load,
					stop:stop,
					loadViewport:loadViewport,
					loadImage:loadImage,
					isOnViewport: isOnViewport
					};
		}
		var instance;
		if(!instance){ instance = init(); }
		return instance;
}

Array.prototype.unique = function() {
	var a = this.concat();
	for(var i=0; i<a.length; ++i) {
		for(var j=i+1; j<a.length; ++j) {
			if(a[i] === a[j])
				a.splice(j--, 1);
		}
	}
	return a;
}
