import React from "react";
import "./CardDesign.css";
import { useHistory } from "react-router-dom";

const CardDesign = (props) => {
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
    <div className="CardDesign">
      <img src={props.post.acf.thumbnail} onClick={handleClick} />
      <h3 onClick={handleClick}>{props.post.title.rendered}</h3>
      <p onClick={handleCatClick}>
        {categories.find((x) => x.id === props.post.categories[0]).name}
      </p>
      <div className="date">{props.post.date.slice(0, 10)}</div>
    </div>
  );
};

export default CardDesign;
