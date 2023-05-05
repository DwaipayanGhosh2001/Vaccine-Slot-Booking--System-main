import axios from "axios";
import { toast } from "react-toastify";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const UserContext = createContext();

export function useUserAuth() {
  return useContext(UserContext);
}
export function UserContextProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [change, setChange] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      setUser(JSON.parse(auth));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
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
          appo: data.appointments,
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
    toast("You have been logged out!", { type: "error" });
  }

  function click() {
    setChange(!change);
  }
  const value = { userlogin, register, logout, user, setUser, click, change };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
