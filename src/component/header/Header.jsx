import React, { useState } from "react";
import { Button } from "../UI/Button";
import { Modal } from "../modal/Modal";

export const Header = ({ newMovie }) => {
  const [modal, setModal] = useState(false);

  const closeHandler = () => {
    setModal(false);
  };
  const addHandler = () => {
    setModal((prevState) => !prevState);
  };
  return (
    <div className="header">
      {modal ? <Modal newMovie={newMovie} closeHandler={closeHandler} /> : null}
      <h1 >Favorite Movie</h1>
      <Button  onClick={addHandler}>Add</Button>
    </div>
  );
};
