import Weather from "./Weather";
import Form from "./Form";
import { useState } from "react";
import { ContainerApp, Back, ContainerBackGround } from "./Style";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    date: "",
    city: "",
    weather: "",
    temp: "",
    wind: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (newCity) => {
    setCity(newCity);
  };

  const handleCitySubmit = (e) => {
    e.preventDefault();
    const API = `https://api.weatherbit.io/v2.0/forecast/daily?city=Warszawa&days=5&key=849171d010104e12b9fd7157862885cc`;
    fetch(API)
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw Error("Error");
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data[0]);
        setError(false);
        setWeather({
          date: data.data[0].datetime,
          city: data.city_name,
          weather: data.data[0].weather.description,
          temp: data.data[0].temp,
          wind: Math.floor(data.data[0].wind_spd),
        });
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
      </ContainerApp>
      <Back to="/">Go Back</Back>
    </>
  );
};

export default WeatherApp;
