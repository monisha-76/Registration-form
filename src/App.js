import { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Register from "./Register";
import Header from "./Header";
import LoginPage from "./LoginPage";


function App() {
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState("");   
  const [email, setEmail] = useState("");
  const [passWord , setPassWord] = useState("");
  const [emailError, setEmailError] = useState("") 
  const [duplicateName , setDuplicateName] = useState("")
  const [duplicateEmail, setDuplicateEmail] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const navigate = useNavigate()

 
 
 
  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("Users")) || [];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
     const error = "Please enter a valid email address";
     setEmailError(error);
     return;
    }
     const isDuplicate  = users.some(user => user.firstName === firstName && user.lastName === lastName)
     if(isDuplicate){
      setDuplicateName("The name is already registered")
      return;
     }
     setDuplicateName("")

     const isDuplicateEmail = users.some(user => user.email===email)
     if(isDuplicateEmail){
      setDuplicateEmail("The Email is already registered")
      return;
     }
     setDuplicateEmail("")


     if(passWord.length < 8){
      setPasswordError("password must be 8 characters should contain a 0-9 and special characters like $ etc ")
      return
     }

    const newUser = { firstName, lastName, email };

    users.push(newUser);
    localStorage.setItem("Users", JSON.stringify(users));
    navigate('/login')



    };

  return (
    
    <div className="App">
      <Header title = "Registration Form"/>
      <Routes>
        <Route path  ="/" element ={<Register
       
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        email={email}
        setEmail={setEmail}
        setLastName={setLastName}
        passWord={passWord}c
        setPassWord={setPassWord}
        emailError={emailError}
        setEmailError={setEmailError}
        handleSubmit={handleSubmit}
        duplicateName = {duplicateName}
        setDuplicateName={setDuplicateName}
        duplicateEmail = {duplicateEmail}
        setDuplicateEmail = {setDuplicateEmail}
        passwordError = {passwordError}
        setPasswordError= {setPasswordError}

      />}
      />

      <Route path="/login"  element ={
      <LoginPage
        loginEmail={loginEmail}
        setLoginEmail = {setLoginEmail}
        loginPassword = {loginPassword}
        setLoginPassword = {setLoginPassword}
      />}
      />
      </Routes>
    </div>

  );
}

export default App;

