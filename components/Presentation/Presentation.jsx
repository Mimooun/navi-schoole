import React from 'react'
import styles from './presentation.module.css'
import Image from 'next/image';
import ico1 from '../../public/assets/icons/alt_route.svg'
import ico2 from '../../public/assets/icons/call.svg'
import ico3 from '../../public/assets/icons/share.svg'
function Presentation() {
  return (
    <section className={styles.presentation}>
        <div className={styles.pre_container}>
            <div className={styles.pre_ico}>
                <Image src={ico1}></Image>
            </div>
            <div>
                <div className={styles.title}>347 BD ambassafeur ben Aicha, Casablanca </div>
                <div className={styles.ligne}></div>
            </div>
        </div>
        <div className={styles.pre_container}>
            <div className={styles.pre_ico}>
                <Image src={ico1}></Image>
            </div>
            <div>
                <div className={styles.title}>347 BD ambassafeur ben Aicha, Casablanca </div>
                <div className={styles.ligne}></div>
            </div>
        </div>
        <div className={styles.pre_container}>
            <div className={styles.pre_ico}>
                <Image src={ico1}></Image>
            </div>
            <div>
                <div className={styles.title}>347 BD ambassafeur ben Aicha, Casablanca </div>
                <div className={styles.ligne}></div>
            </div>
        </div>

    </section>
  )
}

export default Presentation
