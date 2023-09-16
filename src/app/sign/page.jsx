
import Image from 'next/image'
import styles from '@/style/home.module.scss'
import Connexion from "@/components/connexion.modal";

export default function Home() {
  return (
    <main className={styles.main}>
	  <Connexion/>
    </main>
  )
}
