import { Box} from '@mui/material'
import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import { makeStyles } from '@mui/styles'
import Slide from './Slide'
const useStyle=makeStyles({
    banner:{
        padding:10,
        backgroundColor:'#f2f2f2',
        
    }
})
const Home = () => {
    const classes=useStyle();
    return (
       <div>
                <Navbar/>
                <Box className={classes.banner}>
                    <Banner/>
                    <Slide timer={true} title="Deals of the day"/>
                    <Slide timer={false} title="Discount for you"/>
                    <Slide timer={false} title="Suggestive Items"/>
                </Box>
                
                    
                
                
       </div>
            
        
    )
}

export default Home
