import React from "react";
import { Card, Container, CardBody } from "reactstrap";
const Developers = () =>
{
return(
   <Container className="bg-image" fluid>
    <h1 className="text-uppercase fw-bold text-center text-white mb-0"> know our devs</h1>
    <div className="d-flex justify-content-between">
<Card className="ms-5 rounded-circle">
    <img src="../Img/doi.png" alt="" />
<CardBody>
<h1>hwllo</h1>
</CardBody>
</Card>
<Card>
<h1>hi</h1>
</Card>
<Card className="me-5"><h1>hi</h1>
</Card>
    </div>
   </Container>
)
}
export default Developers;