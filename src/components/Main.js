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
  margin: 0 auto;
  background-image: url(${randomImage[num]});
  h1 {
    margin: 0;
  }
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
      <h1>
        It's <b style={{ color: "#f44336" }}>{time.format("hh : mm : ss")}</b>{" "}
        Right Now!
      </h1>
    </div>
  );
};

const WeatherContainer = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
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
    const cityName = await res.data.name;
    const weatherName = await res.data.weather[0].main;
    setCity(cityName);
    setWeather(weatherName);
    setLoading(false);
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
          <h1>
            <b>{city}</b>
          </h1>
          <h2>{weather}</h2>
        </div>
      )}
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <Navigator />
      <MainWrapper>
        <WeatherContainer />
        <ClockContainer />
      </MainWrapper>
    </div>
  );
};

export default Main;
