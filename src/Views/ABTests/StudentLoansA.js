import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import { Button, Container, Row, Col, Image,Card, Form} from 'react-bootstrap';
import BasicForm from '../../components/Forms';
import Blogs from '../../components/Blogs';
import ScheduleNowBanner from '../../components/ScheduleNowBanner';
import Team from '../../components/Team';
import '../../css/views/secondary.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const StudentLoansA = (props) => {
    useEffect(() => {
        fetch(`/api/v1/whoami`)
            .then(response => response.json())
            .then(response => {
                if(response.logged_in) window.location.href = 'dashboard'
            })
            .catch(error => {
                console.log('error', ""+error);
            });
      }, [])
    return(
        <>
            <Helmet>
                <link rel="canonical" href={props.href} />
                <title> Student Loans for International Students in USA </title>
                <meta name='description' content="Education Loan Options for Abroad Studies | Nomad Credit" />
            </Helmet>
            <Container fluid className='secondary-hero section-block  position-relative'>
                
                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>Student Loan Options for International Students</h1>
                        
                        <Button variant="primary" className='extra-pad display-mobile' href='#mainForm' >START YOUR SEARCH </Button>
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    
                    <Col xs={12} md={6}>
                        <Image alt='International Students Studying Abroad' fluid src='/images/loans-hero.webp' />
                    </Col>
                    <Col>
                    <h2 className='mb-3' >Ready to embark on a life-changing study abroad adventure?  </h2>
                    <h3 className='mb-3' >Nomad Credit is here to help you get there. </h3>
                    {/* <Button className='extra-pad' size='lg' href='#mainForm'>Get Started <FontAwesomeIcon icon={faArrowRight} /></Button> */}
                        {/* <h2 className='mt-5'>Financing your study-abroad journey</h2> */}
                        <p className='mb-5'>Are you ready to make your study abroad dreams a reality? At Nomad Credit, we understand the unique financial needs of global students who want to pursue their education overseas.</p>
                        <Button variant="primary" className='extra-pad display-mobile' href='#mainForm' >Get Started </Button>
                        <Button variant="primary" className='extra-pad display-desktop' href='#mainForm' >START YOUR SEARCH </Button>
                    </Col>
                    
                </Row>
                <Image alt='City' className='secondary-hero-city' src='/images/admission-hero-city.webp' />
            </Container>
            <Container fluid className={`section-block student-loan-options`}>
                <Row> 
                    <Col md={{offset:1}}>
                        <h2>Student Loan Options</h2>
                    </Col>
                    <Col className='spacer' md={1} />
                </Row>
                <Row className='three-col-row'> 
                    <Col className='mb-5' xs={12} md={4}>
                        <Card className='nomad-card'>
                            <Card.Body>
                                <Card.Title><h3>U.S. Cosigner</h3><hr /></Card.Title>
                                
                                <Card.Text as='div'>
                                A US Cosigner loan option often sees lower interest rates than other loan options, but it does require a US citizen or permanent resident as a cosigner.
                                <ul>
                                    <li>Potentially save thousands on your loan repayment</li>
                                    <li>May defer payment up to six to nine months after graduation  </li>
                                    <li>Can cover up to 100% of cost of attendance</li>

                                </ul>
                                <div className='btn-wrapper'>
                                    <Button size='lg' variant='outline-primary' href='#mainForm'>Find Options</Button>
                                </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mb-5'  xs={12} md={4}>
                        <Card className='nomad-card' >
                            <Card.Body>
                                <Card.Title><h3>No Cosigner</h3> <hr /></Card.Title>
                                <Card.Text as='div'>
                                No Cosigner loan options are a great choice for students enrolled in qualifying programs at most top schools in USA, Canada and the world, and offer competitive interest rates and potentially deferred payments. 
                                <ul>
                                    <li>No cosigner or collateral needed </li>
                                    <li>Flexible repayment terms, including no in-school payment options</li>
                                    <li>Limited to graduate students or 3rd/4th year undergraduate students</li>
                                </ul>
                                <div className='btn-wrapper'>
                                    <Button size='lg' variant='outline-primary' href='#mainForm'>Find Options</Button>
                                </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mb-5'  xs={12} md={4}>
                        <Card className='nomad-card'>
                            <Card.Body>
                                <Card.Title><h3>India Cosigner</h3><hr /></Card.Title>
                                <Card.Text as='div'>
                                Nomad Credit is partnered with leading Indian lenders and banks and can help you search from a wide range of competitive potential loan options. 
                                <ul>
                                    <li>Cosigner and/or collateral is required </li>
                                    <li>Loan can be taken for the entire academic period of study, not limited to one academic year </li>
                                    <li>Pre visa disbursement options may be available </li>
                                </ul>
                                <div className='btn-wrapper'>
                                    <Button size='lg' variant='outline-primary' href='#mainForm'>Find Options</Button>
                                </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='easy-process-section section-block'>
                <Row className='three-col-row'>
                    <Col xs={12} md={6}>
                        <h2 className='mt-5'>Financing your study-abroad journey</h2>
                        Student loans can be a great way to help you finance studies abroad, but it’s not always easy to find the best loan for your needs. That's why we're dedicated to helping you search for funding from a range of potential loan options designed with international students in mind. We can help you search for options from multiple lending partners offering low-interest rates and potentially flexible repayment terms. You may not even need a cosigner or collateral! 
                        <ul>
                            <li>Search with ease, knowing thousands have successfully used our services </li>
                            <li>Review potential loan options that can finance up to your entire approved cost of attendance </li>
                            <li>Discuss your options with a member of our experienced global team with unique U.S.-based expertise </li>
                            <li>Potentially save thousands on student loan repayment </li>

                        </ul>
                        
                        <Button variant="outline-light" className='extra-pad mt-5' href='/how-it-works'>Search for Options <FontAwesomeIcon icon={faArrowRight} /> </Button>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image alt='International Students getting advice' fluid src='/images/loans-get-advice.webp' />
                    </Col> 
                </Row>
            </Container>
            <Team />
            <ScheduleNowBanner />
            <Blogs />
            <BasicForm />
        </>
    )
}
export default StudentLoansA