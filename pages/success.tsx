import { NextPage } from 'next';
import styles from '../styles/Success.module.css';
import successIcon from '../assets/success-check.png';
import Image from 'next/image';
import Header from '../components/Header';

const Success: NextPage = () => {
  return (
    <>
      <Header />
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
          <p className={styles.title}>Identità valida!</p>
          <Image
            src={successIcon}
            width="128"
            height="128"
            alt={'qrcode icon'}
          />
        </div>
        <div className={styles.bottom}>
          <div className={styles.table}>
            <div className={styles.row}>
              <div className={styles.cellLeft}>
                <p className={styles.cellHeader}>Nome</p>
              </div>
              <div className={styles.cellRight}>
                <p className={styles.cellHeader}>Cognome</p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.cellLeft}>
                <p className={styles.cellContent}>Vittorio</p>
              </div>
              <div className={styles.cellRight}>
                <p className={styles.cellContent}>Colao</p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.cellLeft}>
                <p className={styles.cellHeader}>Data di nascita</p>
              </div>
              <div className={styles.cellRight}>
                <p className={styles.cellHeader}>Numero Licenza</p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.cellLeft}>
                <p className={styles.cellContent}>01/01/1980</p>
              </div>
              <div className={styles.cellRight}>
                <p className={styles.cellContent}>U192B850K</p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.cellLeft}>
                <p className={styles.cellHeader}>Tipo</p>
              </div>
              <div className={styles.cellRight}>
                <p className={styles.cellHeader}>Valido dal</p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.cellLeft}>
                <p className={styles.cellContent}>A</p>
              </div>
              <div className={styles.cellRight}>
                <p className={styles.cellContent}>27/10/2010</p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.cellLeft}>
                <p className={styles.cellContent}>B</p>
              </div>
              <div className={styles.cellRight}>
                <p className={styles.cellContent}>12/05/1996</p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.cellLeft}>
                <p className={styles.cellHeader}>Data di scadenza</p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.cellLeft}>
                <p className={styles.cellContent}>03/10/2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
