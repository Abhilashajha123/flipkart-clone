import React from 'react'
import { styled } from '@mui/material/styles';
import { Box, Typography} from '@mui/material'
import Button from '@mui/material/Button';
import DialogBox from '../login/Login'
import { useState } from 'react';
import { useContext } from 'react';
import {LoginContext} from '../../context/ContextProvider';
import Profile from './Profile';
const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor:'white',
    color:'#2874F0',
    borderRadius:0,
    fontWeight:'bold',
    padding:'5px 40px',
    marginLeft:40,
  }));
  

const Headerbutton = () => {
    const [open, setOpen] = useState(false)

     const {account, setAccount} = useContext(LoginContext);
     console.log(account)
   
    //console.log(newaccount)
    const OpenloginDialog=()=>{
        setOpen(true)
        
      }
    return (
        <Box>
         {
           account?<Profile account={account} setAccount={setAccount}></Profile>:
           <ColorButton variant="contained" onClick={OpenloginDialog}>Login</ColorButton>

         }
          
            <DialogBox open={open} setOpen={setOpen} setAccount={setAccount}/>
       </Box> 
    )
}

export default Headerbutton
