
// Replace your Configuration here..
// var config = {
//     apiKey: "AIzaSyCKp-RwlkZhJBehZLOSLhn1E7WpoXn9xoI",
//     authDomain: "realtime-on-map-example.firebaseapp.com",
//     databaseURL: "https://realtime-on-map-example.firebaseio.com",
//     projectId: "realtime-on-map-example",
//     storageBucket: "",
//     messagingSenderId: "851837622908"
// };

const config = {
     apiKey: "AIzaSyCAnem1AQOz9iWy2f8t8XDBKztK6kvThGs",
  authDomain: "alumbradopte21.firebaseapp.com",
  databaseURL: "https://alumbradopte21-default-rtdb.firebaseio.com",
  projectId: "alumbradopte21",
  storageBucket: "alumbradopte21.appspot.com",
  messagingSenderId: "651178194520",
  appId: "1:651178194520:web:987e5d240f8ab838d3fc2d",
  measurementId: "G-VRH3BTZEQW"

  // apiKey: "AIzaSyBRVBJuvk-Mbxzv2DTx2a18jPaope7gBPY",
  // authDomain: "usrsmty.firebaseapp.com",
  // databaseURL: "https://usrsmty.firebaseio.com",
  // projectId: "usrsmty",
  // storageBucket: "usrsmty.appspot.com",
  // messagingSenderId: "840900135873",
  // appId: "1:840900135873:web:cbcc627858630c625ebd40",
  // measurementId: "G-47LEFJRJCX"


};

firebase.initializeApp(config);




// counter for online cars...
var cars_count = 0;
var pedidos_count = 0;
var colorConductor = "#00023";
// markers array to store all the markers, so that we could remove marker when any car goes offline and its data will be remove from realtime database...
var markers = [];
var conductoresArray = [];

var markersPedidos = [];
var map;

var numDeltas = 100;
var delay = 10; //milliseconds
var i = 0;
var deltaLat;
var deltaLng;
var position = [25.6643009, -100.2327063]; //lat lon CEID

var datos;

