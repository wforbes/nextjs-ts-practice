import { ThemeOptions } from '@mui/material/styles';
import { lightBlue } from '@mui/material/colors'

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    secondary: lightBlue
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