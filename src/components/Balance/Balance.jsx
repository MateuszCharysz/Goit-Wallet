import useTransactions from "../../hook/useTransactions";
import styles from "./Balance.module.css";

const BalanceComponent = () => {
  const { balance } = useTransactions();

  const formatBalance = data => {
    const numericValue = parseFloat(data);
    const options = {
      useGrouping: true,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
    const formattedValue = numericValue
      .toLocaleString("pl-PL", options)
      .replace(/,/g, ".");

    return formattedValue;
  };

  return (
    <div className={styles.balance}>
      <div className={styles.balance__text}>Your balance</div>
      <div className={styles.balance__amount}>
        <p>
          {isNaN(formatBalance(balance))
            ? "Loading..."
            : `PLN ${formatBalance(balance)}`}
        </p>
      </div>
    </div>
  );
};

export default BalanceComponent;
