function lazyImplementation (){
		var lazyImages = []; //Global Arrays.
		var ll = lazyload('lazyImage','data-src');
		
		lazyImages = ll.loadViewport(document.querySelectorAll('.lazyImage'));
					 ll.load(lazyImages);
}