import { AppBar, Toolbar,Box, Typography} from '@mui/material'
import Search from './search'
import Headerbutton from './Headerbutton';
import { makeStyles } from '@mui/styles';
import React from 'react'
import HeaderCart from './HeaderCart';
import { Link } from 'react-router-dom';

  
const useStyles = makeStyles({
    logo:{
        width:75,
    },
    header:{
        backgroundColor:'#2874F0',
        height:55,
    },
    bottomheader:{
        display:'flex',
        
    },
    wraplogo:{
        marginLeft:'12%',
        textDecoration:'none',
        color:'#ffff'
    },
    login:{
        backgroundColor:'#ffff'
    },
    more:{
            marginLeft:40,
    },

    
  });

 

const Header = () => {
    const classes = useStyles();

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
     const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <div>
            <AppBar className={classes.header}>
            <Toolbar>
                <Link to ='/' className={classes.wraplogo}>
                     <img src={logoURL} className={classes.logo}/>
                  <Box className={classes.bottomheader}>
                      <Typography fontSize={13}fontFamily={'italic'}>Explore Plus</Typography>
                     <img src={subURL} width={20}height={14}/>
                  </Box>
                </Link>
                
                <Search/>
                <Headerbutton/>
                <Box className={classes.more}>
                        <Typography>
                            More
                        </Typography>
                </Box>
                <HeaderCart/>  
            </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
