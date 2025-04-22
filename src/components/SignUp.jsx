import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Header from './Header';
import Swal from 'sweetalert2';

const SignUp = () => {
const {createUser} = useContext(AuthContext)

const handleSignUp = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log("sign up" ,email,password);
createUser(email,password)
.then(result =>{

    console.log(result.user);
const createdAt = result?.user?.metadata?.creationTime;

    const newUser = {name,email,createdAt}
fetch('http://localhost:5000/users',{
method: 'POST',
headers:{
   'content-type' : 'application/json'
} ,
body:JSON.stringify(newUser)
})
.then(res =>res.json())
.then(data => {
    console.log('user create to db', data);
    if(data.insertedId){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sign Up Success",
        showConfirmButton: false,
        timer: 1500
      });
    }
})


})
.catch(error =>{
    console.log('error', error)
})

}

    return (
        
<div>
    <Header></Header>
<div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up !</h1>
           
          </div>
          <form onSubmit = {handleSignUp} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Name" name="name" />
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" name="email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" name="password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Sign Up</button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
</div>

       
    );
};

export default SignUp;