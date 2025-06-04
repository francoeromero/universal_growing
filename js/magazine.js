/*
 * Magazine sample
*/

// function applyResponsiveRotation() {
//     if (window.innerWidth <= 600) {
//         document.body.style.transform = 'rotate(-90deg)';
//         document.body.style.transformOrigin = 'center';
//         document.body.style.width = '100vh';
//         document.body.style.height = '100vw';
//         document.body.style.overflow = 'hidden';
//     } else {
//         // Restablecer estilos para pantallas más grandes
//         document.body.style.transform = '';
//         document.body.style.width = '';
//         document.body.style.height = '';
//         document.body.style.overflow = '';
//     }
// }

// // Aplicar al cargar y al cambiar el tamaño de la pantalla
// applyResponsiveRotation();
// window.addEventListener('resize', applyResponsiveRotation);

function cargarGif_flexible(ruta,ancho,largo,ubicacion_x, ubicacion_y, posicion){
	let pos = '';
	if (posicion == false){
		pos = 'cover';
	}else if (posicion == true){
		pos = 'contain';
	}	
	
	let cargarGif = $('<div></div>').css({
		// Definir el ancho del cuadrado en 100 píxeles
		width: ancho,
		// Definir la altura del cuadrado en 100 píxeles
		height: largo,
		// Asignar el fondo rojo al cuadrado
		background: `url(${ruta}) no-repeat center center`,
		backgroundSize: 'cover',
		zIndex: '999',
		// Posicionar el cuadrado de forma absoluta dentro del contenedor
		position: pos,
		// Colocar el cuadrado en la parte superior del contenedor
		top: ubicacion_x,
		// border: '3px solid white',
		// Colocar el cuadrado en la esquina izquierda del contenedor
		left: ubicacion_y,
		// Asegurar que el cuadrado se superponga a otros elementos mediante un z-index alto
		transform: 'translate(-50%,-50%)',
		zIndex: '1000'
	});
	return cargarGif
}


function cargarVideo_flexible(ruta, ancho, largo, posicionX, posicionY, backgroundSize) {
    let cargarVideo = $('<div></div>').css({
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: posicionY,
        left: posicionX,
        transform: 'translate(-50%, -50%)',
        zIndex: '1000',
        overflow: 'hidden'
    });

    let video = $('<video autoplay loop muted playsinline></video>').css({
        width: '100%',
        height: '100%',
        objectFit: backgroundSize
    }).append(`<source src="${ruta}" type="video/mp4">`);

    // Reproducir nuevamente cuando termine
    video.on('ended', function() {
        video[0].play();
    });

    // Agregar el video al contenedor
    cargarVideo.append(video);

    return cargarVideo;
}
function cargarWebp_1(ruta){
	let cargarGif = $('<div></div>').css({
		// Definir el ancho del cuadrado en 100 píxeles
		width: '70%',
		// Definir la altura del cuadrado en 100 píxeles
		height: '55%',
		// Asignar el fondo rojo al cuadrado
		background: `url(${ruta}) no-repeat center center`,
		backgroundSize: 'cover',
		zIndex: '999',
		// Posicionar el cuadrado de forma absoluta dentro del contenedor
		position: 'absolute',
		// Colocar el cuadrado en la parte superior del contenedor
		top: '70%',
		// border: '3px solid white',
		// Colocar el cuadrado en la esquina izquierda del contenedor
		left: '55%',
		// Asegurar que el cuadrado se superponga a otros elementos mediante un z-index alto
		transform: 'translate(-50%,-50%)',
		zIndex: '1000'
	});
	return cargarGif
}
function cargarWebp_2(ruta){
	let cargarGif = $('<div></div>').css({
		// Definir el ancho del cuadrado en 100 píxeles
		width: '80%',
		// Definir la altura del cuadrado en 100 píxeles
		height: '65%',
		// Asignar el fondo rojo al cuadrado
		background: `url(${ruta}) no-repeat center center`,
		backgroundSize: 'cover',
		zIndex: '999',
		// Posicionar el cuadrado de forma absoluta dentro del contenedor
		position: 'absolute',
		// Colocar el cuadrado en la parte superior del contenedor
		top: '62%',
		// border: '3px solid white',
		// Colocar el cuadrado en la esquina izquierda del contenedor
		left: '53%',
		// Asegurar que el cuadrado se superponga a otros elementos mediante un z-index alto
		transform: 'translate(-50%,-50%)',
		zIndex: '1000'
	});
	return cargarGif
}
function cargarGif_2(rutaUno,rutaDos){
	let contenedor = $('<div></div>').css({
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: '0',
		left: '0',
		zIndex: '1000'
	});

	let gifSuperior = $('<div></div>').css({
		width: '100%',
		height: '50%',
		background: `url(${rutaUno}) no-repeat center center`,
		backgroundSize: 'cover',
	});

	let gifInferior = $('<div></div>').css({
		width: '100%',
		height: '50%',
		background: `url(${rutaDos}) no-repeat center center`,
		backgroundSize: 'cover',
	});

	contenedor.append(gifSuperior);
	contenedor.append(gifInferior);
	return contenedor;
}

