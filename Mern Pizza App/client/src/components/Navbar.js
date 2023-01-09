import React from 'react'
import './Navbar.css'
import {useSelector,useDispatch} from 'react-redux'
import {BrowserRouter,Link,Route,Navigate} from 'react-router-dom'
export default function Navbar() {
    const cartstate=useSelector(state=>state.cartReducer);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-5 bg-white rounded">
                <Link className="navbar-brand" to="/">KASURIPIZZA</Link>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                    <li className="nav-item  ">
                            <Link className="nav-link" to="about">
                            About
                            </Link>
                        </li>
                        <li className="nav-item  ">
                            <Link className="nav-link" to="Loginscreen">
                            <i class="fa-solid fa-user" style={{color:'grey'}}></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="cart"><i class="fa-solid fa-cart-shopping" style={{color:'grey'}}></i><b style={{fontSize:'10px',color:'black'}}>{cartstate.cartItems.length}</b> </Link>
                        </li>
                        

                    </ul>
                </div>
            </nav>
        </div>
    )
}