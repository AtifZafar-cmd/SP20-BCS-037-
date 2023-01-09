import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Contact from './Contact'
import Login from './Login'
import '../App.css';
const Navbar=()=>{
    return (
      <BrowserRouter>
        <div >
        <nav class="navbar navbar-expand-lg navbar-light bg-light" >
  <Link class="navbar-brand" to="#">Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav m-auto">
      <li class="nav-item active">
        <Link class="nav-link" to='/'>Home </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="register">Register</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="contact">Contact</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="login">Login</Link>
      </li>
      
    </ul>
    
  </div>
</nav>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='Contact' element={<Contact/>} />     
<Route path='Register' element={<Register/>} />
<Route path='Login' element={<Login/>} />
        </Routes>


       </div> 
        </BrowserRouter>
    )
}

export default Navbar