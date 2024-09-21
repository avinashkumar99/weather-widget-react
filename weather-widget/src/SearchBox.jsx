import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css";
import constants from "../constant";
export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  let jsonResponse;
  console.log(constants.apiUrl);
  const realtime = "/current.json";

  const getWeatherData = async () => {
    // let response = await fetch(
    //   `${constants.apiUrl + realtime}?key=${constants.apiKey}&q=${city}`
    // );
    // jsonResponse = await response.json();
    let forcast = await fetch(
      `${constants.apiUrl + "/forecast.json"}?key=${
        constants.apiKey
      }&q=${city}&days=7`
    );

    let forcastResponse = await forcast.json();

    let astronomy = await fetch(
      `${constants.apiUrl + "/astronomy.json"}?key=${
        constants.apiKey
      }&q=${city}`
    );
    let astronomyResponse = await astronomy.json();
    let astronomyResult = {
      sunrise: astronomyResponse.astronomy.astro.sunrise,
      sunset: astronomyResponse.astronomy.astro.sunset,
    };
    let currentData = {
      feelsLike: forcastResponse.current.feelslike_c,
      temp: forcastResponse.current.temp_c,
      windChill: forcastResponse.current.windchill_c,
      heatIndex: forcastResponse.current.heatindex_c,
      dewPoint: forcastResponse.current.dewpoint_c,
      condition: forcastResponse.current.condition.text,
      icon: forcastResponse.current.condition.icon,
      windSpeed: forcastResponse.current.wind_kph,
      pressure: forcastResponse.current.pressure_in,
      humidity: forcastResponse.current.humidity,
      day: forcastResponse.current.is_day,
      lastUpdated: forcastResponse.current.last_updated,
    };
    let result = [astronomyResult, currentData];
    console.log(astronomyResult, "astronomy");
    console.log(forcastResponse, "forcasttttttt");
    console.log(jsonResponse);
    return result;
  };
  let handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = async (e) => {
    console.log(city);
    setCity("");
    e.preventDefault();
    let newInfo = await getWeatherData();
    updateInfo(newInfo);
  };
  return (
    <>
      <div className="container">
        <h1>Search for the weather</h1>
        <form action="/" onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="City"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
          />
          <br />
          <br />
          <Button variant="outlined" type="submit">
            Search
          </Button>
        </form>
      </div>
    </>
  );
}
