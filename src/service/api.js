import axios from "axios";

const url="http://localhost:8000"
export const authusersignup=async (user)=>{
    console.log(user)
    try{
        return await axios.post(`${url}/signup`,user)
    }catch(error){
        console.log('Error',error.message)
    }
    
}


export const authuserlogin=async (user)=>{
    try{
        return await axios.post(`${url}/login`,user)
    }catch(error){
        console.log('Error',error.message)
    }
}