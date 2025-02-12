import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import gaming1 from "../public/carousel/gaming1.jpg";
import gaming2 from "../public/carousel/gaming2.png";
import gaming3 from "../public/carousel/gaming3.jpg";
import gaming4 from "../public/carousel/gaming4.jpg";
import gaming5 from "../public/carousel/gaming5.png";
import styles from "../styles/SimpleSlider.module.css";

export default class Resizable extends Component {
  state = {
    display: true,
    width: 300,
    height: 300,
  };
  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={styles.container}>
        <div
          style={{
            width: this.state.width + "px",
            display: this.state.display ? "block" : "none",
          }}
        >
          <Slider {...settings}>
            <div>
              <Image src={gaming3} 
              width={500}
              height={500} alt="Android photo" />
            </div>
            <div>
              <Image src={gaming5}
              width={500}
              height={500}
              alt="IOSphoto" />
            </div>
            <div>
              <Image src={gaming1}
              width={500}
              height={500}
              alt="XBox photo" />
            </div>
            <div>
              <Image src={gaming2} 
              width={500}
              height={500}
              alt="Playstation photo" />
            </div>
            <div>
              <Image src={gaming4} 
              width={500}
              height={500}
              alt="Board Game photo" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
