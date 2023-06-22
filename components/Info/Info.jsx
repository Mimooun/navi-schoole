import React from 'react'
import Layout from '../Layout/Layout';
import styles from '../Info/Info.module.css'
import Image from 'next/image';
import Button from '@mui/material/Button';

import icons1 from '../../public/assets/icons/Vector(4).svg'
import icons2 from '../../public/assets/icons/Vector(5).svg'
import icons3 from '../../public/assets/icons/Vector(6).svg'
import icons4 from '../../public/assets/icons/Vector(6).svg'
import school from '../../public/assets/images/school.png'
function Info() {
    return (
        <Layout>
            <section className={styles.info}>
                <div className={styles.container_info}>
                    <div className={styles.lignes}>
                        <div className={styles.ligne}></div>
                    </div>
                    <div className={styles.info_cards}>
                        <div className={styles.info_card_left}>
                            <div className={styles.title}>Groupe Scolaire GSR</div>
                            <div className={styles.adresse}>347 BD ambassafeur ben Aicha, Casablanca </div>
                            <div className={styles.icons}>
                                <div className={styles.icon} >
                                    <div className={styles.image_container}>
                                        <Image src={icons1} width={20} height={20} />
                                    </div>
                                    
                                    <div className={styles.cycle}>Maternelle</div>
                                </div>
                                <div className={styles.icon}>
                                    <Image src={icons1} width={30} height={30} />
                                    <div className={styles.cycle}>Primaire</div>
                                </div>
                                <div className={styles.icon}>
                                    <Image src={icons1} width={30} height={30} />
                                    <div className={styles.cycle}>Collège</div>
                                </div>
                                <div className={styles.icon}>
                                    <Image src={icons1} width={30} height={30} />
                                    <div className={styles.cycle}>lycée</div>
                                </div>
                            </div>
                            <div className={styles.button}>
                                <Button variant="contained" className={styles.btn_valider}>Valider</Button>
                            </div>
                        </div>
                        <div className={styles.info_card_right}>
                            <Image src={school} className={styles.img} />
                        </div>
                    </div>

                </div>
            </section>
        </Layout>

    )
}
export default Info
