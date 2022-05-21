import React from 'react'
import Card from 'react-bootstrap/Card'
import ErikPic from '../images/ER.jpg'
import TonyPic from '../images/TR.png'

function AboutUs({ Row, Col }) {
    const imagesArr = [ErikPic, TonyPic]
    const titleArr = ['Erik Rodriguez', 'Juan Rodriguez']
    const textArr = ['Co-founder and head of Customer Service!','Co-founder and head of Human Resources!']
    let cards = imagesArr.map((img, i) => {
        return(
        <Col key={i} className='bg-card'>
            <Card style={{'backgroundColor': 'rgb(0, 192, 250)'}}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{titleArr[i]}</Card.Title>
                    <Card.Text>
                        {textArr[i]}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

        )
    })
    return (
        <div className='my-2'>
            <Row  xs={1} sm={2} md={3} className="g-3 pb-3 d-flex justify-content-center mt-2">
                {cards}
            </Row>
        </div>
    )
}

export default AboutUs
