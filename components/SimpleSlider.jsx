import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import gaming1 from "../public/carousel/gaming1.jpg";
import gaming2 from "../public/carousel/gaming2.png";
import gaming3 from "../public/carousel/gaming3.jpg";
import gaming4 from "../public/carousel/gaming4.jpg";
import styles from "../styles/SimpleSlider.module.css";

export default class Resizable extends Component {
  state = {
    display: true,
    width: 600,
    height: 600,
  };
  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={styles.container}>
        <p className={styles.p}>
          One Chinese Esperanto speaker described Esperanto as a linguistic
          handshake. When two people shake hands they both reach out halfway.
          When two people speak Esperanto they have both made the effort to
          learn a relatively easy, neutral language instead of one person making
          the huge effort to learn the other person’s difficult national
          language and the other person making no effort at all except to
          correct his/her interlocutor’s errors. ~ Sylvan Zaft
        </p>

        <div
          style={{
            width: this.state.width + "px",
            display: this.state.display ? "block" : "none",
          }}
        >
          <Slider {...settings}>
            <div>
              <Image src={gaming1} alt="green star photo" />
            </div>
            <div>
              <Image src={gaming2} alt="green star photo" />
            </div>
            <div>
              <Image src={gaming3} alt="green star photo" />
            </div>
            <div>
              <Image src={gaming4} alt="green star photo" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
