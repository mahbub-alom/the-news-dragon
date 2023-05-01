import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../assets/1.png'
import second from '../../assets/2.png'
import third from '../../assets/3.png'

const EditorInsights = () => {
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4">
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
                            <Card.Title>Joe Biden announces $3 billion in Ukraine weapons aid</Card.Title>
                            <Card.Text>
                                WASHINGTON: President Joe Biden announced nearly $3 billion in military aid to Kyiv on Wednesday -- the biggest US package so far -- to mark Ukraine's independence day, six months after Russia invaded the country. The package aims to fortify Ukraine's military over the coming two years by committing the production and...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title>Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine</Card.Title>
                            <Card.Text>
                                Tucker Carlson has rarely met a dictator's ass he didn't want to kiss, and Vladimir Putin is at the very top of that puckering up list. The Fox News host is something of a folk hero in Russia: Because of the pro-Putin propaganda he so often spews.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default EditorInsights;