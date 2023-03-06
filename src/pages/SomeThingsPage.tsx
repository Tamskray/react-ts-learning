import React from "react";
import Card, { CardVariant } from "../components/Card";
import EventsExample from "../components/EventsExample";

const SomeThingsPage = () => {
  return (
    <>
      <EventsExample />
      <Card
        onClick={(num) => console.log("click", num)}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>Button</button>
        <div>Hello TS</div>
      </Card>
    </>
  );
};

export default SomeThingsPage;
