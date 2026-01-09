// here we need to fecth the data from api for list of crypto currency

import { useEffect, useState } from "react";
import { fetchCryptos } from "../api/coinGecko";
import { CryptoCard } from "../components/CryptoCard";

export const Home = () => {
  const [cryptoList, setCryptoList] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    fetchCryptosData();
  }, []);

  const fetchCryptosData = async () => {
    try {
      const data = await fetchCryptos();
      setCryptoList(data);
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    } finally {
      SetIsLoading(false);
    }
  };

  return (
    <div className="app">
      {isLoading ? (
        <div className="loading">
          <div className="spinner" />
          <p>Loading Crypto data...</p>
        </div>
      ) : (
        <div className="crypto-container">
          {cryptoList.map((crypto, key) => (
            <CryptoCard crypto={crypto} />
          ))}
        </div>
      )}
    </div>
  );
};
