import '../styles/sideBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { IconButton, Button } from '@mui/material';
import { useState } from 'react';
import { useCenterAuth } from '../context/CenterAuthProvider';
import AddStock from './AddStock';
import UpdateStock from './UpdateStock';

const Sidebar = () => {
    const [Open, toggleOpen] = useState(false)
    const [addStocks, setAddStocks] = useState(false)
    const [updateStocks, setUpdateStocks] = useState(false)
    const { logout } = useCenterAuth()
   
    return (
        <section style={{position: 'relative'}}>
            <div style={{position: 'fixed', top : '0.5rem', right: '0.5rem', zIndex: 50}}>
                <IconButton onClick={() => toggleOpen(!Open)}>
                    {Open ? <CloseIcon color='error' fontSize='large' />: <MenuIcon color='primary' fontSize='large' />}
                </IconButton>
            </div>
            <div className={`sidebar-box ${Open ? 'boxOpen': 'boxClose'}`}>
                <Button onClick={() => setAddStocks(!addStocks)} color='success' variant='contained' startIcon={<AddIcon />}>Add stock</Button>
                <Button onClick={() => setUpdateStocks(!updateStocks)} color='secondary' variant='contained' startIcon={<SyncAltIcon />}>update stock</Button>
                <Button onClick={logout} variant='contained' startIcon={<LogoutIcon />}>Logout</Button>
            </div>
            <AddStock open={addStocks} setOpen={setAddStocks}/>
            <UpdateStock open={updateStocks} setOpen={setUpdateStocks}/>
        </section>
    )
}

export default Sidebar