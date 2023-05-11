import { BookingCard } from '../components/BookingCard'
import { useCenterAuth } from '../context/CenterAuthProvider'
import '../styles/CentreBooking.css'
import '../styles/center.css'
import BackGround from '../components/BackGround'
import { useEffect, useState } from 'react'
import BookingBar from '../components/BookingBar'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const outer = {
  open: { transition: { staggerChildren: 0.3, delayChildren: 0.3 }},
  closed: { transition: { staggerChildren: 0.3, staggerDirection: -1 } }
};
const innerTop = {
  closed: { opacity: 0, scale: 2,},
  open: { opacity: 1, scale: 1, transition: { type: 'spring' } }
}

const Bookings = () => {

  const { BookingData } = useCenterAuth()
  const [Data, setData] = useState([])
  const [Heading, setHeading] = useState('')
  const navigate = useNavigate()

  function changeDb(type) {
    switch (type) {
      case 'approved': {
        const temp = BookingData.filter((curr) => { return curr['approved'] === true })
        setData(temp)
        setHeading('Approved Bookings')
      }
        break;
      case 'deny': {
        const temp = BookingData.filter((curr) => { return curr['approved'] === false })
        setData(temp)
        setHeading('Canceled Bookings')
      }
        break;
      case 'pending': {
        const temp = BookingData.filter((curr) => { return curr['approved'] === null })
        setData(temp)
        setHeading('Pending Bookings')
      }
        break;
      default:
        console.log('please')
        break;
    }
  }

  useEffect(() => {
    if(BookingData) {
      changeDb('pending')
    } else {
      navigate('/centre')
    }
  }, [])

  if (Data.length > 0) {
    return (
      <>
        <BookingBar changer={changeDb} />
        <motion.section variants={outer} initial='closed' animate='open' className='myContainer '>
          <motion.h1 variants={innerTop} className='booking-h1'>{Heading}</motion.h1>
          <div className='centre-booking-grid'>
            {Data.map((curr, i) => {
              return (
                <BookingCard key={i} data={curr} />
              )
            })}
          </div>
        </motion.section>
        <BackGround />
      </>
    )
  }


}

export default Bookings