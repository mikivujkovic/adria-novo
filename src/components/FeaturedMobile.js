import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./FeaturedMobile.css";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 124%;
  margin-left: -12%;
`;

const Left = styled.div`
  display: grid;
  justify-content: start;
  align-items: space-evenly;
  height: 500px;
  position: relative;
  width: 100%;
  padding: 50px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

const Up = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 250px;
  padding: 50px;
`;

const Down = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 250px;
  padding: 50px;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-position: center;
  z-index: -1;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`;

const PostDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  height: 100%;
  margin: 50 0;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.6) 75%,
    rgba(0, 0, 0, 0.9) 100%
  );
`;

const Category = styled.div`
  font-size: 1em;
  color: white;
  background-color: #00adee;
  text-transform: uppercase;
  align-self: flex-start;
  padding: 5px;
  margin-left: 20px;
  margin-top: 10px;
`;

const Title = styled.div`
  font-size: 1.6rem;
  color: white;
  margin-top: auto;
  align-self: flex-start;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const Date = styled.div`
  font-size: 0.64rem;
  color: white;
  text-transform: uppercase;
  align-self: flex-start;
`;

const dotBack = styled.div`
  background-color: "white";
  border: none;
`;

const FeaturedMobile = (props) => {
  const tackice = (props) => {
    const {
      currentSlide,
      totalSlides,
      visibleSlides,
      disableActiveDots,
      showAsSelectedForCurrentSlideOnly,
      renderDots,
    } = props;

    if (renderDots) {
      const { renderDots: _, ...renderProps } = this.props;
      return renderDots(renderProps);
    }

    const dots = [];
    for (let i = 0; i < totalSlides; i += 1) {
      const multipleSelected =
        i >= currentSlide && i < currentSlide + visibleSlides;
      const singleSelected = i === currentSlide;
      const selected = showAsSelectedForCurrentSlideOnly
        ? singleSelected
        : multipleSelected;
      const slide =
        i >= totalSlides - visibleSlides ? totalSlides - visibleSlides : i;
      dots.push(
        <Dot
          key={i}
          slide={slide}
          selected={selected}
          disabled={disableActiveDots ? selected : false}
          className="dotClass"
        >
          {selected ? <dotBack>⚫</dotBack> : <dotBack>⚪</dotBack>}
        </Dot>
      );
    }
    return dots;
  };

  const desWidth = window.innerWidth * 0.9;
  const desHeight = desWidth * 0.66;
  return (
    <>
      <Container>
        <CarouselProvider
          naturalSlideWidth={desWidth}
          naturalSlideHeight={200}
          totalSlides={3}
          infinite={true}
          isPlaying={true}
          interval={5000}
        >
          <Slider>
            <Slide
              index={0}
              style={{
                backgroundImage: "url(" + props.post1.acf.thumbnail + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Post post={props.post1} />
            </Slide>
            <Slide
              index={1}
              style={{
                backgroundImage: "url(" + props.post2.acf.thumbnail + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Post post={props.post2} />
            </Slide>
            <Slide
              index={2}
              style={{
                backgroundImage: "url(" + props.post3.acf.thumbnail + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Post post={props.post3} />
            </Slide>
          </Slider>
          <DotGroup renderDots={tackice} />
        </CarouselProvider>
      </Container>
    </>
  );
};

const Post = (props) => {
  let history = useHistory();

  const categories = [
    { id: 25, name: "Info" },
    { id: 26, name: "Politika" },
    { id: 5, name: "Kultura" },
    { id: 27, name: "Tehno" },
    { id: 7, name: "Sport" },
    { id: 28, name: "Magazin" },
  ];

  const handleClick = () => {
    history.push(`/post/${props.post.id}`);
  };

  const handleCatClick = () => {
    history.push(`/category/${props.post.categories[0]}`);
  };
  return (
    <PostDiv>
      <Category onClick={handleCatClick}>
        {categories.find((x) => x.id === props.post.categories[0]).name}
      </Category>
      <Title onClick={handleClick}>{props.post.title.rendered}</Title>
    </PostDiv>
  );
};

export default FeaturedMobile;
