import React from 'react';
import { Link } from "react-router-dom";

export default function ListItem({ coin }) {
  return (
    <div className='home-crypto'>
        <Link to={`/${coin.id}`}>{coin.name}
            <span className='home-crypto-image'>
                <img src={coin.image} alt="coinPic"/>
            </span>
            <span className='home-crypto-name'>{coin.name}</span>

        {coin.priceBtc &&  
            <span className='home-crypto-prices'>
                <span className='home-crypto-btc'>
                    <img src="/btcLogo.webp" alt="btcLogo"/>
                    {coin.priceBtc} BTC</span>
                <span className='home-crypto-usd'>({coin.priceUsd} USD)</span>
            </span>}
        </Link>
    </div>
  )
}
