import c01d from "../../zdj/WeatherIcon/c01d.png";
import c02d from "../../zdj/WeatherIcon/c02d.png";
import r01d from "../../zdj/WeatherIcon/r01d.png";
import s01d from "../../zdj/WeatherIcon/s01d.png";
import t01d from "../../zdj/WeatherIcon/t01d.png";

import { Img, Li } from "./Style";

const NextDay = (props) => {
  const time = new Date(props.date * 1000);
  const day = time.toString().slice(0, 3);
  console.log(props.error);

  const Icon = () => {
    switch (props.icon) {
      case 800:
        return <Img className="icon" src={c01d} alt={"Clear Sky"} />;
      case 801:
        return <Img className="icon" src={c02d} alt={"cloudy"} />;

      case 802:
        return <Img className="icon" src={c02d} alt={"Cloudy"} />;

      case 803:
        return <Img className="icon" src={c02d} alt={"Cloudy"} />;

      case 200:
        return <Img className="icon" src={t01d} alt={"Thunderstorm/rain"} />;

      case 201:
        return <Img className="icon" src={t01d} alt={"Thunderstorm/rain"} />;

      case 202:
        return <Img className="icon" src={t01d} alt={"Thunderstorm/rain"} />;
      case 600:
        return <Img className="icon" src={s01d} alt={"Snowing"} />;
      case 500:
        return <Img className="icon" src={r01d} alt={"Rain"} />;
      case 501:
        return <Img className="icon" src={r01d} alt={"Rain"} />;

      case 502:
        return <Img className="icon" src={r01d} alt={"Rain"} />;

      case 601:
        return <Img className="icon" src={s01d} alt={"Snowing"} />;

      case 602:
        return <Img className="icon" src={s01d} alt={"Snowing"} />;

      case 610:
        return <Img className="icon" src={s01d} alt={"Snowing"} />;

      default:
        return <Img className="icon" src={c02d} alt={"default"} />;
    }
  };

  let content = null;

  if (!props.error) {
    content = (
      <Li>
        <h1>{day}</h1>
        {Icon()}
        <p>{props.temp}°C</p>
      </Li>
    );
  }
  return <>{props.error ? null : content}</>;
};
export default NextDay;
