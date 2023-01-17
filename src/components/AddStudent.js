import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../App.css'

function AddStudent(){
    
    const [name,setname] = useState('');
    const [age,setage] = useState('');
    const [gender,setgender] = useState('');
    const [phoneno,setphoneno] = useState('');
    
    const addStudent = () =>{
    let data = {
        
        name: name,
        age: age,
        gender: gender,
        phoneno: phoneno
   }
    fetch('http://localhost:8199/api/stud/add',{
    method:"POST",
    body: JSON.stringify(data),
    headers : {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
    }
   }).then(response => response.json())
     .then(json => console.log(json));
     alert("Student Added Successfully !!! ")
    }


    //const AddProduct =() => {
    return(
        <div id="add-div">
             <header>
           <div id="title">Add Student</div>
            </header> 
            
           
            <input type="text"  placeholder="Name" onChange={ (e) => setname(e.target.value)}/> <br/><br/>
            <input type="number" placeholder="Age" onChange={ (e) => setage(e.target.value)}/> <br/><br/>
            <input type="text" placeholder="Gender" onChange={ (e) => setgender(e.target.value)}/> <br/><br/>
            <input type="number" placeholder="Phone No" onChange={ (e) => setphoneno(e.target.value)}/> <br/><br/>

            <footer>
            <button className='btn-login' onClick={addStudent}> Add </button><br/><br/>
            <Link className='updatebtn' to="/students"> Back </Link>
            </footer>
           
        </div>
    )
    }

export default AddStudent