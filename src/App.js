import React, { useState } from "react";
import "./App.css";
import TodoList from "./conponent/TodoList";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    if(inputList < 1){
      alert('Please add the items')
    }
    else{
      setItems((oldItems) => {
        return [...oldItems, inputList];
      });
      setInputList("");
    }
    
  };

  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  const RemoveAddData = () => {
    setItems([])
  }
  return (
    <React.Fragment>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={inputList}
            onChange={itemEvent}
          />
          

          <button className="Add" onClick={listOfItems}>+</button>
         

          <ol>
            {items.map((itemval, index) => {
              return (
                <TodoList
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                  text={itemval}
                />
              );
            })}
          </ol>
          {items.length >= 1 && <button className="RemoveData" onClick={RemoveAddData}>Remove All</button>}
          
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
