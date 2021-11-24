// const API_KEY = "a64012ca5ec8af82073f60380626ada2";
// const COORDS = 'coords';

// function getWeater(lat,lng){
//     fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`);
// }

// function savaeCoords(coordsObj){
//     localStorage.setItem(COORDS,JSON.stringify(coordsObj));
// }

// function handleGeoSucces(position){
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     const coordsObj = {
//         latitude,
//         longitude
//     };
//     savaeCoords(coordsObj);
//     getWeater(latitude,longitude);
// }

// function handleGeoError(){
//     console.log("Cant access geo location");
// }

// function askForCoords(){
//     navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
// }

// function loadCoords(){
//     const loadedCoords = localStorage.getItem(COORDS);
//     if(loadedCoords === null){
//         askForCoords();
//     }else{
//         const parseCoords = JSON.parse(loadCoords);
//         getWeater(parseCoords.latitude,parseCoords.longitude);
//     }
// }

// function init(){
//     loadCoords();
// }

// init();