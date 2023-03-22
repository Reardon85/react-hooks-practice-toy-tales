import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onIncreaseLikes, onDeleteToy}) {

  const toysArray = toys.map((toy) => {
    return <ToyCard key={toy.id} {...toy} onDeleteToy={onDeleteToy} onIncreaseLikes={onIncreaseLikes} />
  })


  return (
    <div id="toy-collection">{/* Render the collection of ToyCards */}
    {toysArray}
    </div>
  );
}

export default ToyContainer;
