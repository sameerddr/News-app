import axios from "axios";
import React, { useState, useEffect } from "react";

import Like from "./Like";
import Comment from "./Comment";
import Loader from "./Loader";

import "./Home.css";

function Home(props) {
  const [data, setData] = useState([]);
  const [loader, setloader] = useState(false);

  const getapi = async () => {
    const apiData = await axios.get(
      "https://newsapi-z4r7.onrender.com/news?q=everything"
    );
    setData(apiData.data.articles);
    setloader(true);
    console.log(apiData.data.articles);
  };

  useEffect(() => {
    getapi();
  }, []);

  const handleremove = (url) => {
    const removedata = data.filter((data) => data.url !== url);
    setData(removedata);
  };

  return (
    <>
      <div className="data">
        {loader ? (
          <>
            {data
              .filter((val) => {
                if (props.part == "") {
                  return val;
                } else if (
                  val.title.toLowerCase().startsWith(props.part.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((item) => (
                <div className="newsbox" key={item.url}>
                  <div className="box">
                    <div className="boxes">
                      <div className="p1">
                        <img
                          src={item.urlToImage}
                          alt="No Image For this Post"
                          className="postimg"
                        />
                        <h3 className="title">{item.title}</h3>
                      </div>
                      <h4 className="author"> Author :: {item.author} </h4>
                      <p className="des">
                        <h4>Description :: </h4>
                        {item.description}{" "}
                        <button className="url">
                          <a href={item.url}>Read More</a>
                        </button>
                      </p>
                      <p className="pub">
                        <p>Publishing Time ::</p> {item.publishedAt}
                      </p>
                      <div className="list">
                        <button
                          onClick={() => handleremove(item.url)}
                          className="remove">
                          Remove
                        </button>
                        <Like />
                      </div>
                      <Comment />
                    </div>
                  </div>
                </div>
              ))}
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

export default Home;
