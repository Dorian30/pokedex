import React from 'react';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

function Footer({ className = '' }: Props) {
  return (
    <footer className={`${styles.footer} ${className}`}>
      <p>Hecho por Dorian Alvarado</p>
      <a className={styles.footerLink} href="#">
        Link a mi repo
      </a>
    </footer>
  );
}

export default Footer;
