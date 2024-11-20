import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
 import Logo from '../images/logo.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import {Link } from 'react-router-dom';
  
  function Copyright() {
    return (
      <Typography variant="body2" color="#d9d9d9" mt={1}>
        {'Copyright © '}
        <Link href="https://mui.com/" style={{textDecoration:"none",color:"inherit"}}>Laborlink&nbsp;</Link>
        {new Date().getFullYear()}
      </Typography>
    );
  }
const Footer = () => {
  return (
    <Container
    sx={{
      backgroundColor: '#294836',
      display: 'flex',
      flexDirection: 'column',
      gap: { xs: 2, sm: 4 },
      py: { xs: 2, sm: 3 },
      textAlign: { sm: 'center', md: 'left' },
      justifyContent: 'space-between',
      width: '100%',
      marginLeft: "0",
      marginRight: '0',
      height:"240px",
      color:"#d9d9d9"
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: { xs: '100%', sm: '60%' },
        }}
      >
        <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
        <Box 
    sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '70px', 
      height: '70px', 
      backgroundColor: '#d9d9d9',
      borderRadius: '50%', 
      marginLeft: '2px' ,
      marginBottom:"5px"
    }}
  >
    <img
      src={Logo}
      style={{ width: '50px', height: '40px' }}
      alt="TEA CUPS PREMIUM"
    />
  </Box>
          <Typography variant="body2" fontWeight={600} gutterBottom>
          TEA CUPS PREMIUM
          </Typography>
          <Typography variant="body2" color="#d9d9d9" gutterBottom sx={{fontStyle:"italic"}}>
          Savor the Moment, Sip the Serenity.
          </Typography>
          {/* <Typography variant="body2" color="#d9d9d9">
            - Tim Notke
          </Typography> */}
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant="body2" fontWeight={600}>
          Quick Access
        </Typography>
        <Link style={{ textDecoration: 'none', color: "inherit" }} href="#">
          Blogs
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant="body2" fontWeight={600}>
          About Us
        </Typography>
        <Link to={`/ourstory`} style={{ color: '#d9d9d9', textDecoration: "none" }}>Our Story</Link>
      </Box>
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        pt: { xs: 2, sm: 3 },
        width: '100%',
        borderTop: '1px solid',
        borderColor: '#d9d9d9',
      }}
    >
      <div>
        <Link color="#d9d9d9" href="#" style={{ textDecoration: "none", color: "#d9d9d9" }}>
          Privacy Policy
        </Link>
        <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
          &nbsp;•&nbsp;
        </Typography>
        <Link color="#d9d9d9" href="#" style={{ textDecoration: "none", color: "#d9d9d9" }}>
          Terms of Service
        </Link>
        <Copyright />
      </div>
      <Stack
        direction="row"
        justifyContent="left"
        spacing={1}
        useFlexGap
        sx={{
          color: '#d9d9d9',
        }}
      >
        <IconButton
          color="inherit"
          href="#"
          aria-label="GitHub"
          sx={{ alignSelf: 'center' }}
        >
          <FacebookOutlinedIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://twitter.com/MaterialUI"
          aria-label="X"
          sx={{ alignSelf: 'center' }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.linkedin.com/company/mui/"
          aria-label="LinkedIn"
          sx={{ alignSelf: 'center' }}
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Box>
  </Container>
  
  );
}

export default Footer;



