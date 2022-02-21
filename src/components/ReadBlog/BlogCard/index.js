import Slider from "react-slick";
import {
  Card,
  CardImage,
  CardDescription,
  CardTitle,
  CardTitleText,
  CardPeople,
  CardPeopleImage,
  CardPeopleTitle,
} from "./styles";

import leftArrow from "../../../assets/left-arrow.svg";
import { readBlog } from "../../../services/read-blog";
import React from "react";

export const Cards = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={leftArrow.src} 
    alt="prevArrow" {...props}
     />
  );

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    rows: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 524,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    nextArrow: <SlickArrowLeft />,
  };

  return (
    <Slider {...settings}>
      {readBlog.map(({ id, image, title, people, name }) => {
        return (
          <Card key={id}>
            <CardImage src={image} />
            <CardDescription>
              <CardTitle>
                <CardTitleText>{title}</CardTitleText>
              </CardTitle>
              <CardPeople>
                <CardPeopleImage src={people} alt={name} />
                <CardPeopleTitle>{name}</CardPeopleTitle>
              </CardPeople>
            </CardDescription>
          </Card>
        );
      })}
    </Slider>
  );
}