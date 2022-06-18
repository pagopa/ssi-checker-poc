import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <header>
      <button onClick={() => router.back()}>Back</button>
    </header>
  );
};

export default Header;
