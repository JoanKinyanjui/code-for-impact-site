// import { Button, Container } from '@material-ui/core';
import * as React from 'react';
import '../styles/global.css';
import { Link, navigate } from "gatsby"


const Signup = () => {
    const [firstname,setFirstname]= React.useState('');
    const [lastname,setLastname]= React.useState('');
    const [email,setEmail]= React.useState('');
    const [password,setPassword] =React.useState("");

const onHandleFirstnameChange=(e)=>{
   setFirstname(e.target.value)
}
const onHandleLastnameChange=(e)=>{
    setLastname(e.target.value)
 }
    
const onHandleEmailChange=(e)=>{
  setEmail(e.target.value);
  
}
const onHandlePasswordChange=(e)=>{
    setPassword(e.target.value)
}

const onHandleSubmit= async(e)=>{
 e.preventDefault();
 setFirstname('');
 setLastname('');
 setEmail('');
 setPassword('');
 console.log('input submitted')


//Register User...
const response =await fetch('http://localhost:3000/register',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      firstname,
      lastname,
      email,
      password
    }),
   });

   let {msg,success} = await response.json();
   console.log({msg,success});
   if(success){
    navigate('/');
   }else{
    window.alert(msg)
   }
   console.log(firstname,lastname,email,password)
}



return(
  <>
    <form  onSubmit={onHandleSubmit} container maxWidth="xl" className='bg-blue-50 w-screen h-screen grid grid-cols-1  place-content-center space-y-6 md:space-y-10'>
        <p className='mx-auto text-black text-2xl md:text-3xl font-sans' >SIGN UP</p>
{/* first name */}
        <input
      className='py-4 px-8 w-1/2 md:w-1/4 mx-auto rounded-sm focus:outline-none '
      placeholder='first name'
        labelText="firstname"
        formControlProps={{
          fullWidth: true
        }}
        type="fistname"
        name='firstname'
        value={firstname}
        onChange={onHandleFirstnameChange}
      />
{/* last name */}
<input
      className='py-4 px-8 w-1/2 md:w-1/4 mx-auto rounded-sm focus:outline-none '
      placeholder="last name"
        labelText="lastname"
        formControlProps={{
          fullWidth: true
        }}
        type="lastname"
        name='lastname'
        value={lastname}
        onChange={onHandleLastnameChange}
      />
{/* email */}
      <input
      className='py-4 px-8 w-1/2 md:w-1/4 mx-auto rounded-sm focus:outline-none ' 
      placeholder='email'
        labelText="Email"
        formControlProps={{
          fullWidth: true
        }}
        type="text"
        name='email'
        value={email}
        onChange={onHandleEmailChange}
      />
{/* password */}
      <input
      className='py-4 px-8 w-1/2 md:w-1/4 mx-auto rounded-sm focus:outline-none '
      placeholder='password'
        labelText="Password"
        formControlProps={{
          fullWidth: true
        }}
        type="password"
        name='password'
        value={password}
        onChange={onHandlePasswordChange}
      />

<input type="submit"  value="Sign up" class="
        py-2 px-8
        bg-blue-500
        hover:bg-primary-darker
        rounded
        text-white 
        w-24
        md:w-36
        mx-auto
        whitespace-nowrap
        "/>
<label className='mx-auto text-slate-600 '>
        <input 
          type="checkbox"
          // checked={checked}
          // onChange={handleChange}
          className='mx-4'
        />
        Remember me
</label>

      <p className='mx-auto text-slate-600 text-base'>Have an Account? <Link to="/Login">Login</Link></p>
    </form>
    </>
    )
  }
  
  
     
  export const Head = () => <title>Signup Page</title>
  
  
  export default Signup;