import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [profile, SetProfile] = useState([]);

  useEffect(() => {
    const Profiles = async () => {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      SetProfile(data);
      console.log(data);
    };
    Profiles();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Github Profiles</h1>
        <div className="row">
          {profile.map((p) => {
            return (
              <div class="card" style={{width : "18rem" , margin : "20px"}}>
                <img src={p.avatar_url} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                      {p.login}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
