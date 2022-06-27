import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Header.module.css';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const router = useRouter();

  return (
    <header>
      <button onClick={() => router.back()} className={styles.btnBack}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ fontSize: 44, color: 'black' }}
        />
      </button>
    </header>
  );
};

export default Header;
