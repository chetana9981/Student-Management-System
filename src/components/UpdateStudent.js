import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../App.css'

function UpdateStudent(){
    const [id,setid] = useState(0);
    const [name,setname] = useState('');
    const [age,setage] = useState('');
    const [gender,setgender] = useState('');
    const [phoneno,setphoneno] = useState('');
    
    const updateStudent = () =>{
    let data = {
        id: id,
        name: name,
        age: age,
        gender: gender,
        phoneno: phoneno
    }
    fetch(`http://localhost:8199/api/stud/students/${id}`,{
        method:"PUT",
        body: JSON.stringify(data),
        headers : {
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin":"*"
        }
       }).then(response => response.json())
         .then(json => console.log(json));
         alert("Student Updated Successfully !!! ")
        }
    

    return(
        <div id="add-div">
             <header>
           <div id="title">Update Student</div>
            </header> 
            <input type="number" placeholder="Id" onChange={ (e) => setid(e.target.value)}/> <br/><br/>
            <input type="text"  placeholder="Name" onChange={ (e) => setname(e.target.value)}/> <br/><br/>
            <input type="number" placeholder="Age" onChange={ (e) => setage(e.target.value)}/> <br/><br/>
            <input type="text" placeholder="Gender" onChange={ (e) => setgender(e.target.value)}/> <br/><br/>
            <input type="number" placeholder="Phone No" onChange={ (e) => setphoneno(e.target.value)}/> <br/><br/>
            <footer>
            <button className='btn-login' onClick={updateStudent}> Update </button><br/><br/>
            <Link className='updatebtn' to="/students"> Back </Link>
            </footer>
           
        </div>
    )
    }

export default UpdateStudent;