import React from 'react';

import { IPokemon } from '@interfaces/pokemons';
// import Pokemon from '@assets/pokemon.jpg';

import styles from './styles.module.scss';

interface Props extends IPokemon {
  className?: string;
}

function Card({ className = '', name, sprites }: Props) {
  const cover = sprites?.other?.officialArtwork?.frontDefault;
  return (
    <div className={`${styles.card} ${className}`}>
      <h3 className={styles.cardName}>{name}</h3>
      <img className={styles.cardCover} src={cover} alt={name} />
    </div>
  );
}

export default Card;
