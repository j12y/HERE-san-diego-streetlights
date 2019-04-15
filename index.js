
var map;
var tangram;

function handleFeatureClick(evt) {
    let text = '';
    if (evt.feature) {
        let props = evt.feature.properties;
        text += '<p><b>Streetlight on ' + props.street + '</b><br/>'
        text += '(' + props.coords + ')</p>';
        text += '<p>Asset ID: ' + props.assetUid + '</p>';
        text += '<p><a href="#">Parking</a> Status | <a href="#">Pedestrian</a> Flow</p>';
        // TODO: parkingUri, pedestrianUri, trafficUri, mediaUri
    }

    document.getElementById('overlay-details').innerHTML = text;
}

function main(lat, lon, zoom) {
    map = L.map('map', {
        zoomControl: false
    });

    tangram = Tangram.leafletLayer({
        scene: 'scene.yaml',
        events: {
            click: handleFeatureClick
        },
    });
    tangram.addTo(map);

    map.attributionControl.addAttribution('<a href="https://github.com/tangrams/tangram">Tangram</a> | <a href="https://here.xyz">HERE XYZ</a> | <a href="https://www.openstreetmap.org/">OSM</a>');
    map.setView([lat, lon], zoom);

    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);
}

// San Diego Downtown
main(32.714, -117.170, 15);

