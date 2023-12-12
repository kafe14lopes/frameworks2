import React from 'react';
import styles from '../styles/Lista.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

function Users({ users }) {
  return (

    <div className={styles.body}>
      <Navbar />

      <h2> Personagens cadastrados </h2>
      {users.map((user, index) => (
        <Link href='/lista/[id]' as={`/lista/${index}`}>
          <div className={styles.conteudo}>
            <div key={user.id}> <p>Personagem: {user.nome} </p> </div>
            <div key={user.id}> <p className={styles.p1}>Usuario: {user.usuario} </p> </div>
            <div key={user.id}> <p className={styles.p1}>Data: {user.data_inclusao} </p> </div>
          </div>
        </Link>
      ))}

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