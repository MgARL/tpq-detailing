import React from 'react'
import Card from 'react-bootstrap/Card'
import MiguelPic from '../images/MR.png'
import ErikPic from '../images/ER.jpg'
import TonyPic from '../images/TR.png'

function AboutUs({ Row, Col }) {
    const imagesArr = [ErikPic, TonyPic, MiguelPic ]
    const titleArr = ['Erik Rodriguez', 'Juan Rodriguez', 'Miguel Rodriguez']
    const textArr = ['Co-founder and head of Customer Service!','Co-founder and head of Human Resources!', 'Co-founder and head of Marketing and Social Media Presence!']
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
        <div>
            <Row className="g-3 pb-3">
                {cards}
            </Row>
        </div>
    )
}

export default AboutUs