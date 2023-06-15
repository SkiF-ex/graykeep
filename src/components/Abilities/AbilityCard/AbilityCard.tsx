import React from 'react';
import { Card, Grid, CardMedia, CardContent, Typography, Button, Popover } from '@mui/material';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import { ITechPerk } from 'types/skills';
import { switchColor } from 'utils/switchColor';

import styles from './AbilityCard.module.scss';

export const AbilityCard = ({ card, status }: { card: ITechPerk, status: boolean }) => {

    const pointsTree = (allPoints: any) => {
        const getPoints = Object.keys(allPoints).map((point) => (
            <Grid item key={point}>
                <Grid container alignItems="center" justifyContent="center">
                    <img src={switchColor(point)} alt={point} />: {allPoints[point]}
                </Grid>
            </Grid>
        ));

        return (
            <Grid
                container
                direction="column"
                alignItems="center"
            >
                {getPoints}
            </Grid>
        )
    }

    return (
        <Grid sx={{ justifyContent: 'center' }} item xs={4} md={4} lg={4}>
            <Card className={status ? '' : styles.unlearned} sx={{ backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid gray', minHeight: '323px' }}>
                <CardMedia
                    component="img"
                    image={card.image}
                    alt="Butchir"
                    sx={{ height: '80px', width: '80px' }}
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" color="text.primary">
                        Технология:
                    </Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" color="text.primary">
                        {card.name}
                    </Typography>
                    <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => (
                            <>
                                <Button sx={{ textTransform: 'none', margin: '20px 0' }} color='secondary' variant="outlined" {...bindTrigger(popupState)}>Details</Button>
                                <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <Typography sx={{ p: 2, backgroundColor: '#14161a', width: '400px' }}>{card.description}</Typography>
                                </Popover>
                            </>
                        )}
                    </PopupState>
                    <Typography variant="body2" color="text.primary">
                        Required:
                    </Typography>
                    {pointsTree(card.points)}
                </CardContent>
            </Card>
        </Grid>
    )
}