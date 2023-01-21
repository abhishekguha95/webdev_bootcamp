if (!navigator.geolocation) {
	console.log('no geo');
} else {
	navigator.geolocation.getCurrentPosition(successFunc, errorFunc);
}

function initMaps(lang, lat) {
	const key = '';
	const map = new maplibregl.Map({
		container: 'map', // container's id or the HTML element in which MapLibre GL JS will render the map
		style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${key}`, // style URL
		center: [lang, lat], // starting position [lng, lat]
		zoom: 14, // starting zoom
	});
	map.addControl(new maplibregl.NavigationControl(), 'top-right');

	map.addControl(
		new maplibregl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true,
			},
			trackUserLocation: true,
		}),
		'top-right'
	);
}

function successFunc(position) {
	const lat = position.coords.latitude;
	const lang = position.coords.longitude;
	initMaps(lang, lat);
}

function errorFunc() {
	console.log('geo error');
}