function cargarGif_3(rutaUno, rutaDos, rutaTres) {
	let contenedor = $('<div></div>').css({
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: '0',
		left: '0',
		zIndex: '1000'
	});

	let gifSuperior = $('<div></div>').css({
		width: '100%',
		height: '33.33%',
		background: `url(${rutaUno}) no-repeat center center`,
		backgroundSize: 'cover',
	});

	let gifMedio = $('<div></div>').css({
		width: '100%',
		height: '33.33%',
		background: `url(${rutaDos}) no-repeat center center`,
		backgroundSize: 'cover',
	});

	let gifInferior = $('<div></div>').css({
		width: '100%',
		height: '33.33%',
		background: `url(${rutaTres}) no-repeat center center`,
		backgroundSize: 'cover',
	});

	contenedor.append(gifSuperior);
	contenedor.append(gifMedio);
	contenedor.append(gifInferior);

	return contenedor;
}

function cargarGif_4(rutaUno, rutaDos, rutaTres, rutaCuatro) {
	let contenedor = $('<div></div>').css({
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: '0',
		left: '0',
		zIndex: '1000'
	});

	let gifSuperior = $('<div></div>').css({
		width: '100%',
		height: '25%',
		background: `url(${rutaUno}) no-repeat center center`,
		backgroundSize: 'cover',
	});

	let gifMedioUno = $('<div></div>').css({
		width: '100%',
		height: '25%',
		background: `url(${rutaDos}) no-repeat center center`,
		backgroundSize: 'cover',
	});
	let gifMedioDos = $('<div></div>').css({
		width: '100%',
		height: '25%',
		background: `url(${rutaTres}) no-repeat center center`,
		backgroundSize: 'cover',
	});

	let gifInferior = $('<div></div>').css({
		width: '100%',
		height: '25%',
		background: `url(${rutaCuatro}) no-repeat center center`,
		backgroundSize: 'cover',
	});

	contenedor.append(gifSuperior);
	contenedor.append(gifMedioUno);
	contenedor.append(gifMedioDos);
	contenedor.append(gifInferior);

	return contenedor;
}

