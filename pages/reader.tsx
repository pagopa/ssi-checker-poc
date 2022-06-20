import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import Header from '../components/Header';
import styles from '../styles/Reader.module.css';

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
          width: width,
          height: height,
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
    </>
  );
};

export default Reader;
