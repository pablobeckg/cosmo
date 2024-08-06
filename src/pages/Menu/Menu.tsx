import { useState } from "react";
import { IProduct, menu } from "../../components/IMenu";
import "./menu.css";

const Menu = () => {
  const [counter, setCounter] = useState<{ [key: string]: number }>({});
  const [totalPrice, setTotalPrice] = useState(0);

  const handleIncrement = (drink: IProduct) => {
    const newCounter = { ...counter };
    if (newCounter[drink.name]) {
      newCounter[drink.name]++;
    } else {
      newCounter[drink.name] = 1;
    }
    setCounter(newCounter);
    setTotalPrice(totalPrice + Number(drink.price));
  };

  const handleDecrement = (drink: IProduct) => {
    if (!counter[drink.name]) return;
    const newCounter = { ...counter };
    newCounter[drink.name]--;
    if (newCounter[drink.name] === 0) {
      delete newCounter[drink.name];
    }
    setCounter(newCounter);
    setTotalPrice(totalPrice - Number(drink.price));
  };

  return (
    <main>
      {Object.entries(menu).map(([category, drinks]) => (
        <div key={category}>
          {drinks.map((drink: IProduct, index: number) => (
            <div className="drink" key={index}>
              <h3 className="drink-name">{drink.name}</h3>
              <h3 className="price">{drink.price}</h3>
              <div className="counter">
                <button onClick={() => handleDecrement(drink)}>-</button>
                <h3>{counter[drink.name] || 0}</h3>
                <button onClick={() => handleIncrement(drink)}>+</button>
              </div>
            </div>
          ))}
          <br />
        </div>
      ))}
      <div className="drink">
        <h3>*LECHE VEGETAL</h3>
        <h3 className="price">+4</h3>
      </div>
      <h3>TU PEDIDO:</h3>
      <div>
        {Object.keys(counter).length === 0 ? (
          <h3>SElECCIONA UN ARTÍCULO</h3>
        ) : (
          <div>
            {Object.entries(counter).map(([name, count]) => (
              <div key={name}>
                <h3>
                  {name}: {count}
                </h3>
              </div>
            ))}
          </div>
        )}
      </div>
      <br />
      <h2>TOTAL: {totalPrice}</h2>
    </main>
  );
};

export default Menu;
