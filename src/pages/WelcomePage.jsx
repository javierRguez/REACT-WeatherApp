import React, { useMemo, useState } from 'react'

import Grid from '@material-ui/core/Grid'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Typography, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'
import WelcomeScreen from '../components/WelcomeScreen'
import colors from '../theme/colors'

const useStyles = makeStyles({
  formContainer: {
    minWidth: '100%',
    minHeight: '100vh',
  },
  formStyle: {
    margin: '0px auto',
    padding: '30px',
    borderRadius: '9px',
    boxShadow: '0px 0px 12px -3px #000000',
    backgroundColor: colors.secondaryLight,
  },
  spacing: {
    marginTop: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
})

const WelcomePage = () => {
  const classes = useStyles()
  const [showRegister, setShowRegister] = useState(false)
  const iconContextSize = useMemo(() => ({ size: '6em' }), [])
  return (
    <WelcomeScreen>
      <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.formContainer}>
        <Grid item container xs={4} lg={3} xl={3} justifyContent="center" alignItems="center" className={classes.formStyle}>
          <Grid item>
            <IconContext.Provider value={iconContextSize}>
              <WiDaySunny color={colors.primaryMain} />
            </IconContext.Provider>
          </Grid>
          <Grid item container direction="column" justifyContent="center" alignItems="center">
            <Typography variant="h4" color="primary">
              Weather App
            </Typography>
            <Typography variant="overline" color="primary" gutterBottom>
              {showRegister ? 'Register' : 'Login'}
            </Typography>
          </Grid>

          <Grid item>
            <form noValidate autoComplete="off">
              <TransitionGroup>
                <TextField className={classes.spacing} id="enter-email" label="Enter Email" variant="outlined" fullWidth />
                <TextField className={classes.spacing} id="enter-password" type="password" label="Enter Password" variant="outlined" fullWidth />
                {showRegister && (
                  <CSSTransition timeout={300} classNames="animeinput">
                    <TextField className={classes.spacing} id="enter-name" label="Enter Name" variant="outlined" fullWidth />
                  </CSSTransition>
                )}
              </TransitionGroup>
              <div className={classes.buttonContainer}>
                <Button className={classes.spacing} variant="contained" color="primary" type="submit">
                  {showRegister ? 'Continue' : 'Sign In'}
                </Button>
                <Button className={classes.spacing} variant="outlined" color="primary" onClick={() => setShowRegister((value) => !value)}>
                  {showRegister ? 'Login' : 'Register'}
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </WelcomeScreen>
  )
}

export default WelcomePage
