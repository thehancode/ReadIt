import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#e76b79',
        main: '#22252C',
        dark: '#E14658',
        contrastText: '#fff',
      },
      secondary: {
        light: '#a0afad',
        main: '#E14658',
        dark: '#647674',
        contrastText: '#fff',
      },
    },
  });

  export default theme;