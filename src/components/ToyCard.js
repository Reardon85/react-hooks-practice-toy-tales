import React from "react";

function ToyCard({id, name, image, likes, onDeleteToy, onIncreaseLikes}) {
  console.log(image)

  const handleDelete = () => {

    onDeleteToy(id)

  }

  const handleLike = () => {
    onIncreaseLikes(id, likes)
    console.log("hey man")
    

  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
