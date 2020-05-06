import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 1024px;
`;

const Left = styled.div`
  display: grid;
  justify-content: start;
  align-items: space-evenly;
  height: 500px;
  position: relative;
  width: 100%;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.6) 75%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url(${(props) => props.img});
  background-position: center;
  background-size: cover;
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
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.6) 75%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  height: 250px;
  padding: 50px;
`;

const Down = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.6) 75%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-color: red;
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
`;

const Category = styled.div`
  font-size: 1em;
  color: white;
  background-color: #00adee;
  text-transform: uppercase;
  align-self: flex-start;
  padding: 5px;
`;

const Title = styled.div`
  font-size: 1.6rem;
  color: white;
  margin-top: auto;
  align-self: flex-start;
`;

const Date = styled.div`
  font-size: 0.64rem;
  color: white;
  text-transform: uppercase;
  align-self: flex-start;
`;

const Featured1 = (props) => {
  return (
    <>
      <Container>
        <Left img={props.post1.acf.thumbnail}>
          <Post post={props.post1} />
        </Left>
        <Right>
          <Up img={props.post2.acf.thumbnail}>
            <Post post={props.post2} />
          </Up>
          <Down img={props.post3.acf.thumbnail}>
            <Post post={props.post3} />
          </Down>
        </Right>
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
      <Date>{props.post.date.slice(0, 10)}</Date>
    </PostDiv>
  );
};

export default Featured1;
