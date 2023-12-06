import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import {  Container, Row, Col, Image, } from 'react-bootstrap';
import {RightSignUpForm, BasicForm} from '../components/Forms';
import Testimonials from '../components/Testimonials';
import ScheduleNowBanner from '../components/ScheduleNowBanner';
import '../css/views/secondary.scss';

const AdmissionLanding = (props) => {
    

    return(
        <>
        <Helmet>
            <link rel="canonical" href={props.location.href} />
        </Helmet>
            <Container fluid className='secondary-hero section-block  position-relative'>
                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'> Begin Your Study Abroad Journey with Nomad Credit</h1>
                        <p>Ready to embark on a life-changing study abroad adventure?
                        <br />Nomad Credit is here to help you get there.</p>
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    <Col >
                        <h2 className='mt-5'>Your Advisors to Studying Abroad in the United States</h2>
                        <p>Are you ready to take your education abroad?  Nomad Credit wants to make that journey easier by helping you find the perfect university for your needs. Don't allow the complex university admissions process to prevent you from having a life-changing study abroad experience! Sign up today and start exploring potential options in the US or around the world.</p>
                        <ul>
                                <li>Our team of experienced admissions counselors have decades of experience in study-abroad admissions</li>
                                <li>We offer personalized statement of purpose editing with impeccable American grammar and language</li>
                                <li>Our team can also provide information about student loan options</li>
                        </ul>
                        <Image alt="Image of happy student talking to Nomad Credit specialist" fluid className='mt-5' src='/images/how-it-works.webp' />
                        
                    </Col>
                    <Col xs={12} md={6}>
                        <RightSignUpForm checkAdmissionsOption={true} description={"Fill out the form to create an account and tell us about yourself and what you're searching for. One of our admissions counselors will reach out to you soon."} />
                    </Col>
                    
                </Row>
                <Image alt='City' className='secondary-hero-city' src='/images/admission-hero-city.webp' />
            </Container>
            <Testimonials className='lightblue-background' />
            <ScheduleNowBanner />
            <Container fluid className='easy-process-section section-block'>
                <Row className='three-col-row'>
                    <Col xs={12} md={6}>
                        <h2 className='mt-5'>Easy Remote Process</h2>
                        <p>Our remote admissions process helps make your journey as stress-free and simple as possible. Our admissions Journey portal provides resources to help you effectively plan, monitor and reach your educational goals right from the comfort of your home. Plus, our counselors are always available to give you personalized advice whenever needed. Do not hesitate to reach out and contact us!</p>

                        <h2 className='mt-5'>Personal Service from Experienced Counselors</h2>
                        <p>Work with talented U.S. admissions experts that have decades of experience in study abroad admissions. They’ll answer questions and provide insights throughout each step of the way. Additionally, you'll get a customized statement of purpose edited with impeccable American grammar and language entirely free!</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image alt="International Students who got loans from Nomad Credit" fluid src='/images/admissions-landing-easy-digital.webp' />
                    </Col> 
                </Row>
            </Container>
            <BasicForm description={"Fill out the form to create an account and tell us about yourself and what you're searching for. One of our admissions counselors will reach out to you soon."} checkAdmissionsOption={true} />
        </>
    )
}
export default AdmissionLanding