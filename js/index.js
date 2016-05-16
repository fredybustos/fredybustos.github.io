	var consulta = window.matchMedia('(max-width: 500px)');
			consulta.addListener(mediaQuery)
			var $burguerButton = document.getElementById('burguer-button');
			var $menu = document.getElementById('menu');

			function toggleMenu(){
				$menu.classList.toggle("active")
			};


			function showMenu(){
				$menu.classList.add("active")
			};

			function hideMenu(){
				$menu.classList.remove("active")
			};


			function mediaQuery(){
				if (consulta.matches){
					// si se cumple ejecute

				$burguerButton.addEventListener('touchstart', toggleMenu);

				$burguerButton.addEventListener('click', function() {
					$menu.classList.toggle("active");
				});

				} else {

				$burguerButton.removeEventListener('touchstart', toggleMenu);
					// si no se ciumple ejecute
				}
			}
			mediaQuery();

			// lazy blading
			var bLazy = new Blazy({
				selector: 'img'
			});

			// $burguerButton.addEventListener('touchstart', toggleMenu);
			
			

			// $burguerButton.addEventListener('click', function() {
			// 	$menu.classList.toggle("active");
			// });

var $body = document.body;

var gestos = new Hammer($body);
gestos.on('swipeleft', hideMenu);
gestos.on('swiperight', showMenu);








