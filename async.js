import L from 'leaflet'


export function run (map) {
	const polyline = L.polyline([L.latLng(0,0)]).addTo(map)
}
