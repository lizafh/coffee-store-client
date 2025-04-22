import React, { useContext } from 'react';
import Header from './Header';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const SignIn = () => {

    const {signInUser} = useContext(AuthContext);

const handleSignIn = e =>{

    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
console.log(email,password)
signInUser(email,password)
.then(result =>{
    console.log(result.user);
// last login time
const lastSignInTime = result?.user?.metadata?.lastSignInTime;
const loginInfo = {email,lastSignInTime};

fetch(`http://localhost:5000/users`,{
    method:'PATCH',
    headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify(loginInfo)
})
.then(res => res.json())
.then(data => {
    console.log('signin in db', data)
})


})
.catch(error => {
   console.log(error); 
})

}

    return (
             
<div>
    <Header></Header>
<div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign In !</h1>
           
          </div>
          <form onSubmit = {handleSignIn} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" name="email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" name="password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Sign Up</button>
              </fieldset>
              <p>New here? Please :  <Link to='/signUp'>Sign Up</Link></p>
            </div>
          </form>
        </div>
      </div>
</div>
    );
};

export default SignIn;