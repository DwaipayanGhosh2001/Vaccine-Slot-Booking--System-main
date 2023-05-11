import '../styles/sideBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import HouseIcon from '@mui/icons-material/House';
import ChecklistIcon from '@mui/icons-material/Checklist';
import { IconButton, Button } from '@mui/material';
import { useState } from 'react';
import { useCenterAuth } from '../context/CenterAuthProvider';
import AddStock from './AddStock';
import UpdateStock from './UpdateStock';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const outerBottom = {
    closed: { transition: { staggerChildren: 0.07, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
  }
  const innerBottom = {
    closed: { opacity: 0, y: 100,},
    open: { opacity: 1, y: 0, transition: { type: 'spring' } }
  }

const Sidebar = () => {
    const [Open, toggleOpen] = useState(false)
    const [addStocks, setAddStocks] = useState(false)
    const [updateStocks, setUpdateStocks] = useState(false)
    const { logout, CurrentCenter, getBookings } = useCenterAuth()
    const navigate = useNavigate();

    async function fetchBooking() {
        getBookings(CurrentCenter['_id']).then(() => {
            navigate('/centre-bookings')
        })
    }

    return (
        <section style={{position: 'relative'}}>
            <div style={{position: 'fixed', top : '0.5rem', right: '0.5rem', zIndex: 50}}>
                <IconButton onClick={() => toggleOpen(!Open)}>
                    {Open ? <CloseIcon color='error' fontSize='large' />: <MenuIcon color='primary' fontSize='large' />}
                </IconButton>
            </div>
            <motion.div variants={outerBottom} animate={Open ? 'open' : 'closed'} className={`sidebar-box ${Open ? 'boxOpen': 'boxClose'}`}>
                <motion.div variants={innerBottom}>
                    <Button onClick={() => navigate('/')} color='inherit' variant='contained' startIcon={<HouseIcon />}>Home</Button>
                </motion.div>
                <motion.div variants={innerBottom}>
                    <Button onClick={fetchBooking} color='primary' variant='contained' startIcon={<ChecklistIcon />}>Bookings</Button>
                </motion.div>
                <motion.div variants={innerBottom}>
                    <Button onClick={() => setAddStocks(!addStocks)} color='success' variant='contained' startIcon={<AddIcon />}>New vaccine</Button>
                </motion.div>
                <motion.div variants={innerBottom}>
                    <Button onClick={() => setUpdateStocks(!updateStocks)} color='secondary' variant='contained' startIcon={<SyncAltIcon />}>add stocks</Button>
                </motion.div>
                <motion.div variants={innerBottom}>
                    <Button onClick={logout} variant='contained' color='warning' startIcon={<LogoutIcon />}>Logout</Button>
                </motion.div>
            </motion.div>
            <AddStock open={addStocks} setOpen={setAddStocks}/>
            <UpdateStock open={updateStocks} setOpen={setUpdateStocks}/>
        </section>
    )
}

export default Sidebar