import BackGround from "../components/BackGround"
import { useCenterAuth } from "../context/CenterAuthProvider"
import '../styles/center.css'
import '../styles/centerLogin.css'
import { TextField, Button, Alert } from "@mui/material"
import { useRef } from "react"
import { Link } from "react-router-dom"

const Login = () => {
  const { login, Error, errMsg } = useCenterAuth();
  const emailRef = useRef()
  const passRef = useRef()
  function handelSubmit(e) {
    e.preventDefault()
    const email = emailRef.current.value
    const pass = passRef.current.value
    login(email, pass)
  }
  return (
    <>
      <div className="myContainer center-login-main">
        <div className="centre-login-left">
          <h1>Centre Login page</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, consequatur.</p>
        </div>
        <form onSubmit={handelSubmit} className="center-login-form">
          {Error && <Alert severity="error">{errMsg}</Alert>}
          <TextField inputRef={emailRef} required type="email" variant="outlined" label="email" placeholder="centre1@email.com" aria-level='centre-email' />
          <TextField inputRef={passRef} required variant="outlined" label="password" />
          <Button type="submit" variant="contained">submit</Button>
          <Link to="/centre-signup" className="centre-link-register">
            <span>New centre?</span>
            <span style={{color: '#3B82F6', cursor: 'pointer'}}>Sign up!</span>
          </Link>
        </form>
      </div>
      <BackGround />
    </>
  )
}

export default Login