import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Distance from '../Distance/Distance'
import Suggestions from '../Suggestions/Suggestions'
import styles from './search.module.css'
import { FaSearch } from 'react-icons/fa';
import { GiPositionMarker } from 'react-icons/gi';
function Search({ onCloseSearch }) {
  const [showComponent, setShowComponent] = useState(false);

  const handleProximityButtonClick = () => {
    setShowComponent(true);
  };

  const handleInputChange = () => {
    setShowComponent(false);
  };

  return (
    <section className={styles.search}>
      <div className={styles.title}>Ou voulez-vous effectuer <br />vos recherches</div>
      <div className={styles.search_container}>
          <div className={styles.top_container}>
            <div className={styles.input_container}>
              <input type="text" placeholder='School Name' className={styles.input_text} onClick={handleInputChange} />
              <span className={styles.search_icon}><FaSearch /></span>
            </div>
            <div className={styles.input_container_two}>
              <div>
                <input type="text" placeholder='A proximite' className={styles.input_text} onClick={handleProximityButtonClick} />
                <span className={styles.search_icon}><GiPositionMarker /></span>
              </div>
            </div>
          </div>
          

        </div>
        {showComponent && (
          <div>
            <Distance />
          </div>
        )}

        {!showComponent && (
          <div>
            <Suggestions />
          </div>
        )}        
        <div className={styles.container_button}>
          <Button variant="contained" className={styles.close_button} onClick={onCloseSearch}>
            Close
          </Button>
        </div>
      
    </section>
  )
}

export default Search;
