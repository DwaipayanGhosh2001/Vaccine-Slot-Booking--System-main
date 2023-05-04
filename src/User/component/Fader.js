import React, {useState, useEffect} from "react";
const Fader = ({text}) =>
{
    const [fade, setFade]= useState({
        fadeEffect: "fade-in"
    })
    useEffect(()=>{
        const timeout= setInterval(()=> {
            if(fade.fadeEffect === 'fade-in')
            {
                setFade({
                    fadeEffect:'fade-out'
                })
            } else {
                setFade({
                    fadeEffect:'fade-in'
                })
            }
        }, 3000);
        return()=> clearInterval(timeout)
    })
return(
    <>
    <h4 className={fade.fadeEffect}>{text}</h4>
    </>
)
}
export default Fader;