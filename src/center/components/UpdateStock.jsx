import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, TextField, Alert } from '@mui/material';
import { forwardRef, useState, useRef } from 'react';
import { useCenterAuth } from '../context/CenterAuthProvider';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CancelIcon from '@mui/icons-material/Cancel';


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UpdateStock({ open, setOpen }) {

  const { CurrentCenter, errMsg, Error, updateCenterStock } = useCenterAuth()
  let DB = []
  if (CurrentCenter['vaccines'] !== null) {
    DB = [...CurrentCenter['vaccines']]
  }
  const [vName, setVName] = useState('name')
  const submitRef = useRef()
  const resetRef = useRef()
  const countRef = useRef()
  const [vAmt, setVAmt] = useState('select name *')
  const [vType, setVType] = useState('')
  const [disable, setDisable] = useState(true)

  function selectVaccine (param) {
    // console.log(param)
    for (const {name, stock, paid} of DB) {
      if(name === param['name'] && paid === param['paid']) {
        setVAmt(stock)
        paid ? setVType('paid') : setVType('free')
      }
    }
  }
  
  function vaccineChange(e) {
    const curr = e.target.value.split(',')
    if(curr[0] !== 'name' ) {
      setVName(curr[0])
      selectVaccine({name: curr[0], paid: curr[1] === 'true' ? true : false})
      setDisable(false)
    } else {
      setDisable(true)
      setVAmt('select name *')
      setVType('')
    }
  }

  const handleClose = () => {
    resetRef.current.click()
    setVAmt('select name *')
    setVType('')
    setDisable(true)
    setOpen(false);
  };

  function handelSubmit(e) {
    e.preventDefault()
    const count = parseInt(countRef.current.value)
    updateCenterStock({name: vName, amt: count, isPaid: vType === 'paid' ? true : false})
  }

  return (
    <div>
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description" >
        <DialogTitle>{"Update vaccine stocks"}</DialogTitle>
        <DialogContent>
          {Error && <Alert severity='error'>{errMsg}</Alert>}
          <form onSubmit={handelSubmit} style={{margin: '1rem'}}>
            <div style={{ margin: '.75rem 0', display: 'flex', width: '100%' }}>
              <label htmlFor='v-name-update' style={{marginRight: '.75rem'}}>Vaccine Name</label>
              <select id='v-name-update' onChange={vaccineChange}>
                <option value='name' style={{margin: '.2rem 0'}}>name - type</option>
                {DB.map((curr, i) => {
                  return (
                    <option key={i} value={[curr.name, curr.paid]} style={{margin: '.2rem 0'}}>{`${curr.name} - ${curr.paid? 'paid': 'free'}`}</option>
                  )
                })}
              </select>
            </div>
            <h6 style={{margin: '1rem 0'}}>{`Current stock : ${vAmt}`}</h6>
            <TextField required inputRef={countRef} variant='outlined' label='update stock' type='number' disabled={disable} placeholder='update new stock quantity' />
            <div style={{ display: 'flex', gap: '1rem', fontSize: '1.25rem', margin: '1rem 0' }}>
              <div style={{ gap: '.5rem', display: 'flex' }}>
                <input required onChange={() => setVType('free')} id='free-type-update' checked={vType === 'free'? true : false} type='radio' value='paid' title='Paid' name='vaccine-type' disabled={disable} style={{cursor: 'pointer'}} />
                <label htmlFor='free-type-update'style={{cursor: 'pointer'}} >Free</label>
              </div>
              <div style={{ gap: '.5rem', display: 'flex' }}>
                <input required onChange={() => setVType('paid')} id='paid-type-update' checked={vType === 'paid'? true : false} type='radio' value='free' title='Free' name='vaccine-type' disabled={disable} style={{cursor: 'pointer'}} />
                <label htmlFor='paid-type-update'style={{cursor: 'pointer'}} >Paid</label>
              </div>
            </div>
            <button ref={submitRef} type='submit' hidden />
            <button ref={resetRef} type='reset' hidden />
          </form>
        </DialogContent>
        <DialogActions>
          <Button startIcon={<CancelIcon />} variant='outlined' color='error' onClick={handleClose} >cancel</Button>
          <Button startIcon={<AddTaskIcon />} variant='outlined' color='success' onClick={() => {submitRef.current.click()}}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}