import {FaGithub, FaInstagram, FaGooglePlusG, FaUserFriends} from "react-icons/fa"
import { Link } from "react-router-dom";
const Icons = ({google, github, porfolio, instagram}) => {
return(
 <>
 <div className="">
    <Link to={github} target="blank" className="text-white">
    <FaGithub className="fs-3 rounded-circle m-2 border-2 border-danger zoom mx-3"  />
    </Link>
    <Link to={instagram} target="blank" className="text-danger">
    <FaInstagram className="fs-3 rounded-circle m-2 border-2 border-danger zoom mx-3" tag/>
    </Link>
   
<Link to={google} target="blank" className="text-success">
<FaGooglePlusG className="fs-3 rounded-circle m-2 border-2 border-danger zoom mx-3" tag/>
</Link>
   
    <Link to={porfolio} target="blank" className="text-in">
    <FaUserFriends className="fs-3 rounded-circle m-2 border-2 border-danger zoom mx-3" tag/>

    </Link>
   
 </div>
 
 </>
)
}
export default Icons;