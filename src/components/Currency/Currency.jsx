import React, { useState } from "react";
import styles from "./Currency.module.css";
// import { getCurrency } from "./getCurrency";
// import Loader from "components/Loader/Loader";
// import { useSelector } from "react-redux";
// import { selectToken } from "redux/auth/auth-selectors";

const Currency = () => {
	// const [currencyData, setCurrencyData] = useState(null);
	// const [isLoading, setIsLoading] = useState(false);
	// const token = useSelector(selectToken);

	// async function fetchData() {
	// 	const data = await getCurrency(token);
	// 	setCurrencyData(data);
	// 	setIsLoading(true);
	// }

	// if (!isLoading) {
	// 	fetchData();
	// 	setInterval(fetchData, 6000000);
	// 	return (
	// 		<div className={styles.currency}>
	// 			<Loader />
	// 		</div>
	// 	);
	// }

	// const eurBuy = currencyData.eur.buy;
	// const eurSale = currencyData.eur.sale;
	// const USDSale = currencyData.usd.sale;
	// const USDBuy = currencyData.usd.buy;

	return (
		<div className={styles.currency}>
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
						<td className={styles.currencyTblItem}>50</td>
						<td className={styles.currencyTblItem}>80</td>
					</tr>
					<tr>
						<td className={styles.currencyTblItem}>EUR</td>
						<td className={styles.currencyTblItem}>100</td>
						<td className={styles.currencyTblItem}>200</td>
					</tr>
				</tbody>
			</table>
			
		</div>
	);
};

export default Currency;
