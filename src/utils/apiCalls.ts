import axios from "axios";

export async function fetchWeatherDataLL(latitude: number, longitude: number) {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?q=${latitude},${longitude}&key=${import.meta.env.VITE_API_KEY}&days=5&aqi=no&alerts=no`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data with coordinates: ', error);
        return null;
    }
}

export async function fetchWeatherDataCity(city: string) {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?q=${city}&key=${import.meta.env.VITE_API_KEY}&days=5&aqi=no&alerts=no`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data with city: ', error);
        return null;
    }
}