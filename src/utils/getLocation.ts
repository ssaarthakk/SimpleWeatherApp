import { fetchWeatherDataLL } from "./apiCalls";

function handleLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        console.log("Geolocation not supported");
    }
}

function success(position: GeolocationPosition) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    const wd = fetchWeatherDataLL(latitude, longitude);
    console.log(wd);
    return { weatherData: wd, hasLocation: true };
}

function error() {
    console.log("Unable to retrieve your location");
    return { weatherData: null, hasLocation: false };
}