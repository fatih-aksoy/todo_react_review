import React, { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]); //! gelen itemleri dizi icinde tutucaz, eskileri ve yenileri

  function addItem() {
    if (!newItem) {
      alert("Enter an Item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000), //! there must be unique id for each item.
      value: newItem, //! value will come from input
    };
    setItems((oldItems) => [...oldItems, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id); //! birden 100 ekadar sayilar var. id 50 oldugunu dusunun. !==  olunca 50 disindaki tum sayilari alicak. geri kalanlari ekrana basicak.
    setItems(newArray);
  }

  return (
    <div className="App">
      <h1>Todo List app</h1>
      <input
        type="text"
        placeholder="add an item.."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}{" "}
              <button onClick={() => deleteItem(item.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

// 1.header
// 2.input and button
// 3.items
