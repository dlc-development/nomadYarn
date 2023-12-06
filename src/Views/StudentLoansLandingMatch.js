import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card'
import {LoanLandingForm, LoanBottomForm} from '../components/Forms';
import Testimonials from '../components/Testimonials';
import ScheduleNowBanner from '../components/ScheduleNowBanner';
import '../css/views/secondary.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import windowSize from '../helpers/window-size.js';
import { Helmet } from 'react-helmet-async';
 
const StudentLoansLanding = (props) => {
    const imgSize = windowSize();
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString);
    const thankYou = urlParams.get('thankYou');
    if(thankYou){
        return(
            <Container fluid className='section-block'>
                
                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>Thank You</h1>
                        <p>We will be in touch soon. In the meantime, you may finish setting up your NomadCredit.com account using the email we sent you.</p>
                    </Col>
                </Row>
            </Container>
        )
    }

    return(

        <>
        <Helmet>
                <link rel="canonical" href={props.location.href} />
            </Helmet>
            <Container fluid className='secondary-hero section-block  position-relative'>
                
                <Row className='three-col-row'>
                    <Col xs={12}>
                        <p style={{fontWeight:'bold'}}>We’ve Helped Over 3,000 International Graduate Students Secure Over $200 Million In Student Loan Funding… So They Can Attend Their DREAM Schools In The U.S., U.K., Canada, Australia, & New Zealand!</p>
                        <h1 className='hero-header'>Our Top-Rated U.S.-Based Advisory Firm Will Match You To AMAZING Study Abroad Student Loan Options… 
                        <br />(And We’ll Help You For FREE!)
                        </h1>
                        <p style={{fontWeight:'bold'}}>Simply fill out the secure form below to instantly view the best and most competitive student loan options available to you right now!</p>
                        <p></p>
                    </Col>
                    
                </Row>
                <Row className='three-col-row'>
                    <Col xs={12}>
                        <LoanLandingForm landingName="/student-loans-landing-match" title="Get Access To The BEST Student Loan Options For 2023" paragraph="NO SPAM Policy: We take your privacy seriously. We will NOT share your personal information with anyone. You will NOT receive unsolicited email."  />
                    </Col>
                </Row>
                <Image alt='City' className='secondary-hero-city' src={`/images/admission-hero-city-${imgSize}.webp`}/>
            </Container>
            <Testimonials title="What Other International Graduate Students Are Saying About Us!
" />        
            <ScheduleNowBanner />
            <Container fluid className='easy-process-section section-block' style={{paddingTop:'20px', paddingBottom:'20px'}}>
                <Row className='three-col-row'>
                    <Col xs={12} md={6}>
                        <Image alt='International Student comparing student loans with help from Nomad Credit' width={578} height={550} fluid src={`/images/student-loan-options.webp`} />
                    </Col> 
                    <Col xs={12} md={6}>
                        <h2 className='mt-5 mb-5'>Compare Top Student-Loan Options In Seconds</h2>
                        <p>Our mission is to help you finance your study abroad journey! Simply enter your contact info to unlock our private, password-protected student portal where you can view dozens of specialized loan options tailored to international students, like you! </p>

                        <ul>
                            <li>Find and compare student-friendly, low-interest loan options in seconds </li>
                            <li>Get access to more and better loan options than many of your peers, thanks to our network of specialized lenders and U.S. connections</li>
                            <li>Get unbiased support analyzing and understanding your loan options</li>

                        </ul>

                        
                        <Button variant="outline-light" className='extra-pad mt-3 mb-2' href='#mainForm'>See Your Options <FontAwesomeIcon icon={faArrowRight} /> </Button>
                    </Col>
                    
                </Row>
            </Container>
            <Container fluid className='guidance-section pt-5'>
                <Row className='pt-5'> 
                    
                    <Col md={{offset:1, span:5}}>
                        <h2>How Nomad Works</h2>
                        
                        <p><span style={{fontWeight:'bold', fontSize:'large'}}>Step 1. Enter your information</span>
                        <br />Answering a few simple questions gives us everything we need to find the best options for you</p>
                        
                        <p><span style={{fontWeight:'bold', fontSize:'large'}}>Step 2. Compare Top Options</span>
                        <br />Explore loan options with multiple interest rates and repayment plans.</p>
                        
                        <p><span style={{fontWeight:'bold', fontSize:'large'}}>Step 3. Secure Financing</span>
                        <br />Complete your application directly with your chosen lender.</p>

                        <Button variant="outline-light" className='extra-pad' href='/about-us'>Get Started  <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Col>
                    <Col className='center-spacer' md={1} />
                    <Col className='' md={{span:4}} >
                        <Image alt='Nomad Credit show International Students how studying abroad works' fluid src='/images/guidance.webp' />
                    </Col>
                    <Col className='spacer' md={1} />
                </Row>
            </Container>
            <Container fluid className={`section-block student-loan-options`}>
            <Row> 
                    <Col md={{offset:1}}>
                        <h2>View The Best Loans For Your Unique Situation</h2>
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
                                    <Button size='lg' variant='outline-primary' href='#secondaryForm'>Find Options</Button>
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
            <Container fluid className='guidance-section pt-5'>
                <Row className='pt-5 pb-0'> 
                    
                    <Col md={{offset:2}}>
                        <h2>Time is Running Out,
                        <br />Secure the Best Study Abroad Loan Options Today!</h2>
                        <p style={{color:'#a3b8d9'}}>With interest rates changing daily and on the rise, we don't want you to miss out on an opportunity to save thousands of dollars. That's why our expert advisors are here to guide you through the process and ensure that you make the most informed decision. So, what are you waiting for? Simply enter your information, tap the button below, and secure your future today with the best international student loan options available for 2023.</p>
                    </Col>
                    <Col className='spacer' md={2} />
                </Row>
            </Container>
            <LoanBottomForm title="Find The RIGHT Loan For You" landingName="/student-loans-landing-match"  />
        </>
    )
}
export default StudentLoansLanding