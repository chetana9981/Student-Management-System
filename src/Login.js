import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css'

function Login(){
    const[username,setusername] = useState('');
    const[password,setpassword] = useState('');
    const login = () =>{
        //alert (uname + " " + pwd);
        let data ={
            email: username,
            password:password
        }

        fetch('http://localhost:8122/api/v3/validate',{
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        }).then(response=>{return response.text();})
          .then((text)=>{
            if(text=='valid'){
                    alert("Logged in Successful..")
                    window.location.href="./home";
            }else{
                alert('please verirfy credentails')
            }
    })
}
    return(
        <div id="signup-div">
           <header>
           <div id="title">Login Page</div>
            </header> 
            
            <input type="text" placeholder="Username" onChange={ (e) => setusername(e.target.value)}/> <br/><br/>
            <input type="password" placeholder="Password" onChange={ (e) => setpassword(e.target.value)}/> <br/><br/>

            
            
            <footer>
            <button className='btn-login' onClick={login}>Login</button> <br/><br/>
            <Link id="link" to="/signup">Not Registered? Signup</Link>
            </footer>
           
        </div>
    )
}
export default Login