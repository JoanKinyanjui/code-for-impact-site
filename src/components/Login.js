import { Button, Container } from '@material-ui/core';
import * as React from 'react';
import '../styles/global.css'

export const Footer = () =>{
    const [email,setEmail]= React.useState('');
    const [password,setPassword] =React.useState("")

    onCha
   
return(
    <Container container className="form">
      <input
        labelText="Email"
        id="email"
        formControlProps={{
          fullWidth: true
        }}
        type="text"
        name='email'
        value={email}
        onChange={}
      />
      <input
        labelText="Password"
        id="password"
        formControlProps={{
          fullWidth: true
        }}
        type="password"
        name='password'
        value={password}
        onChange={}
      />

      <Button type="button" color="primary" className="form__custom-button">
        Log in
      </Button>
    </Container>

)
}


export default Footer;