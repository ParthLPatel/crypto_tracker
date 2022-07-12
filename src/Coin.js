import React from "react";
import "./coin.css";

const Coin = ({
  image,
  symbol,
  name,
  price,
  volume,
  priceChange,
  marketCap,
}) => {
  return (
    <tbody>
      <tr>
        <td>
          <img src={image} alt="crypto" className="img-fluid"/>
        </td>
        <td>
          <p>{name}</p>
        </td>
        <td>
          <p className="">{symbol}</p>
        </td>
        <td>
          <p className="">${price}</p>
        </td>
        <td>
          <p className="">${volume.toLocaleString()}</p>
        </td>
        <td>
          {priceChange < 0 ? (
            <p className=" red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className=" green">{priceChange.toFixed(2)}%</p>
          )}
        </td>
        <td>
          <p className="">${marketCap.toLocaleString()}</p>
        </td>
        <td></td>
      </tr>
    </tbody>
  );
};

export default Coin;
