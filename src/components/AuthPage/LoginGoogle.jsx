import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import { useEffect, useRef } from 'react'
import axios from 'axios'
import { setAccessToken } from '../../services/localStorage'
import React from 'react'
import GoogleLogo from './GoogleLogo'

function LoginGoogle() {
  const buttonWidth = useRef()
  const handleCallbackResponse = async res => {
    try {
      const obj = { googleData: res.credential }
      const login = await axios.post('http://localhost:8005/auth/google', obj)
      console.log(login.data)
      const token = login.data.token
      setAccessToken(token)
      // document.getElementById('signInDiv').hidden = true;
    } catch (err) {
      console.log(err)
    }
  }

  const handleSignout = event => {
    document.getElementById('signInDiv').hidden = false
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        '321447756040-07qa55lknl2mcuqr606akdl39ihl64s4.apps.googleusercontent.com',
      callback: handleCallbackResponse,
      prompt_parent_id: 'g_id_onload',
    })
    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
      width: buttonWidth.current.clientWidth,
      text: 'continue_with',
    })
    google.accounts.id.prompt()
  }, [])

  return (
    <>
      <Button
        id="signInDiv"
        ref={buttonWidth}
        // variant="contained"
        fullWidth
        size="large"
        color="light"
      >
        {/* <Grid
        container
        spacing={0}
        sx={{
          alignItems: 'center',
        }}
      >
        <Grid item xs={2}>
          <Box display="flex" justifyContent="center">
            <GoogleLogo />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Typography
            sx={{
              py: "10px",
              fontWeight: "normal",
              textTransform: "none",
            }}
            variant="h5"
          >
            Continue as Patcharapol
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Box display="flex" justifyContent="center">
            <Avatar />
          </Box>
        </Grid>
      </Grid> */}
      </Button>
    </>
  )
}

export default LoginGoogle
