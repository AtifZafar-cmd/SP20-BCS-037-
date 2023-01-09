import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'

import {useNavigate} from 'react-router-dom'
import '../App.css';
const Register=()=>{
     let navigate=useNavigate();
     const[user,setUser]=useState({
          name:"",
          email:"",
          phone:"",
          work:"",
          password:"",
          cpassword:""
     })
let name,value;
     const handleInputs=(e)=>{
          console.log(e)
          name=e.target.name
          value=e.target.value
          setUser({...user,[name]:value})
          
     }

     const PostData= async (e)=>{
         //  e.preventDefault;//
           const {name,email,phone,work,password,cpassword}=user;
           const res=await fetch('/register',{
               method:"POST",
               headers:{
                    "Content-Type":"application/json"
               },
               body:JSON.stringify({
                    name,email,phone,work,password,cpassword
               })
           });

           const data=await res.json();
           

           if(res.status===422 || !data){
               window.alert("Invalid Registration");
               console.log("Invalid form");
           }
           else{
               window.alert(" Registration Ho Gai");
               
               navigate('/Login');
           }
     }

return(
    <>
    <section className="register">
        <div className="container mt-5">
        <div className="content">
          <div className="form">
            <h2>Sign Up</h2>
            <form method="POST" className="register-from" id="register-form">
                <div className="form-group">
                     <label htmlFor="name">
                     <i class="zmdi zmdi-account material-icons-name"></i>
                     </label>
                     <input type="text" name="name" id="name" autoComplete="off"
                     placeholder="Your Name"
                     value={user.name}
                     onChange={handleInputs}
                     ></input>
                </div>

                <div className="form-group">
                     <label htmlFor="email">
                     <i class="zmdi zmdi-email material-icons-name"></i>
                     </label>
                     <input type="email" name="email" id="email" autoComplete="off"
                     placeholder="Your E_Mail"
                     value={user.email}
                     onChange={handleInputs}
                     ></input>
                </div>


                <div className="form-group">
                     <label htmlFor="phone">
                     <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                     </label>
                     <input type="number" name="phone" id="phone" autoComplete="off"
                     placeholder="Your Contact_Number"
                     value={user.phone}
                     onChange={handleInputs}
                     ></input>
                </div>


                <div className="form-group">
                     <label htmlFor="work">
                     <i class="zmdi zmdi-slideshow material-icons-name"></i>
                     </label>
                     <input type="text" name="work" id="work" autoComplete="off"
                     placeholder="Your Profession"
                     value={user.work}
                     onChange={handleInputs}
                     ></input>
                </div>


                <div className="form-group">
                     <label htmlFor="password">
                     <i class="zmdi zmdi-lock material-icons-name"></i>
                     </label>
                     <input type="password" name="password" id="password" autoComplete="off"
                     placeholder="Your Password"
                     value={user.password}
                     onChange={handleInputs}
                     ></input>
                </div>

                <div className="form-group">
                     <label htmlFor="cpassword">
                     <i class="zmdi zmdi-lock material-icons-name"></i>
                     </label>
                     <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                     placeholder=" Confirm Your Password"
                     value={user.cpassword}
                     onChange={handleInputs}
                     ></input>
                </div>
                
                <div className="form-group form-button">
                    <input type="submit" name="signup" id="signup" className="form-submit"
                     placeholder="Register"
                     onClick={PostData}
                     ></input>
                </div>
            </form>
          </div>
        </div>
        </div>
    </section>
    </>
)
}
export default Register