function initMap() { // Google Map Initialization... 
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: new google.maps.LatLng(25.6643009, -100.2327063),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

/////////


var polygoneCoords10 = [


{lat:25.76412048,lng:-100.37833961},
{lat:25.7623089,lng:-100.3812579},
{lat:25.76164245,lng:-100.38105987},
{lat:25.76118251,lng:-100.38174776},
{lat:25.75851669,lng:-100.37883989},
{lat:25.76305982,lng:-100.37181516},
{lat:25.76143595,lng:-100.36972025},
{lat:25.76007489,lng:-100.36887603},
{lat:25.76083521,lng:-100.36801097},
{lat:25.76423312,lng:-100.36933462},
{lat:25.7650028,lng:-100.36984532},
{lat:25.76592265,lng:-100.37019968},
{lat:25.76654214,lng:-100.37018926},
{lat:25.76739628,lng:-100.36973067},
{lat:25.76813778,lng:-100.37081461},
{lat:25.76841936,lng:-100.37067911},
{lat:25.76823164,lng:-100.37022053},
{lat:25.77133838,lng:-100.36649971},
{lat:25.77402269,lng:-100.36120511},
{lat:25.77372235,lng:-100.36047553},
{lat:25.77197661,lng:-100.35987103},
{lat:25.77126329,lng:-100.36007948},
{lat:25.77056874,lng:-100.35932906},
{lat:25.76963015,lng:-100.35893301},
{lat:25.76882296,lng:-100.35914146},
{lat:25.76752768,lng:-100.35851611},
{lat:25.76626994,lng:-100.35741133},
{lat:25.76493709,lng:-100.35684852},
{lat:25.76108865,lng:-100.35351334},
{lat:25.76035649,lng:-100.35418037},
{lat:25.75938027,lng:-100.35378432},
{lat:25.75815999,lng:-100.35397193},
{lat:25.75815999,lng:-100.35349249},
{lat:25.7553439,lng:-100.35090772},
{lat:25.75464926,lng:-100.3495945},
{lat:25.75513739,lng:-100.34921929},
{lat:25.75453661,lng:-100.34782268},
{lat:25.7549872,lng:-100.34761423},
{lat:25.75397339,lng:-100.34725987},
{lat:25.75339138,lng:-100.34659283},
{lat:25.75282815,lng:-100.34675959},
{lat:25.75140127,lng:-100.34521707},
{lat:25.75074416,lng:-100.34290328},
{lat:25.74905441,lng:-100.34219456},
{lat:25.74648219,lng:-100.33985993},
{lat:25.74563729,lng:-100.34196526},
{lat:25.74366583,lng:-100.34244469},
{lat:25.74394747,lng:-100.34336187},
{lat:25.73869009,lng:-100.346301},
{lat:25.73750715,lng:-100.34269483},
{lat:25.70454905,lng:-100.3422154},
{lat:25.7043988,lng:-100.3512204},
{lat:25.70139361,lng:-100.35147054},
{lat:25.69868888,lng:-100.35113702},
{lat:25.69883914,lng:-100.35174152},
{lat:25.69870766,lng:-100.35278377},
{lat:25.6987828,lng:-100.3540553},
{lat:25.69872645,lng:-100.35480572},
{lat:25.69895184,lng:-100.35657754},
{lat:25.70030421,lng:-100.35964174},
{lat:25.70154387,lng:-100.36272678},
{lat:25.702051,lng:-100.36343551},
{lat:25.70978916,lng:-100.37066869},
{lat:25.70930084,lng:-100.37004334},
{lat:25.70982672,lng:-100.370627},
{lat:25.71031503,lng:-100.37071038},
{lat:25.71184569,lng:-100.37249262},
{lat:25.71208045,lng:-100.37247177},
{lat:25.71257815,lng:-100.37296163},
{lat:25.71266266,lng:-100.37338895},
{lat:25.71261571,lng:-100.37361824},
{lat:25.7128223,lng:-100.37373289},
{lat:25.71355475,lng:-100.3731805},
{lat:25.71405244,lng:-100.3730867},
{lat:25.71421207,lng:-100.37317008},
{lat:25.71450317,lng:-100.37310754},
{lat:25.71456891,lng:-100.37309712},
{lat:25.71488817,lng:-100.37317008},
{lat:25.71529195,lng:-100.37315966},
{lat:25.71546098,lng:-100.37349318},
{lat:25.71593049,lng:-100.37284698},
{lat:25.71619341,lng:-100.37323261},
{lat:25.71624975,lng:-100.37360782},
{lat:25.71609951,lng:-100.37404556},
{lat:25.71681316,lng:-100.3742957},
{lat:25.71890714,lng:-100.37447289},
{lat:25.71899165,lng:-100.37487936},
{lat:25.71943297,lng:-100.37497316},
{lat:25.71947992,lng:-100.37552555},
{lat:25.71917944,lng:-100.37622386},
{lat:25.71934846,lng:-100.3774954},
{lat:25.72036257,lng:-100.37783934},
{lat:25.72036257,lng:-100.37784976},
{lat:25.72023111,lng:-100.37896496},
{lat:25.72012782,lng:-100.37971538},
{lat:25.71972406,lng:-100.3799134},
{lat:25.71947992,lng:-100.37882947},
{lat:25.71899165,lng:-100.37842299},
{lat:25.71823106,lng:-100.37853764},
{lat:25.717724,lng:-100.37852722},
{lat:25.71678499,lng:-100.37880862},
{lat:25.71540464,lng:-100.38067424},
{lat:25.71512293,lng:-100.38189367},
{lat:25.71425903,lng:-100.38206043},
{lat:25.71394915,lng:-100.38266493},
{lat:25.71331999,lng:-100.38316521},
{lat:25.71246546,lng:-100.38416576},
{lat:25.71285047,lng:-100.38533308},
{lat:25.71354536,lng:-100.38619814},
{lat:25.71498208,lng:-100.38680264},
{lat:25.7147661,lng:-100.38769898},
{lat:25.71583659,lng:-100.3882201},
{lat:25.71411817,lng:-100.39090909},
{lat:25.71644695,lng:-100.39155528},
{lat:25.71776156,lng:-100.39423385},
{lat:25.71845642,lng:-100.39443188},
{lat:25.71989308,lng:-100.39557835},
{lat:25.72165836,lng:-100.3962037},
{lat:25.72217479,lng:-100.39613074},
{lat:25.72271,lng:-100.39566173},
{lat:25.72308559,lng:-100.39350428},
{lat:25.72480387,lng:-100.391055},
{lat:25.72542358,lng:-100.39082571},
{lat:25.725048,lng:-100.3894291},
{lat:25.72664419,lng:-100.38782404},
{lat:25.73090687,lng:-100.39311865},
{lat:25.73237155,lng:-100.39445272},
{lat:25.73349821,lng:-100.39637045},
{lat:25.73533839,lng:-100.39878846},
{lat:25.73646503,lng:-100.39745439},
{lat:25.73717855,lng:-100.39568257},
{lat:25.73792963,lng:-100.39516145},
{lat:25.73931911,lng:-100.3953699},
{lat:25.74023916,lng:-100.39497385},
{lat:25.74027672,lng:-100.39503638},
{lat:25.74324337,lng:-100.39245161},
{lat:25.74594708,lng:-100.38894967},
{lat:25.74688586,lng:-100.38869953},
{lat:25.74774953,lng:-100.38607307},
{lat:25.75345709,lng:-100.39353555},
{lat:25.7556349,lng:-100.39161782},
{lat:25.75638586,lng:-100.38986685},
{lat:25.75893909,lng:-100.38819925},
{lat:25.76442084,lng:-100.37877736}


];
var myPolygon10 = new google.maps.Polygon({
     paths: polygoneCoords10,
     strokeColor: '#FF0000',
     strokeOpacity: 0.8,
     strokeWeight: 2,
     fillColor: '#FF0000',
     fillOpacity: 0.35
   });
myPolygon10.setMap(map);


} //end of map




