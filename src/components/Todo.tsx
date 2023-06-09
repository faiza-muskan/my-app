import React from "react";

const Todo: React.FC<{ items: string[] }> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
