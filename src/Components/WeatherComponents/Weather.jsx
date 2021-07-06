import { ContainerCard, H1, Data, P } from "./Style";

const Weather = (props) => {
  const { date, city, weather, temp, wind } = props.weather;

  let content = null;

  if (!props.error && city) {
    content = (
      <>
        <ContainerCard>
          <H1>{city}</H1>
          <Data>
            <P>{date}</P>
            <P>
              Weather: <strong>{weather}</strong>
            </P>
            <P>
              Wind speed: <strong>{wind}</strong>
            </P>
            <P>
              Temp: <strong>{Math.floor(temp)}</strong> C
            </P>
          </Data>
        </ContainerCard>
      </>
    );
  }

  return <>{props.error ? <p>invalid City</p> : content}</>;
};

export default Weather;
