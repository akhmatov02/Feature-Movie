import React, { useState } from "react";
import { Button } from "../UI/Button";

export const Modal = ({ newMovie, closeHandler }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [img, setImg] = useState("");

  const imgHandler = (e) => {
    setImg(e.target.value);
  };
  const ratingHandler = (e) => {
    setRating(e.target.value);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const addHandler = () => {
    const data = {
      title,
      img,
      rating,
      id: Math.random(),
    };
    setImg("");
    setRating("");
    setTitle("");

    newMovie(data);
  };

  return (
    <div className="outDiv">
      <div className="inModal">
      <input
        type="text"
        placeholder={"text"}
        value={title}
        onChange={titleHandler}
        label={"text"}
      />
      <input
        type="number"
        placeholder={"number"}
        value={rating}
        onChange={ratingHandler}
        label={"number"}
      />
      <input
        type="text"
        placeholder={"url"}
        value={img}
        onChange={imgHandler}
        label={"url"}
      />
      <Button onClick={closeHandler}>DELETE</Button>
      <Button onClick={addHandler}>ADD</Button>
      </div>
    </div>
  );
};
