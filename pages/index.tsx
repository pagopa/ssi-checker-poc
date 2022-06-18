import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import qrcode from '../assets/qr-code.png';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
      <div className={styles.top}>
        <p className={styles.title}>ID Checker</p>
        <p className={styles.username}>Ciao Marta</p>
        <p>
          ID Checker permette di verificare le Identità digitali dei cittadini
          in modo sicuro e veloce.
        </p>
      </div>
      <div className={styles.floatDiv}>
        <Image src={qrcode} width="24" height="24" alt={'qrcode icon'} />
        <p className={styles.boxTitle}>Verifica un’identità digitale</p>
        <p>
          Inquadra il Codice QR dell’identità digitale che vuoi verificare
          presente su IO Wallet del cittadino.
        </p>
        <button
          className={styles.btnChecker}
          onClick={() => router.push('/reader')}
        >
          Inquadra Codice QR
        </button>
      </div>
    </div>
  );
};

export default Home;
