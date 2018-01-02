import L from 'leaflet'
import './index.css'
import './node_modules/leaflet/dist/leaflet.css'

(async function () {
	function ready() {
	    const map = L.map('map', { zoomControl: false, attributionControl: false }).setView([0, 0], 6)
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map)

		import('./async.js').then(m => m.run(map))
	}
	document.addEventListener("DOMContentLoaded", ready);
})()