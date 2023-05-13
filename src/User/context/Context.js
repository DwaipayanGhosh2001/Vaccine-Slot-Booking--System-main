import axios from "axios";
import { toast } from "react-toastify";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const UserContext = createContext();

export function useUserAuth() {
  return useContext(UserContext);
}
export function UserContextProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [bookdetails, setBookDetails] = useState([]);
  const [change, setChange] = useState();
  
  useEffect(() => {
    const pathName = location.pathname
    const path = location.pathname
    if (pathName.includes('centre') || path.includes('devs')) {
      setChange(true)
    } else {
      setChange(false)
    }
  })

  // useEffect(() => {
  //   const auth = localStorage.getItem("user");
  //   if (auth) {
  //     setUser(JSON.parse(auth));
  //   }
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(user));
  // }, [user]);

  // Local Storage implementation 
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      setUser(JSON.parse(auth));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  function userlogin(email, password) {
    axios
      .post(
        "https://vaccine-slot-booking-system-backend.vercel.app/signin",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        const { data } = res;
        setUser({
          name: data.name,
          phone: data.phone,
          email: data.email,
          address: data.address,
          uid: data.id,
          appointdetails: data.appointments,
        });
        navigate("/");
        toast("Login done", { type: "success" });
      })
      .catch((error) => {
        console.log(error);
        toast(error.response.data.error, { type: "error" });
      });
  }

  function register(name, email, phone, address, password) {
    axios
      .post(
        "https://vaccine-slot-booking-system-backend.vercel.app/signup",
        {
          name: name,
          email: email,
          phone: phone,
          address: address,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        const { data } = res;
        console.log(data);
        setUser({
          name: data.name,
          phone: data.phone,
          email: data.email,
          address: data.address,
          uid: data.id,
        });
        navigate("/");
        toast("sign up done", { type: "success" });
      })
      .catch((error) => {
        console.log(error);
        toast(error.response.data.error, { type: "error" });
        
      });
  }

  function logout() {
    setUser(null);
    localStorage.clear();
    toast("You have been logged out!", { type: "error" });
  }

  function bookvaccine(vaccine, paid, centerid, uid) {
    axios.post(
      `https://vaccine-slot-booking-system-backend.vercel.app/book-slot/${centerid}/${uid}`,
      {
        vaccine: vaccine,
        paid: paid
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        console.log(res);
        navigate("/");
        toast("Booking done successfully", { type: "success" });
      })
      .catch((error) => {
        console.log(error);
        toast(error.response.data.error, { type: "error" });
      });
  }

  function showvaccine(uid) {
    axios.get(`https://vaccine-slot-booking-system-backend.vercel.app/appointments/${uid}`)
      .then((res) => {

        const { data } = res;
        setBookDetails(data.appointments)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const value = { userlogin, register, logout, user, setUser, change, bookvaccine, showvaccine, bookdetails, setBookDetails  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
