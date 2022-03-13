import React from 'react'
import { Box, Typography} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    shoppingcart:{
        display:'flex',
        marginLeft:50
    },
    newcart:{
        marginLeft:'10%',
    }
 });

const HeaderCart = () => {
    const classes = useStyles();
    return (
     <Link to='/cart' className={classes.shoppingcart}>
        <Badge badgeContent={4} color="success">
            <ShoppingCartIcon></ShoppingCartIcon>
        </Badge>
        <Typography className={classes.newcart}>
          Cart
        </Typography>
    </Link>       
    )
}

export default HeaderCart
