import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'

function SignUp(){
    const[uname,setuname] = useState('');
    const[pwd,setpassword] = useState('');

    const register = () =>{
        //alert (uname + " " + pwd);
        let data ={
            email: uname,
            password:pwd
        }

        fetch('http://localhost:8122/api/v3/add',{
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        }).then(response=> response.json())
          .then(json => console.log(json));
          alert('Sign Up Successful')
    }
    return(
        <div id="signup-div">
             <header>
           <div id="title">SignUp Page</div>
            </header>
            <input type="text" placeholder="Username"onChange={ (e) => setuname(e.target.value)}/> <br/><br/>
            <input type="password" placeholder="Password"onChange={ (e) => setpassword(e.target.value)}/> <br/><br/>
            <footer>
            <button className='btn-login' onClick={register}>Register</button> <br/><br/>
            <Link id="link" to="/login">Already Registered! Login</Link>

            </footer>
            
        </div>
        
    )
}

export default SignUp