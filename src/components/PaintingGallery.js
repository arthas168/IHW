import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderParams from "../helpers/sliderParams";
import genPicture from "../helpers/genPicture";
import genOnePicture from "../helpers/genOnePicture";
import eatenApple from "../images/gallery/paintingPictures/eaten-apple-compressed.jpg";
import eatenApple1 from "../images/gallery/paintingPictures/eaten-apple1-compressed.jpg";
import colorfulApple from "../images/gallery/paintingPictures/colorful-apple-compressed.jpg";
import colorfulApple1 from "../images/gallery/paintingPictures/colorful-apple1-compressed.jpg";
import redApple from "../images/gallery/paintingPictures/red-apple-compressed.jpg";
import manyApples from "../images/gallery/paintingPictures/many-apples-compressed.jpg";
import squareApple from "../images/gallery/paintingPictures/square-apple-compressed.jpg";
import redApples from "../images/gallery/paintingPictures/red-apples-compressed.jpeg";
import tomatoApple from "../images/gallery/paintingPictures/tomato-apple-compressed.jpeg";
import darkblueApple from "../images/gallery/paintingPictures/darkblue-apple-compressed.jpeg";
import chessApples from "../images/gallery/paintingPictures/chess-apples-compressed.jpeg";
import halfApples from "../images/gallery/paintingPictures/half-apples-compressed.jpeg";
import bittenApple from "../images/gallery/paintingPictures/bitten-apple-compressed.jpeg";
import blueAndGreen from "../images/gallery/paintingPictures/blue-and-green-compressed.jpeg";
import frozenApple from "../images/gallery/paintingPictures/frozen-apple-compressed.jpeg";
import pear from "../images/gallery/paintingPictures/pear-compressed.jpeg";
import lips from "../images/gallery/paintingPictures/lips-compressed.jpeg";
import violin from "../images/gallery/paintingPictures/violin-compressed.jpeg";
import elcho from "../images/gallery/paintingPictures/elcho-compressed.jpg";
import bun from "../images/gallery/paintingPictures/bun-compressed.jpg";
import nakedGirlPainting from "../images/gallery/paintingPictures/naked-girl-compressed.jpg";
import underwear from "../images/gallery/paintingPictures/underwear-compressed.jpg";
import nakedGirlSkirt from "../images/gallery/paintingPictures/naked-girl-skirt-compressed.jpg";
import blackGirlBreast from "../images/gallery/paintingPictures/black-girl-breast-compressed.jpg";
import nakedGirlBlanket from "../images/gallery/paintingPictures/naked-girl-blanket-compressed.jpg";
import sleeping from "../images/gallery/paintingPictures/sleeping-compressed.jpg";
import stretch from "../images/gallery/paintingPictures/stretch-compressed.jpg";
import girlHorse from "../images/gallery/paintingPictures/girl-horse-compressed.jpg";
import piano from "../images/gallery/paintingPictures/piano-compressed.jpg";
import darkHorse from "../images/gallery/paintingPictures/dark-horse-compressed.jpg";
import smokingRed from "../images/gallery/paintingPictures/smoking-red-compressed.jpg";
import cat from "../images/gallery/paintingPictures/cat-compressed.jpg";
import afroGirl from "../images/gallery/paintingPictures/afro-girl-compressed.jpg";
import ship from "../images/gallery/paintingPictures/ship-compressed.jpg";
import pink from "../images/gallery/paintingPictures/pink-compressed.jpeg";
import yinyang from "../images/gallery/paintingPictures/yinyang-compressed.jpg";
import crying from "../images/gallery/paintingPictures/crying-compressed.jpeg";
import baby from "../images/gallery/paintingPictures/baby-compressed.jpeg";
import horo from "../images/gallery/paintingPictures/horo-compressed.jpeg";
import redWoman from "../images/gallery/paintingPictures/red-woman-compressed.jpg";
import smokingBlue from "../images/gallery/paintingPictures/smoking-blue-compressed.jpeg";
import MobilePaintingGallery from "./MobilePaintingGallery";

