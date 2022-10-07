import styles from './SearchBar.module.scss';

const SearchBar = ({ ...rest }) => {
  return (
    <div className={styles.SearchBar_search}>
      <input className={styles.SearchBar_input} {...rest} />
    </div>
  );
};

export default SearchBar;
