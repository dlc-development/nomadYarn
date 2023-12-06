import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card'
import { LoanLandingForm, LoanLandingFormTest } from '../../components/forms/LoanLandingForm';
// import { LoanBottomForm } from '../components/Forms';
import { LoanBottomForm } from '../../components/forms/LoanBottomForm';
import Testimonials from '../../components/Testimonials';
import '../../css/views/secondary.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import windowSize from '../../helpers/window-size.js';
import { useFeatureFlagVariantKey } from 'posthog-js/react';
import ScheduleNowBanner from '../../components/ScheduleNowBanner'
const StudentLoansLandingB = (props) => {
    // const {variant} = props;
    const variant = useFeatureFlagVariantKey('contact-form-label-on-top')
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
                <link rel="canonical" href={props.href} />
                <title>Education Loan Options for Abroad Studies | Nomad Credit</title>
                <meta name='description' content="Unlock opportunities for studying abroad with Nomad Credit's education loan options. Get the financial support you need to make your dreams a reality." /> 
            </Helmet>
            <Container fluid className='secondary-hero section-block  position-relative'>
                
                <Row className='three-col-row'>
                    <Col>
                        <p> We’ve Helped Over 3,000 International Graduate Students Secure Over $200 Million In Student Loan Funding... So They Can Attend Their DREAM Schools In The U.S., U.K., Canada, Australia, & New Zealand!</p>
                        <h1 className='hero-header'>Our Top-Rated U.S.-Based Advisory Firm Will Match You to AMAZING Study Abroad Student Loan Options... <br/>(And We’ll Help You For FREE!)</h1>
                        <p className='display-desktop'>Simply fill out the secure form below to instantly view the best and most competitive student loan options available to you right now!</p>
                        
                        {/* <Image alt="Image of happy student talking to Nomad Credit specialist" width={293} height={291} fluid className='mt-5 display-mobile' src={`/images/how-it-works-${imgSize}.webp`} /> */}
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    
                    {/* <Col xs={12} md={6}>
                    <h2 className='mt-5'>Start financing your study abroad journey </h2>
                        <p>
                        Nomad Credit can help you search for potential education loan options designed specifically with international students in mind – you may not even need a cosigner or collateral! With access to loan options from multiple lending partners with low interest rates and flexible repayment terms, you could potentially save thousands of dollars on your student loans down the road. Sign up and start exploring student loan options now!</p>

                        <ul>
                            <li style={{marginBottom:'15px'}}>Search with ease, knowing thousands have successfully used our services </li>
                            <li style={{marginBottom:'15px'}}>Review potential loan options that can finance up to your entire approved cost of attendance</li> 
                            <li style={{marginBottom:'15px'}}>Discuss your options with a member of our experienced global team with unique U.S.-based expertise </li>
                            <li>Potentially save thousands on student loan repayment</li>
                        </ul>

                        <Image alt="Image of happy student talking to Nomad Credit specialist" width={578} height={436} fluid className='mt-5 display-desktop' src={`/images/how-it-works-${imgSize}.webp`} />
                    </Col> */}
                    <Col>
                    {/* {variant && variant === 'test' ? <LoanLandingFormTest landingName={props.path} />
                :    <LoanLandingForm landingName={props.path}  />
                } */}
                 <LoanLandingForm title="Get Access to the BEST Student Loan Options" landingName={props.path}  />
                        
                    </Col>
                    
                </Row>
                <Image alt='City' className='secondary-hero-city' src={`/images/admission-hero-city-${imgSize}.webp`}/>
            </Container>
            <Testimonials title="What Other International Graduate Students Are Saying About Us" />
            <ScheduleNowBanner />
            <Container fluid className='student-load-options pt-5 pb-5'>
                <Row className='pt-5'> 
                    <Col md={{offset:1}}>
                        <Image alt='International Students who got loans from Nomad Credit' width="516" height="468" src={`/images/student-loan-options-${imgSize}.webp`} fluid />
                    </Col>
                    <Col className='center-spacer' md={1} />
                    <Col>
                        <h2>Compare Top Student Loan Options in Seconds</h2>
                        <p>Our mission is to help you finance your study abroad journey! Simply enter your contact info to unlock our private, password-protected student portal where you can view dozens of specialized loan options tailored to international students, like you!</p>
                        <ul>
                            <li>Find and compare student-friendly, low-interest loan options in seconds</li>
                            <li>Get access to more and better loan options than many of your peers, thanks to our network of specialized lenders and U.S. connections</li>
                            <li>Get unbiased support analyzing and understanding your loan options</li>
                        </ul>
                        <Button variant="outline-light" className='extra-pad' href='#thisForm'>COMPARE STUDENT LOANS NOW <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Col>
                    <Col className='spacer' md={1} />
                </Row>
            </Container>
            <Container fluid className='guidance-section pt-5'>
                <Row className='pt-5'> 
                    
                    <Col md={{offset:1}}>
                        <h2>How Nomad Credit Works</h2>
                        <p><strong>Step 1. Enter your information.</strong><br />
                            Answering a few simple questions gives us everything we need to find the best options for you.</p>

                            <p><strong>Step 2. Compare Top Options</strong><br />
                            Explore loan options with multiple interest rates and repayment plans.</p>

                            <p><strong>Step 3. Secure Financing</strong><br />
                            Complete your application directly with your chosen lender.</p>




                        <Button variant="outline-light" className='extra-pad' href='#thisForm'>GET STARTED  <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Col>
                    <Col className='center-spacer' md={1} />
                    <Col className='guidance-image'>
                        <Image style={{height:'auto', maxWidth:'100%'}} alt='International Students who recieved loans with the help of Nomad Credit' width="648" height="601" src={`/images/guidance-${imgSize}.webp`} />
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
                                    <Button size='lg' variant='outline-primary' href='#thisForm'>Find Options</Button>
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
            <Container fluid style={{backgroundColor:'#18345e', color:'white'}}>
            <Row> 
                    <Col md={{offset:1}} className="text-center pt-5">
                        <h2 style={{color:'white'}}>
                        Time is Running Out,<br />
Secure the Best Study Abroad Loan Options Today!
                        </h2>
                        <p>
                        With interest rates changing daily and on the rise, we don't want you to miss out on an opportunity to save thousands of dollars. That's why our expert advisors are here to guide you through the process and ensure that you make the most informed decision. So, what are you waiting for? Simply enter your information, tap the button below, and secure your future today with the best international student loan options available for 2023.
                        </p>
                    </Col>
                    <Col className='spacer' md={1} />
                </Row>

            </Container>
            <LoanBottomForm />
        </>
    )
}
export default StudentLoansLandingB