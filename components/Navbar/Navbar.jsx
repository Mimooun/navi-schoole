import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';
import Image from 'next/image';
import homeLogo from '../../public/assets/icons/Vector.svg'
import busLogo from '../../public/assets/icons/Vector(1).svg'
import locationLogo from '../../public/assets/icons/Vector(2).svg'
import profileLogo from '../../public/assets/icons/Vector(3).svg'


const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={styles.layout__nav}>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <Link
            href="/"
            className={`${router.pathname === '/menu' ? styles.active : ''}`}
          >
            <div className={styles.icon__container}>
              <Image src={homeLogo} width={30} height={30} />
            </div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/bus"
            className={`${router.pathname === '/bus' ? styles.active : ''}`}
          >
            <div className={styles.icon__container}>
              <Image src={busLogo} width={30} height={30} />
            </div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/chat"
            className={`${router.pathname === '/chat' ? styles.active : ''}`}
          >
            <div className={styles.icon__container}>
              <Image src={locationLogo} width={30} height={30} />
            </div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/profile"
            className={`${router.pathname === '/profile' ? styles.active : ''}`}
          >
            <div className={styles.icon__container}>
              <Image src={profileLogo} width={30} height={30} />
            </div>
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
