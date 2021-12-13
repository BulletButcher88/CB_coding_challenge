import React from "react";
import "./Coin.css";

const Coin = ({
  image,
  name,
  symbol,
  current_price,
  total_volume,
  price_change_percentage_24h,
  market_cap,
}) => {

  const toThousands = (money) => {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  const decimalPoint = (num) => {
    return Math.round(num * 100) / 100
  }

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <h4 className="coin-price">
            {'$ ' + toThousands(current_price)}
          </h4>
          {price_change_percentage_24h < 0 ? (
            <p className="coin-percent red">{decimalPoint(price_change_percentage_24h)}%</p>
          ) : (
            <p className="coin-percent green">{decimalPoint(price_change_percentage_24h)}%</p>
          )}
          <p className="coin-volume">{total_volume}</p>
          <p className="coin-marketcap">
            Market Cap:{market_cap}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