function cargarGif_trama1(rutaUno, rutaDos, rutaTres, rutaCuatro,rutaCinco) {
	let contenedor = $('<div></div>').css({
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: '0',
		left: '0',
		display: 'flex',
		flexDirection: 'column',
		// gap: '2px' 
	});

	// Fila 1 - Dos GIFs (50% - 50%)
	let fila1 = $('<div></div>').css({
		width: '100%',
		height: '33.33%',
		display: 'flex'
	});
	let gifSuperiorIzq = $('<div></div>').css({
		width: '50%',
		height: '100%',
		background: `url(${rutaUno}) no-repeat center center`,
		backgroundSize: 'cover'
	});
	let gifSuperiorDer = $('<div></div>').css({
		width: '50%',
		height: '100%',
		background: `url(${rutaDos}) no-repeat center center`,
		backgroundSize: 'cover'
	});

	// Fila 2 - Dos GIFs (50% - 50%)
	let fila2 = $('<div></div>').css({
		width: '100%',
		height: '33.33%',
		display: 'flex'
	});
	let gifMedioIzq = $('<div></div>').css({
		width: '50%',
		height: '100%',
		background: `url(${rutaTres}) no-repeat center center`,
		backgroundSize: 'cover'
	});
	let gifMedioDer = $('<div></div>').css({
		width: '50%',
		height: '100%',
		background: `url(${rutaCuatro}) no-repeat center center`,
		backgroundSize: 'cover'
	});

	// Fila 3 - Un solo GIF (100%)
	let fila3 = $('<div></div>').css({
		width: '100%',
		height: '33.33%',
		background: `url(${rutaCinco}) no-repeat center center`,
		backgroundSize: 'cover'
	});

	// Agregar elementos al contenedor
	fila1.append(gifSuperiorIzq, gifSuperiorDer);
	fila2.append(gifMedioIzq, gifMedioDer);
	contenedor.append(fila1, fila2, fila3);

	return contenedor;
}
function cargarGif_trama3(rutaUno, rutaDos, rutaTres, rutaCuatro) {
	let contenedor = $('<div></div>').css({
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: '0',
		left: '0',
		display: 'flex',
		flexDirection: 'column',
		// gap: '2px' 
	});

	// Fila 1 - Dos GIFs (50% - 50%)
	let fila1 = $('<div></div>').css({
		width: '100%',
		height: '33.33%',
		background: `url(${rutaUno}) no-repeat center center`,
		backgroundSize: 'cover'
	});


	// Fila 2 - Dos GIFs (50% - 50%)
	let fila2 = $('<div></div>').css({
		width: '100%',
		height: '33.33%',
		display: 'flex'
	});
	let gifMedioIzq = $('<div></div>').css({
		width: '50%',
		height: '100%',
		background: `url(${rutaDos}) no-repeat center center`,
		backgroundSize: 'cover'
	});
	let gifMedioDer = $('<div></div>').css({
		width: '50%',
		height: '100%',
		background: `url(${rutaTres}) no-repeat center center`,
		backgroundSize: 'cover'
	});

	// Fila 3 - Un solo GIF (100%)
	let fila3 = $('<div></div>').css({
		width: '100%',
		height: '33.33%',
		background: `url(${rutaCuatro}) no-repeat center center`,
		backgroundSize: 'cover'
	});

	// Agregar elementos al contenedor
	fila2.append(gifMedioIzq, gifMedioDer);
	contenedor.append(fila1, fila2, fila3);

	return contenedor;
}


function cargarGif_trama2(rutaUno, rutaDos, rutaTres, rutaCuatro) {
    let contenedor = $('<div></div>').css({
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        gridTemplateRows: '33.33% 33.33% 33.33%',
        // gap: '2px' 
    });

    let gifSuperiorIzq = $('<div></div>').css({
        background: `url(${rutaUno}) no-repeat center center`,
        backgroundSize: 'cover'
    });

    let gifMedioIzq = $('<div></div>').css({
        background: `url(${rutaDos}) no-repeat center center`,
        backgroundSize: 'cover'
    });

    let gifDerecha = $('<div></div>').css({
        background: `url(${rutaTres}) no-repeat center center`,
        backgroundSize: 'cover',
        gridRow: '1 / 3' // Hace que este div ocupe dos filas
    });

    let gifInferior = $('<div></div>').css({
        background: `url(${rutaCuatro}) no-repeat center center`,
        backgroundSize: 'cover',
        gridColumn: '1 / 3' // Hace que este div ocupe ambas columnas
    });

    // Agregar elementos al contenedor
    contenedor.append(gifSuperiorIzq);
    contenedor.append(gifMedioIzq);
    contenedor.append(gifDerecha);
    contenedor.append(gifInferior);

    return contenedor;
}

let flag_responsivo = true;
function checkResponsive(){
	if(window.matchMedia('(max-width: 1400px)').matches){
		flag_responsivo = false;
	}
	else{
		flag_responsivo = true;
	}
	console.log('flag',flag_responsivo);
}
checkResponsive();