export default ({ isVisible, width }) => {
  const animation = isVisible ? "fade-in visible" : "invisible";
  const [isHovered, setIsHovered] = useState(false);

  return (
    width > 1119 ? 
    (<section id="painting-gallery">
      <span className="gallery-title">Paintings</span>

      <Slider {...sliderParams} className={`slider ${animation}`}>
        {genPicture(
          "eaten-apple",
          eatenApple,
          eatenApple1,
          `Project "Apple" (2015)`,
          isHovered,
          setIsHovered, width
        )}
        {genPicture(
          "colorful-apple",
          colorfulApple,
          colorfulApple1,
          `Project "Apple" (2015)`,
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture(
          "red-apple",
          redApple,
          `Project "Apple" (2015)`,
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture(
          "many-apples",
          manyApples,
          `Project "Apple" (2015)`,
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture(
          "square-apple",
          squareApple,
          `Project "Apple" (2015)`,
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture(
          "red-apples",
          redApples,
          `Project "Apple" (2015)`,
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture(
          "tomato-apple",
          tomatoApple,
          `Project "Apple" (2015)`,
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture(
          "darkblue-apple",
          darkblueApple,
          `Project "Apple" (2015)`,
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture(
          "chess-apples",
          chessApples,
          `Project "Apple" (2015)`,
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture(
          "half-apples",
          halfApples,
          `Project "Apple" (2015)`,
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture(
          "bitten-apple",
          bittenApple,
          `Project "Apple" (2015)`,
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture(
          "blue-and-green",
          blueAndGreen,
          `Project "Apple" (2015)`,
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture(
          "frozen-apple",
          frozenApple,
          `Project "Apple" (2015)`,
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture("pear", pear, "", isHovered, setIsHovered, width)}
        {genOnePicture("lips", lips, "Freuhmorgens - 4.00h (acril)", isHovered, setIsHovered)}
        {genOnePicture("violin", violin, "Kleine Nachtmusik (oil)", isHovered, setIsHovered, width)}
        {genOnePicture("elcho", elcho, "", isHovered, setIsHovered, width)}
        {genOnePicture("bun", bun, "", isHovered, setIsHovered, width)}
        {genOnePicture(
          "naked-girl-painting",
          nakedGirlPainting,
          "",
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture(
          "underwear",
          underwear,
          "",
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture(
          "naked-girl-skirt",
          nakedGirlSkirt,
          "",
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture(
          "black-girl-breast",
          blackGirlBreast,
          "",
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture(
          "naked-girl-blanket",
          nakedGirlBlanket,
          "",
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture(
          "sleeping",
          sleeping,
          "",
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture("stretch", stretch, "", isHovered, setIsHovered)}
        {genOnePicture(
          "girl-horse",
          girlHorse,
          "",
          isHovered,
          setIsHovered, width
        )}

        {genOnePicture("piano", piano, "", isHovered, setIsHovered)}
        {genOnePicture(
          "dark-horse",
          darkHorse,
          "",
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture(
          "smoking-red",
          smokingRed,
          "",
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture("cat", cat, "", isHovered, setIsHovered)}
        {genOnePicture(
          "afro-girl",
          afroGirl,
          "",
          isHovered,
          setIsHovered, width
        )}
        {genOnePicture("ship", ship, "", isHovered, setIsHovered, width)}
        {genOnePicture("pink", pink, "", isHovered, setIsHovered, width)}
        {genOnePicture("yinyang", yinyang, "", isHovered, setIsHovered, width)}
        {genOnePicture("crying", crying, "", isHovered, setIsHovered, width)}
        {genOnePicture("baby", baby, "", isHovered, setIsHovered, width)}
        {genOnePicture("horo", horo, "", isHovered, setIsHovered, width)}
        {genOnePicture(
          "red-woman",
          redWoman,
          "",
          isHovered,
          setIsHovered, width
        )}
         {genOnePicture(
          "smoking-blue",
          smokingBlue,
          "",
          isHovered,
          setIsHovered, width
        )}
      </Slider>
    </section>) : <MobilePaintingGallery/>
  );
};
