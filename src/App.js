import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";
import { Link } from "react-router-dom";



// https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState("cad");

  let [page, setPage] = useState(1);

  const API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`;

  useEffect(() => {
    axios
      .get(`${API}`)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, [page, currency, API]);

  //fxn to handle search input
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="coin_app container-fluid">
      <div className="coin_search row">
        <div className="col-12 flex-column">
          <h1 className="coin_text">Search a Cryptocurrency</h1>
          <div>
            <form className="d-flex justify-content-center mb-5">
              <input
                type="text"
                placeholder="Search"
                className="coin_input"
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
      </div>

      <div className="d-md-flex justify-content-md-between justify-content-lg-around">
          <div class="hint-text">
            {page === 1 ? (
              <p>
                Showing <b>1</b> out of <b>10</b> entries
              </p>
            ) : page === 2 ? (
              <p>
                Showing <b>11</b> out of <b>20</b> entries
              </p>
            ) : page === 3 ? (
              <p>
                Showing <b>21</b> out of <b>30</b> entries
              </p>
            ) : page === 4 ? (
              <p>
                Showing <b>31</b> out of <b>40</b> entries
              </p>
            ) : page === 5 ? (
              <p>
                Showing <b>41</b> out of <b>50</b> entries
              </p>
            ) : (
              <></>
            )}
          </div>

          <div>
            <select
              className="form-select mb-4"
              aria-label="Default select currency"
              onChange={handleCurrencyChange}
              value={currency}
            >
              <option value="cad">Canadian Dollar</option>
              <option value="usd">US Dollar</option>
              <option value="inr">Indian Rupee</option>
              <option value="gbp">British Pound Sterling</option>
              <option value="chf">Swiss Franc</option>
              <option value="cny">Chinese Yuan</option>
              <option value="rub">Russian Ruble</option>
              <option value="jpy">Japanese Yen</option>
            </select>
          </div>
          
          <div>
            <ul class="pagination">
              <li class="page-item">
                <Link
                  to="src\App.js"
                  className="page-link bg-dark text-light"
                  onClick={() => setPage(page >= 2 ? --page : 1)}
                >
                  Previous
                </Link>
              </li>
              <li class="page-item">
                <Link
                  to="src\App.js"
                  className="page-link bg_color"
                  onClick={() => setPage(1)}
                >
                  1
                </Link>
              </li>
              <li class="page-item">
                <Link
                  to="src\App.js"
                  className="page-link bg_color"
                  onClick={() => setPage(2)}
                >
                  2
                </Link>
              </li>
              <li class="page-item">
                <Link
                  to="src\App.js"
                  className="page-link bg_color"
                  onClick={() => setPage(3)}
                >
                  3
                </Link>
              </li>
              <li class="page-item">
                <Link
                  to="src\App.js"
                  className="page-link bg_color"
                  onClick={() => setPage(4)}
                >
                  4
                </Link>
              </li>
              <li class="page-item">
                <Link
                  to="src\App.js"
                  className="page-link bg_color"
                  onClick={() => setPage(5)}
                >
                  5
                </Link>
              </li>
              <li class="page-item">
                <Link
                  to="src\App.js"
                  className="page-link bg-dark text-light"
                  onClick={() => setPage(page <= 4 ? ++page : 5)}
                  value={page}
                >
                  Next
                </Link>
              </li>
            </ul>
          </div>
        </div>


      <div className="container coin_container table-responsive">
        
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Symbol</th>
              <th scope="col">Price</th>
              <th scope="col">Volume</th>
              <th scope="col">Price_Change %</th>
              <th scope="col">Market Cap</th>
            </tr>
          </thead>

          {filteredCoins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                marketCap={coin.market_cap}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                volume={coin.total_volume}
              />
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
