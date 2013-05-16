/**
 * Pixelciego JavaScript Functions
 * http://www.pixelciego.com
 *
 * @author	Pixelciego <info@pixelciego.com>
 */
 
var PXC = {

	elements: {},
	animations: {},
	params: {
		isReady: false,
		isBusy: false
	},
	
	init: function(){
		
		$('body').addClass('ready'); // util para activar animaciones CSS3
		
		/* Twitter */
		/*$.ajax({ 
			type: 'get', 
			dataType: 'jsonp', 
			data: { 
				screen_name: 'leozakour', // Este debe ser el nombre de usuario en Twitter 
				count: 1 // 'n' debe ser un número entre 0 y 200 (200 es el máximo permitido por la API de Twitter 
			}, 
			url: 'http://api.twitter.com/1/statuses/user_timeline.json', 
			success: function(data, textStatus){
				 /* $('#tweet-here').fadeOut('normal', function(){
						$(this).html('<a href="http://twitter.com/'+data[0].user.screen_name+'/status/'+data[0].id_str+'" rel="nofollow" target="_blank">'+data[0].text+'</a>').fadeIn('slow');
				  }); */
					
				  /*for(i in data) { 
				  var screenName = '<b>@'data[i].user.screen_name + ':<b>'; 
				  var msj = data[i].text; 
				  $('#tweet-here').html(screenNam + msj); 
				}*/
			/*}, 
			error: function(req, status, error) { 
				/*console.log('Estado: ' + status);  // console.log Muestra mensajes a la consola firebug de Firefox 
				console.log('Error: ' + error); */
			/*} 
		}); */
		
		/* Open project auto */
		
		
		
		
		
	
		$('.collapsable').each(function(){
			var eHeight = $(this).outerHeight(true);
			var dHeight = $(document).height();
			var wHeight = window.innerHeight || $(window).height(); 
			
			// guardamos el tamano desplegado del section para volver a abrirlo
			$(this).data('fullHeight', eHeight);
			
			/* cerramos los sections siempre y cuando el resultado
			 	no sea menor al alto de la ventana, de esta forma evitamos
			 	que Safari iOS no agrande el sitio para completar el alto del viewport */
			 	
			//console.log(dHeight, eHeight, wHeight);
			if(dHeight - eHeight > wHeight){
				$(this)
					.css('height', $(this).children('header').outerHeight(true))
					.addClass('collapsed');
			}
		});
	
		$('.collapsable header').click(function(){
			var section = $(this).parent();
			if(section.hasClass('collapsed')){
				section.animate({
					'height': section.data('fullHeight')
				}, 'slow', 'easeInOutCubic')
					.removeClass('collapsed')
					.find('canvas').each(function(){
						$(this).data('animation').restart()
					});
					
				PXC.smoothScrollTo($(this));
			}else{
				section.animate({
						'height': $(this).outerHeight(true)
					}, 'normal', 'easeInOutCubic')
						.addClass('collapsed');
			}
		});
		
		
				
		PXC.smoothScroll();
		PXC.ready();
	},
	
	navigateTo: function(tgt){
		switch(tgt){
			case 'top':
				var tgt = $('#project').offset().top;
				break;
			case 'up':
				var tgt = $(document).scrollTop() - $(window).height();
				break;
			case 'down':
				var tgt = $(document).scrollTop() + $(window).height();
				break;
			case 'bottom':
				var tgt = $('#project').offset().top + $('#project').height() - $(window).height();
				break;
		}
		
		if(tgt){
			if($.browser.webkit){
				$('body:not(:animated)').animate({
					scrollTop: tgt
				});
			}else{
				$('html:not(:animated)').animate({
					scrollTop: tgt
				});
			}
		}
	},
	
	loadProject: function(index){
		
		string = '<div class="project-header"><div class="wrapper"><div class="project-metadata"><h2>'+xml.project[index].title+'</h2><p>'+xml.project[index].subtitle+'</p><p>'+xml.project[index].description.replace(/\n/g, '<br/>')+'</p></div>';
		
		if(typeof xml.project[index].links != 'undefined' && typeof xml.project[index].links.site != 'undefined')
			string += '<a class="project-link" href="'+xml.project[index].links.site+'" target="_blank"><img class="autohover-img" src="img/project-link.jpg" alt="Visit site" width="97" height="13"/></a>';
		
		if(typeof xml.project[index].intro != 'undefined')
			string += '<div class="project-intro">'+xml.project[index].intro.replace(/\n/gi, '<br/>')+'</div>';
			
		string += '</div></div></div><div class="wrapper">';
		
		if(typeof xml.project[index].image != 'undefined'){
			var width = 940;
			var height = 600;
			var rel = width / height;
			if(typeof xml.project[index].image == 'string'){
				
				/* fix para tomar el size de #project */
				/*if(typeof xml.project[index].image["@attributes"] != 'undefined' && xml.project[index].image['@attributes'].width)
					width = xml.project[index].image['@attributes'].width;
				if(typeof xml.project[index].image["@attributes"] != 'undefined' && xml.project[index].image['@attributes'].height)
					height = xml.project[index].image['@attributes'].height;*/
				/*var img = new Image();
				img.src = 'img/projects/'+xml.project[index].image;
				var iw = img.width;
				var ih = img.height;
				var irel = iw / ih;
				if(width <= iw){
				
					var scale = 1;
					
					if(rel != irel){
						if((width / iw) > (height / ih)){
							scale = width / iw;
							
						}else{
							scale = height / ih;
							
						}
					}
					iw = iw * scale;
					ih = ih * scale;	
				}	*/
				string += '<figure class="project-img"><img onload="PXC.scaleImage(this)"  src="img/projects/'+xml.project[index].image+'"/></figure>';
			}else{
				
				for(i=0;i<xml.project[index].image.length; i++){
					
					/* fix para tomar el size de #project */
					/*if(typeof xml.project[index].image[i]["@attributes"] != 'undefined' && xml.project[index].image[i]['@attributes'].width)
						width = xml.project[index].image[i]['@attributes'].width;
					if(typeof xml.project[index].image[i]["@attributes"] != 'undefined' && xml.project[index].image[i]['@attributes'].height)
						height = xml.project[index].image[i]['@attributes'].height;*/
					/*var img = new Image();
					img.src = 'img/projects/'+xml.project[index].image[i]['@attributes'].url;
					var iw = img.width;
					var ih = img.height;
					var irel = iw / ih;
					if(width <= iw){
					
						var scale = 1;
						
						if(rel != irel){
							if((width / iw) > (height / ih)){
								scale = width / iw;
								
							}else{
								scale = height / ih;
								
							}
						}
						iw = iw * scale;
						ih = ih * scale;	
					}*/	
					string += '<figure class="project-img"><img onload="PXC.scaleImage(this)" src="img/projects/'+xml.project[index].image[i]['@attributes'].url+'"/></figure>';
				}
			}
		}
		
		string +='</div>';
		$('#project-inner').html(string);
		//reajustamos al ancho las imagenes
		/*$('#project-inner').find('.wrapper figure img').each(function(){
				var img = $(this);
				var w = 940;
				var h = 600;
				var rel = w / h;
				var iw = img.width();
				var ih = img.height();
				var irel = iw / ih;
				
				if(w <= iw){
					
					var scale = 1;
					
					if(rel != irel){
						if((w / iw) > (h / ih)){
							scale = w / iw;
							
						}else{
							scale = h / ih;
							
						}
					}
					iw = iw * scale;
					ih = ih * scale;	
					img.width(iw).height(ih);
				}
				
				
		});*/
		
		if(typeof xml.project[index].links != 'undefined')
			$('#project-be').attr('href', xml.project[index].links.behance);
			
		var projectUri = encodeURIComponent('http://leozakour.com/'+index+'-'+xml.project[index].title.replace(/\s/g,'_'));
		$('#project-tw').attr(
			'href', 'https://twitter.com/share?url='+projectUri+'&via=leozakour&text='+encodeURIComponent(xml.project[index].title+' > '+xml.project[index].description.replace(/\n/g,' ').replace(/\r/g,' ').replace(/\t/g,''))
		);
		
		$('#project-fb').attr(
			'href', 'http://www.facebook.com/sharer/sharer.php?u='+projectUri
		);
		
		
		/*$('#shares').html('<img src="img/comment.jpg" alt="Comment:" width="85" height="22"/><a class="popup" href="'+xml.project[index].links.behance+'" ><span><img src="img/share-be-popup.png" alt="GOTO BE.NET" width="89" height="18"/></span><img src="img/share-be.jpg" class="autohover-img" alt="Behance" width="30" height="22"/></a><img src="img/share.jpg" alt="Share:" width="64" height="22"/><a class="popup"><span><img src="img/share-tw-popup.png" alt="TWEET THIS" width="78" height="18"/></span><img class="autohover-img" src="img/share-tw.jpg" alt="Tweet" width="23" height="22"/></a> <a class="popup"><span><img src="img/share-fb-popup.png" alt="LIKE" width="36" height="18"/></span><img class="autohover-img" src="img/share-fb.jpg" alt="Facebook" width="23" height="22"/></a>');*/
		
		PXC.navigator();
	},
	scaleImage: function(elem){
		
		var iw = elem.width;
		var ih = elem.height;
		var irel = iw / ih;
		var w = 940;
		var h = 600;
		var rel = w / h;
		if(w <= iw){
			
			var scale = 1;
			
			if(rel != irel){
				if((w / iw) > (h / ih)){
					scale = w / iw;
					
				}else{
					scale = h / ih;
					
				}
			}
			iw = iw * scale;
			ih = ih * scale;	
			elem.width = iw;
			elem.height = ih;
			
		}
		console.log(elem,elem.width,elem.height,$('#project').outerHeight());
		$('#project-holder').stop(true).animate({
				height: $('#project').outerHeight()
			}, 'slow');
		
		//PXC.smoothScrollTo('#project-holder');
	},
	ready: function(){
		$(document).trigger('pxcReady');
		PXC.isReady = true;
	},
	
	smoothScroll: function(){
		if(window.location.hash != '' && window.location.hash != '#'){
			$('html:not(:animated),body:not(:animated)').animate({
				scrollTop: $(window.location.hash).offset().top
			});
		}
		
		$('.scroll').click(function(evt){
			evt.preventDefault();
			
			$('html:not(:animated),body:not(:animated)').animate({
				scrollTop: $($(this).attr('href')).offset().top
			});
		});
	},
	
	smoothScrollTo: function(selector, updateUri, onComplete){
		
		// [!] OJO FIX FEO
		/*$('html:not(:animated),body:not(:animated)').animate({
			scrollTop: $(selector).offset().top
		}, onComplete);*/
		
		if($.browser.webkit){
			$('body:not(:animated)').animate({
				scrollTop: $(selector).offset().top
			}, onComplete);
		}else{
			$('html:not(:animated)').animate({
				scrollTop: $(selector).offset().top
			}, onComplete);
		}
		
		if(updateUri)
			window.location.hash = $(selector).attr('id');
	}
};
 
$(document).ready(function(){
	PXC.init();
});
