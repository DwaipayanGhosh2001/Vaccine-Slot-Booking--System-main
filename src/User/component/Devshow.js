import { Card, CardBody, CardTitle, CardFooter } from "reactstrap"
import { FaGithub, FaInstagram } from "react-icons/fa"
import { MdMail } from 'react-icons/md'
import { GiEarthAmerica } from 'react-icons/gi'
import { BsLinkedin } from 'react-icons/bs'
import { Link } from "react-router-dom";

const Devcard = (props) => {

  return (
    <>
      <Card className="bg-transparent text-center ">
        <img src={props.image} alt={props.name} title={props.name} className="rounded-circle w-50 h-50 mx-auto dev-profile-pic"
        />
        <CardTitle className="text-uppercase fs-5 mt-5 mb-3">
          {props.name}
          <br />
          <i className="fs-6 pt-1 mb-0 text-capitalize">{props.role}</i>
        </CardTitle>
        <CardBody className="mx-auto">
          <p className="fs-5">About: </p>
          <p className="fst-italic w-75 mx-auto mb-0">{props.about}</p>
        </CardBody>
        <CardFooter className="m-0">
          <p className="fs-5">Contact:</p>
          <div className="mx-auto w-100 my-3">
            <div className="">
              <Link to={props.github} target="blank" className="text-white" title="Github">
                <FaGithub className="fs-3 rounded-circle m-2 border-2 border-danger zoom mx-3" />
              </Link>
              <Link to={props.instagram} target={`${props.instagram !== '#' ? '_blank': ''}`} title="Instagram" className="text-danger">
                <FaInstagram className="fs-3 rounded-circle m-2 border-2 border-danger zoom mx-3" />
              </Link>
              <Link title="Gmail" to={`mailto:${props.mail}`} className="text-danger">
                <MdMail className="fs-3 rounded-circle m-2 border-2 border-danger zoom mx-3" />
              </Link>
              <Link title="portfolio" to={props.portfolio} target={`${props.portfolio !== '#' ? '_blank': ''}`} className="text-in">
                <GiEarthAmerica className="fs-3 rounded-circle m-2 border-2 border-danger zoom mx-3" />
              </Link>
              <Link title="Linkedin" to={props.linkedin} target="_blank" className="text-in">
                <BsLinkedin className="fs-3  m-2 border-2 border-danger zoom mx-3" />
              </Link>
            </div>
          </div>

        </CardFooter>
      </Card>
    </>
  )
}
export default Devcard;