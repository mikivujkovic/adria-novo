import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const PostDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  height: 100%;
  margin: 50 0;
  transition: transform 0.2s; /* Animation */
  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  z-index: -1;
  height: 200px;
  box-shadow: 1px 1px 21px 3px rgba(0, 0, 0, 0.78);
  -webkit-box-shadow: 1px 1px 21px 3px rgba(0, 0, 0, 0.78);
  -moz-box-shadow: 1px 1px 21px 3px rgba(0, 0, 0, 0.78);
`;

const Category = styled.div`
  font-size: 1em;
  color: #384955;
  background-color: white;
  text-transform: uppercase;
  align-self: flex-start;
  padding: 5px;
  border-bottom: 5px solid #00adee;
  margin-top: -20px;
  margin-left: 10px;
`;

const Title = styled.div`
  font-size: 1.6rem;
  color: #384955;
  margin-top: 5px;
  align-self: flex-start;
  margin-left: 10px;
  line-height: 80%;
  text-align: left;
`;

const PostCardJovo = (props) => {
  return (
    <>
      <Post post={props.post} />
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
      <Image src={props.post.acf.thumbnail} />
      <Category onClick={handleCatClick}>
        {categories.find((x) => x.id === props.post.categories[0]).name}
      </Category>
      <Title onClick={handleClick}>{props.post.title.rendered}</Title>
    </PostDiv>
  );
};

export default PostCardJovo;