function transition(result, data) {
    datos = data.val();
    console.log("data Mombre: " + datos);
    i = 0;
    deltaLat = (result[0] - position[0]) / numDeltas;
    deltaLng = (result[1] - position[1]) / numDeltas;
    moveMarker();
}

function moveMarker() {
    console.log("Move Markerr Mombre: " + datos.nombre);
    position[0] += deltaLat;
    position[1] += deltaLng;


    //var latlng = new google.maps.LatLng(position[0], position[1]);

    var longlat = [position[1], position[0]];
    //marker.setTitle("Latitude:"+position[0]+" | Longitude:"+position[1]);
    //marker.setPosition(latlng);

    // marker.setLngLat(longlat)
    // marker.addTo(map);


    if (i != numDeltas) {
        i++;
        setTimeout(moveMarker, delay);
    }
}


// This Function will create a car icon with angle and add/display that marker on the map
function AddMarkerConductor(data) {
    let conductor = data;


    let urlIcon = (conductor.situacion == "Disponible") ? 'lampara.png' : 'lampara.png';
    var result = [parseFloat(conductor.latitud), parseFloat(conductor.longitud)];
    //transition(result,data)

    //#region marker e icono

    var icon = { // car icon

        url: urlIcon,
        //path: 'M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805',
        // scale: 0.6,
        scaledSize: new google.maps.Size(30, 30),
        fillColor: colorConductor, //<-- Car Color, you can change it 
        fillOpacity: 1,
        strokeWeight: 1,
        anchor: new google.maps.Point(0, 5),
        rotation: 44 //<-- Car angle
    };

    //path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',

    // Esta es la información del marker que se va a mostrar, el contenido acepta HTML
    var infowindow = new google.maps.InfoWindow({
        content: `<strong>Medidor: ${conductor.medidor}
                    <p>Lampara ${conductor.lampara}</p>
                    </strong>`
    });
    var uluru = { lat: parseFloat(conductor.latitud), lng: parseFloat(conductor.longitud) };

    var marker = new google.maps.Marker({
        position: uluru,
        icon: icon,
        map: map,
        title: conductor.medidor
    });

    // Al hacer click sobre el marker mostraremos su información en una ventana
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    markers[conductor.key] = marker; // add marker in the markers array...
    document.getElementById("cars").innerHTML = cars_count;
    //#endregion

}


function buildLococationConductoresList(data) {
    let array = data;
    let arraySize = array.length;
    let color;
    var listings = document.getElementById('poimapbox-listings');
    listings.innerHTML = "";
    for (let i = 0; i < arraySize; i++) {
        let element = array[i];
        let conductor = element;

        AddMarkerConductor(element);

        color = (conductor.situacion == "Disponible") ? '#8bc34ba3' : '#ff572287';


        var listing = listings.appendChild(document.createElement('div'));
        listing.innerHTML
        listing.className = 'amenity-poi';


        listing.style.backgroundColor = color;

        listing.id = "listing-" + i;

        var link = listing.appendChild(document.createElement('a'));
        link.innerHTML = "";
        link.href = '#';
        link.className = 'name';
        link.dataPosition = i;

        link.innerHTML =
            // '<img src=' + conductor.properties.imagetmb + '>' +
            '<img src="https://img.icons8.com/officexs/16/000000/lights.png"/>' +
            '<h3>' + conductor.medidor+ '</h3>' +
            '<p>' + conductor.lampara + '</p>' +
            '<p>' + conductor.capacidad + '</p>' +
            '<p>? ' + conductor.fecha_hora + '</p>'

        link.addEventListener('click', function (e) {
            // Update the conductor to the Park associated with the clicked link
            var clickedListing = data[this.dataPosition];
            console.log(clickedListing);
            // // 1. Fly to the point
            flyToStore(clickedListing);

            // // 2. Close all other popups and display popup for clicked Park
            // createPopUp(clickedListing);

            // 3. Highlight listing in sidebar (and remove highlight for all other listings)
            var activeItem = document.getElementsByClassName('amenity-poi active');

            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');

        });

    }
}

