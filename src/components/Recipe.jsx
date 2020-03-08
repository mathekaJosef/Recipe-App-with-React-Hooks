import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col} from 'reactstrap'

function Recipe({title, calories, image, ingredients}) {
    return (
        <Container>
            <Row>
              <Col xs="4">
                <h1>{title}</h1>
                <p>{calories}</p>
                <img src={image} alt=""/>
                <ol style={{listStyle: "none"}}>
                    {
                        ingredients.map((item, index) => (
                            <li key={index}>{item.text}</li>
                        ))
                    }
                </ol>
              </Col>
            </Row>
          </Container>
    )
}

export default Recipe
