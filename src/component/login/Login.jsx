import { ClassNames } from '@emotion/react'
import { Button, Dialog, DialogContent, TextField, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import { padding } from '@mui/system'
import { useState } from 'react'
import { authusersignup } from '../../service/api'
import { authuserlogin } from '../../service/api'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const ColorButton = styled(Button)(({ theme }) => ({
   
  }));
const useStyle=makeStyles({

    component:{
        height:'70vh',
        width:'90vh',
    },
    img:{
        backgroundImage:`url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height:'70vh',
        backgroundRepeat:'no-repeat',
        backgroundColor:'#2874F0',
        width:'40%',
        backgroundPositionY:'85%',
        backgroundPositionX:'center',
        padding:'45px 35px',
        '&>*':{
            color:'#ffff',
            fontWeight:600,
        }
       

    },

      alltext:{
          display:'flex',
      },
      login:{
          padding:'25px 35px',
          display:'flex',
          flex:1,
          flexDirection:'column',
          '& > *':{
           marginTop:20
        }
      },

      createtext:{
          color:'blue',
          marginTop:'10px',
          cursor:'pointer'
      }
      
})

const signupinputvalue={

    username:"",
    password:"",
}


const logininputvalue={

    username:"",
    password:"",
}

const Initialvalue={
    login:{
        value:"login",
        header:"Login",
        headertext:"Acces to your wish list and recommedation"
    
    },
    signup:{
        value:"signup",
        header:"Look lik you are new here",
        headertext:"Signup with your mobile number "
    }
}
const Login = (props) => {

    const [account,setAccount] = useState(Initialvalue.login)
    const[signup,setSignup]=useState(signupinputvalue)
    const[login,setLogin]=useState(logininputvalue)
    const[error,setError]=useState('')

    const classes=useStyle();

    const CloseDialogBox=()=>{
        props.setOpen(false)
         setAccount(Initialvalue.login)
        
    }

    const togglemydata=()=>{
        setAccount(Initialvalue.signup)
    }
   
    const changedata=()=>{
         setAccount(Initialvalue.login)
        
    }

   const signupinputfield=async ()=>{
       let response=await authusersignup(signup)
       if(!response) return;
        CloseDialogBox()
     
    
      props.setAccount(signup.username)
   }

   const textinputfield=(e)=>{
    setSignup({...signup,[e.target.name]:e.target.value});
    console.log(signup)
   }

   const logininputfield=(e)=>{
    setLogin({...login,[e.target.name]:e.target.value});
    console.log(login)
   }

const loginbutton=async ()=>{
    let response=await authuserlogin(login)
    console.log(response)
    if(!response){
        setError("Invalid cred")
        return
    }
     CloseDialogBox()
     props.setAccount(login.username)
     setError("")
}

    return (
        <Dialog open={props.open} onClose={CloseDialogBox}>
                <Box className={classes.alltext}>
                    <Box className={classes.img}>
                        <Typography variant='h5'>{account.header}</Typography>
                        <Typography style={{marginTop:20}}>{account.headertext}</Typography>
                    </Box>

                    {
                        account.value==="login" ? 
                         <Box className={classes.login}>
                             <Typography>
                                {
                                    error!=""? <Alert severity="error">
                                                <AlertTitle>{error}</AlertTitle>
                                          </Alert>:""
                                }
                    
                             </Typography>
                            <TextField onChange={logininputfield} name='username'  label='enter your username'  variant="standard"/>
                            <TextField onChange={logininputfield} name='password' label='enter your password'  variant="standard"/>
                            <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button onClick={()=>loginbutton()} variant="contained" color={'success'}  className={classes.loginbtn}>Login</Button>
                            <Typography>OR</Typography>
                            <Button variant="contained">Request OTP</Button>
                            <Typography onClick={()=>togglemydata()} className={classes.createtext} >New to Flipkart? Create an account</Typography>
                       </Box>:<Box className={classes.login}>
                                <TextField onChange={textinputfield} name='username' label='enter your username'   variant="standard"/>
                                <TextField onChange={textinputfield} name='password' label='enter your password'  variant="standard"/>
                                <br/>
                                <Button variant="contained" color={'success'}  className={classes.loginbtn} onClick={()=>signupinputfield()}>signup</Button>
                                <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                                <Typography>OR</Typography>
                                <Button variant="contained">Request OTP</Button>
                                <Button onClick={()=>changedata()}>Existing user?Login</Button>
                                </Box>
                    }
                   
                </Box>
        </Dialog>
    )
}

export default Login
