import { useEffect, useState } from 'react'
import Porta from '../../../components/Porta'
import { atualizarPortas, criarPortas } from '../../../function/portas'
import styles from '../../../styles/Jogo.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Jogo() {
  const router = useRouter()

  const [portas, setPortas] = useState([])
  const [valido, setvalido] = useState(false)

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    const qtdePortasValidas = portas >= 3 && portas <= 10
    const temPresenteValido = temPresente >= 1 && temPresente <= portas

    setvalido(qtdePortasValidas && temPresenteValido)
  }, [portas, router.query.portas, router.query.temPresente])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    setPortas(criarPortas(portas, temPresente))
  }, [router?.query])

  function renderizarPortas() {
    return portas.map(porta => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}
        />
      )
    })
  }
  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>{valido ? renderizarPortas():
      <h1>Valores inválidos</h1>
      }</div>
      <div className={styles.botoes}>
        <Link href="/" passHref>
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}
