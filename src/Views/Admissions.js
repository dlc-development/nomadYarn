import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import { Button, Container, Row, Col, Image,Card, Form} from 'react-bootstrap';
import {BasicForm} from '../components/Forms';
import Testimonials from '../components/Testimonials';
import Blogs from '../components/Blogs';
import ScheduleNowBanner from '../components/ScheduleNowBanner';
import Team from '../components/Team';
import '../css/views/secondary.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Admissions = (props) => {
    
    useEffect(() => {
        fetch(`/api/v1/whoami`)
            .then(response => response.json())
            .then(response => {
                if(response.logged_in) window.location.href = '/dashboard'
            })
            .catch(error => {
                console.log('error', ""+error);
            });
      }, [])

    return(
        <>
        <Helmet>
            <link rel="canonical" href={props.location.href} />
            <title>Study Abroad Consultants for Admission | Nomad Credit</title>
            <meta name='description' content="Search for and compare numerous university options based on your profile. Nomad Credit is an expert at identifying top-rated universities in multiple countries." />
        </Helmet>
            <Container fluid className='secondary-hero section-block  position-relative'>
                
                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>Begin Your Study Abroad Journey with Nomad Credit</h1>
                        <p>Decades of U.S.-Based College Admissions Expertise</p>
                        <Button className='extra-pad' size='lg' href='#mainForm'>Get Started <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    
                    <Col xs={12} md={6}>
                        <Image alt='International Students studying abroad' fluid src='/images/admissions-hero.webp' />
                    </Col>
                    <Col >
                        <h2 className='mt-5'>Your Study Abroad Advisors</h2>
                        <p>Are you ready to take your education abroad?  Nomad Credit wants to help make that journey easier by helping find the perfect university for you. Don't allow the complex university admissions process to prevent you from having a life-changing study abroad experience! Sign up today and start exploring potential options in the U.S. or around the world.</p>

                        <h2 className='mt-5'>Local U.S.A. Knowledge</h2>
                        <p>Our executive team has a wealth of experience in the U.S., making them experts when it comes to knowing local universities, job markets, and hiring landscapes. With Nomad Credit's expert guidance, you can start your journey into studying abroad feeling confident that you have the right knowledge at hand!</p>
                        
                        <Button variant="primary" className='extra-pad' href='#mainForm'>Sign Up Today </Button>
                    </Col>
                    
                </Row>
                <Image alt='City' className='secondary-hero-city' src='/images/admission-hero-city.webp' />
            </Container>
            <Testimonials className='lightblue-background' />
            <Container fluid className='easy-process-section section-block'>
                <Row className='three-col-row'>
                    <Col xs={12} md={6}>
                        <h2 className='mt-5'>Easy Remote Process</h2>
                        <p>Our remote admissions process helps make your journey as stress-free and simple as possible. Our Admissions Journey portal provides resources to help you effectively plan, monitor and reach your educational goals right from the comfort of your home. Plus, our counselors are always available to give you personalized advice whenever needed. Do not hesitate to reach out and contact us!</p>

                        <h2 className='mt-5'>Personal Service from Experienced Counselors</h2>
                        <p>Work with talented U.S. admissions experts that have decades of experience in study abroad admissions. They’ll answer questions and provide insights throughout each step of the way. Additionally, you'll get a customized statement of purpose edited with impeccable American grammar and language entirely free!</p>

                        <h2 className='mt-5'>Student Loan Expertise</h2>
                        <p>With our extensive connections to various banks and lenders in both the United States and India, Nomad Credit can provide expert assistance when evaluating potential education loan options that may be ideal for your studies abroad. Don't delay--start your journey today with us!</p>
                        
                        <Button variant="outline-light" className='extra-pad mt-5' href='/how-it-works'>SEE YOUR OPTIONS <FontAwesomeIcon icon={faArrowRight} /> </Button>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image alt='Happy international students studying abroad with the help of Nomad Credit' fluid src='/images/admissions-easy-process.webp' />
                    </Col> 
                </Row>
            </Container>
            <Team />
            <ScheduleNowBanner />
            <Blogs />
            <BasicForm description={"Fill out the form to create an account and tell us about yourself and what you're searching for. One of our admissions counselors will reach out to you soon."} checkAdmissionsOption={true} />
        </>
    )
}
export default Admissions