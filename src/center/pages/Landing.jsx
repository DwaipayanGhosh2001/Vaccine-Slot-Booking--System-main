import '../styles/center.css'
import '../styles/centerLanding.css'
import { useCenterAuth } from '../context/CenterAuthProvider'
import Sidebar from '../components/Sidebar'
import BackGround from '../components/BackGround'
import { motion } from "framer-motion"

const outerVariants = {
  closed: { transition: { staggerChildren: 0.3, staggerDirection: -1 } },
  open: { transition: { staggerChildren: 0.3, delayChildren: 0.1 } }
}
const innerTop = {
  closed: { opacity: 0, scale: 2,},
  open: { opacity: 1, scale: 1, transition: { type: 'spring' } }
}
const outerBottom = {
  closed: { transition: { staggerChildren: 0.2, staggerDirection: -1 } },
  open: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
}
const innerBottom = {
  closed: { opacity: 0, x: 200,},
  open: { opacity: 1, x: 0, transition: { type: 'spring' } }
}

function genStrength(args) {
  if (args <= 10) {
    return 'stock strength is too poor, Need to restock ASAP!'
  } else if (args > 10 && args <= 50) {
    return 'stock strength is ok, need to restock in soon.'
  } else if (args > 50 && args <= 100) {
    return 'stock strength is very good, no need to worry.'
  } else {
    return 'Excellent stock strength, ready for another pandemic.'
  }
}

const Landing = () => {
  
  const { CurrentCenter } = useCenterAuth()
  let stock = []
  if (CurrentCenter['vaccines'] !== null) {
    stock = [...CurrentCenter['vaccines']]
  }


  return (
    <>
      <Sidebar />
      <motion.section variants={outerVariants} initial='closed' animate='open' className='myContainer centre-landing-main' >
        <div className='landing-title'>
          <motion.h1 variants={innerTop}>{CurrentCenter['centre_name']}</motion.h1>
          <motion.h3 variants={innerTop}>
            <span>{CurrentCenter['address']}</span>,
            <span>{CurrentCenter['district']}</span>,
            <span>{CurrentCenter['state']}</span>,
            <span>{`pin - ${CurrentCenter['pin_code']}`}</span>
          </motion.h3>
        </div>
        <motion.div variants={outerBottom} className='stock-grid'>
          {stock.map((curr, i) => {
            const msg = genStrength(curr.stock)
            return (
              <motion.div variants={innerBottom} className="stock-grid-item" key={i}>
                <div className="stock-grid-item-body">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" style={{ color: curr.paid ? '#db2777' : '#34d399' }}>
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h4 style={{ width: '100%', display: 'flex', gap: '1rem', fontSize: '1.5rem', lineHeight: '2rem' }}>
                      <span style={{ textTransform: 'capitalize' }}>{curr.name}</span>
                      <span style={{ color: curr.paid ? '#db2777' : '#34d399' }}>{curr.paid ? 'Paid' : 'Free'}</span>
                    </h4>
                    <p style={{ color: '#374151', fontSize: '0.875rem', lineHeight: '1.25rem' }}>{msg}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.section>
      <BackGround />
    </>
  )
}

export default Landing