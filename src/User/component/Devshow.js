import { Card, CardBody, CardTitle, CardFooter } from "reactstrap"
import Icons from "./Icons";
const Devcard = ({image, about, google, github, porfolio, instagram, name, role}) => {

    return (
        <>
        <Card className="bg-transparent text-center ">
                <img
                  src={image}
                  alt=""
                  className="rounded-circle w-50 h-50 mx-auto"
                />
                <CardTitle className="text-uppercase fs-5 mt-5 mb-3">
                  {name}
                  <br />
                  <i className="fs-6 pt-1 mb-0 text-capitalize">{role}</i>
                </CardTitle>
                <CardBody className= "mx-auto">
                    <p className="fs-5">About: </p>
                  < p className="fst-italic w-75 mx-auto mb-0">
                    {about}
                    
                  </p>
                </CardBody>
<CardFooter className= "m-0">
    <p className="fs-5">Contact:</p>
    <div className="mx-auto w-100 my-3">
    <Icons google={google} github={github} instagram={instagram} porfolio={porfolio}/>
    </div>
 
</CardFooter>
              </Card>
        </>
    )
}
export default Devcard;