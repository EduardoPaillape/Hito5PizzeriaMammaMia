import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import pizzas from "../data/pizzas";

const Home = () => {
  return (
    <div className="container my-5">
      <Header />
      <div className="d-flex flex-wrap justify-content-center">
        {pizzas.map((pizza, index) => (
          <CardPizza
            key={index}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

