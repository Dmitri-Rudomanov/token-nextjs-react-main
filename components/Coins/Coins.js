import styles from './coins.module.scss';

const Coins = ({
  name,
  price,
  symbol,
  image,
  priceChange,
  id
}) => {
  return (
    <div>
      <a>
        <div className={styles.coins_container}>
          <div className={styles.coins_row}>
            <div className={styles.coins}>
              <img src={image} alt={name} className={styles.coins_img} />
              <h1 className={styles.coins_h1}>{name}</h1>
              <p className={styles.coins_symbol}>{symbol}</p>
            </div>
            <div className={styles.coins_data}>
              <p className={styles.coins_price}>${price}</p>
              {priceChange < 0 ? (
                <p className={(styles.coins_percent, styles.red)}>
                  {priceChange.toFixed(2)}%
                </p>
              ) : (
                <p className={(styles.coins_percent, styles.green)}>
                  {priceChange.toFixed(2)}%
                </p>
              )}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Coins;
