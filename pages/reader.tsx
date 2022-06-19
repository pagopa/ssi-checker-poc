import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { QrReader } from 'react-qr-reader';
import Header from '../components/Header';

const Reader: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <QrReader
        constraints={{
          aspectRatio: 1,
          width: 300,
          height: 300,
          facingMode: 'environment',
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
