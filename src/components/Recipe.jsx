import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'
import {Col, Card, CardBody, CardSubtitle, CardImg, CardTitle, CardText} from 'reactstrap';

function Recipe({title, calories, image, ingredients}) {
    return (

        <Col sm="3" style={{marginBottom: "15px"}}>
          <Card className="card-recipe">
            <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardBody>
              <CardTitle>{title}</CardTitle>
              <CardSubtitle>{calories}</CardSubtitle>
              <CardText>
                
              </CardText>
            </CardBody>
          </Card>
        </Col>
    )
}

export default Recipe
