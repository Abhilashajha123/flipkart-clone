import { Box, Typography } from '@mui/material';
import React from 'react'
import {navData} from '../constant/data';
 import { makeStyles } from '@mui/styles';

const useStyle=makeStyles({
    component:{
            display:'flex',
            marginTop:55,
            marginLeft:55,
    },
    container:{
        textAlign:'center',
        padding:'12px,8px',
        marginTop:10
    },
    navbarimage:{
        width:64,
        marginLeft:46,
        marginTop:20,
        width:64,
    
    },
    text:{
        fontSize:16,
        fontWeight:600,
        textAlign:'center',
    },
})
const Navbar = () => {
    const classes=useStyle();
    return (
        <Box className={classes.component} textAlign='center'>
            {
               navData.map(data=>(
                    <Box className={classes.container}> 
                        <img src={data.url} className={classes.navbarimage}/>
                      <Typography style={{fontSize:14,fontWeight:400}}>{data.text}</Typography>
                    </Box>
                   
               ))
            }
            
        </Box>
    )
}

export default Navbar
