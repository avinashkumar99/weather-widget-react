import { useState } from "react";
import InfoBox from "./InfoBox";
import CircularProgress from "@mui/material/CircularProgress";
import SearchBox from "./SearchBox";
import "./Loader.css";
export default function WeatherApp() {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const updateInfo = (result) => {
    setLoading(true);
    setWeather(result);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  return (
    <>
      <SearchBox updateInfo={updateInfo} />
      {loading ? (
        <div className="loader-class">
          <CircularProgress />{" "}
        </div>
      ) : (
        <InfoBox weather={weather} loading={loading} />
      )}
    </>
  );
}
