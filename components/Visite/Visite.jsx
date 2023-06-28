import React from 'react'
import Layout from '../Layout/Layout';
import Button from '@mui/material/Button';
import Image from 'next/image';
import styles from './Visite.module.css'
import school from '../../public/assets/images/schoole.png'
import ico1 from '../../public/assets/icons/alt_route.svg'
import ico2 from '../../public/assets/icons/call.svg'
import ico3 from '../../public/assets/icons/share.svg'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Presentation from '../Presentation/Presentation';
import Avis from '../Avis/Avis';
function Visite() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Layout>
            <section className={styles.visite}>
                <div className={styles.img_ecole}>
                    <Image src={school} className={styles.schole}></Image>
                </div>
                <div className={styles.visite_container}>
                    <div className={styles.lignes}>
                        <div className={styles.ligne}></div>
                    </div>
                    <div className={styles.nom_ecole}>ECOLE LA PLUME</div>
                    <div className={styles.button}>
                        <Button variant="contained" className={styles.btn_valider}>Visite Virtuelle</Button>
                    </div>
                    <div className={styles.info_ecole}>
                        <div className={styles.ico}>
                            <div className={styles.ico_wrp}>
                                <Image src={ico2} className={styles.img}></Image>
                            </div>
                            <div className={styles.title}>Call</div>
                        </div>
                        <div className={styles.ico}>
                            <div className={styles.ico_wrp}>
                                <Image src={ico1} className={styles.img}></Image>
                            </div>
                            <div className={styles.title}>Route</div>
                        </div>
                        <div className={styles.ico}>
                            <div className={styles.ico_wrp}>
                                <Image src={ico3} className={styles.img}></Image>
                            </div>
                            <div className={styles.title}>Share</div>
                        </div>
                    </div>
                    <div className={styles.lignes_two}>
                        <div className={styles.ligne_two}></div>
                    </div>
                </div>
                <div className={styles.tab}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}  >
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className={styles.tablist}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Presentation" value="1" />
                                    <Tab label="Avis" value="2" />
                                </TabList>
                            </Box>
                            <TabPanel value="1"><Presentation /></TabPanel>
                            <TabPanel value="2"><Avis /></TabPanel>
                        </TabContext>
                    </Box>
                </div>
            </section>
        </Layout>
    )
}

export default Visite
