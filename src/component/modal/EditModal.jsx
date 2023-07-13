
import React, { useState } from "react";
import { Button } from "../UI/Button";

export const EditModal = ({ handlerClous, updateMovie,el }) => {
  const [title, setTitle] = useState(el.title);
  const [rating, setRating] = useState(el.rating);
  const [img, setImg] = useState(el.img);

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
      id: el.id
    };
    setImg("");
    setRating("");
    setTitle("");

    updateMovie(data);
    handlerClous()
  };

  return (
    <div>
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
      <Button  onClick={handlerClous}>CANSEL</Button>
      <Button  onClick={addHandler}>ADD</Button>
    </div>
  );
};
export default EditModal