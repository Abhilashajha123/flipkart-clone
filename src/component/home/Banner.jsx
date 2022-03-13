import React from 'react'
import { bannerData } from '../constant/data'
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@mui/styles';

const useStyle=makeStyles({
    image:{
        width:'100%',
    }
})
const Banner = () => {
    const classes=useStyle();
    return (
        <Carousel 
        autoPlay={true}
        animation='slide'
        indicators={false}
        navButtonsAlwaysVisible	={true}
        cycleNavigation	={true}
        navButtonsProps={{
            style:{
                background:'#fff',
                borderRadius:0,
                color:'black'
               
            }
        }}>
        {
            bannerData.map(image=>(
                <img src={image} className={classes.image}/>
            ))
        }
       </Carousel>
    )
}

export default Banner
