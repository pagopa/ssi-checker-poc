import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import qrcode from "../assets/qr-code.png";

const Home: NextPage = () => {
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
        <p>ID Checker</p>
        <p>Ciao Marta</p>
        <p>
          ID Checker permette di verificare le Identità digitali dei cittadini
          in modo sicuro e veloce.
        </p>
      </div>
      <div className={styles.floatDiv}>
        <Image src={qrcode} width="24" height="24" alt={"qrcode icon"} />
        <p>Verifica un’identità digitale</p>
        <p>
          Inquadra il Codice QR dell’identità digitale che vuoi verificare
          presente su IO Wallet del cittadino.
        </p>
        <Link href="/reader" replace>
          <a>Inquadra Codice QR</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
