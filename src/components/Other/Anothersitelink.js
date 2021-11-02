import React from 'react';
import Iframe from 'react-iframe'
import styles from './Other.module.css';
import { Card, CardContent, Grid } from '@material-ui/core';
import cx from 'classnames'

const Anothersitelink = () => {
    return (
        <div className={styles.container}>
         <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card)}>
            <CardContent>
                <iframe className={styles.videoframe} width="770" height="440" src="https://www.youtube.com/embed/9Ay4u7OYOhA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
            </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card)}>
            <CardContent>
                <iframe className={styles.videoframe} width="770" height="440" src="https://www.youtube.com/embed/BDlE4aUT9tw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
            </CardContent>
            </Grid>
         
         </Grid>
       
            
        </div>
    );
};

export default Anothersitelink;