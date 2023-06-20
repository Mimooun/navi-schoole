import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styles from '../Distance/distance.module.css';
import Button from '@mui/material/Button';
function valuetext(value) {
    return `${value}°km`;
}

const minDistance = 10;

export default function MinimumDistanceSlider() {
    const [value2, setValue2] = React.useState([20]);

    const handleChange2 = (event, newValue) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue < minDistance) {
            const clamped = Math.min(newValue, 100 - minDistance);
            setValue2([clamped]);
        } else {
            setValue2([newValue]);
        }
    };

    return (
        <Box sx={{ width: 300 }}>
            <section className={styles.distance}>
                <div className={styles.container_dis}>
                    <div className={styles.title}>Segestion</div>
                    <div className={styles.lignes}></div>
                </div>
                <div className={styles.slider}>
                    <Slider
                        className={styles.content_slider}
                        value={value2}
                        onChange={handleChange2}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                    />
                </div>
                <div className={styles.button}>
                    <Button variant="contained" className={styles.btn_valider}>Valider</Button>
                </div>
                
            </section>

        </Box>
    );
}
