import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {

    fetch("http://localhost:3001/toys")
    .then((resp) => resp.json())
    .then((data) => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy ( toyObj) {

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(toyObj)
    })
    .then((resp) => resp.json())
    .then((data) => {
      setToys([...toys, data])
    })
  }

  function deleteToy (id) {

    const newArray = toys.filter((toy) => id !== toy.id)

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    .then(setToys(newArray))


  }

  function increaseLikes (id, likes) {

    const newArray = toys.map((toy) => {
      if(id === toy.id){
        ++toy.likes
      }
      return toy
    })
    
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: likes+1
      })
    })
    .then(setToys(newArray))
    


  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer  toys={toys} onDeleteToy={deleteToy} onIncreaseLikes={increaseLikes}/>
    </>
  );
}

export default App;
