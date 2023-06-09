import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBari from './NavigationBari';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBari></NavigationBari>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;