function addPage(page, book) {
	var id, pages = book.turn('pages');

	// Create a new element for this page
	var element = $('<div />', {});
	let flag = true;
	const nextButton = document.querySelector('.next-button');
	const previousButton = document.querySelector('.previous-button');

	// Add the page to the flipbook
	if (book.turn('addPage', element, page)) {
		let webp = null;
		let webpAnterior = null;
		lista_gifs = [
			'./gifs/0_opt.gif',
			'./gifs/0_opt.gif'
		]
		lista_webp = [
			'./webp/pc/0_a.webp',
			'./webp/pc/1_b.webp',
			'./webp/pc/3_c.webp',
			'./webp/pc/x_d.webp',
			'./webp/pc/6_e.webp',
			'./webp/pc/5_f.webp',
			'./webp/pc/2_g.webp',
		];
		lista_webp_movil = [
			'./webp/pc/0_a.webp',
			'./webp/pc/1_b.webp',
			'./webp/pc/3_c.webp',
			'./webp/pc/x_d.webp',
			'./webp/pc/6_e.webp',
			'./webp/pc/5_f.webp',
			'./webp/pc/2_g.webp',
		];

		// Eliminar WebP existentes antes de agregar nuevos
        // $('.webp-element').remove();

		// Add the initial HTML
		// It will contain a loader indicator and a gradient
		element.html('<div class="gradient"></div><div class="loader"></div>');
		// //////////////////////////////////////////////////////////////////////////////////


		// //////////////////////////////////////////////////////////////////////////////////
		// Crear un elemento <div> que actuará
		if(page == 29){
			if(flag_responsivo == false){
				webp = cargarWebp_1(lista_gifs[0]);
				element.append(webp);
			}
			else if(flag_responsivo == true){
				webp = cargarWebp_1(lista_gifs[0]);
				element.append(webp);
			}
		}
		else if(page == 31){
			if(flag_responsivo == false){
				webp = cargarWebp_1(lista_webp_movil[1]);
				element.append(webp); 
			}
			else if(flag_responsivo == true){
				webp = cargarWebp_1(lista_webp[1]);
				element.append(webp); 
			}
		}

		else if(page == 33){
			// 3 AMBIENTES
			if(flag_responsivo == false){
				webp = cargarWebp_2(lista_webp_movil[2]);
				element.append(webp); 
			}
			else if(flag_responsivo == true){
				webp = cargarWebp_2(lista_webp[2]);
				element.append(webp); 
			}
		}
		else if(page == 35){
			if(flag_responsivo == false){
				webp = cargarWebp_2(lista_webp_movil[3]);
				element.append(webp); 
			}
			else if(flag_responsivo == true){
				webp = cargarWebp_2(lista_webp[3]);
				element.append(webp); 
			}
		}
		else if(page == 37){
			if(flag_responsivo == false){
				webp = cargarWebp_2(lista_webp_movil[4]);
				element.append(webp); 
			}
			else if(flag_responsivo == true){
				webp = cargarWebp_2(lista_webp[4]);
				element.append(webp); 
			}
		}
		else if(page == 39){
			if(flag_responsivo == false){
				webp = cargarWebp_2(lista_webp_movil[5]);
				element.append(webp); 
			}
			else if(flag_responsivo == true){
				webp = cargarWebp_2(lista_webp[5]);
				element.append(webp); 
			}
		}
		else if(page == 41){
			if(flag_responsivo == false){
				webp = cargarWebp_2(lista_webp_movil[6]);
				element.append(webp); 
			}
			else if(flag_responsivo == true){
				webp = cargarWebp_2(lista_webp[6]);
				element.append(webp); 
			}
		}

		

		//////////////////////////////////////////////////////////////////////// 
		// Load the page
		loadPage(page, element);
	}
	// ////////////////////////////////////////////////////////////////////////////////////////////////////
	// ////////////////////////////////////////////////////////////////////////////////////////////////////
	// ////////////////////////////////////////////////////////////////////////////////////////////////////
	// Agregar un evento 'turned' al libro
	// $('.magazine').bind('turned', function(event, page, view) {
	// 	if(page == 29 && flag == true){
			
	// 		console.log('test');
	// 		flag = false;
	// 	}
	// });
	// ////////////////////////////////////////////////////////////////////////////////////////////////////
	// ////////////////////////////////////////////////////////////////////////////////////////////////////
	// ////////////////////////////////////////////////////////////////////////////////////////////////////

}


