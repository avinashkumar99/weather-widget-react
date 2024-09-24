import "./InfoBox.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import { useState } from "react";
export default function InfoBox({ weather }) {
  const [error, setError] = useState(false);
  const conditionObj = [
    { mist: "../public/mist.jpg" },
    { sunny: "../public/day.jpg" },
    { cloudy: "../public/cloudy.jpeg" },
    { ice: "../public/ice.jpeg" },
    { rainy: "../public/rainy.avif" },
    { rain: "../public/rainy.avif" },
    { snow: "../public/snow.avif" },
  ];
  let conditionArr = [];
  let i = 0;
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day, date;
  let sunrise, sunset;
  try {
    if (weather.length !== 0) {
      date = new Date(weather[1].lastUpdated.slice(0, 10));
      day = daysOfWeek[date.getDay()];
      sunrise = weather[0].sunrise;
      sunset = weather[0].sunset;
      console.log(weather[1], " current data ");
      console.log(sunrise, "sunrise");
      console.log(weather[1].lastUpdated);
      setTimeout(() => {
        console.log("wait for 1 second");
      }, 1000);
      conditionArr = weather[1].condition.toLowerCase().split(" ");
      console.log(conditionArr);
    }
  } catch (err) {
    console.log(err);
    setError(true);
  }

  return (
    <>
      {weather.length !== 0 ? (
        <div className="InfoBox">
          {conditionArr.map((item) => {
            for (let i = 0; i < conditionObj.length; i++) {
              if (item === Object.keys(conditionObj[i])[0]) {
                return (
                  <div
                    key={i++}
                    className="one"
                    style={{
                      backgroundImage: `url(${conditionObj[i][item]})`,
                    }}
                  >
                    <div className="one-one day">
                      <p id="city-name">
                        {weather[1].name}, {weather[1].country}
                      </p>
                      <div className="day-class">{day}</div>
                      <p id="month">
                        {months[date.getMonth()]}&nbsp;
                        {weather[1].lastUpdated.slice(0, 4)}
                        <br></br>
                        <br></br>
                        {weather[1].temp}&deg; C
                      </p>
                    </div>
                    <div className="one-two day">
                      <div className="desc-class" id="desc-id">
                        It Feels like
                      </div>
                      <div className="desc-class">
                        {weather[1].feelsLike}&deg; C
                      </div>
                      <div className="desc-class">{weather[1].condition}</div>
                    </div>
                    <div className="one-four day">
                      <p className="info">
                        Dew Point : {weather[1].dewPoint}&deg; C
                      </p>
                      <p className="info">
                        Heat Index : {weather[1].heatIndex}&deg; C
                      </p>
                      <p className="last-updated">
                        Last Updated: <br></br>
                        {weather[1].lastUpdated}
                      </p>
                    </div>
                    <div className="one-five day">
                      <div className="sun-time">
                        {sunrise}{" "}
                        <WbSunnyIcon
                          sx={{ fontSize: 65, ml: 2 }}
                          style={{ color: "#ffde21" }}
                        />
                      </div>
                    </div>
                    <div className="one-six day">
                      <p className="info">Humidity : {weather[1].humidity}%</p>
                      <p className="info">
                        Pressure : {weather[1].pressure} in
                      </p>
                      <p className="info">
                        Wind Speed : {weather[1].windSpeed} kph
                      </p>
                      <p className="info">
                        Wind Chill : {weather[1].windChill}&deg; C
                      </p>
                    </div>
                    <div className="one-seven day">
                      <div className="sun-time">
                        {sunset}
                        <WbTwilightIcon
                          sx={{ fontSize: 65, ml: 2 }}
                          style={{ color: "orange" }}
                        />
                      </div>
                    </div>
                  </div>
                );
              }
            }
          })}

          <div className="two">
            <div className="two-one">
              <h2>Today</h2>
            </div>
            <div className="two-two">
              <div className="max-n-min">
                <h3>Max</h3>
                <p>{weather[2][0].maxTemp}&deg; C</p>
              </div>
            </div>
            <div className="two-three">
              <div className="max-n-min">
                <h3>Min</h3>
                <p>{weather[2][0].minTemp}&deg; C</p>
              </div>
            </div>
          </div>
          <div className="three">
            <div className="two-one">
              <h2>Tomorrow</h2>
            </div>
            <div className="two-two">
              <div className="max-n-min">
                <h3>Max</h3>
                <p>{weather[2][1].maxTemp}&deg; C</p>
              </div>
            </div>
            <div className="two-three">
              <div className="max-n-min">
                <h3>Min</h3>
                <p>{weather[2][1].minTemp}&deg; C</p>
              </div>
            </div>
          </div>
          <div className="seven">
            {weather[2].map((obj) => {
              let date = new Date(obj.date);
              return (
                <div key={i++} className="seven-one">
                  <h2>{daysOfWeek[date.getDay()]}</h2>
                  <div>
                    <p>
                      <b>Max temp:</b> <br></br>{" "}
                      <p id="last">{obj.maxTemp}&deg; C</p>
                    </p>
                    <p>
                      <b>Min temp:</b> <br></br>{" "}
                      <p id="last">{obj.minTemp}&deg; C</p>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      );
    </>
  );
}
