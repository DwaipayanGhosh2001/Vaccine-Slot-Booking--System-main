import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, TextField, Alert } from '@mui/material';
import { forwardRef, useState } from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CancelIcon from '@mui/icons-material/Cancel';
import { useRef } from 'react';
import { useCenterAuth } from '../context/CenterAuthProvider';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddStock({ open, setOpen }) {

  const {errMsg, Error, addNewVaccine } = useCenterAuth()

  const submitRef = useRef()
  const vNameRef = useRef()
  const vAmtRef = useRef()
  const resetRef = useRef()
  const [vType, setVType] = useState('')
 
  const handleClose = () => {
    resetRef.current.click()
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = vNameRef.current.value;
    const amt = parseInt(vAmtRef.current.value)
    const isPaid = vType === 'paid' ? true : false
    addNewVaccine({name, amt, isPaid})
  };

  return (
    <div>
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="alert-add-new-vaccine" >
        <DialogTitle>{"Add more vaccine"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-add-new-vaccine">
            only add new type of vaccines here, If vaccine count is 0 then update it.
          </DialogContentText>
          {Error && <Alert severity='error'>{errMsg}</Alert>}
          <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
            <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1rem' }}>
              <TextField inputRef={vNameRef} required label='Vaccine name' variant='outlined' type='text' />
              <TextField inputRef={vAmtRef} required label='Quantity' variant='outlined' type='number' />
            </div>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '1.25rem' }}>
              <div style={{gap: '.5rem', display: 'flex'}}>
                <input required onClick={() => setVType('free')} id='free-type' type='radio' value='paid' title='Paid' name='vaccine-type' style={{cursor: 'pointer'}} />
                <label htmlFor='free-type'style={{cursor: 'pointer'}} >Free</label>
              </div>
              <div style={{gap: '.5rem', display: 'flex'}}>
                <input required onClick={() => setVType('paid')} id='paid-type' type='radio' value='free' title='Free' name='vaccine-type' style={{cursor: 'pointer'}} />
                <label htmlFor='paid-type'style={{cursor: 'pointer'}} >Paid</label>
              </div>
            </div>
            <button ref={submitRef} type='submit' hidden />
            <button ref={resetRef} type='reset' hidden />
          </form>
        </DialogContent>
        <DialogActions>
          <Button startIcon={<CancelIcon />} variant='outlined' color='error' onClick={handleClose}>cancel</Button>
          <Button startIcon={<AddTaskIcon />} variant='outlined' color='success' onClick={() => { submitRef.current.click() }}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}