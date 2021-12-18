import { Box, CircularProgress, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        minHeight: '100vh',
        width: '50%',
        color: '#344450',
        [theme.breakpoints.down('1100')]: {
            width: '60%',
        },
        [theme.breakpoints.down('769')]: {
            width: '70%',
        },
        [theme.breakpoints.down('400')]: {
            width: '90%',
        },
    },
    waiting: {
        textAlign: 'center',
        color: '#344450',
        fontSize: 28,
        [theme.breakpoints.down('1100')]: {
            fontSize: 22,
        },
        [theme.breakpoints.down('769')]: {
            fontSize: 20,
        },
        [theme.breakpoints.down('400')]: {
            fontSize: 18,
        },
    }
}));


export default function PleaseWait() {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Box style={{ position: 'relative', minHeight: 50 }}>
                <Box color={'#E4E4E4'} style={{ position: 'absolute', left: -25 }}>
                    <CircularProgress
                        variant='determinate'
                        color='inherit'
                        size={40}
                        thickness={4}
                        value={100}
                    />
                </Box>
                <Box color={'#344450'} style={{ position: 'absolute', left: -25 }}>
                    <CircularProgress
                        variant='indeterminate'
                        color='inherit'
                        size={40}
                        thickness={4}
                    />
                </Box>
            </Box>
            <Typography className={classes.waiting}>
                Please Wait
            </Typography>
        </Box>
    )
}