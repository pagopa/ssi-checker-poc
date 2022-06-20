import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

const Header = () => {
  const router = useRouter();

  return (
    <header>
      <button onClick={() => router.back()} className={styles.btnBack}>
        Back
      </button>
    </header>
  );
};

export default Header;
