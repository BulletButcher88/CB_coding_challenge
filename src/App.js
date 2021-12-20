import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from './assets/coin.gif'
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
  const [keyword, setKeyWord] = useState('');
  const [filteredData, setFilteredData] = useState(coins);


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


  // const handleSearch = (event) => {
  //   let value = event.target.value.toLowerCase();
  //   let result = [];
  //   setKeyWord(value)
  //   result = coins.filter((data) => {
  //     return data.name.search(value) != -1;
  //   });
  //   setSearch(result);
  // }

  const handleSearch = async (input) => {
    const filtered = coins.filter(coin => {
      return (
        coin.name.toLowerCase().includes(input.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(input.toLowerCase())
      )
    })
    setKeyWord(input);
    setSearch(filtered);
  }

  console.log(search)

  // Get current coins
  // const lastCoins = currentPage * coinsPerPage;
  // const firstCoins = lastCoins - coinsPerPage;
  // const currentCoins = coins.slice(firstCoins, lastCoins);

  // Filter coins based on names in search bar.
  // const filteredCoins = currentCoins.filter(
  //   (coin) =>
  //     coin.name.toLowerCase().indexOf(search.toLowerCase()) >= 0 ||
  //     coin.symbol.toLowerCase().indexOf(search.toLowerCase()) >= 0
  // );

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
      <img src={logo} alt="header-logo" style={{ height: 100 }} />
      <SearchBar keyword={keyword} handleSearch={handleSearch} />
      {search ? search.map((coin) => {
        return (
          <Coin {...coin} />
        )
      }) :
        coins.map((coin) => {
          return (
            <Coin {...coin} />
          )
        })
      }
    </div>
  );
}
export default App;
