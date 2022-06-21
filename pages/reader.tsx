import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import Header from '../components/Header';
import styles from '../styles/Reader.module.css';
import square from '../assets/square.png';

const Reader: NextPage = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const router = useRouter();

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  return (
    <>
      <Header />
      <QrReader
        className={styles.qrReader}
        constraints={{
          aspectRatio: 1,
          facingMode: 'environment',
        }}
        videoContainerStyle={{
          width: width,
          height: height,
        }}
        onResult={(result, error) => {
          if (!!result) {
            router.push('/success');
          }

          if (!!error) {
            console.info(error);
          }
        }}
      />
      <div className={styles.viewfinder}>
        <Image src={square} alt={''} />
      </div>
    </>
  );
};

export default Reader;
