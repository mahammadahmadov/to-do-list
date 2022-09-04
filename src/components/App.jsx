import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

function App() {
  const [list, setList] = useState([]);

  function addItem(input) {
    setList((prevItems) => [...prevItems, input]);
  }

  function deleteItem(id) {
    setList((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItem={addItem} />
      <div>
        <ul>
          {list.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              onChecked={deleteItem}
              item={item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
