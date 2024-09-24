import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "./SearchBox.css";
import constants from "../constant";
export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  let jsonResponse;
  console.log(constants.apiUrl);
  const realtime = "/current.json";
  const getWeatherData = async () => {
    try {
      let forcast = await fetch(
        `${constants.apiUrl + "/forecast.json"}?key=${
          constants.apiKey
        }&q=${city}&days=7`
      );
      if (!forcast.ok) {
        throw new Error("failed to fetch forcast");
      }

      let forcastResponse = await forcast.json();

      let astronomy = await fetch(
        `${constants.apiUrl + "/astronomy.json"}?key=${
          constants.apiKey
        }&q=${city}`
      );

      if (!astronomy.ok) {
        throw new Error("failed to fetch astronomy data");
      }

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
        country: forcastResponse.location.country,
        name: forcastResponse.location.name,
      };
      let forecastData = [
        {
          date: forcastResponse.forecast.forecastday[0].date,
          maxTemp: forcastResponse.forecast.forecastday[0].day.maxtemp_c,
          minTemp: forcastResponse.forecast.forecastday[0].day.mintemp_c,
        },
        {
          date: forcastResponse.forecast.forecastday[1].date,
          maxTemp: forcastResponse.forecast.forecastday[1].day.maxtemp_c,
          minTemp: forcastResponse.forecast.forecastday[1].day.mintemp_c,
        },
        {
          date: forcastResponse.forecast.forecastday[2].date,
          maxTemp: forcastResponse.forecast.forecastday[2].day.maxtemp_c,
          minTemp: forcastResponse.forecast.forecastday[2].day.mintemp_c,
        },
        {
          date: forcastResponse.forecast.forecastday[3].date,
          maxTemp: forcastResponse.forecast.forecastday[3].day.maxtemp_c,
          minTemp: forcastResponse.forecast.forecastday[3].day.mintemp_c,
        },
        {
          date: forcastResponse.forecast.forecastday[4].date,
          maxTemp: forcastResponse.forecast.forecastday[4].day.maxtemp_c,
          minTemp: forcastResponse.forecast.forecastday[4].day.mintemp_c,
        },
        {
          date: forcastResponse.forecast.forecastday[5].date,
          maxTemp: forcastResponse.forecast.forecastday[5].day.maxtemp_c,
          minTemp: forcastResponse.forecast.forecastday[5].day.mintemp_c,
        },
        {
          date: forcastResponse.forecast.forecastday[6].date,
          maxTemp: forcastResponse.forecast.forecastday[6].day.maxtemp_c,
          minTemp: forcastResponse.forecast.forecastday[6].day.mintemp_c,
        },
      ];
      let result = [astronomyResult, currentData, forecastData];
      console.log(astronomyResult, "astronomy");
      console.log(forcastResponse, "forcasttttttt");
      console.log(jsonResponse);

      return result;
    } catch (error) {
      setError(error);
    }
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
        <h1>
          Search the <span style={{ color: "maroon" }}>Weather</span>
        </h1>
        <form action="/" onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="City"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
            sx={{ width: "60%" }}
            className="btn"
          />
          <Button variant="contained" type="submit" className="btn">
            <SearchIcon /> &nbsp; Search
          </Button>
        </form>
        {error.length && <p>{error}</p>}
      </div>
    </>
  );
}
