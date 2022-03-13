import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { products } from '../constant/data';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Countdown from 'react-countdown';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import Divider from '@mui/material/Divider';

const useStyle=makeStyles({

    image:{
        height:100,
    },
    component:{
        marginTop:10,
        backgroundColor:'#fff'
    },
    deal:{
        padding:'15px 20px',
        display:'flex'
    },
    dealtext:{
        lineHeight:23,
        marginLeft:14
    },
    dealimage:{
        marginRight:2,
        marginLeft:2
    },
    timer:{
        color:'#7f7f7f',
        marginLeft:4
    },
    button:{
        marginLeft:'auto',

    },
    text:{
        fontSize:14,
        marginTop:5
    },
    slide:{
        marginTop:3,
        padding:2
    }
})
const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor:'#2874F0',
    color:'#fff',
    borderRadius:2,
    fontWeight:'bold',
    marginLeft:'auto',
  }));
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },
    
  };

  
const Slide = (props) => {

    const renderer = ({ hours, minutes, seconds, completed }) => {

        return <span className={classes.timer}>{hours}:{minutes}:{seconds} Left</span>
      
    };
  
    const classes=useStyle();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    return (
        <Box className={classes.component}>
                <Box className={classes.deal}>
                    <Typography className={classes.dealtext} style={{fontWeight:600,fontSize:23,}}>
                       {props.title}
                    </Typography>
                    {
                        props.timer &&
                        <React.Fragment>
                              <img src={timerURL} style={{width:24}} className={classes.dealimage}/>
                               <Countdown date={Date.now() + 5.04E+7}renderer={renderer} />
                        </React.Fragment>
                        
                    }
                    
                       <ColorButton variant="contained">View All</ColorButton>
                </Box>
                <Divider />
                <Carousel 
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={false}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                showDots={false}
                removeArrowOnDeviceType={['mobile','tablet']}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                className={classes.slide}>
                        {
                            products.map(data=>(
                                <Box textAlign='center'>
                                 <img src={data.url} className={classes.image}/>
                                <Typography className={classes.text}style={{fontWeight:600,color:'#212121'}}>{data.title.shortTitle}</Typography>
                                <Typography className={classes.text} style={{color:'green'}}>{data.discount}</Typography>
                                <Typography className={classes.text} style={{color:'#212121',opacity:0.6}}>{data.tagline}</Typography>
                                </Box>
                                
                            ))
                        }
                </Carousel>
        </Box>
      
    )
}

export default Slide
