import React from 'react'
import styles from './Suggestions.module.css'
import { BiLocationPlus } from 'react-icons/bi'
function Suggestions() {
    return (
        <section className={styles.suggestions}>
            <div className={styles.container_sug}>
                <div className={styles.title}>Segestion</div>
                <div className={styles.lignes}></div>
            </div>
            <div className={styles.wrapper_sug}>
                <div className={styles.sug}>
                    <div className={styles.cercle}></div>
                    <span className={styles.search_icons}><BiLocationPlus /></span>
                </div>
                <div className={styles.adresse}>
                    <div> <span>Ain</span> diab</div>
                </div>
            </div>
        </section>
    )
}

export default Suggestions
