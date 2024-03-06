import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="" alt="image" />
        <div className="user">
          <img src="" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src="" alt="" />
            </Link>
            <img src="" alt="" />
          </div>
        </div>
        <h1>The world need to respect Africa</h1>
        <p>
          As Ramadan approaches, we're organizing a visit to an orphanage to
          spread joy and happiness to those in need. Your support, be it
          monetary or material, is important. Let's come together to make a
          difference.As Ramadan approaches, we're organizing a visit to an
          orphanage to spread joy and happiness to those in need. Your support,
          be it monetary or material, is important. Let's come together to make
          a difference.As Ramadan approaches, we're organizing a visit to an
          orphanage to spread joy and happiness to those in need. Your support,
          be it monetary or material, is important. Let's come together to make
          a difference.As Ramadan approaches, we're organizing a visit to an
          orphanage to spread joy and happiness to those in need. Your support,
          be it monetary or material, is important. Let's come together to make
          a difference.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
