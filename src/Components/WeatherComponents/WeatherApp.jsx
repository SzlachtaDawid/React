import Weather from "./Weather";
import Form from "./Form";
import { useState } from "react";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import {
  ContainerApp,
  Home,
  ContainerBackGround,
  NextDayContainer,
  NextDays,
} from "./Style";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    date: "",
    city: "",
    weather: "",
    temp: "",
    wind: "",
    icon: "",
  });
  const [nextDayWeather, setNextDayWeather] = useState([]);
  const [error, setError] = useState("");

  const handleInputChange = (newCity) => {
    setCity(newCity);
  };

  const handleCitySubmit = (e) => {
    e.preventDefault();
    const API = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&days=5&key=849171d010104e12b9fd7157862885cc`;
    fetch(API)
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw Error("Error");
      })
      .then((res) => res.json())
      .then((data) => {
        setError(false);
        setWeather({
          date: data.data[0].datetime,
          city: data.city_name,
          weather: data.data[0].weather.description,
          icon: data.data[0].weather.code,
          temp: data.data[0].temp,
          wind: Math.floor(data.data[0].wind_spd),
        });
        const nextDays = data.data;
        nextDays.shift();
        setNextDayWeather(nextDays);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <>
      <ContainerBackGround> </ContainerBackGround>
      <ContainerApp>
        <Form
          value={city}
          onChange={handleInputChange}
          onSubmit={handleCitySubmit}
        ></Form>
        <Weather error={error} weather={weather}></Weather>
        <NextDayContainer>
          {nextDayWeather.map((day) => (
            <NextDays
              key={day.ts}
              temp={day.temp}
              icon={day.weather.code}
              date={day.ts}
              error={error}
            />
          ))}
        </NextDayContainer>
        <Link to="/">
          <Home icon={faHome} />
        </Link>
      </ContainerApp>
    </>
  );
};

export default WeatherApp;
