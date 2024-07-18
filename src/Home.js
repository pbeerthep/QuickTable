import { useState } from "react";
import Gallery from "./Gallery";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
//import Test from "./components/Test";
import './Home.css'
function Home(){
    const [action,setAction] = useState("Sign Up")
    return (
        <div className="container">
         <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
         </div>
         <div className="inputs">
            {action==="login"?<div></div>: <div className="input">
                <img src="" alt=""/>
                <input type="text"placeholder="Name"/>
                <FaUser className="beer"/>
            </div>}
           
            <div className="input">
                <img src="" alt=""/>
                <input type="email"placeholder="Email"/>
                <MdEmail className="beer"/>
            </div>
            <div className="input">
                <img src="" alt=""/>
                <input type="password"placeholder="Password"/>
                <RiLockPasswordLine className="beer"/>
            </div>
         </div>
         {action==="login"?<div></div>:<div className="forget-password">Lost password? <span>Click here</span></div>}
         
         <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
         </div>

        </div>
    )
    
}
export default Home