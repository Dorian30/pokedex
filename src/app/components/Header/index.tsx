import React, { useState, Dispatch, SetStateAction } from 'react';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

function Header({ className = '', setSearchQuery }: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = ({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(value);

  const handleClick = () => setSearchQuery(inputValue);

  return (
    <header className={`${styles.header} ${className}`}>
      <h1 className={styles.headerTitle}>Pokemon finder</h1>
      <p className={styles.headerSlogan}>El que quiere Pokemons, que los busque</p>
      <div className={`row ${styles.search}`}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Ingrese el nombre a buscar"
          onChange={handleOnChange}
        />
        <button className={styles.searchButton} type="button" onClick={handleClick}>
          Buscar
        </button>
      </div>
    </header>
  );
}

export default Header;
