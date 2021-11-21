import { createTheme } from '@material-ui/core/styles'
import colors from './colors'

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primaryMain,
      light: colors.primaryLight,
      dark: colors.primaryDark,
    },
    secondary: {
      main: colors.secondaryMain,
      light: colors.secondaryLight,
    },
  },
})
export default theme
