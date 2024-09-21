import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weather, setWeather] = useState([]);
  const updateInfo = (result) => {
    setWeather(result);
  };
  return (
    <>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox weather={weather} />
    </>
  );
}
