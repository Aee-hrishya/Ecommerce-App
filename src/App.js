import "./App.css";
import Card from "./Components/Card.jsx";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jeans",
    },
    {
      id: 3,
      title: "Trousers",
    },
    {
      id: 4,
      title: "Men's",
    },
    {
      id: 5,
      title: "Women's",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Card item={category.title} />
      ))}
    </div>
  );
};

export default App;
