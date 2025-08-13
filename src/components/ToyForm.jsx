import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  const [ name, setName ] = useState("");
  const [ image, setImage ] = useState("");

  async function handleCreate(e) {
    e.preventDefault();
    const n = name.trim();
    const i = image.trim();
    if (!n || !i) return;
    await onAddToy({ name: n, image: i });
    setName("");
    setImage("");
  }

  return (
    <div className="container">
      <form className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <button className="submit" onClick={handleCreate}>
          Create New Toy
        </button>
      </form>
    </div>
  );
}

export default ToyForm;
