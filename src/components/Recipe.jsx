import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'
import {Col, Card, CardBody, CardSubtitle, CardImg, CardTitle, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { FaLongArrowAltRight } from 'react-icons/fa';



function Recipe({title, calories, image, ingredients}) {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const card_title = title.substring(0,12)
  const card_calories = calories.toFixed(4)
  
    return (
        <Col sm="3" style={{marginBottom: "15px"}}>
          <Card className="card-recipe">
            <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardBody>
              <CardTitle className="card-title"><b>{card_title}...</b></CardTitle>
              <CardSubtitle className="card-calories">{card_calories}</CardSubtitle>
              <small id="go-recipe" style={{fontSize: "10px", cursor: "pointer"}} onClick={toggle}>Recipe <FaLongArrowAltRight/></small>

              <Modal isOpen={modal} toggle={toggle} style={{border: "none"}}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                  <ul>
                    <li>{ingredients}</li>
                  </ul>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>

            </CardBody>
          </Card>
        </Col>
    )
}

export default Recipe
