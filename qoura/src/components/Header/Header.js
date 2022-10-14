import React from 'react'
import {AppBar,Box,Toolbar,TextField,Typography,Avatar,ButtonGroup,Button} from '@mui/material';
import {logo} from "../../assets/index"
import {Search,HomeOutlined,ListAltOutlined,QuestionAnswerOutlined,NotificationsOutlined} from '@mui/icons-material';
import styled from 'styled-components';
import { borderRadius } from '@mui/system';
const Header = () => {
  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'gray',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'gray',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray',
      },
      '&:hover fieldset': {
        borderColor: 'blue',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'gray',
      },
    },
  });
  return (
    <Box sx={{ flexGrow: 1}}>
    <AppBar position="static" >
      <Toolbar sx={{
        display:"flex",
        justifyContent:"center",
      backgroundColor:"#FFFFFF"
      }}>
        <img height={35} src={logo} s alt='logo' sx={{mr:2}}/>
        <HomeOutlined sx={{color:"gray",fontSize: 40}} />
        <ListAltOutlined sx={{color:"gray",fontSize: 40}} />
        <QuestionAnswerOutlined sx={{color:"gray",fontSize: 40}} />
        <NotificationsOutlined sx={{color:"gray",fontSize: 40}} />
        <CssTextField  label="search" id="custom-css-outlined-input" />
        <Typography 
        sx={{
          color:"gray",
          border:"1px solid gray",
          borderRadius:"10px"
        }}
        >try Qoura+</Typography>
        <Avatar sx={{color:"blue"}}/>
        <ButtonGroup  variant="contained" aria-label="outlined secondary button group">
      <Button sx={{bodrder:"1px solid red",borderRadius:"10px" }}>add question</Button>
      <Button sx={{bodrder:"1px solid red",borderRadius:"10px" }}>T+</Button>
    </ButtonGroup>
      </Toolbar>
    </AppBar>
  </Box>
  )
}
export default Header;