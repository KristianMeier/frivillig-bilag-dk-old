import { Button, TextField, Typography, Grid } from '@mui/material'
import emailjs from 'emailjs-com'

import { useNavigate } from 'react-router-dom'
import { useEmailContext } from '../../Context/EmailContext'
import { LOREM, NAVIGATION } from '../../Constants/constants'

emailjs.init('user_8HEIx6CnEORghk_fMdGcv')

export const ForsideLeft = () => {
  const navigate = useNavigate()
  const { email, handleEmailChange, handleRequestDemo } = useEmailContext()

  return (
    <Grid
      item
      xs={12}
      md={6}
      style={{ padding: '20px' }}>
      <Grid
        container
        spacing={3}
        alignItems="center">
        <Grid
          item
          xs={12}>
          <Typography variant="body2">{LOREM}</Typography>
        </Grid>
        <Grid
          item
          xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => navigate(NAVIGATION.logInd.path)}
            style={{ height: '56px' }}>
            Log Ind
          </Button>
        </Grid>
        <Grid
          item
          xs={12}>
          <Typography variant="body2">{LOREM}</Typography>
        </Grid>
        <Grid
          item
          xs={8}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            style={{ height: '56px' }}
          />
        </Grid>
        <Grid
          item
          xs={4}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleRequestDemo}
            style={{ height: '56px' }}>
            Anmod om Demo
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}
