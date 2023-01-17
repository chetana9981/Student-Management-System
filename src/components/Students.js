import { useEffect, React, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css'

const Students=()=> {
    const [students,setStudents] = useState([]);
    const url = `http://localhost:8199/api/stud/students`;
    
    const deletestudent= (id) =>{
      const url =`http://localhost:8199/api/stud/students/${id}`;
      axios.delete(url).then(() =>{
        alert('student is deleted')
        axios.get(`http://localhost:8199/api/stud`).then( res => { setStudents(res.data)})
      })
    }
    
 
      const searchById = (id) => {
        const url = `http://localhost:8199/api/stud/students/${id}`;
        axios.get(url).then(res => {

            setStudents(res.data);
            console.log(res.data);

        })
    }
    
    const [searchid,setSearchid] = useState([]);

    useEffect ( () =>{
      axios.get(url).then( res => {
        //console.log(res.data);
        setStudents(res.data);
      })
    }, []);

    return(
      <div class="bg_image">   
      <ul className="nav-ul nav-right">
          <li><Link to="/home"> Home </Link></li>
          <li><Link to="/add">  Add Student </Link></li>
      </ul>
      <div className="student-list">
        <h1> Students List</h1>
        <input type="" className='search-student-box' placeholder='Search By Id'
            onChange={(e) => setSearchid(e.target.value)}
             />
             <button onClick={() => searchById(searchid)}>Search</button>
             <div id='tablediv'>
           <table id='table'>
              <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Phone No</th>
 			          <th>Actions</th>
                </tr>
              </thead>
              <tbody>
          {
            students.length>0 ? students.map ((p) => 
                            <tr key={p.id}>
                  		 <td>{p.id}</td>
                 		 <td>{p.name}</td>
                  		 <td>{p.age}</td>
                  		 <td>{p.gender}</td>
                   		 <td>{p.phoneno}</td>
                            <td> <Link className='updatebtn' to={"/update"}>Update</Link></td>
                            <td><Link className='updatebtn' onClick={()=>deletestudent(p.id)}> Delete</Link></td>  
                            </tr>
                        ) :<h2 >No Result Found</h2>
                        
          }
          </tbody>
            </table>
            </div>
        </div>
        </div>
    )
}

export default Students