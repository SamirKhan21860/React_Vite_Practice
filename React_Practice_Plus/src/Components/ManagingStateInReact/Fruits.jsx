import React from "react";

const Fruits = ({ fruits }) => {
  return (
    <>
      <div>
        {fruits.map((fruit) => (
          <p key={fruit.id}>{fruit.fruitName}</p>
        ))}
      </div>
    </>
  );
};

export default Fruits;
