// import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/header";
import React, { useState, useEffect } from "react";

function App() {
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://imgurbackend.onrender.com/post`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        // console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <>
      <Header />
      <section className="feedSection">
        <div className="row">
          {Posts.map((data, index) => (
            <div className="column" key={index}>
              <Card key={data.id} title={data.title} imgPath={data.imgPath} />
            </div>
          ))}
        </div>
        {/* <div>
          {Posts.map((post) => {
            return (
              <div className="post-card" key={post.id}>
                <h2 className="post-title">{post.title}</h2>
                <div className="button">
                  <div className="delete-btn">Delete</div>
                </div>
              </div>
            );
          })}
        </div> */}
      </section>
    </>
  );
}

export default App;
