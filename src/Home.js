import React, { useState } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";


function Home() {
  const [state] = useState({
    title: "Hi I'm Hanan Ibrahim",
  });
  return (
    <div  className="home">
      <div className="home-intro">
        <h1>
          <div className="title">{state.title}</div>
        </h1>
        <div className="text">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "I'm a frontend developer",
                "I'm a reader",
                "I'm a tech Enthusiast",
              ],
            }}
          />
          <h2>Welcome to my website</h2>
        </div>
      </div>
      {/* <div className="home-img">
        <img className="laptop-img" src={state.image} alt="laptop" />
      </div> */}
    </div>
  );
}

export default Home;
