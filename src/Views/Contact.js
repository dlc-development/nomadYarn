
import React, {useContext} from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import BasicForm, { RightSignUpForm } from '../components/Forms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faComments, faComment } from '@fortawesome/free-solid-svg-icons';
// import {Helmet} from "react-helmet";
import '../css/components/contact.scss';

const Contact = (props) => {


    return(
        <>
            <Helmet>
                <link rel="canonical" href={props.location.href} />
                <title>Contact Nomad Credit - Reach Out for Questions, Support, or Collaboration</title>
                <meta name='description' content="Contact Nomad Credit to get in touch with our team. Whether you have questions or need support or guidance toward your study abroad journey, we're here to help. Reach out today, and let's connect!" />
            </Helmet>
            <Container fluid className='secondary-hero section-block position-relative mb-5'>
                 <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>Contact Us</h1>
                    </Col>
                </Row>
                <Row className='three-col-row'>
                    <Col>
                        <h2>We’re Here for You</h2>
                        <p> Our team of loans and admissions experts is on hand to help answer your questions. Fill out the form or reach out to us via phone or chat, and we’ll help get you the information you need.</p>
                        <ul className='contact-us-list'>
                            <li><Button href='tel:1-224-307-5127'><span className='icon-holder'><FontAwesomeIcon icon={faMobile} /></span> 1-224-307-5127</Button></li>
                            {/* <li><Button onClick={() => toggleTawk()}><span className='icon-holder'><FontAwesomeIcon icon={faComments} /></span> Chat</Button></li> */}
                            <li><Button href="https://wa.me/919209462807?text=%20I'm%20interested%20in%20Nomad%20Credit's%20help" target="_blank"><span className='icon-holder'><FontAwesomeIcon icon={faComment} /></span> WhatsApp</Button></li>
                        </ul>

                    </Col>
                    <Col>
                        <RightSignUpForm description="To learn more about how Nomad Credit can help, please fill out the information below and our team will follow up with you as soon as possible." />
                    </Col>
                </Row>
                <Image alt='City' className='secondary-hero-city' src='/images/admission-hero-city.webp' />
            </Container>
        </>
    )
}
export default Contact