function loadPage(page, pageElement) {

	// Create an image element

	var img = $('<img />');

	img.mousedown(function(e) {
		e.preventDefault();
	});

	img.load(function() {
		
		// Set the size
		$(this).css({width: '100%', height: '100%'});

		// Add the image to the page after loaded

		$(this).appendTo(pageElement);

		// Remove the loader indicator
		
		pageElement.find('.loader').remove();
	});

	// Load the page

	img.attr('src', 'pages/' +  page + '.jpg');

	loadRegions(page, pageElement);

}

// Zoom in / Zoom out

function zoomTo(event) {

		setTimeout(function() {
			if ($('.magazine-viewport').data().regionClicked) {
				$('.magazine-viewport').data().regionClicked = false;
			} else {
				if ($('.magazine-viewport').zoom('value')==1) {
					$('.magazine-viewport').zoom('zoomIn', event);
				} else {
					$('.magazine-viewport').zoom('zoomOut');
				}
			}
		}, 1);

}



// Load regions

function loadRegions(page, element) {

	$.getJSON('../pages/'+page+'-regions.json').
		done(function(data) {

			$.each(data, function(key, region) {
				addRegion(region, element);
			});
		});
}

// Add region

function addRegion(region, pageElement) {
	
	var reg = $('<div />', {'class': 'region  ' + region['class']}),
		options = $('.magazine').turn('options'),
		pageWidth = options.width/2,
		pageHeight = options.height;

	reg.css({
		top: Math.round(region.y/pageHeight*100)+'%',
		left: Math.round(region.x/pageWidth*100)+'%',
		width: Math.round(region.width/pageWidth*100)+'%',
		height: Math.round(region.height/pageHeight*100)+'%'
	}).attr('region-data', $.param(region.data||''));


	reg.appendTo(pageElement);
}

// Process click on a region

function regionClick(event) {

	var region = $(event.target);

	if (region.hasClass('region')) {

		$('.magazine-viewport').data().regionClicked = true;
		
		setTimeout(function() {
			$('.magazine-viewport').data().regionClicked = false;
		}, 100);
		
		var regionType = $.trim(region.attr('class').replace('region', ''));

		return processRegion(region, regionType);

	}

}

// Process the data of every region

function processRegion(region, regionType) {

	data = decodeParams(region.attr('region-data'));

	switch (regionType) {
		case 'link' :
			window.open(data.url);
		break;
		case 'zoom' :

			var regionOffset = region.offset(),
				viewportOffset = $('.magazine-viewport').offset(),
				pos = {
					x: regionOffset.left-viewportOffset.left,
					y: regionOffset.top-viewportOffset.top
				};

			$('.magazine-viewport').zoom('zoomIn', pos);

		break;
		case 'to-page' :

			$('.magazine').turn('page', data.page);

		break;
	}

}

// Load large page

function loadLargePage(page, pageElement) {
	
	var img = $('<img />');

	img.load(function() {

		var prevImg = pageElement.find('img');
		$(this).css({width: '100%', height: '100%'});
		$(this).appendTo(pageElement);
		prevImg.remove();
		
	});

	// Loadnew page
	
	img.attr('src', 'pages/' +  page + '-large.jpg');
}

// Load small page

function loadSmallPage(page, pageElement) {
	
	var img = pageElement.find('img');

	img.css({width: '100%', height: '100%'});

	img.unbind('load');
	// Loadnew page

	img.attr('src', 'pages/' +  page + '.jpg');
}

// http://code.google.com/p/chromium/issues/detail?id=128488

function isChrome() {

	return navigator.userAgent.indexOf('Chrome')!=-1;

}

// let contenedor = document.querySelector('.magazine-viewport');

// if (contenedor) {
// 	contenedor.scrollTo({
// 		left: 2000, 
// 		behavior: 'smooth' 
// 	});
// }

