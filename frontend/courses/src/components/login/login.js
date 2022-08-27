import React,{useState} from "react";
import axios from "axios";
import "./login.css"
// import { useNavigate } from 'react-router-dom';
import {useHistory } from 'react-router-dom'
const Login = ({setLoginUser})=>{

    // const navigate = useNavigate()
    const history = useHistory ();

        //for update input field
        const [user,setUser] = useState({
            
            email:"",
            password:"",
             
        })
        
        //get value from input
        const handleChange=e=>{
            const{name,value} =e.target
            setUser({
                ...user,
                [name]:value
            })
        }

        //Onclick Login
        const login =() =>{
            axios.post("http://localhost:9002/login",user)
            .then(res=> {
                alert(res.data.message)
                setLoginUser(res.data.user)
                history.push("/")
            })
        }

        return(
            <div className="login">
                {console.log(user)}
                <h1>Login</h1>
                <input type="text" name="email" value={user.email} placeholder="Enter Your Email" onChange={handleChange}></input>
                <input type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange}></input>
                <div className="button" onClick={login}>Login</div>
                <div>Or</div>
                <div className="button" onClick={()=>history.push("/register")}>Register</div>
            </div>
        )
    
}

export default Login