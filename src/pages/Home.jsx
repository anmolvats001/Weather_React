import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Appcontext } from "../context/context";

const Home = () => {
  const {data,setData,val,setVal,setFlag,lat,long,setLat,setLong}=useContext(Appcontext)
  const appId= import.meta.env.VITE_APP_ID;
  const fetchData = async (lat, lon) => {
    let { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=metric`
    );
    setData(data);
  };

  const getLongLatData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      setLat(lat);
      setLong(long)
      fetchData(lat, long);
    });
  };

  const getDataFromSearch = async (val) => {
    setVal(val);
    if (val.length > 2) {
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${appId}&units=metric`
      );
      console.log(data);
      setLat(data.coord.lat);
      setLong(data.coord.lon)
      setData(data);
    }
  };
  useEffect(()=>{
    fetchData(lat,long)
  },[])
  return (
    <div onClick={()=>setFlag(false)} className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-start p-6 pt-28">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
        🌤️ Weather App
      </h1>
      <div className="flex w-full max-w-md items-center bg-white shadow-md rounded-2xl overflow-hidden mb-6">
        <input
          type="text"
          placeholder="Search city..."
          className="flex-1 px-4 py-2 outline-none"
          value={val}
          onChange={(e) => getDataFromSearch(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2">🔍</button>
      </div>
      <button
        onClick={getLongLatData}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-md mb-6 hover:bg-blue-700"
      >
        📍 Get Current Location
      </button>

      {data && (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">
            {data.name}, {data.sys?.country}
          </h2>
          <p className="text-gray-500 mb-4">{data.weather[0]?.description}</p>

          <div className="flex items-center justify-center gap-6 mb-6">
            <span className="text-4xl">🌡️</span>
            <p className="text-5xl font-bold">{data.main?.temp}°C</p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-1">💨</span>
              <p>{data.wind?.speed} m/s</p>
              <span className="text-gray-500">Wind</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-1">💧</span>
              <p>{data.main?.humidity}%</p>
              <span className="text-gray-500">Humidity</span>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">{data.main?.feels_like}°</p>
              <span className="text-gray-500">Feels like</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;