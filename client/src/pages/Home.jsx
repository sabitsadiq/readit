import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: "1",
      title: "The world need to respect Africa",
      desc: "As Ramadan approaches, we're organizing a visit to an orphanage to spread joy and  happiness to those in need. Your support, be it monetary or material, is important. Let's come together to make a difference.",
      img: "../assets/react.svg",
    },
    {
      id: "2",
      title: "The world need to respect Africa",
      desc: "As Ramadan approaches, we're organizing a visit to an orphanage to spread joy and  happiness to those in need. Your support, be it monetary or material, is important. Let's come together to make a difference.",
      img: "../assets/react.svg",
    },
    {
      id: "3",
      title: "The world need to respect Africa",
      desc: "As Ramadan approaches, we're organizing a visit to an orphanage to spread joy and  happiness to those in need. Your support, be it monetary or material, is important. Let's come together to make a difference.",
      img: "../assets/react.svg",
    },
    {
      id: "4",
      title: "The world need to respect Africa",
      desc: "As Ramadan approaches, we're organizing a visit to an orphanage to spread joy and  happiness to those in need. Your support, be it monetary or material, is important. Let's come together to make a difference.",
      img: "../assets/react.svg",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="img" />
            </div>
            <div className="content">
              <Link className="link" to={`post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read more...</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
