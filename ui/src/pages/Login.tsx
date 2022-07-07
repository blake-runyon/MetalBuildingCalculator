import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import './login.css'

async function loginUser(credentials: any) {
    return fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login(props:{ setToken: any }) {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        props.setToken(token);
      }

  return(
    <>
    <div className="bg-grass">
      <form onSubmit={handleSubmit}>
        <div className="flex align-items-center justify-content-center pt-5">
          <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div className="text-center mb-5">
                <img src="logo.png" alt="Logo" className='w-full'/>
                <h2>Please Log In</h2>
            </div>

            <div className='w-full'>
                <label htmlFor="username" className="block text-900 font-medium mb-2">Username</label>
                <InputText id="username" type="text" className="w-full mb-3" onChange={(e) => setUserName(e.target.value)}/>

                <label htmlFor="password" className="w-full block text-900 font-medium mb-2">Password</label>
                <InputText id="password" type="password" className="w-full mb-3" onChange={(e) => setPassword(e.target.value)} />

                <Button label="Sign In" icon="pi pi-user" className="w-50 text-center" />
            </div>
          </div>
        </div>
      </form>  
    </div>
    </>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}