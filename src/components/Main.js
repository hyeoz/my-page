import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Navigator from "./Navigator";

// let random = "01";

const MainWrapper = styled.div`
  font-family: "Patua One", cursive;
  text-align: center;
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
      <h1>{time.format("YYYY년 MM월 DD월 hh시 mm분 ss초")}</h1>
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
          <h1>{city}</h1>
          <h2>{weather}</h2>
        </div>
      )}
    </div>
  );
};

const Main = () => {
  return (
    <MainWrapper>
      <Navigator />
      <WeatherContainer />
      <ClockContainer />
    </MainWrapper>
  );
};

export default Main;
