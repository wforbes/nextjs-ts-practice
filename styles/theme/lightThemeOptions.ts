import { ThemeOptions } from '@mui/material/styles';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
  },
  components: {
    MuiIcon: {
      defaultProps: {
        baseClassName: 'material-icons'
      }
    }
  }
};

export default lightThemeOptions;