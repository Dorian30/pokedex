import React, { useState } from 'react';

import usePokemons from '@hooks/usePokemons';

import styles from './styles.module.scss';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: pokemon, isError, isLoading } = usePokemons({ searchQuery });
  return (
    <div className={styles.appContainer}>
      <main className={styles.mainContainer}>
        <Header className={styles.header} setSearchQuery={setSearchQuery} />
        <section className={styles.results}>
          <h2 className={styles.resultsTitle}>Resultados de la búsqueda</h2>
          {pokemon && <Card {...pokemon} />}
          {isError && (
            <div className={styles.error}>
              <span className={styles.errorIcon}>:(</span>
              <p className={styles.errorMsg}>No pudimos encontrar tu pokemon</p>
            </div>
          )}
          {isLoading && <div className={styles.spinner} />}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
