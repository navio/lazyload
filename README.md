Lazy Load 
=========

lazyLoad.js allow users to implement late loading of images in the website.

  - Pass a selection of the images that need to be loaded later.
  - Pass the parameter that will load the image url
  - Assign times of where or when to run.

The library is very light and has minimal requirements to execute, as it adapts to the enviroment. It can be initialized with jQuery or only JS.

> The requirements for this library were:
> * No library dependent.
> * Lightway.
> * Fast.
> * Configurable for different Scenarios.



Version
----

1.0

Tech
-----------

Dillinger uses a number of open source projects to work properly:

* [Alberto NAvarro] - Web Developer


Usage
--------------
```html
<img src="blanc.png" class="lazy_images_class" lazy-image-src="http://domain.com/hQ.png" />
<img src="blanc.png" class="lazy_images_class" lazy-image-src="http://domain.com/sQ.png" />


```


```javascript
    var ll = lazyload('.lazy_images_class','lazy-image-src')
    // load images async
    $(document).ready(function(){
        ll.loadViewport($('lazy_images_class'));
    });

```

### Configure 

* Set all class to all lazy loading images [ .lazy_images_class ]
* Set parameter with the image to load [ lazy-image-src ]
* Call loadViewport to load all images that can be found in the viewport.


License
----

MIT

**Free Software, Hell Yeah!**
