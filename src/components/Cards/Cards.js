import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed) {
        return 'Loading...';
    }
    return (
       <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography  className={styles.InfectedCardText} gutterBottom>Infected</Typography>
                        <Typography variant="h5" className={styles.numberInfected}>
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                             />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography className={styles.RecoveredCardText} gutterBottom>Recovered</Typography>
                        <Typography variant="h5" className={styles.numberRecovered}>
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                             />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" className={styles.DeathsCardText} gutterBottom>Deaths</Typography>
                        <Typography variant="h5" className={styles.numberDeaths}>
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                             />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deathRate)}>
                    <CardContent>
                        <Typography className={styles.DeathRateCardText} gutterBottom>Death Rate</Typography>
                        <Typography variant="h5" className={styles.numberDeathRate}>
                            <CountUp
                                start={0}
                                end={(deaths.value/confirmed.value)*100}
                                duration={2.5}
                                separator=","
                             /><small>%</small>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Death Rate by COVID-19</Typography>
                    </CardContent>
                </Grid>  
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recoverRate)}>
                    <CardContent>
                        <Typography className={styles.RecoverRateCardText} gutterBottom>Recover Rate</Typography>
                        <Typography variant="h5" className={styles.numberRecoverRate}>
                            <CountUp
                                start={0}
                                end={(recovered.value/confirmed.value)*100}
                                duration={2.5}
                                separator=","
                             /><small>%</small>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Recover Rate by COVID-19</Typography>
                    </CardContent>
                </Grid>                    
            </Grid>
       </div>
    );
};

export default Cards;