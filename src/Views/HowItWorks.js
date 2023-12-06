import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Image} from 'react-bootstrap';
import {BasicForm, RightSignUpForm} from '../components/Forms';
const HowItWorks = (props) => {
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
      
    let phone = '1-224-307-5127';
    return(
        <>
            <Helmet>
                <link rel="canonical" href={props.location.href} />
                <title>Know about Nomad Credit: Who We Are, Our Values, and Our Mission</title>
                <meta name='description' content="Get to know Nomad  Credit and our passionate team. Learn about our mission, values, and commitment to excellence toward study abroad journey" />
            </Helmet>
            <Container fluid className='secondary-hero section-block position-relative mb-5'>
                
                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>How does Nomad Credit Work?</h1>
                    </Col>
                </Row>
                <Row className='three-col-row'>
                    <Col>
                        <h2>Let’s get started</h2>
                        <p>Welcome to Nomad Credit, the premier destination for students looking to pursue their education abroad. Our education loan experts and admissions counselors are here to advise you and help get you started on your study abroad journey. </p>


                        <h2>It’s simple</h2>
                        <ol className='mb-5'>
                            <li>Fill out the form to tell us about yourself and what you're searching for.  </li>
                            <li>We'll show you our lending partners' loan options or the international universities that may work best for you.</li>
                            <li>Our experts are there to help you every step of the way. Together, we can make your study abroad dreams a reality!</li>
                        </ol>
                        <Image alt='Nomad Credit counselor helping an international student find loan options' className='mt-5' fluid src='/images/how-it-works.webp' />
                    </Col>
                    <Col>
                        <RightSignUpForm description={"Fill out the form to create an account and tell us about yourself and what you're searching for. We'll show you our partners' loan options or put you in touch with one of our admissions counselors."} />
                    </Col>
                </Row>
                <Image alt='City' className='secondary-hero-city' src='/images/admission-hero-city.webp' />
            </Container>
            <Container fluid className={`student-loan-options mt-2`}>
                <Row> 
                    <Col md={{offset:1}}>
                        <h2>Looking for Student Loan Options?</h2>
                    </Col>
                    <Col className='spacer' md={1} />
                </Row>
                <Row className='three-col-row'> 
                    <Col>
                        <ol>
                            <li>
                                <strong>Complete a Questionnaire</strong>
                                <p>
                                    Ready to get personalized loan rates? Just answer a few simple questions and we'll find the best options for you.
                                    <ul>
                                        <li><strong>Do You Need a Cosigner?</strong>
                                            <p>
                                            A U.S. cosigner can greatly increase your chances of approval and help you get a lower rate.
                                            </p>
                                        </li>
                                    </ul>
                                </p>
                            </li>
                            <li><strong>Compare competitive student loan options</strong>
                                <p>
                                    Explore multiple interest rates, and repayment plans to find the loan that's right for you.
                                </p>
                            </li>
                            <li><strong>Secure Your Financing</strong>
                                <p>
                                Complete your funding journey with your chosen lender – upload documents, sign the loan agreement, and rest easy knowing you're ready to move forward with your education abroad.
                                </p>
                            </li>
                        </ol>
                    </Col>
                </Row>
                    
            </Container>
            <Container className='pt-5 pb-5'>
                <Row className='three-col-row'>
                    <Col style={{textAlign:'center'}}>
                    <h2>Contact Us</h2>
                    </Col>
                </Row>
                <Row className='three-col-row'>
                    <Col>
                        <a href={`tel:${phone}`} className='contact-button'>
                            <span>
                                <Image alt='Phone Icon' src='/images/phone.png' />
                                <span>{phone}</span>
                            </span>
                        </a>
                    </Col>
                    {/* <Col>
                        <button onClick={() => toggleTawk()} className='contact-button'>
                            <span>
                                <Image src='/images/chat.png' />
                                <span>Chat</span>
                            </span>
                        </button>
                    </Col> */}
                    <Col>
                        <a href="https://wa.me/919209462807?text=%20I'm%20interested%20in%20Nomad%20Credit's%20help" target="_blank" className='contact-button'>
                            <span>
                                <Image alt='WhatsApp Icon' src='/images/whatsap.png' />
                                <span>WhatsApp</span>
                            </span>
                        </a>
                    </Col>
                    
                </Row>
            </Container>
            <BasicForm description="To learn more, please fill out the contact form and our team will follow up with you as soon as possible." />
        </>
    )
}
export default HowItWorks