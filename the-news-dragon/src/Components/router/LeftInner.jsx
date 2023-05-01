import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../assets/1.png'
import second from '../../assets/2.png'
import third from '../../assets/3.png'

const LeftInner = () => {
    return (
        <div>
            <Row xs={1} md={1} lg={1} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>Biden announces $3 billion Ukraine military aid package on its Independence Day</Card.Title>
                            <Card.Text>
                                Published: 25 Aug 2022, 09: 09 US president Joe Biden speaks as he attends the first virtual meeting of the I2U2 group with Israeli prime minister Yair Lapid and leaders of India and the United Arab Emirates, in Jerusalem 14 July, 2022ReutersUS President
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>Biden announces $3 billion Ukraine military aid package on its Independence Day</Card.Title>
                            <Card.Text>
                                Published: 25 Aug 2022, 09: 09 US president Joe Biden speaks as he attends the first virtual meeting of the I2U2 group with Israeli prime minister Yair Lapid and leaders of India and the United Arab Emirates, in Jerusalem 14 July, 2022ReutersUS President
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title>Biden announces $3 billion Ukraine military aid package on its Independence Day</Card.Title>
                            <Card.Text>
                                Published: 25 Aug 2022, 09: 09 US president Joe Biden speaks as he attends the first virtual meeting of the I2U2 group with Israeli prime minister Yair Lapid and leaders of India and the United Arab Emirates, in Jerusalem 14 July, 2022ReutersUS President
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LeftInner;