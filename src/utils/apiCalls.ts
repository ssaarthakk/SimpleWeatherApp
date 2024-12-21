import axios from "axios";

export async function fetchWeatherDataLL(latitude: number, longitude: number) {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?q=${latitude},${longitude}&key=${import.meta.env.VITE_API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data with coordinates: ', error);
        return null;
    }
}

export async function fetchWeatherDataCity(city: string) {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?q=${city}&key=${import.meta.env.VITE_API_KEY}`);
        console.log(response);
        
        return response.data;
    } catch (error) {
        console.error('Error fetching data with city: ', error);
        return null;
    }
}