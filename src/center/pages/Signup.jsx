import React, { useState } from 'react'
import '../styles/centerSignup.css'
import { useCenterAuth } from '../context/CenterAuthProvider'
import '../styles/center.css'
import '../styles/centerSignup.css'
import BackGround from '../components/BackGround'
import { Alert, Button, TextField } from '@mui/material'
import { AreaNames } from '../assets/AreaNames'
import { motion } from "framer-motion"

const outerVariants = {
  closed: { transition: { staggerChildren: 0.07, staggerDirection: -1 } },
  open: { transition: { staggerChildren: 0.05, delayChildren: 0.5 } }
}
const inner = {
  closed: { opacity: 0, x: 100, y: 100 },
  open: { opacity: 1, x: 0, y: 0, transition: { type: 'spring' } }
}

const Signup = () => {

  const { signup, errMsg, Error } = useCenterAuth()
  const allState = AreaNames.map((curr) => {
    return Object.keys(curr)
  })
  const [state, selectState] = useState(null)
  const [allDistrict, setAllDistrict] = useState([])
  const [district, selectDistrict] = useState(null)
  const [DisableByState, setDisableByState] = useState(true)
  const [DisableByDistrict, setDisableByDistrict] = useState(true)
  const [ipData, setIpData] = useState({ name: '', address: '', pin: '', securityKey: '', phno: '', email: '', password: '', cnfPass: '' })

  function changeState(e) {
    setAllDistrict([])
    setDisableByState(true)
    if (e.target.value !== null) {
      selectState(e.target.value)
      AreaNames.forEach((curr) => {
        const key = Object.keys(curr)
        if (e.target.value === key[0]) {
          setAllDistrict(curr[key[0]])
          setDisableByState(false)
        }
      })
    } else {
      selectState(null)
    }
  }

  function changeDistrict(e) {
    setDisableByDistrict(true)
    if (e.target.value !== null) {
      selectDistrict(e.target.value)
      setDisableByDistrict(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(DisableByState || DisableByDistrict) {
      return alert('Can not submit form now.')
    }
    const pinRegx = new RegExp(/^[1-9]{1}[0-9]{2}[0-9]{3}$/);
    const phnoRegx = new RegExp(/^\d{10}$/)

    if (ipData.password === ipData.cnfPass) {
      if (pinRegx.test(ipData.pin) === true) {
        if (phnoRegx.test(ipData.phno) === true) {
          signup({ centre_name: ipData.name, address: ipData.address, email: ipData.email, phone: ipData['phno'].toString(), pin_code: parseInt(ipData.pin), district, state, auth_key: ipData.securityKey, password: ipData.password })
        } else {
          alert('Phone number must be 10 digits')
        }
      } else {
        alert('Postal code must be 6 digits')
      }
    } else {
      alert('Password and confirm password must be same')
    }
  }

  return (
    <>
      <section className='myContainer centre-signup-main'>
        <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}}>Register a new centre</motion.h1>
        <motion.p initial={{opacity: 0}} animate={{opacity: 1}}>Select state and then district first to fill up other details. </motion.p>
        {Error && <Alert style={{ margin: '.5rem 0' }} variant='outlined' color='error'>{errMsg}</Alert>}
        <motion.form variants={outerVariants} initial='closed' animate='open' onSubmit={handleSubmit} className='register-centre-form'>
          <div className='centre-state-dis'>
            <motion.select variants={inner} required onChange={changeState}>
              <option value={null}>select - state</option>
              {allState.map((curr, i) => {
                return (
                  <option key={i} value={curr}>{curr}</option>
                )
              })}
            </motion.select>
            <motion.select variants={inner} required onChange={changeDistrict} disabled={DisableByState}>
              <option value={null}>{`${state}'s districts`}</option>
              {allDistrict.map((curr, i) => {
                return (
                  <option key={i} value={curr}>{curr}</option>
                )
              })}
            </motion.select>
          </div>
          <div className='centre-others-ip'>
            <motion.div variants={inner} className='centre-reg-col-span-2'>
              <TextField value={ipData.name} onChange={(e) => { setIpData({ ...ipData, name: e.target.value }) }} required disabled={DisableByDistrict} label='name' placeholder='centre name' variant='filled' type='text' fullWidth />
            </motion.div>
            <motion.div variants={inner} className='centre-reg-col-span-2'>
              <TextField value={ipData.address} onChange={(e) => { setIpData({ ...ipData, address: e.target.value }) }} required disabled={DisableByDistrict} label='address' placeholder='permanent address' variant='filled' type='text' fullWidth />
            </motion.div>
            <motion.div variants={inner}>
              <TextField value={ipData.pin} onChange={(e) => { setIpData({ ...ipData, pin: e.target.value }) }} required disabled={DisableByDistrict} label='pin' placeholder='zip / pin code' variant='filled' type='number' />
            </motion.div>
            <motion.div variants={inner}>
              <TextField value={ipData.phno} onChange={(e) => { setIpData({ ...ipData, phno: e.target.value }) }} required disabled={DisableByDistrict} label='phone no' placeholder='centre phone no' variant='filled' type='number' />
            </motion.div>
            <motion.div variants={inner}>
              <TextField value={ipData.email} onChange={(e) => { setIpData({ ...ipData, email: e.target.value }) }} required disabled={DisableByDistrict} label='email' placeholder='centre email' variant='filled' type='email' />
            </motion.div>
            <motion.div variants={inner}>
              <TextField value={ipData.securityKey} onChange={(e) => { setIpData({ ...ipData, securityKey: e.target.value }) }} required disabled={DisableByDistrict} label='security key' placeholder='one time use only *' variant='outlined' color='error' type='text' />
            </motion.div>
            <motion.div variants={inner}>
              <TextField value={ipData.password} onChange={(e) => { setIpData({ ...ipData, password: e.target.value }) }} required disabled={DisableByDistrict} label='password' variant='filled' type='text' color='secondary' />
            </motion.div>
            <motion.div variants={inner}>
              <TextField value={ipData.cnfPass} onChange={(e) => { setIpData({ ...ipData, cnfPass: e.target.value }) }} required disabled={DisableByDistrict} label='confirm password' variant='filled' type='text' color='secondary' />
            </motion.div>
          </div>
          <motion.div variants={inner} style={{ marginTop: '1rem' }}>
            <Button type='submit' variant='contained'>submit</Button>
          </motion.div>
        </motion.form>
      </section>
      <BackGround />
    </>
  )
}

export default Signup