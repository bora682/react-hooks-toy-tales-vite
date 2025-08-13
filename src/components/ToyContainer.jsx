import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onLike, onDonate }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard 
          key={toy.id} 
          toy={toy} 
          onLike={() => onLike(toy.id)} 
          onDonate={() => onDonate(toy.id)}
           />
      ))}
    </div>
  );
}

export default ToyContainer;