function disableControls(page) {
    // Verifica si la página actual es la primera
    if (page == 1) {
        $('.previous-button').hide();

		
		const contenedor = document.querySelector('.magazine-viewport'); // Selecciona el elemento con la clase
		if (contenedor) {
			contenedor.scrollTo({
				left: 0, // Cambia este valor a la posición deseada en el eje x
				behavior: 'smooth' // 'smooth' para desplazamiento suave o 'auto' para instantáneo
			});
		}
		


    } else {
        $('.previous-button').show();
    }
    
    // Verifica si la página actual es la última
    if (page == $('.magazine').turn('pages')) {
        $('.next-button').hide();
    } else {
        $('.next-button').show();
    }
}




// Set the width and height for the viewport

function resizeViewport() {

	var width = $(window).width(),
		height = $(window).height(),
		options = $('.magazine').turn('options');

	$('.magazine').removeClass('animated');

	$('.magazine-viewport').css({
		width: width,
		height: height
	}).
	zoom('resize');


	if ($('.magazine').turn('zoom')==1) {
		var bound = calculateBound({
			width: options.width,
			height: options.height,
			boundWidth: Math.min(options.width, width),
			boundHeight: Math.min(options.height, height)
		});

		if (bound.width%2!==0)
			bound.width-=1;

			
		if (bound.width!=$('.magazine').width() || bound.height!=$('.magazine').height()) {

			$('.magazine').turn('size', bound.width, bound.height);

			if ($('.magazine').turn('page')==1)
				$('.magazine').turn('peel', 'br');

			$('.next-button').css({height: bound.height, backgroundPosition: '-38px '+(bound.height/2-32/2)+'px'});
			$('.previous-button').css({height: bound.height, backgroundPosition: '-4px '+(bound.height/2-32/2)+'px'});
		}

		// $('.magazine').css({top: -bound.height/2, left: -bound.width/2});
		// $('.magazine').css({top: -bound.height/4, left: -bound.width/4});
		$('.magazine').css({
			top: -bound.height / 2,
			left: -bound.width / 2,

			// transform: 'rotate(-90deg)'
		});
	}

	var magazineOffset = $('.magazine').offset(),
		boundH = height - magazineOffset.top - $('.magazine').height(),
		marginTop = (boundH - $('.thumbnails > div').height()) / 2;

	if (marginTop<0) {
		$('.thumbnails').css({height:1});
	} else {
		$('.thumbnails').css({height: boundH});
		$('.thumbnails > div').css({marginTop: marginTop});
	}

	if (magazineOffset.top<$('.made').height())
		$('.made').hide();
	else
		$('.made').show();

	$('.magazine').addClass('animated');
	
}


// Number of views in a flipbook

function numberOfViews(book) {
	return book.turn('pages') / 2 + 1;
}

// Current view in a flipbook

function getViewNumber(book, page) {
	return parseInt((page || book.turn('page'))/2 + 1, 10);
}

function moveBar(yes) {
	if (Modernizr && Modernizr.csstransforms) {
		$('#slider .ui-slider-handle').css({zIndex: yes ? -1 : 10000});
	}
}

function setPreview(view) {

	var previewWidth = 112,
		previewHeight = 73,
		previewSrc = 'pages/preview.jpg',
		preview = $(_thumbPreview.children(':first')),
		numPages = (view==1 || view==$('#slider').slider('option', 'max')) ? 1 : 2,
		width = (numPages==1) ? previewWidth/2 : previewWidth;

	_thumbPreview.
		addClass('no-transition').
		css({width: width + 15,
			height: previewHeight + 15,
			top: -previewHeight - 30,
			left: ($($('#slider').children(':first')).width() - width - 15)/2
		});

	preview.css({
		width: width,
		height: previewHeight
	});

	if (preview.css('background-image')==='' ||
		preview.css('background-image')=='none') {

		preview.css({backgroundImage: 'url(' + previewSrc + ')'});

		setTimeout(function(){
			_thumbPreview.removeClass('no-transition');
		}, 0);

	}

	preview.css({backgroundPosition:
		'0px -'+((view-1)*previewHeight)+'px'
	});
}

