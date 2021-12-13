import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from './assets/Caleb&Brown.svg'
import "./App.css";
import Coin from "./components/Coin";
import SearchBar from './components/SearchBar'
import { Spinner } from 'react-bootstrap'
// import Pagination from "./Pagination";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false");
        setCoins(response.data);
        setLoading(false);
      } catch {
        alert("Error occurred!");
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // Get current coins
  const lastCoins = currentPage * coinsPerPage;
  const firstCoins = lastCoins - coinsPerPage;
  const currentCoins = coins.slice(firstCoins, lastCoins);

  // Filter coins based on names in search bar.
  const filteredCoins = currentCoins.filter(
    (coin) =>
      coin.name.toLowerCase().indexOf(search.toLowerCase()) >= 0 ||
      coin.symbol.toLowerCase().indexOf(search.toLowerCase()) >= 0
  );

  //All coins


  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // TODO sort symbol and beautify project
  if (loading) {

    return (
      <div className='loading'>
        <Spinner animation="grow" variant="light" />
      </div>
    )
  }

  return (
    <div className="frontend-app">
      <img src={logo} alt="header-logo" />
      <SearchBar />
      {coins ? coins.map((coin) => {
        console.log(coin)
        return (
          <Coin {...coin} />
        )
      }) :
        <div className='loading'>
          <h1> unable to receive data... </h1>
        </div>

      }
    </div>
  );
}
export default App;
