import React, { useState } from "react";

function ToyForm({onAddToy}) {

  const [formData, setFormData] = useState({
    name: "",
    image:"",
    likes: 0
  })
  const [image, setImage] = useState("")

  const handleChange = (e) => {

    setFormData( {
      ...formData,
      [e.target.name]: e.target.value, 
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("hey")
    onAddToy(formData)

  }
  
 
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          value={formData.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
