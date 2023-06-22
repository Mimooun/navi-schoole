import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styles from '../Maps/maps.module.css'
import { FaSearch } from 'react-icons/fa';
import { GiPositionMarker } from 'react-icons/gi';
import { LuList } from 'react-icons/lu';
import Info from '../Info/Info'
const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 33.5731,
  lng: -7.5898,
};

function Map() {
  const handleInputChange = () => {
    // Code pour traiter les changements de saisie
  };

  return (
    <div className={styles.top}>
      <div className={styles.top_seconde}>
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
        
        
      </div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
        />
      </LoadScript>
      <div>
      </div>
      <div>
        <Info />
      </div>
    </div>
  );
}

export default Map;
