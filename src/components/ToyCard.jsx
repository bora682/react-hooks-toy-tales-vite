import React from "react";

function ToyCard({ toy, onLike, onDonate }) {
  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      {/* NOTE: trailing space after "Likes" is required by tests */}
      <p>{(toy.likes ?? toy.Likes ?? 0)} Likes </p>
      <button className="like-btn" onClick={onLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={onDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