// Width of the flipbook when zoomed in

function largeMagazineWidth() {
	
	return 2214;

}

// decode URL Parameters

function decodeParams(data) {

	var parts = data.split('&'), d, obj = {};

	for (var i =0; i<parts.length; i++) {
		d = parts[i].split('=');
		obj[decodeURIComponent(d[0])] = decodeURIComponent(d[1]);
	}

	return obj;
}

// Calculate the width and height of a square within another square

function calculateBound(d) {
	
	var bound = {width: d.width, height: d.height};

	if (bound.width>d.boundWidth || bound.height>d.boundHeight) {
		
		var rel = bound.width/bound.height;

		if (d.boundWidth/rel>d.boundHeight && d.boundHeight*rel<=d.boundWidth) {
			
			bound.width = Math.round(d.boundHeight*rel);
			bound.height = d.boundHeight;

		} else {
			
			bound.width = d.boundWidth;
			bound.height = Math.round(d.boundWidth/rel);
		
		}
	}
		
	return bound;
}


let flecha = document.getElementById('flechaMenu');
let menu = document.querySelector('.menu');
let menuAbierto = false;

flecha.addEventListener('click', function(){
    if (menuAbierto) {
        menu.style.left = '0rem';
        flecha.classList.remove('bi-chevron-compact-right');
        flecha.classList.add('bi-chevron-compact-left');
    } else {
        menu.style.left = '-14rem';
        flecha.classList.remove('bi-chevron-compact-left');
        flecha.classList.add('bi-chevron-compact-right');
		
    }
    
    menuAbierto = !menuAbierto;
});
// flecha.click();


setTimeout(function() {
    flecha.click();
}, 8000);







gsap.fromTo(
	".loading-page",
	{ opacity: 1 },
	{
	  opacity: 0,
	  display: "none",
	  duration: 1.5,
	  delay: 3.5,
	}
  );
  
  gsap.fromTo(
	".logo-name",
	{
	  y: 50,
	  opacity: 0,
	},
	{
	  y: 0,
	  opacity: 1,
	  duration: 2,
	  delay: 0.5,
	}
  );
  
  gsap.fromTo(
	".logo-parrafo",
	{
	  y: 50,
	  opacity: 0,
	},
	{
	  y: 0,
	  opacity: 1,
	  duration: 2,
	  delay: 0.5,
	}
  );
  

  document.querySelector("video").playbackRate = 0.7; 






// Al CAGARSE LA PAGINA SI ESTA ACTIVADO EL SCROLL(es porque esta en responsive) SE MUEVA PARA CENTRARSE
window.addEventListener('load', () => {
    const contenedor = document.querySelector('.magazine-viewport'); // Selecciona el elemento con la clase
    if (contenedor) {
        contenedor.scrollTo({
            //left: 1000, // Cambia este valor a la posición deseada en el eje x
            left: 500, // Cambia este valor a la posición deseada en el eje x
            behavior: 'smooth' // 'smooth' para desplazamiento suave o 'auto' para instantáneo
        });
    }
});

// RESPONSIVE CLICK FLECHAS

function disableControls(page) {
	if (page==1)
		$('.previous-button-responsive').hide();
	else
		$('.previous-button-responsive').show();
				
	if (page==$('.magazine').turn('pages'))
		$('.next-button-responsive').hide();
	else
		$('.next-button-responsive').show();
}




$(document).ready(function() {
	// const contenedor = document.querySelector('.magazine-viewport'); 
    $('.next-button-responsive').on('click', function() {
        $('.next-button').click();
		// if (document.querySelector('.magazine-viewport')) {
		// 	document.querySelector('.magazine-viewport').scrollTo({
		// 		left: 1000, 
		// 		behavior: 'smooth' 
		// 	});
		// }
    });
});
$(document).ready(function() {
	const contenedor = document.querySelector('.magazine-viewport'); 
    $('.previous-button-responsive').on('click', function() {
        $('.previous-button').click();
		// if (contenedor) {
		// 	contenedor.scrollTo({
		// 		left: 250, 
		// 		behavior: 'smooth' 
		// 	});
		// }
    });
});