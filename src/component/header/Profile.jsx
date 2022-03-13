import { Typography } from "@mui/material"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link } from "react-router-dom";
const Profile=({account,setAccount})=>{
    const[open,setOpen]=useState(null)
    const handleClose = () => {
        setOpen(false)
        setAccount("")
      };

      const handleclick=(event)=>{
        setOpen(event.currentTarget)
      }

    return(
        <>
        <Link style={{color:"white",textDecoration:"none"}}>
         <Typography onClick={handleclick} style={{marginTop:4}}>{account}</Typography>
        </Link>
        <Menu
        id="basic-menu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
          
        <MenuItem  onClick={handleClose}><PowerSettingsNewIcon/>Logout</MenuItem>
      </Menu>
        </>
        

        
    )

}

export default Profile