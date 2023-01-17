import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Students from "./components/Students";
import AddStudent from "./components/AddStudent";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import UpdateStudent from "./components/UpdateStudent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/students" element={<Students/>}></Route>
          <Route path="/add" element={<AddStudent/>}></Route>
          <Route path="/update" element={<UpdateStudent/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App