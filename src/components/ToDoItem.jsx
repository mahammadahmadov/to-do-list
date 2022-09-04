import React, { useState } from "react";

function ToDoItem(props) {
  return (
    <li
      onClick={() => {
        return props.onChecked(props.id);
      }}
    >
      {props.item}
    </li>
  );

  // const [clicked, setClicked] = useState(false);

  // function handleClick(){

  //   setClicked(prevVal => {
  //     return !prevVal;
  //   })

  //   if(clicked===false){
  //     setClicked(true);
  //   }
  //   else{
  //     setClicked(false);
  //   }
  // }

  //   return <li style={{textDecoration: clicked ? "line-through" : "none"}} onClick={handleClick}>{props.item}</li>;

  // }
}

export default ToDoItem;
