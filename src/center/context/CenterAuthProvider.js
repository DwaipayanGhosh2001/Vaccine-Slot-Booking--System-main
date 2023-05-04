import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CenterAuthContext = createContext()

export function useCenterAuth() {
    return useContext(CenterAuthContext)
}

function centreStorage(params) {
    const { address, _id, centre_name, district, phone, pin_code, state, email } = params
    localStorage.setItem("centre_data", JSON.stringify({ address, _id, centre_name, district, phone, pin_code, state, email }))
    localStorage.setItem("stock", JSON.stringify(params.vaccines))
}

export function CenterAuthProvider({ children }) {

    const [Loading, setLoading] = useState(true)
    const [CurrentCenter, setCurrentCenter] = useState(null)
    const [errMsg, setErrMsg] = useState('')
    const [Error, setError] = useState(false)
    const navigate = useNavigate()

    async function getCentre(params) {
        await axios.get(`https://vaccine-slot-booking-system-backend.vercel.app/get-vaccination-centre-details/${params}`, { headers: { 'Content-Type': 'application/json' } }).then((res) => {
            setCurrentCenter(res.data)
            centreStorage(res.data)
            navigate('/centre')
            return true
        }).catch((err) => {
            console.log(err)
            return false
        })
    }

    async function signup(args) {
        // to create a new center with args containing require data address, name etc to post.
        await axios.post('https://vaccine-slot-booking-system-backend.vercel.app/register-vaccination-centre', {...args}, { headers: { 'Content-Type': 'application/json'}}).then((res) => {
            const d = res.data
            getCentre(d['_id'])
        }).catch((err) => {
            console.log(err)
            setError(true)
            setErrMsg('Failed to register')
        })
        setTimeout(() => {
            setError(false)
        }, 5000)
        setLoading(false)
    }

    async function login(id, password) {
        // log in to a center after login center can fetch its data
        await axios.post('https://vaccine-slot-booking-system-backend.vercel.app/login-to-vaccination-centre', { email: id, password: password }, { headers: { 'Content-Type': 'application/json' } }).then((res) => {
            setCurrentCenter(res.data)
            centreStorage(res.data)
            navigate('/centre')
            setError(false)
        }).catch((err) => {
            console.log(err)
            setError(true)
            setErrMsg('Failed to login')
        })
        setTimeout(() => {
            setError(false)
        }, 5000)
        setLoading(false)
    }

    async function logout() {
        setCurrentCenter(null)
        localStorage.removeItem('centre_data')
        localStorage.removeItem('stock')
        setErrMsg(null)
        setLoading(false)
        //navigate('/center-login')
    }

    async function addNewVaccine(params) {
        setError(true)
        if (CurrentCenter) {
            await axios.post(`https://vaccine-slot-booking-system-backend.vercel.app/add-vaccine/${CurrentCenter['_id']}`, { name: params.name, count: params.amt, paid: params.isPaid }, { headers: { 'Content-Type': 'application/json' } }).then((res) => {
                const s = res.status;
                if (s.toString() === '200') {
                    setErrMsg('Vaccine added success fully')
                    getCentre(CurrentCenter['_id'])
                } else {
                    setErrMsg('Something went wrong!')
                }
            }).catch((err) => {
                console.log(err)
                setErrMsg('Failed to add new vaccine')
            })
        }
        setTimeout(() => {
            setError(false)
        }, 5000)
        setLoading(false)
    }

    async function updateCenterStock(params) {
        setError(true)
        if (CurrentCenter) {
            await axios.put(`https://vaccine-slot-booking-system-backend.vercel.app/update-stock/${CurrentCenter['_id']}`, { name: params.name, count: params.amt, paid: params.isPaid }, { headers: { 'Content-Type': 'application/json' } }).then((res) => {
                const s = res.status;
                if (s.toString() === '200') {
                    setErrMsg('Vaccine is updated successfully')
                    getCentre(CurrentCenter['_id'])
                } else {
                    setErrMsg('Something went wrong!')
                }
            }).catch((err) => {
                console.log(err)
                setErrMsg('Failed to update vaccine')
            })
        }
        setTimeout(() => {
            setError(false)
        }, 5000)
        setLoading(false)
    }

    useEffect(() => {
        const storage = localStorage.getItem('centre_data')
        const stock = localStorage.getItem('stock')
        if (storage !== null && stock !== null) {
            const info = JSON.parse(storage)
            const id = info['_id']
            getCentre(id)
        } else {
            if (stock !== null) {
                const data = { ...JSON.parse(storage), vaccines: JSON.parse(stock) }
                setCurrentCenter(data)
                navigate('/centre')
            }
        }
        setLoading(false)
    }, [])

    const value = { signup, login, logout, CurrentCenter, errMsg, Error, updateCenterStock, getCentre, addNewVaccine }

    return (
        <CenterAuthContext.Provider value={value}>
            {!Loading && children}
        </CenterAuthContext.Provider>
    )
}