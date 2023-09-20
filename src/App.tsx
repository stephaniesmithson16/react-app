import ListGroup from "./components/ListGroup";
import { MouseEvent } from "react";

function App() {
  let items = ["New York", "San Francisco", "Chicago", "London", "Paris"];
  let selectedIndex = -1;

  const getMessage = () => {
    return items.length === 0 && <p>No items found</p>;
  };

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
