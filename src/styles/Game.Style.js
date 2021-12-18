import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 'auto'
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        margin: 10,
        marginTop: 40,
        fontSize: 50,
        width: 'auto',
        fontWeight: 'bold',
        color: '#344450',
    },
    select: {
        margin: 20,
        color: '#344450',
        '& .MuiInput-underline:after': {
            borderColor: '#344450'
        },
        '& .MuiFormLabel-root': {
            color: '#B8B8B8'
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#B8B8B8 !important'
        },
        width: '40%',
        [theme.breakpoints.down('1100')]: {
            width: '60%',
        },
        [theme.breakpoints.down('769')]: {
            width: '80%',
        },
    },
    multilineColor: {
        fontSize: 16,
        [theme.breakpoints.down('1100')]: {
            fontSize: 14,
        },
        [theme.breakpoints.down('769')]: {
            fontSize: 12,
        },
        color: '#344450'
    },
    submitBtn: {
        marginTop: 20,
        borderWidth: 10,
        color: '#FFFFFF !important',
        backgroundColor: '#344450',
        '&:hover': {
            backgroundColor: '#F5B750',
        },
        width: '20%',
        [theme.breakpoints.down('1100')]: {
            width: '30%',
        },
        [theme.breakpoints.down('769')]: {
            width: '40%',
        },
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        height: 30,
        backgroundColor: '#344450',
        justifyContent: 'space-around',
        width: '100%',
        padding: '30px 0'
    },
    textHeader: {
        width: '25%',
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 20
    },
    question: {
        display: 'flex',
        alignItems: 'center',
        color: '#F5B750',
        fontWeight: 'bold',
        textDecoration: 'underline',
        fontSize: 35,
        width: 'auto',
        maxWidth: '80%',
        margin: '7% auto'
    },
    boxOptions: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '50%',
        [theme.breakpoints.down('1100')]: {
            width: '70%',
        },
        [theme.breakpoints.down('769')]: {
            width: '90%',
        },
        justifyContent: 'space-around',
        marginBottom: '4%'
    },
    options: {
        padding: '10px 30px',
        minWidth: '80%',
        color: '#FFFFFF !important',
        backgroundColor: '#344450',
        '&:hover': {
            backgroundColor: '#F5B750',
        },
        marginTop: '2%',
    },
    falseAnswer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 200,
        width: '40%'
    },
    falseText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 35,
        margin: '15% auto'
    },
    trueText: {
        color: '#344450',
        fontWeight: 'bold',
        fontSize: 35,
        margin: '15% auto'
    },
    winner: {
        color: '#344450',
        fontWeight: 'bold',
        fontSize: 35,
        margin: '15% auto 0 auto'
    },
    winText: {
        color: '#F5B750',
        fontWeight: 'bold',
        fontSize: 25,
        margin: '0 auto 15% auto'
    },
    boxAlertBtn: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around'
    },
    jokerBtn: {
        padding: '10px 30px',
        minWidth: '30%',
        color: '#FFFFFF !important',
        backgroundColor: '#344450',
        '&:hover': {
            backgroundColor: '#F5B750',
        },
        marginTop: '2%',
        '&:disabled': {
            backgroundColor: 'rgba(52, 68, 80, 0.6)',
            color: '#FFFFFF'
        }
    },
    nextBtn: {
        padding: '10px 30px',
        minWidth: '10%',
        color: '#FFFFFF !important',
        backgroundColor: '#344450',
        '&:hover': {
            backgroundColor: '#F5B750',
        },
        marginTop: '2%',
    },
    restartBtn: {
        padding: '10px 30px',
        minWidth: '30%',
        color: '#FFFFFF !important',
        backgroundColor: 'red',
        '&:hover': {
            backgroundColor: '#F5B750',
        },
        marginTop: '2%',
    },
}));
