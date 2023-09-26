import React, { useState, useEffect } from "react";
import styles from "./Currency.module.css";
import Loader from "../Loader/Loader";

const USD_API_URL = "http://api.nbp.pl/api/exchangerates/rates/c/usd/last/?format=json";
const EUR_API_URL = "https://api.nbp.pl/api/exchangerates/rates/c/eur/last/?format=json";

const Currency = () => {
  const [usdData, setUsdData] = useState(null);
  const [eurData, setEurData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (url, setData) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  };

  useEffect(() => {
    fetchData(USD_API_URL, setUsdData);
    fetchData(EUR_API_URL, setEurData);
    setIsLoading(false);
  }, []); // Empty dependency array to fetch data once on component mount

  return (
    <div className={styles.currency}>
      {isLoading ? (
        <Loader />
      ) : (
        <table className={styles.currencyTbl}>
          <thead className={styles.currencyThead}>
            <tr>
              <th className={styles.currencyTblTitle}>Currency</th>
              <th className={styles.currencyTblTitle}>Purchase</th>
              <th className={styles.currencyTblTitle}>Sale</th>
            </tr>
          </thead>
          <tbody className={styles.currencyTbody}>
            <tr>
              <td className={styles.currencyTblItem}>USD</td>
              <td className={styles.currencyTblItem}>
                {usdData && usdData.rates.length > 0 ? usdData.rates[0].bid : "-"}
              </td>
              <td className={styles.currencyTblItem}>
                {usdData && usdData.rates.length > 0 ? usdData.rates[0].ask : "-"}
              </td>
            </tr>
            <tr>
              <td className={styles.currencyTblItem}>EUR</td>
              <td className={styles.currencyTblItem}>
                {eurData && eurData.rates.length > 0 ? eurData.rates[0].bid : "-"}
              </td>
              <td className={styles.currencyTblItem}>
                {eurData && eurData.rates.length > 0 ? eurData.rates[0].ask : "-"}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Currency;
