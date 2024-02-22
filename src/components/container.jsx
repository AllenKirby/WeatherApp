import { IoMdSearch } from "react-icons/io";
import { WiHumidity } from "react-icons/wi";
import { PiWindBold } from "react-icons/pi";

import { useState } from "react";

const Container = () =>{
    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setLocation(e.target.value);
    }

    const getWeather = async (e) => {
        e.preventDefault();

        const key = "eeaee18e575d082fe1027712f2e0405f";
        const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        try {
            const response = await fetch(url + location + "&appid=" + key);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            const weatherData = await response.json();
            setWeather(weatherData);
            setError(null);
        } catch (error) {
            setError('Failed to fetch weather data. Please try again.');
            setWeather(null);
        }
    };

    return(
        <section className="h-auto w-auto bg-white rounded-2xl shadow-2xl shadow-white opacity-40 p-5">
            <form onSubmit={getWeather} className="flex items-center justify-center p-4" >
                <input type="text" name="location" value={location} onChange={handleInputChange} placeholder="Enter a Location" required className="w-80 py-3 mx-4 font-poppins text-lg outline-none border-b-black border-b-2"/>
                <button type="submit" className="border-2 border-black rounded-xl p-3"><IoMdSearch size={30} color="black"/></button>
            </form>
            <div className="w-full h-auto">
                {error && <p className="text-red-500 font-poppins text-sm text-center">{error}</p>}
                {weather && (
                    <>
                        <article className="w-full p-3 text-center">
                            <p className="font-poppins text-7xl font-semibold my-2">{weather.main && Math.round(weather.main.temp)}°C</p>
                            <p className="font-poppins text-3xl">{weather.name}</p>
                        </article>
                        <section className="w-full flex flex-row py-10 px-5">
                            <div className="flex mr-10">
                                <div><WiHumidity size={80}/></div>
                                <div className="py-2">
                                    <p className="font-poppins text-xl">{weather.main && weather.main.humidity}%</p>
                                    <p className="font-poppins text-2xl">Humidity</p>
                                </div>
                            </div>
                            <div className="flex ml-10">
                                <div><PiWindBold size={70}/></div>
                                <div className="py-2 ml-2">
                                    <p className="font-poppins text-xl">{weather.wind && weather.wind.speed}km/h</p>
                                    <p className="font-poppins text-2xl">Wind</p>
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </div>
        </section>
    );
};

export default Container;
