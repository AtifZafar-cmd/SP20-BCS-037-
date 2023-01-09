import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'
const Login=()=>{
  let navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const LoginUser= async (e)=>{
  const res=await fetch('/login',{
    method:"POST",
    headers:{
         "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email,password
    })
  });
  const data=res.json();
  if( res.status===400 || !data){
    alert("Invalid Credentials");
  }
  else{
    window.alert("Mubarka");
    navigate('/');
  }
  }
return(
    <>
    <section className="Login">
        <div className="container mt-5">
        <div className="content">
          <div className="form">
            <h2>Sign Up</h2>
            <form method="POST" className="register-from" id="register-form">
              

                <div className="form-group">
                     <label htmlFor="email">
                     <i class="zmdi zmdi-email material-icons-name"></i>
                     </label>
                     <input type="email" name="email" id="email" autoComplete="off"
                     value={email}
                     onChange={(e)=>{setEmail(e.target.value)}}
                     placeholder="Your E_Mail"
                     ></input>
                </div>


                


              


                <div className="form-group">
                     <label htmlFor="password">
                     <i class="zmdi zmdi-lock material-icons-name"></i>
                     </label>
                     <input type="password" name="password" id="password" autoComplete="off"
                      value={password}
                      onChange={(e)=>{setPassword(e.target.value)}}
                     placeholder="Your Password"
                     ></input>
                </div>

               
                
                <div className="form-group form-button">
                    <input type="submit" name="signup" id="signup" className="form-submit"
                    placeholder="Register"
                    onClick={LoginUser}
                    >
                        
                    </input>
                </div>
            </form>
          </div>
        </div>
        </div>
    </section>
    </>
)
}
export default Login