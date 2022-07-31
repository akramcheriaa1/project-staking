import styles from './Card.module.scss';

const Card = () => {
  return(
    <div className={styles.card}>
      <div className={styles.card__img}>
        Image
      </div>
      <div className={styles.card__desc}>
        <h3>Token name</h3>
        <p>Staking Type</p>
        <p>APR</p>
        <p>Balance : xx</p>
      </div>
      <form className={styles.card__form}>
      
        <div className={styles.card__form__stake}>
          <input type="text" className={styles.card__form__stake__input} placeholder='Quantity'/>
          <p className={styles.card__form__stake__usemax}>use max</p>
        </div>
        
        <button className={styles.card__form__btn}>STAKE NOW</button>
      </form>
      <div className={styles.card__infos}>
        <p>Staked : xx</p>
        <p>Rewards : xx</p>
      </div>
      <div className={styles.card__actions}>
        <p>Unstake</p>
        <p>Collect</p>
      </div>
      
    </div>
  )
};

export default Card;