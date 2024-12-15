import React from 'react'
import { useNavigate} from 'react-router-dom'

const LoginPage = ({loginEmail,setLoginEmail,loginPassword,  setLoginPassword}) => {

    const navigate = useNavigate()
  return (
    
     <form className="LoginPage">
        <header> SIGN IN</header>
        <label htmlFor='loginemail'>Email</label>
        <input
         autoFocus
         id = "loginemail"
         type='text'
         placeholder='enter your email'
         required
         value={loginEmail}
         onChange={(e)=> setLoginEmail(e.target.value)}
        />
        
        <label htmlFor='loginpassword'>Password</label>
        <input
          id = "loginpassword"
          type='text'
          placeholder='enter your password'
          required
          value={loginPassword}
          onChange={(e)=> setLoginPassword(e.target.value)}
        />
        <button type ='submit'>Login </button>
        <button type = 'button' onClick={()=> navigate('/')}>
            don't have an account? register here
        </button>


     </form>
  )
}

export default LoginPage