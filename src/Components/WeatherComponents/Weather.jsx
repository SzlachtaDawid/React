import { ContainerCard, H1, Data, P } from "./Style";

const Weather = (props) => {
  const { city, weather, temp, wind } = props.weather;

  let content = null;

  if (!props.error && city) {
    content = (
      <>
        <ContainerCard>
          <H1>{city}</H1>
          <Data>
            <P>
              <strong>Today</strong>
            </P>
            <P>
              Weather: <strong>{weather}</strong>
            </P>
            <P>
              Wind speed: <strong>{wind} m/s</strong>
            </P>
            <P>
              Temp: <strong>{Math.floor(temp)}</strong> °C
            </P>
          </Data>
        </ContainerCard>
      </>
    );
  }

  return <>{props.error ? <h1>invalid City</h1> : content}</>;
};

export default Weather;
