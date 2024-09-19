import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css";
export default function SearchBox() {
  const [city, setCity] = useState("");
  let handleChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>Search for the weather</h1>
        <form action="/">
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
