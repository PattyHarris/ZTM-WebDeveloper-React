import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  /* Testing ErrorBoundary
  if (true) {
    throw new Error("Ouch!");
  }*/

  return (
    <div>
      {robots.map((robot, index) => {
        return (
          <Card
            key={index}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
