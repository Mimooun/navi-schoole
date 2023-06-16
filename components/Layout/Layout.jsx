import Navbar from '../Navbar/Navbar';
import styles from '../Layout/Layout.module.css';
const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__body}>{children}</div>
      <Navbar />
    </div>
  );
};

export default Layout;
