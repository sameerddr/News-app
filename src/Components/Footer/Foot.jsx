import React, { useState, useEffect } from "react";
import "./Foot.css";
function Foot() {
  //   const current = new Date().toLocaleString();
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    const interval = setInterval(() => setTime(Date().toLocaleString()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="foot">
        <p className="rights">
          Copyrights are reserved @sameer.writes.70@gmail.com
        </p>
        <div className="date">
          <h4>Current Date & Time is {time}</h4>
        </div>
        <div className="iconfoot">
          <a href="">
            <i className="fa-brands fa-facebook-messenger"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Foot;
