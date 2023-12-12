import React from 'react';
import styles from '../styles/Home.module.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

function Users({ users }) {
  return (

    <div className={styles.body}>
      <Navbar />
      <div className={styles.unica}>
      <p className={styles.desc}>Seja parte deste reino inclusivo, onde a diversidade de histórias é celebrada e a magia da Disney é traduzida para a linguagem universal da inclusão. Estamos aqui para compartilhar a alegria, a emoção e a maravilha que os personagens da Disney proporcionam, criando um espaço onde todos são bem-vindos. Entre conosco nessa jornada encantadora e descubra a magia que une corações, independentemente do modo como experimentamos o mundo ao nosso redor.</p>
      <img src="/imagemd/disney.jpg" alt="castelo da disney" className={styles.fotoo}/>
      </div>
      <Footer />
    </div>
  )
}

export const getStaticProps = (async (context) => {
  const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=disney')
  const repo = await res.json()
  const users = await repo;
  return {
    props: { users }
  }
})

export default Users;