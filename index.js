
function main(lat, lon, zoom) {
    let map = L.map('map');
    let tangramLayer = Tangram.leafletLayer({
        scene: 'scene.yaml',
    });
    tangramLayer.addTo(map);
    map.attributionControl.addAttribution('<a href="https://github.com/tangrams/tangram">Tangram</a> | <a href="https://here.xyz">HERE XYZ</a> | <a href="https://www.openstreetmap.org/">OSM</a>');
    map.setView([lat, lon], zoom);
}

// Gaslamp Quarter
main(32.71151, -117.15897, 15);
