
$(function(){

  /////////////////
  //   EVENTS    //
  /////////////////

  $('.gallery__item--readmore').on('click', function(e) {
    e.preventDefault();
    $('.gallery__item.hidden').show();
    $(this).hide();
  });

  $('.tips__item').on('click', function(e) {
    e.preventDefault();
    $('.tips__item.active').removeClass('active');
    $(this).addClass('active');
  });

  $('.contacts__item a').on('click', function(e) {
    e.preventDefault();
    $('.contacts__item.active').removeClass('active');
    $(this).parent().addClass('active');
  });

   /////////////////
   //    SCROLL   //
   /////////////////

  if (BrowserDetect.browser == 'Opera' && BrowserDetect.version <= 12) {
    $('a[data-scroll]').click(function(e){
       scrollFrom = $(window).scrollTop();
       var target = $(this).attr('href');
       $(window.opera?'html':'html, body').animate({
           scrollTop: $(target).offset().top-0
       }, 1000);
    });
  } else {
    smoothScroll.init({
       speed: 500, // scroll speed (ms)
       easing: 'easeInOutCubic', // easing
       updateURL: true // url hash update
    });
  }

});

// 	////////////////////////
// 	//  PLACEHOLDERS FIX  //
// 	////////////////////////

// 	if ($.fn.placeholder.input && $.fn.placeholder.textarea) {
// 	} else if ($.fn.placeholder.input) {
// 		$('textarea').placeholder();
// 	} else {
// 		$('input, textarea').placeholder();
// 	}

// 	/////////////
// 	//   MAP   //
// 	/////////////

// 	ymaps.ready(function () {
// 	    var myMap = new ymaps.Map('map', {
// 	        center: [43.166807, 131.908544],
// 	        zoom: 17,
// 	        offset: [100, 100],
// 	        controls: []
// 	    });

// 	    var myPlacemark = new ymaps.Placemark([43.166807, 131.908544], {
// 	        balloonContentBody: [
// 	            '<address>',
// 	            '<strong>Автомобили с аукционов Японии, Кореи и США</strong>',
// 	            '<br/>',
// 	            'Адрес: г. Владивосток, ул.Русская 9Б, офис 608',
// 	            '<br/>',
// 	            'Тел.: 8(423)200-48-47',
// 	            '</address>'
// 	        ].join('')
// 	    }, {
// 	        preset: 'islands#dotIcon',
// 	        iconColor: '#126FA6'

// 	    });

// 	    myMap.geoObjects.add(myPlacemark);
// 	    myMap.behaviors.disable('scrollZoom');
// 	});

/////////////////////////
//  BROWSER DETECTION  //
/////////////////////////

var BrowserDetect =
{
    init: function ()
    {
        this.browser = this.searchString(this.dataBrowser) || "Other";
        this.version = this.searchVersion(navigator.userAgent) ||       this.searchVersion(navigator.appVersion) || "Unknown";
    },

    searchString: function (data)
    {
        for (var i=0 ; i < data.length ; i++)
        {
            var dataString = data[i].string;
            this.versionSearchString = data[i].subString;

            if (dataString.indexOf(data[i].subString) != -1)
            {
                return data[i].identity;
            }
        }
    },

    searchVersion: function (dataString)
    {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },

    dataBrowser:
    [
        { string: navigator.userAgent, subString: "Chrome",  identity: "Chrome" },
        { string: navigator.userAgent, subString: "MSIE",    identity: "Explorer" },
        { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" },
        { string: navigator.userAgent, subString: "Safari",  identity: "Safari" },
        { string: navigator.userAgent, subString: "Opera",   identity: "Opera" }
    ]

};

BrowserDetect.init();
