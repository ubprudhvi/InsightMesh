import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3f51b5',
        },
    },
    components: {
        // MuiButton: {
        //     styleOverrides: {
        //         root: {
        //             textTransform: 'capitalize',
        //             color: 'green',
        //             fontSize: '18px',
        //             backgroundColor: 'lightgrey',
        //             borderRadius: '8px',
        //             '&:hover' :{
        //                 color: 'white',
        //                 backgroundColor: 'red',
        //                 border: '1px solid black'
        //             },
        //             '&:disabled': {
        //                 color: 'lightgrey',
        //                 backgroundColor: 'darkgrey',
        //                 border: '1px solid black'
        //             },
        //             '&:active': {
        //                 color: 'orange',
        //                 backgroundColor: 'blue',
        //                 border: '1px solid black'
        //             }
        //         }
        //     }
        // }
    }
})

export default theme;