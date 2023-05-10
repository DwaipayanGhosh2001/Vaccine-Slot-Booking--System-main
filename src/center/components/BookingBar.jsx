import '../styles/sideBar.css'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import CloseIcon from '@mui/icons-material/Close';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import HouseIcon from '@mui/icons-material/House';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { IconButton, Button } from '@mui/material';
import { useState } from 'react';
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

export default function BookingBar (props)  {
    const [Open, toggleOpen] = useState(false)
    const navigate = useNavigate();

    return (
        <section style={{position: 'relative'}}>
            <div style={{position: 'fixed', top : '0.5rem', right: '0.5rem', zIndex: 50}}>
                <IconButton onClick={() => toggleOpen(!Open)}>
                    {Open ? <CloseIcon color='error' fontSize='large' />: <FormatAlignLeftIcon color='primary' fontSize='large' />}
                </IconButton>
            </div>
            <motion.div variants={outerBottom} animate={Open ? 'open' : 'closed'} className={`sidebar-box ${Open ? 'boxOpen': 'boxClose'}`}>
                <motion.div variants={innerBottom}>
                    <Button onClick={() => navigate('/')} color='inherit' variant='contained' startIcon={<HouseIcon />}>Home</Button>
                </motion.div>
                <motion.div variants={innerBottom}>
                    <Button onClick={() => navigate('/centre')} color='secondary' variant='contained' startIcon={<VaccinesIcon />}>Your Centre</Button>
                </motion.div>
                <motion.div variants={innerBottom}>
                    <Button onClick={() => props.changer('pending')}  color='info' variant='contained' startIcon={<HourglassBottomIcon />}>Pending</Button>
                </motion.div>
                <motion.div variants={innerBottom}>
                    <Button onClick={() => props.changer('approved')} color='success' variant='contained' startIcon={<DoneAllIcon />}>Approved</Button>
                </motion.div>
                <motion.div variants={innerBottom}>
                    <Button onClick={() => props.changer('deny')} variant='contained' color='error' startIcon={<DoNotDisturbIcon />}>Declined</Button>
                </motion.div>
            </motion.div>
        </section>
    )
}