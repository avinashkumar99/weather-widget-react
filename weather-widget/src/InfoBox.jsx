import "./InfoBox.css";

export default function InfoBox({ weather }) {
  let sunrise, sunset;
  if (weather.length !== 0) {
    sunrise = weather[0].sunrise;
    sunset = weather[0].sunset;
    console.log(weather[1], " current data ");
    console.log(sunrise, "sunrise");
    setTimeout(() => {
      console.log("wait for 1 second");
    }, 1000);
  }

  // const sunriseDate = new Date(weather.sys.sunrise * 1000);
  // const sunriseTime = sunriseDate.toLocaleTimeString("en-IN");

  return (
    <>
      <div className="InfoBox">
        <div className="one">
          <div className="one-one">one</div>
          <div className="one-two">Sunrise : {sunrise} </div>
          <div className="one-three">Sunset : {sunset}</div>
          <div className="one-four">Four</div>
          <div className="one-five">Five</div>
          <div className="one-six">Six</div>
          <div className="one-seven">Six</div>
        </div>
        <div className="two">
          <div className="two-one"></div>
          <div className="two-two"></div>
          <div className="two-three"></div>
        </div>
        <div className="three">
          <div className="two-one"></div>
          <div className="two-two"></div>
          <div className="two-three"></div>
        </div>
        {/* <div className="four">Four</div> */}
        {/* <div className="five">Five</div> */}
        {/* <div className="six">Six</div> */}
        <div className="seven">
          <div className="seven-one"></div>
          <div className="seven-one"></div>
          <div className="seven-one"></div>
          <div className="seven-one"></div>
          <div className="seven-one"></div>
          <div className="seven-one"></div>
          <div className="seven-one"></div>
        </div>
      </div>
    </>
  );
}
