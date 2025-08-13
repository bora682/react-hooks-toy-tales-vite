import React, { useEffect, useState } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API = "http://localhost:3001/toys";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [ toys, setToys ] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch(API);
      const data = await res.json();
      setToys(data);
    }
    load();
  }, []);

  async function handleLike(id) {
    const current = toys.find((t) => t.id === id);
    if (!current) return;
    const res = await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: current.likes + 1 }),
    });
    const updated = await res.json();
    setToys((prev) => prev.map((t) => (t.id === id ? updated : t)));
  }

  async function handleDonate(id) {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    setToys((prev) => prev.filter((t) => t.id !== id));
  }  

  async function handleAddToy({ name, image }) {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, image, likes: 0 }),
    });
    const created = await res.json();
    setToys((prev) => [...prev, created]);
  }  
  
    function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onLike={handleLike} onDonate={handleDonate} />
    </>
  );
}

export default App;
