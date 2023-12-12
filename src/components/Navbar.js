import React from 'react';
import styles from '../styles/Components.module.css';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.active}><a href="/">Pagina de inicio</a></div>
            <div className={styles.titulo}> <h1> Personagens da Disney </h1> </div>
            <div className={styles.bnt}><a href="/lista">  Personagens disponiveis </a></div>
        </div>
    );
}

export default Navbar;