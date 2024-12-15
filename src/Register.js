import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ firstName, setFirstName, lastName, setLastName,email, 
   setEmail,passWord ,  setPassWord, emailError, setEmailError,
   handleSubmit, duplicateName ,setDuplicateName, duplicateEmail,
    setDuplicateEmail,passwordError , setPasswordError}) => {

      const Navigate = useNavigate()
  return (
    <form className="RegistrationForm" onSubmit={handleSubmit}>
      <label htmlFor="firstname">First Name</label>
      <input
        id="firstname"
        type="text"
        placeholder="Enter your First Name"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        autoFocus
      />
      {duplicateName && <p>{duplicateName}</p>}
     

      <label htmlFor="lastname">Last Name</label>
      <input
        id="lastname"
        type="text"
        placeholder="Enter your Last Name"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      {duplicateName && <p>{duplicateName}</p>}
      
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        placeholder="Enter your Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailError && <p>{emailError}</p>}
      {duplicateEmail && <p>{duplicateEmail}</p>}

      <label htmlFor="password"> PassWord </label>
      <input
        id="password"
        type="text"
        placeholder="Enter your password"
        required
        value={passWord}
        onChange={(e) => setPassWord(e.target.value)}
      />
      {passwordError && <p>{passwordError}</p>}
     
      
      

      
      <button type="submit">Register</button>
      <button 
        type="button" 
        onClick={() => {
          setFirstName('');
          setLastName('');
          setEmail('');
          setPassWord('');
          setEmailError('')
          setDuplicateName('');
          setDuplicateEmail('')
          setPasswordError('')
        
        }}
      >
        Cancel
      </button>
      <button type='button' onClick={()=> Navigate('/login')}>
        Already have an account? Login here
      </button>
    </form>
  );
};

export default Register;
