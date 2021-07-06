import { ContainerCard, H1 } from "./Style";

const Weather = (props) => {
  const { date, city, weather, temp, wind } = props.weather;

  let content = null;

  if (!props.error && city) {
    content = (
      <>
        <ContainerCard>
          <H1>{city}</H1>
          <h2>{date}</h2>
          <p>
            Weather: <strong>{weather}</strong>
          </p>
          <p>
            Wind speed: <strong>{wind}</strong>
          </p>
          <p>
            Temp: <strong>{Math.floor(temp)}</strong> C
          </p>
        </ContainerCard>
      </>
    );
  }

  return <>{props.error ? <p>invalid City</p> : content}</>;
};

export default Weather;
