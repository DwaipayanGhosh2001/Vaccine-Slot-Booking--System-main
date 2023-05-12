import React, {useState} from "react";
import {
  CardBody,
  Container,
  Card,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardText,
} from "reactstrap";
import { AiOutlineCaretDown } from "react-icons/ai";
const Faqsection = ({question, answer, count}) => {
    
    const [isOpen, setIsOpen] = useState(false);
      
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  return (

        <Card className=" py-0 shadow p-3 my-4 bg-body rounded w-50 mx-auto faq">
                 <CardBody className="pb-0">
                   <p onClick={handleToggle}>{`Q${count}: ${question}`}
                     <span className="float-end">
                       <AiOutlineCaretDown />
                     </span>
                   </p>
                   <CardText>
                   {isOpen && <p>{answer}</p>}
                   </CardText>
             </CardBody>
               </Card>
  )
      };
export default Faqsection;
