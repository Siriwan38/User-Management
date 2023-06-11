import React from "react";
import "./About.css";
import Breadcrumb from "../components/Breadcrumbs";

let bannerData = {
  title: "Data Analyst",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam velit iure aut delectus sapiente omnis adipisci expedita ipsam, possimus impedit minus vero dolor? Reprehenderit eveniet, minus pariatur aperiam voluptate labore?",
};

const paths = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
];

function Banner() {
  return (
    <div className="about-bg">
      <Breadcrumb paths={paths} />
      <div className="container">
        <div className="about-con">
          <div className="about-text">
            <h1>{bannerData.title}</h1>
            <p>{bannerData.desc}</p>
            <a href="#" className="about-btn">
              Blackpink in your area
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
