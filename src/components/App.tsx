import { useState } from "react";
import ListGroup from "./ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Chicago", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
