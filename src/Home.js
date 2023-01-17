import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import'./App.css';

function Home(){
    
    return(
        <div class="bg_image">   
        <ul className="nav-ul nav-right">
            <li> Home </li>
            <li> <Link to="/students">Students</Link> </li>
            <li> <Link to="/login"> Logout </Link></li>
        </ul>
        <div id='home-txt'>
            STUDENT MANAGEMENT SYSTEM
        </div>
        </div>

        
    )
}
export default Home