import { forwardRef, useState, useRef, useEffect } from 'react'
import '../styles/BookingCard.css'
import { IconButton, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, Slide, Button, Alert } from '@mui/material'
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CachedIcon from '@mui/icons-material/Cached';
import { useCenterAuth } from '../context/CenterAuthProvider';
import {motion} from 'framer-motion'

const inner = {
  closed : { x: 200, scale: 1.1, opacity: 0, transition: {type: 'spring', stiffness: 100 }},
  open: { x: 0, scale: 1, opacity: 1, transition: {type: 'spring', stiffness: 100 }}
}

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const HList = ['08 AM', '09 AM', '10 AM', '11 AM', '12 PM', '01 PM', '02 PM', '03 PM', '04 PM', '05 PM', '06 PM', '07 PM']
const MList = ['00', '15', '30', '45']

const minDay = dayjs().add(1, 'day');
const maxDay = dayjs().add(14, 'days')

export const BookingCard = ({ data }) => {
  const allow = data['booking_date'].slice(0, 16)
  const bookingTime = allow.slice(11)
  const bookingDate = allow.slice(0, 10)
  const [open, setOpen] = useState(false);
  const [Disable, setDisable] = useState(true)
  const [resStatus, setResStatus] = useState(null)
  const [Date, setDate] = useState('')
  const [MM, setMM] = useState('mm');
  const [HH, setHH] = useState('hh');
  const [disableByHH, setDisableByHH] = useState(true)
  const submitRef = useRef()
  const resetRef = useRef()
  const { updateUserBooking, Error, errMsg } = useCenterAuth()

  useEffect(() => {
    setHH('hh')
    setMM('00')
    setDate(minDay)
  }, [])


  function statusChanger(args) {
    if (args == 'approved') {
      setDisable(false)
      setResStatus(true)
    }
    if (args == 'decline') {
      setDisable(true)
      setResStatus(false)
    }
  }

  const handleClose = () => {
    setDisable(true)
    setResStatus(null)
    resetRef.current.click()
    setOpen(false);
  };

  function changeHour(e) {
    if (e.target.value !== 'hh') {
      setHH(e.target.value)
      setDisableByHH(false)
    } else {
      setDisableByHH(true)
    }
  }

  function handelSubmit(e) {
    e.preventDefault()

    if (resStatus) {
      if (HH == 'hh') {
        return alert('Please select vaccination time (Hour).')
      } else {
        const dd = Date.get('date')
        const mm = Date.get('month')
        const yy = Date.get('year')
        const h = HH.slice(0, 2)
        const m = `${MM} ${HH.slice(-2)}`

        const vaccDate = `${dd}/${mm + 1}/${yy} at ${h}:${m}`
        console.log(data['_id'])
        updateUserBooking({ id: data['_id'], approved: resStatus, date: vaccDate })
      }
    } else {
      updateUserBooking({ id: data['_id'], approved: resStatus })
    }

  }
  return (
    <>
      <motion.div variants={inner} className='centre-booking-card'>
        <div className='booking-update' >
          <IconButton onClick={() => setOpen(true)} >
            <CachedIcon />
          </IconButton>
        </div>
        <h4 className='udp-vacc-name'>
          Required:
          <span>
            {` ${data.vaccine}`}
          </span>
          <span style={{ color: data.paid ? '#db2777' : '#34d399' }}>
            {` - ${data.paid ? 'Paid' : 'Free'}`}
          </span>
        </h4>
        <h4 className='udp-u-data'>{`User Name: ${data.name}`}</h4>
        <h4 className='udp-u-data'>{`Booking date: ${bookingDate}`}</h4>
        <h4 className='udp-u-data'>{`Booking time: ${bookingTime} ${parseInt(bookingTime.slice(0, 2)) < 12 ? 'AM' : 'PM'}`}</h4>
        {data['approved'] === true && <h4 className='udp-appr'>{`Vaccination Date: ${data['allotted_date']}`}</h4>}
        {data['approved'] === false && <h4 className='udp-rjc'>{`Vaccination request declined.`}</h4>}
      </motion.div>
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description">
        <DialogTitle style={{ textTransform: 'capitalize' }}>{`${data.vaccine} - ${data.paid ? 'Paid' : 'Free'} `}</DialogTitle>
        {Error && <Alert style={{ margin: '.5rem 1rem' }} variant='outlined' color='warning'>{errMsg}</Alert>}
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {`Booked by ${data.name}, ${bookingDate} at ${bookingTime} ${parseInt(bookingTime.slice(0, 2)) < 12 ? 'AM' : 'PM'}`}
          </DialogContentText>
          <form onSubmit={handelSubmit} className='status-update-container'>
            <div className='status-radio'>
              <div>
                <input type='radio' id='vaccine-approved' required value='approved' onChange={() => statusChanger('approved')} name='vaccination-status' title='Approved' checked={data['approved'] === true ? true : false} />
                <label htmlFor='vaccine-approved' style={{ cursor: 'pointer' }}>Approved</label>
              </div>
              <div>
                <input type='radio' id='vaccine-deny' required value='deny' onChange={() => statusChanger('decline')} name='vaccination-status' title='Deny' checked={data['approved'] === false ? true : false} />
                <label htmlFor='vaccine-deny' style={{ cursor: 'pointer' }}>Declined</label>
              </div>
            </div>
            <div className='mt-4'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={Date} onChange={(newValue) => setDate(newValue)} required={!Disable} defaultValue={minDay} disabled={Disable} label='Vaccination Date' minDate={minDay} maxDate={maxDay} />
              </LocalizationProvider>
            </div>
            <div className='mt-4'>
              <div>
                <label htmlFor='select-hh' style={{ marginRight: '.5rem', fontWeight: 'bold' }}>Select hour</label>
                <select id='select-hh' onChange={changeHour} required={!Disable} disabled={Disable} >
                  <option style={{ margin: '.2rem 0' }} value='hh'>--hh--</option>
                  {HList.map((curr, i) => {
                    return (
                      <option key={i} value={curr} style={{ margin: '.2rem 0' }}>{curr}</option>
                    )
                  })}
                </select>
              </div>
              <div className='mt-2'>
                <label htmlFor='select-mm' style={{ marginRight: '.5rem', fontWeight: 'bold' }}>Select minute</label>
                <select id='select-mm' onChange={(e) => setMM(e.target.value)} required={!Disable} disabled={Disable || disableByHH}>
                  {MList.map((curr, i) => {
                    return (
                      <option key={i} value={curr} style={{ margin: '.2rem 0' }}>{curr}</option>
                    )
                  })}
                </select>
              </div>
            </div>
            <button ref={submitRef} type='submit' hidden />
            <button ref={resetRef} type='reset' hidden />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
          <Button onClick={() => submitRef.current.click()}>SUBMIT</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
