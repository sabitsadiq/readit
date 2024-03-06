import React from "react";

const Menu = () => {
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
    <div className="menu">
      <h1>Other post that you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt={post.title} />

          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
