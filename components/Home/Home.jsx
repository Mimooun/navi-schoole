"use client";
import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import styles from './Home.module.css';
import { FaSearch } from 'react-icons/fa';
import { GiPositionMarker } from 'react-icons/gi';
import { LuList } from 'react-icons/lu';
import Button from '@mui/material/Button';
import Search from '../Search/Search'
export default function Home() {
  const [showSearch, setShowSearch] = useState(false);

  const handleInputChange = () => {
    setShowSearch(true);
  };
   const handleCloseSearch = () => {
    setShowSearch(false);
  }; 
  return (
    <Layout>
      <section className={styles.block}>
        <div>
          <div className={styles.ecole}>Ecoles</div>
          <div className={styles.activiti}>Activities Parascolaires</div>
        </div>
        <div className={styles.search_container}>
          <div className={styles.top_container}>
            <div className={styles.input_container}>
              <input type="text" placeholder='School Name' className={styles.input_text}  onClick={handleInputChange}  />
              <span className={styles.search_icon}><FaSearch /></span>
            </div>
            <div className={styles.input_container_two}>
              <div>
                <input type="text" placeholder='Find location' className={styles.input_text} />
                <span className={styles.search_icon}><GiPositionMarker /></span>
              </div>
              <div className={styles.prox}>
                <span className={styles.search_icons}> <LuList /> </span>
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
              <div className={styles.wrp_content}>Privatee</div>
            </div>

          </div>



          <div className={styles.menu_cards}>
            <div className={styles.menu_card}>
              <div className={styles.titles}>Cycle</div>
              <div className={styles.ligne}></div>
            </div>
            <div className={styles.wrp}>
              <div className={styles.wrp_content}>Pre <br /> Scolaire</div>
              <div className={styles.wrp_content}>Primaire</div>
              <div className={styles.wrp_content}>College</div>
              <div className={styles.wrp_content}>Lycee</div>

            </div>

          </div>

          <div className={styles.menu_cards}>
            <div className={styles.menu_card}>
              <div className={styles.titles}>Services</div>
              <div className={styles.ligne}></div>
            </div>
            <div className={styles.wrp}>
              <div className={styles.wrp_content}>Cantine </div>
              <div className={styles.wrp_content}>Garde</div>
              <div className={styles.wrp_content}>Transport <br /> Scolaire</div>
              <div className={styles.wrp_content}>Piscine</div>
            </div>
          </div>


          <div className={styles.menu_cards}>
            <div className={styles.menu_card}>
              <div className={styles.titles}>Services</div>
              <div className={styles.ligne}></div>
            </div>
            <div className={styles.wrper_prix}>
              <div className={styles.select}>
                <select>
                  <option value="option1">1500 - 2000</option>
                  <option value="option2">2500 - 3000</option>
                </select>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" id="checkbox1" name="checkbox1" value="checkbox1" class={styles.input} />
                <label for="checkbox1">Ecole Lebellise</label>
              </div>
            </div>
          </div>
          
          <div className={styles.button} >
            <Button variant="contained" className={styles.btn}>Contained</Button>
          </div>
        </div>

        
      {showSearch && (
        <div className={styles.search_container} >
          <Search onCloseSearch={handleCloseSearch} />
          {
          }
        </div>
      )}
      </section>
    </Layout>
  );
}
