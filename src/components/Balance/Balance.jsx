import useTransactions from '../../hook/useTransactions';
import styles from './Balance.module.css';

const BalanceComponent = () => {
  const { balance } = useTransactions();

  return (
    <div className={styles.balance}>
      <div className={styles.balance__text}>Your balance</div>
      <div className={styles.balance__amount}>
        <span className={styles.balance__currency}>PLN</span> {balance}
      </div>
    </div>
  );
};

export default BalanceComponent;
