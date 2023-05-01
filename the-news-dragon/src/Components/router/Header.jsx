import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img className='img-fluid' src={logo} alt="" />
                <h2 className='text-secondary'><small>Journalism Without Fear or Favour</small></h2>
                <p>{moment().format("dddd, MMMM D YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={60}>Match Highlights: Germany vs Spain — as it happened    !     Match Highlights: Germany vs Spain as...        Match Highlights: Germany vs Spain as..</Marquee>
            </div>
            <div>

            </div>
        </Container>
    );
};

export default Header;