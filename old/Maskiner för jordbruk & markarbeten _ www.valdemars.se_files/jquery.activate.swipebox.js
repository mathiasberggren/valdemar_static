$(window).load(function() 
{
	$('.myGalleries').each(function (i, el) 
	{
		$(el).justifiedGallery(
		{
			rowHeight:									100,
			maxRowHeight:								80,
			sizeRangeSuffixes:					{'lt100':'-s',
																	'lt240':'-s',
																	'lt320':'-s',
																	'lt500':'-s',
																	'lt640':'-s',
																	'lt1024':'-s'},
			captions:										true,
			lastRow:										'justify', // hide justify nojustify
			margins:										10,
			randomize:									false,
			extension:									/.[^.]+$/,
			refreshTime:								250,
			rel:												'myGalleries-' + i,
			target:											'',
			cssAnimation:								true,
			waitThumbnailsLoad:					true,
			captionsAnimationDuration:	1500,
			imagesAnimationDuration:		300,
			captionsVisibleOpacity:			0.7
		}).on('jg.complete', function () 
		{
			if (i == 0) {
				 $('.myGalleries a').swipebox({
								useCSS : true, // false will force the use of jQuery for animations
								useSVG : true, // false to force the use of png for buttons
								initialIndexOnArray : 0, // which image index to init when a array is passed
								hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
								hideBarsDelay : 60000, // delay before hiding bars on desktop
								videoMaxWidth : 1140, // videos max width
								afterOpen: null, // called after opening
								loopAtEnd: false // true will return to the first image after the last image is reached
							});
		}
		});
	});
});

 $(function(){
      $(document.body)
          .on('click touchend','#swipebox-slider .current img', function(e){
              return false;
          })
          .on('click touchend','#swipebox-slider .current', function(e){
              $('#swipebox-close').trigger('click');
          });
    });