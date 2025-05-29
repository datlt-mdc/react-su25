import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { MyInfo, pi } from "./components/myInfo";
import DataList from "./components/dataList";
import { Counter } from "./components/counter";
import { FormInput } from "./components/formInput";
import { getAllStudents } from "./api/student";
import { Link } from "react-router";

function App() {
  const [isDarkMode, setDarkMode] = useState(true); //

  console.log("dark mode", isDarkMode); ///
  // JSX
  return (
    // React.createElement("h1",null,"Hello world")

    <div className="App">
      <Link to={"/data-list"}> Go to student list </Link>

      <header
        style={
          isDarkMode == true // dua vao darkmode de sua theme
            ? {
                backgroundColor: "#282c34", // theme toi
                color: "white",
              }
            : {
                backgroundColor: "white", // theme sang
                color: "#282c34",
              }
        }
        onClick={() => {
          setDarkMode(!isDarkMode);
          console.log("Current theme " + isDarkMode);
          // alert("Change theme")
        }} //
        className="App-header"
      >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <br />
      <FormInput />
      <Counter />
      <MyInfo />
    </div>
  );
}

export default App;
