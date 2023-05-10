import BackGround from "../components/BackGround"
import { useCenterAuth } from "../context/CenterAuthProvider"
import '../styles/center.css'
import '../styles/centerLogin.css'
import { TextField, Button, Alert } from "@mui/material"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const outerVariants = {
  closed: { transition: { staggerChildren: 0.3, staggerDirection: -1 } },
  open: { transition: { staggerChildren: 0.5, delayChildren: 0.3 } }
}
const leftInner = {
  closed: { opacity: 0, x: -100, },
  open: { opacity: 1, x: 0, transition: { type: 'spring' } }
}
const rightInner = {
  closed: { x: 100, opacity: 0 },
  open: { x: 0, opacity: 1, transition: { type: 'spring' } }
}

const Login = () => {
  const { login, Error, errMsg } = useCenterAuth();
  const emailRef = useRef()
  const passRef = useRef()
  const [showPass, setShowPass] = useState(false)
  function handelSubmit(e) {
    e.preventDefault()
    const email = emailRef.current.value
    const pass = passRef.current.value
    login(email, pass)
  }
  return (
    <section style={{ maxHeight: '100vh', overflow: 'hidden' }}>
      <motion.div variants={outerVariants} initial='closed' animate='open' className="myContainer center-login-main">
        <motion.div variants={leftInner} className="centre-login-left">
          <h1>Centre Login page</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, consequatur.</p>
        </motion.div>
        <motion.form variants={rightInner} onSubmit={handelSubmit} className="center-login-form">
          {Error && <Alert severity="error">{errMsg}</Alert>}
          <TextField inputRef={emailRef} required type="email" variant="outlined" label="email" placeholder="centre1@email.com" aria-level='centre-email' />
          <TextField inputRef={passRef} required variant="outlined" label="password" type={showPass ? 'text' : 'password'} />
          <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            {showPass ? <VisibilityOffIcon onClick={() => setShowPass(!showPass)} /> : <VisibilityIcon onClick={() => setShowPass(!showPass)}/> }
            <span onClick={() => setShowPass(!showPass)} style={{ marginLeft: '.75rem', cursor: 'pointer' }}>{showPass ?  'Hide Password' : 'show password'}</span>
          </div>
          <Button type="submit" variant="contained">submit</Button>
          <Link to="/centre-signup" className="centre-link-register">
            <span>New centre?</span>
            <span style={{ color: '#3B82F6', cursor: 'pointer' }}>Sign up!</span>
          </Link>
          <Link to='/' className="centre-link-register">
            <span>Home ?</span>
          </Link>
        </motion.form>
      </motion.div>
      <BackGround />
    </section>
  )
}

export default Login