function flyToStore(currentFeature) {
    let latitud = parseFloat(currentFeature.latitud);
    let longitud = parseFloat(currentFeature.longitud);
    // map.flyTo({
    //     center: currentFeature,
    //     zoom: 15
    // });

    map.setZoom(17);
    map.panTo({ lat: latitud, lng: longitud });
}

// get firebase database reference...
var cars_Ref = firebase.database().ref('/LAMPARAS_E2');


var dataConductores = firebase.database().ref('/LAMPARAS_E2');
dataConductores.on('value', function (snapshot) {
    //updateStarCount(postElement, snapshot.val());

    let conductores = snapshot.val();
    conductoresArray = [];
    for (const key in conductores) {
        if (conductores.hasOwnProperty(key)) {
            const element = conductores[key];
            //console.log(element);
            conductoresArray.push(element);


        }
    }

    buildLococationConductoresList(conductoresArray);
});

// this event will be triggered when a new object will be added in the database...
cars_Ref.on('child_added', function (data) {
    //console.log(data.val());
    cars_count++;
    //AddMarkerConductor(data);
    let conductor = data.val();

});

// this event will be triggered on location change of any car...
cars_Ref.on('child_changed', function (data) {
    markers[data.key].setMap(null);
    //AddMarkerConductor(data);
    let conductor = data.val();

});

// If any car goes offline then this event will get triggered and we'll remove the marker of that car...  
cars_Ref.on('child_removed', function (data) {
    markers[data.key].setMap(null);
    cars_count--;
    document.getElementById("cars").innerHTML = cars_count;
});


function AddPedido(data) {
    var color = "";
 

    if (data.val().suministro != "BAJABAJA") {

        color = "#09ebcd";
        colorConductor = "#09ebcd";

    } else if (data.val().suministro != "ALTABAJA") {
        color = "#32a856";
        colorConductor = "#32a856";
    } else {
        color = "#151582";
    }

    var icon = { // car icon
      path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
         scale: 0.5,
       
        fillColor: color,
        // strokeWeight: 1,
        // anchor: new google.maps.Point(0, 5),
        // rotation: 44 //<-- Car angle
        fillOpacity: 1,
        strokeWeight: 2,
        anchor: new google.maps.Point(0, 5),
        rotation: data.val().angle //<-- Car angle
    };

    // Esta es la información del marker que se va a mostrar, el contenido acepta HTML
    var infowindow = new google.maps.InfoWindow({
        content: `<strong>Medidor: ${data.val().medidor}
                <p>Facturado: ${data.val().facturado}</p>
                <p>Suministro: ${data.val().suministro}</p>
                </strong>`
    });
    var uluru = { lat: parseFloat(data.val().latitud), lng: parseFloat(data.val().longitud) };

    var marker = new google.maps.Marker({
        position: uluru,
        icon: icon,
        map: map,
        title: data.val().nombre
    });

    // Al hacer click sobre el marker mostraremos su información en una ventana
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    markersPedidos[data.key] = marker; // add marker in the markers array...
    document.getElementById("pedidos").innerHTML = pedidos_count;
}




var pedidos_Ref = firebase.database().ref('/RPUMEDIDOR_E2');

// this event will be triggered when a new object will be added in the database...
pedidos_Ref.on('child_added', function (data) {
    pedidos_count++;
    AddPedido(data);
});

// this event will be triggered on location change of any car...
pedidos_Ref.on('child_changed', function (data) {
    markersPedidos[data.key].setMap(null);
    AddPedido(data);
});

// If any car goes offline then this event will get triggered and we'll remove the marker of that car...  
pedidos_Ref.on('child_removed', function (data) {
    markersPedidos[data.key].setMap(null);
    pedidos_count--;
    document.getElementById("pedidos").innerHTML = pedidos_count;
});



