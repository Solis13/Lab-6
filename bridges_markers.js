let mapCenter = [44, -103]
// how much zoom in / out
let zoomLevel = 2

let bridgeMap = L.map('bridge-map').setView(mapCenter, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>', 
    }).addTo(bridgeMap);  // add the tileLayer to the bridge map


 bridgeData = [    //span (meters)
    { "name": 'Verrazano-Narrows Bridge',
     "cityState": 'New York, NY',
     "span":'1298.4',"coordinates": [40.6066, -74.0447]},
    {
       " name": 'Golden Gate Bridge',
        "cityState": 'San Francisco and Marin, CA',
        "span":'1280.2',
        "coordinates": [37.8199, -122.4783]
    },
    // make three more obj for other bridges

    {
        "name": 'Mackinac Brigde',
        "cityState": 'Mackinaw and St Ignance, MI',
        "span": '1158.0',
        "coordinates": [45.8174, -84.7278]

    },

    {
       " name": 'George Washington Bridge',
        "cityState": '	New York, NY and New Jersey, NJ',
        "span":'1067.0',
        "coordinates": [	40.8517, -73.9527]
    },

    {
        "name": 'Tacoma Narrows Bridge',
        "cityState": 'Tacoma and Kitsap, WA',
        "span":'853.44',
        "coordinates": [	47.2690, -122.5517]
    }

]
// insert an brigde incon here



let bridgeIcon = L.icon({
    iconUrl: 'bridge.png',
    iconSize:     [50, 50],  
    iconAnchor:   [25, 25], 
   
})

     
    bridgeData.forEach(function (bridge) {

        let bridgeCoordinates = bridge.coordinates
        let bridgeMarker = `<b>${bridge.name}</b><br>${bridge.cityState}<br>Span: ${bridge.span} meters`
      
        // Create popup from data in bridge object
      
        L.marker(bridgeCoordinates,{icon:bridgeIcon}).bindPopup(bridgeMarker).addTo(bridgeMap)

        // inside {} we create the bridge imag.

      })