import Layout from '../Layout/Layout';
import styles from './Home.module.css';
import { FaSearch } from 'react-icons/fa';
import { GiPositionMarker } from 'react-icons/gi';
import { HiBars3CenterLeft } from 'react-icons/hi';
import {LuList} from 'react-icons/lu'
export default function Home() {
  return (
    <Layout>
      <section className={styles.block}>
        <div>
          <div>Ecoles</div>
          <div>Activities Parascolaires</div>
        </div>
        <div className={styles.search_container}>
          <div className={styles.top_container}>
            <div className={styles.input_container}>
              <input type="text" placeholder='Quelle école cherchez-vous?' className={styles.input_text} /* onClick={handleInputChange} */ />
              <span className={styles.search_icon}><FaSearch /></span>
            </div>
            <div className={styles.input_container_two}>
              <div>
                <input type="text" placeholder='Quelle école cherchez-vous?' className={styles.input_text}  />
                <span className={styles.search_icon}><GiPositionMarker /></span>
              </div>
              <div className={styles.prox}>
                <span className={styles.search_icons}> <LuList/> </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.menu_cards}>
            <div className={styles.menu_card}>
              <div className={styles.titles}>Secteur</div>
              <div className={styles.ligne}></div>
            </div>
            <div className={styles.wrp}>
              <div className={styles.wrp_content}>Publique</div>
              <div  className={styles.wrp_content}>Privatee</div>
            </div>

          </div>



          <div className={styles.menu_cards}>
            <div className={styles.menu_card}>
              <div className={styles.titles}>Cycle</div>
              <div className={styles.ligne}></div>
            </div>
            <div className={styles.wrp}>
              <div className={styles.wrp_content}>Pre <br /> Scolaire</div>
              <div  className={styles.wrp_content}>Primaire</div>
              <div className={styles.wrp_content}>College</div>
              <div  className={styles.wrp_content}>Lycee</div>

            </div>

          </div>

          <div className={styles.menu_cards}>
            <div className={styles.menu_card}>
              <div className={styles.titles}>Services</div>
              <div className={styles.ligne}></div>
            </div>
            <div className={styles.wrp}>
              <div className={styles.wrp_content}>Cantine </div>
              <div  className={styles.wrp_content}>Garde</div>
              <div className={styles.wrp_content}>Transport <br /> Scolaire</div>
              <div  className={styles.wrp_content}>Piscine</div>

            </div>

          </div>
        </div>




      </section>
    </Layout>
  );
}
