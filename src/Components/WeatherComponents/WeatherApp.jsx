import Weather from "./Weather";
import Form from "./Form";
import { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    date: [],
    city: [],
    weather: [],
    temp: [],
  });

  const handleInputChange = (newCity) => {
    setCity(newCity);
  };

  const handleCitySubmit = (e) => {
    e.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=dad918f57c236b8e17313001ceedf748`;
    fetch(API)
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw Error("Error");
      })
      .then((res) => res.json())
      .then((data) => console.log(data.list))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form
        value={city}
        onChange={handleInputChange}
        onSubmit={handleCitySubmit}
      ></Form>
      <Weather></Weather>
    </div>
  );
};

export default WeatherApp;
