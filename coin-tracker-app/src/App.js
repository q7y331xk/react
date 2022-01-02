import { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(async () => {
    await fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => setCoins(json));
    setLoading(false);
  }, []);
  return (
    <Fragment>
      <h1>Coins!{loading ? "" : ` ${coins.length}`}</h1>
      {loading ? <strong>Loading ... </strong> : null}
      <ul>
        {coins.map((item) => (
          <li key={item.id}>
            {item.name} ({item.symbol}): {item.quotes.USD.price}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default App;
