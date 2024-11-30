import React from 'react'
import Stack from '@mui/material/Stack';
import NavBar from '../component/NavBar'
import Video from "../video/video.mp4";
import Footer from "../component/Footer";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Logo from  "../images/logo.png";
import { styled } from '@mui/material/styles';
import TradeImg from "../images/Trade.jpg";
import Trade2 from "../images/Trade2.jpg";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));


 const Trade = () => {
    const divHeader={
        // backgroundColor:'pink',
        minHeight:'100vh'
        }
        const item2={
        maxWidth:'100%',
            height:'70vh',
            marginTop:'0',
            position:"relative",
            backgroundColor:"pink"
        }
        const overlayText = {
            position: 'absolute',
            top: '40%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
        };
        const partOne={
            
        };
        const partTwo={
            fontSize:'60px'
        };
    
  return (
    <>
    {/*------------------------------------------------------------viewport 01------------------------------------------------------ */}
    <div style={divHeader}>
       <img src={Logo} style={{width:"200px",height:"120px",marginTop:"10px"}}/>
        <NavBar/>
    <div >
    <Stack spacing={2}>
    <Item style={{backgroundColor:'#204436',color:"white",height:"30px",paddingTop:"12px"}}>Special offers happening now !</Item>
    <Item style={item2}>
            {/* <video
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
                <source src={Video}/>
            </video> */}
            <img src={Trade2} style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}/>
            <div style={overlayText}>
            <span style={partOne}>Welcome to the </span><br></br>
            <span style={partTwo}>TEA CUPS PREMIUM <br></br></span>
            <span>Srilanka</span>
            </div>
        </Item>
    </Stack>
    </div>
    </div>

    
{/*-------------------------------------------------------Footer------------------------------------------------------------- */}
<Box
    sx={{
        backgroundColor: '#294836',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 3, sm: 5 },
        textAlign: { sm: 'center', md: 'left' },
        justifyContent: 'space-between',
        width: '100%',
        marginLeft: '0',
        marginRight: '0',
        color:"#ffffff"
    }}
    >
        <Footer/>
    </Box>
    </>
  )
};
export default Trade;
