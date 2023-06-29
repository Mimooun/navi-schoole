import React from 'react'
import styles from './presentation.module.css'
import Image from 'next/image';
import ico1 from '../../public/assets/icons/alt_route.svg'
import ico2 from '../../public/assets/icons/call.svg'
import ico3 from '../../public/assets/icons/share.svg'
import icons4 from '../../public/assets/icons/Vector(4).svg'
import icons5 from '../../public/assets/icons/Vector(5).svg'
import icons6 from '../../public/assets/icons/Vector(6).svg'
import icons7 from '../../public/assets/icons/Vector(6).svg'
function Presentation() {
    return (
        <section className={styles.presentation}>
            <div className={styles.pre}>
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
                        <div className={styles.title}>+212 565 33 212</div>
                        <div className={styles.ligne}></div>
                    </div>
                </div>
                <div className={styles.pre_container}>
                    <div className={styles.pre_ico}>
                        <Image src={ico1}></Image>
                    </div>
                    <div>
                        <div className={styles.title}>www.gsr.ma </div>
                        <div className={styles.ligne}></div>
                    </div>
                </div>
                <div className={styles.pre_container}>
                    <div className={styles.pre_ico}>
                        <Image src={ico1}></Image>
                    </div>
                    <div>
                        <div className={styles.title}>www.facebook.com/gsr </div>
                        <div className={styles.ligne}></div>
                    </div>
                </div>
                <div className={styles.pre_container}>
                    <div className={styles.pre_ico}>
                        <Image src={ico1}></Image>
                    </div>
                    <div>
                        <div className={styles.title}>www.instagram.com/gsr </div>
                        <div className={styles.ligne}></div>
                    </div>
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.desc}>
                    <div className={styles.titre}>Description</div>
                    <div className={styles.ligne}></div>
                </div>
                <div className={styles.desc_content}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br />
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                </div>
            </div>
            <div className={styles.cycle}>
                <div className={styles.cy}>
                    <div className={styles.titre}>Cycle</div>
                    <div className={styles.ligne}></div>
                </div>
                <div className={styles.icons}>
                    <div className={styles.icon} >
                        <div className={styles.image_container}>
                            <Image src={icons4} width={20} height={20} />
                        </div>
                        <div className={styles.cycle}>Maternelle</div>
                    </div>
                    <div className={styles.icon}>
                        <div className={styles.image_container}>
                            <Image src={icons5} width={20} height={20} />
                        </div>
                        <div className={styles.cycle}>Primaire</div>
                    </div>
                    <div className={styles.icon}>
                        <div className={styles.image_container}>
                            <Image src={icons6} width={20} height={20} />
                        </div>
                        <div className={styles.cycle}>Collège</div>
                    </div>
                    <div className={styles.icon}>
                        <div className={styles.image_container}>
                            <Image src={icons7} width={20} height={20} />
                        </div>
                        <div className={styles.cycle}>lycee</div>
                    </div>
                </div>
            </div>
            <div className={styles.service}>
                <div className={styles.serv}>
                    <div className={styles.titre}>Service</div>
                    <div className={styles.ligne}></div>
                </div>
                <div className={styles.service_content}>
                    <div className={styles.wrp_content}>
                        <div className={styles.sub_title}>Cantine / Garde Repas : </div>
                        <div> Soutien Scolaire </div>
                    </div>
                    <div className={styles.wrp_content}>
                        <div className={styles.sub_title}>Transport Scorlaires : </div>
                        <div> Bibilotheque </div>
                    </div>
                    <div className={styles.wrp_content}>
                        <div className={styles.sub_title}>Piscine : </div>
                        <div>  Garderie </div>
                    </div>
                </div>
            </div>

            {/* /* Pedagogie*/}
            <div className={styles.pedagogie}>
                <div className={styles.peda}>
                    <div className={styles.titre}>Pedagogie</div>
                    <div className={styles.ligne}></div>
                </div>
                <div className={styles.pedagogie_content}>
                    <div className={styles.wrp_content}>
                        <div className={styles.sub_title}>Cantine / Garde Repas : </div>
                        <div> Soutien Scolaire </div>
                    </div>
                    <div className={styles.wrp_content}>
                        <div className={styles.sub_title}>Transport Scorlaires : </div>
                        <div> Bibilotheque </div>
                    </div>
                </div>
            </div>

            {/* horaire */}
            <div className={styles.horaire}>
            <div className={styles.hr}>
                    <div className={styles.titre}>Horaire</div>
                    <div className={styles.ligne}></div>
                </div>
                <div className={styles.horaire_content}>
                    <div>Du linde au vendedei de:</div>
                    <div>08:00  - 17:00 </div>
                </div>

            </div>
        </section>
    )
}

export default Presentation
