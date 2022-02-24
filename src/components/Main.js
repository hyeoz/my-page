import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Navigator from "./Navigator";
import bg01 from "./image/bg01.jpeg";
import bg02 from "./image/bg02.jpeg";
import bg03 from "./image/bg03.jpeg";
import bg04 from "./image/bg04.jpeg";
import bg05 from "./image/bg05.jpeg";

const randomImage = [bg01, bg02, bg03, bg04, bg05];
const num = Math.floor(Math.random() * 4 + 1);

const MainWrapper = styled.div`
  font-family: "Patua One", cursive;
  text-align: center;
  background-image: url(${randomImage[num]});
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 0;
  height: 100vh;
  position: relative;

  @media (min-width: 481px) and (max-width: 767px) {
    background-color: #fff2cc;
    background-image: none;
  }

  &:first-child {
    padding-top: 10px;
  }
`;

const ContentWrapper = styled.div`
  display: inline-block;
  width: 450px;
  padding: 10px;
  border: solid 1px white;
  background: rgba(255, 255, 255, 0.4);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ClockContainer = () => {
  const [time, setTime] = useState(moment());

  let timer;
  useEffect(() => {
    // 매초 업데이트 되는 시계
    timer = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <RnadomMent time={time} />
      <h1>{time.format("YYYY / MM / DD")}</h1>
      <h2
        style={{
          fontSize: "4rem",
          fontFamily: "'Patua One', cursive;",
          margin: "0",
        }}
      >
        {time.format("HH : mm : ss")}
      </h2>
    </div>
  );
};

const RnadomMent = ({ time }) => {
  const hour = time.format("HH");
  if (6 < hour && hour <= 12) {
    return <h1>Good Morning!</h1>;
  } else if (12 < hour && hour <= 21) {
    return <h1>Goot Afternoon!</h1>;
  } else {
    return <h1>Good Night!</h1>;
  }
};

const WeatherContainer = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [icon, setIcon] = useState("");
  const [loading, setLoading] = useState(true);

  const onGeoSuccess = async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log(position);
    // console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
    // console.log(url);
    const res = await axios.get(url);
    // console.log(res);

    // console.log(res);
    const cityName = await res.data.name;
    const weatherName = await res.data.weather[0].main;
    const weatherIcon =
      await `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`;
    setCity(cityName);
    setWeather(weatherName);
    setLoading(false);
    setIcon(weatherIcon);
  };
  const onGeoError = () => {
    alert("Can't find you Geolocation information.");
  };

  navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

  return (
    <div>
      {loading ? (
        <h1>Loading Weather Information...</h1>
      ) : (
        <div>
          <h1 style={{ margin: "10px" }}>
            <b>{city}</b>
          </h1>
          {/* <h2>{weather}</h2> */}
          <img src={icon} alt={weather} />
        </div>
      )}
    </div>
  );
};

const Main = () => {
  return (
    <MainWrapper>
      <Navigator />
      <ContentWrapper>
        <ClockContainer />
        <WeatherContainer />
      </ContentWrapper>
    </MainWrapper>
  );
};

export default Main;
