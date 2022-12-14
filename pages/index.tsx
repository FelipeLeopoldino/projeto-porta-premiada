import Link from 'next/link'
import { useState } from 'react'
import Cartao from '../components/Cartao'
import EntradaNumerica from '../components/EntradaNumerica'
import styles from '../styles/Formulario.module.css'

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          {' '}
          <EntradaNumerica
            value={qtdePortas}
            onChange={novaQtde => setQtdePortas(novaQtde)}
            text="Qtde Portas?"
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica
            value={comPresente}
            onChange={novaPortaComPresente =>
              setComPresente(novaPortaComPresente)}
            text="Porta com Presente?"
          />
        </Cartao>

        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>

        
    </div>
  )
}
