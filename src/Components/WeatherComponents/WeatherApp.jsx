import Weather from "./Weather";
import Form from "./Form";
import { useState } from "react";
import { ContainerApp, Back } from "./Style";

import clear from "../../zdj/clear.jpg";
import clearNight from "../../zdj/clearnight.jpg";
import clouds from "../../zdj/clouds.jpg";
import fewClouds from "../../zdj/fewclouds.jpg";
import mist from "../../zdj/mist.jpg";
import rain from "../../zdj/rain.jpg";
import snow from "../../zdj/snow.jpg";
import storm from "../../zdj/storm.jpg";

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
  const [image, setImage] = useState("");

  const handleInputChange = (newCity) => {
    setCity(newCity);
  };

  const handleCitySubmit = (e) => {
    e.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dad918f57c236b8e17313001ceedf748&units=metric`;
    fetch(API)
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw Error("Error");
      })
      .then((res) => res.json())
      .then((data) => {
        const time = new Date().toLocaleDateString();
        console.log(data);
        setError(false);
        setWeather({
          date: time,
          city: data.name,
          weather: data.weather[0].main,
          temp: data.main.temp,
          wind: data.wind.speed,
        });
        setImage(data.weather[0].main);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };
  let backImage = null;
  switch (image) {
    case "Clear":
      backImage = clear;
      break;
    case "ClearNight":
      backImage = clearNight;
      break;
    case "Clouds":
      backImage = clouds;
      break;
    case "FewClouds":
      backImage = fewClouds;
      break;
    case "Fog":
      backImage = mist;
      break;
    case "Rain":
      backImage = rain;
      break;
    case "Snow":
      backImage = snow;
      break;
    case "Storm":
      backImage = storm;
      break;
    default:
      console.log("błąd");
  }

  let background = {
    backgroundImage: "url(" + backImage + ")",
  };

  return (
    <>
      <ContainerApp style={background}>
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
