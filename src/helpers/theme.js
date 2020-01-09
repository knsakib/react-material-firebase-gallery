import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      background: {
        default: '#f0f0f0'
     
      },
      primary: {
        light: '#b26046',
        main: '#ff8a65',
        dark: '#ffa183',
        contrastText: '#000',
      },
      secondary: {
        light: '#008c3a',
        main: '#00c853',
        dark: '##33d375',
        contrastText: '#fff',
      },
    },
   });

   export default theme;
