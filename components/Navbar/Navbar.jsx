import Link from 'next/link';
import styles from './Navbar.module.css';
import {MdLocationPin} from 'react-icons/md'
import {FaBusAlt} from 'react-icons/fa'
import {TbMessageDots} from 'react-icons/tb'
import {HiUserCircle} from'react-icons/hi'
const Navbar = () => {
  return (
    <nav className={styles.layout__nav}>
      <div className={styles.liste}>
        <div><MdLocationPin/></div>
        <div><FaBusAlt/></div>
        <div><TbMessageDots/></div>
        <div><HiUserCircle/></div>
      </div>
    </nav>
  );
};

export default Navbar;
