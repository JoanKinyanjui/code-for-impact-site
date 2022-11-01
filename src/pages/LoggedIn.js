import * as React from 'react'
import Main from '../components/main';
// import { useRouter } from 'next/router'
import { Link, navigate } from "gatsby";
import Nav from '../components/LoggedIn/nav';



const LoggedIn = ({location}) => {
  let name = location.state.name

 //useEffect
 React.useEffect(()=>{
    const fetchData = async () => {
        let response = await fetch("http://localhost:3000/checkToken")
   
        let { msg, success } = await response.json();
        console.log({
          msg,
          success,
        });
    
    
        if (success) {
            // navigate to home page
            navigate('/')
           
          } else {
            //navigate to "Welcome page"
            navigate('http://localhost:8000/Login',{
            })
          }
    }
fetchData();

 },[])

  return (
<div>
<Nav />
<Main name=' Welcome to your Profile' username={name} />
</div>
  )
}


   
export const Head = () => <title>Welcome</title>


export default LoggedIn;
