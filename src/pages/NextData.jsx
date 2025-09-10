import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../context/context";

const NextData = () => {
  let { lat, long } = useContext(Appcontext);
  let [weather, setWeather] = useState([]);
  const appId= import.meta.env.VITE_APP_ID;
  const fetchData = async () => {
    try {
      let { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${appId}&units=metric`
      );
      setWeather(data?.list || []);
    } catch (err) {
      console.error("Error fetching forecast:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-6 pt-24">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">
        📅 5-Day Forecast
      </h2>

      <div className="flex flex-wrap w-full gap-7 mx-auto">
        {weather.slice(0, 12).map((item, index) => {
          const date = new Date(item.dt * 1000);
          const time = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
          const day = date.toLocaleDateString([], { weekday: "short" });

          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center hover:scale-105 transition-transform sm:w-[200px] w-full "
            >
              <h3 className="font-semibold text-blue-700">{day}</h3>
              <p className="text-gray-500 mb-2">{time}</p>

              {/* Weather Icon */}
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
                className="w-16 h-16"
              />

              <p className="text-lg font-bold">{Math.round(item.main.temp)}°C</p>
              <p className="text-sm text-gray-600 capitalize">{item.weather[0].description}</p>

              <div className="flex justify-between w-full mt-3 text-sm text-gray-700">
                <span>💧 {item.main.humidity}%</span>
                <span>💨 {item.wind.speed} m/s</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NextData;
