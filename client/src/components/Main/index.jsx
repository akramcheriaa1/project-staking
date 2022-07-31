import styles from './Main.module.scss';
import Card from '../Card';

const Main = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.main__title}>Stack your token to receive passive income</h2>
      <div className={styles.main__filter}>
        <button className={`${styles.main__filter__btn} ${styles.main__filter__btn_flex}`}>FLEXIBLE</button>
        <button className={`${styles.main__filter__btn} ${styles.main__filter__btn_lock}`}>LOCK</button>
      </div>
      <Card/>
    </div>
  )
};

export default Main;