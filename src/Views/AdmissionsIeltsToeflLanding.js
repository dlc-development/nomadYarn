import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import {  Container, Row, Col, Image, Button, Card} from 'react-bootstrap';
import { LoanLandingForm, LoanBottomForm} from '../components/Forms';
import {Testimonials2023}   from '../components/Testimonials';
import ScheduleNowBanner from '../components/ScheduleNowBanner';
import{IstAdmissionsTeam} from '../components/Team';
import '../css/views/secondary.scss';
 
const IeltsToeflLanding = (props) => {
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
                    <Col>
                        <h1 className='hero-header'> Ace the IELTS/TOEFL with Nomad Credit - Your Path to Global Education</h1>
                        <p>Are you dreaming of studying abroad? Search no more – the IELTS/TOEFL exam is your gateway to global education! Nomad Credit invites you to embark on an exciting journey filled with IELTS/TOEFL insights, updates, resources, and guidance. </p>
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    <Col >
                    <h2 className='mt-5 mb-5'>Why take the IELTS/TOEFL Exam?</h2>
                        <p>
                            Studying abroad is a dream for many, and IELTS/TOEFL exams are your passport to making it happen. These exams assess your English language proficiency, a crucial requirement for admission to universities worldwide. 

                            Scoring well in these exams opens doors to top-notch institutions and enhances your academic and career prospects.

                        </p>
                        {/* <Button variant="outline-light" className='extra-pad mt-3 mb-2' href='#mainForm'>Connect With A Counselor <FontAwesomeIcon icon={faArrowRight} /> </Button> */}
                        <Image alt="Image of happy student talking to Nomad Credit specialist" fluid className='mt-5' src='/images/how-it-works.webp' />
                        
                    </Col>
                    <Col xs={12} md={6}>
                        <LoanLandingForm landingName="/admissions-ielts-toefl-landing" title="Essential IELTS/TOEFL Information at Your Fingertips" paragraph="Ready to take the first step? Fill out the form below and receive valuable information to kick-start your IELTS/TOEFL preparation." buttonText="Get Started" />
                    </Col>
                    
                </Row>
                <Image alt='City' className='secondary-hero-city' src='/images/admission-hero-city.webp' />
            </Container>
            
            <Container fluid className={`section-block testimonials`} style={{paddingBottom:'0'}}>
                <Row> 
                    <Col className='pt-5' md={{offset:1}}>
                        <h2>Test Structure and Fees</h2>
                    </Col>
                    <Col className='spacer' md={1} />
                </Row>
                <Row>
                    <Col>
                        <table className='landin-table'>
                            <tbody>
                                <tr>
                                    <td colSpan={99}><strong>IELTS - International English Language Testing System</strong></td>
                                </tr>
                                <tr>
                                    <td>Fees</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Score report</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Score Validity</td>
                                    <td>2 Years</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className='landin-table'>
                            <tbody>
                                <tr>
                                    <td colSpan={99}><strong>Format - Academic Module</strong></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><strong>Number of questions</strong></td>
                                    <td><strong>Time</strong></td>
                                    <td><strong>Score Range</strong></td>
                                </tr>
                                <tr>
                                    <td><strong>Reading</strong></td>
                                    <td>3 passages - 40 questions</td>
                                    <td>60 minutes</td>
                                    <td>0 - 9 Bands</td>
                                </tr>
                                <tr>
                                    <td><strong>Listening</strong></td>
                                    <td>4 tracks - 40 questions</td>
                                    <td>20 - 30 minutes</td>
                                    <td>0 - 9 Bands</td>
                                </tr>
                                <tr>
                                    <td><strong>Writing</strong></td>
                                    <td>Task 1 Report Writing Task 2 Essay Writing</td>
                                    <td>60 minutes</td>
                                    <td>0 - 9 Bands</td>
                                </tr>
                                <tr>
                                    <td><strong>Speaking</strong></td>
                                    <td>Personal interview</td>
                                    <td>15- 20 minutes</td>
                                    <td>0 - 9 Bands</td>
                                </tr>
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td></td>
                                    <td><strong>3 hours Approx</strong></td>
                                    <td>0 - 9 Bands</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className='landin-table'>
                            <tbody>
                                <tr>
                                    <td colSpan={99}><strong>TOEFL - Test of English as a Foreign Language</strong></td>
                                </tr>
                                <tr>
                                    <td>Fees</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Score report</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Score Validity</td>
                                    <td>2 Years</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className='landin-table'>
                            <tbody>
                                <tr>
                                    <td colSpan={99}><strong>Format - Academic Module</strong></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><strong>Number of questions</strong></td>
                                    <td><strong>Time</strong></td>
                                    <td><strong>Score Range</strong></td>
                                </tr>
                                <tr>
                                    <td><strong>Reading</strong></td>
                                    <td>Read passages and answer 20 questions</td>
                                    <td>35 minutes</td>
                                    <td>0 - 30</td>
                                </tr>
                                <tr>
                                    <td><strong>Listening</strong></td>
                                    <td>Listen classroom lectures/discussions and answer 28 questions</td>
                                    <td>36 minutes</td>
                                    <td>0 - 30</td>
                                </tr>
                                <tr>
                                    <td><strong>Writing - 2 tasks</strong></td>





                                    <td>1. Read a passage, listen to a recording, type your response.
                                        <br />2. State and support an opinion in an online classroom discussion.</td>
                                    <td>29 minutes</td>
                                    <td>0 - 30</td>
                                </tr>
                                <tr>
                                    <td><strong>Speaking - 4 tasks</strong></td>
                                    <td>Talk about a familiar topic and discuss material you read and heard.</td>
                                    <td>16 minutes</td>
                                    <td>0 - 30</td>
                                </tr>
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td></td>
                                    <td><strong>2 Hours Approx</strong></td>
                                    <td>0 - 120</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>

            <Container fluid className={`section-block testimonials`}>
            <Row> 
                <Col className='pt-5' md={{offset:1}}>
                    <h2>How Nomad Credit Can Help You:</h2>
                    <p>
                    At Nomad Credit, we are your dedicated study abroad consultants, here to guide you every step of the way.
                    </p>
                </Col>
                <Col className='spacer' md={1} />
            </Row>
            <Row className='three-col-row'>
            <Col xs={12} md={6}>
                <Card className='nomad-card'>
                        <Card.Body>
                            <Card.Title>Programs and Eligibility:</Card.Title>
                            <div className='clearfix' />
                            <Card.Text>
                            Navigating through the countless academic programs and eligibility criteria can be overwhelming. Our experts will help you choose the right program that aligns with your goals and ensures you meet all the admission requirements.
                           
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Col>
            <Col xs={12} md={6}>
                <Card className='nomad-card'>
                        <Card.Body>
                            <Card.Title>Application Simplified:</Card.Title>
                            <div className='clearfix' />
                            <Card.Text>
                            Applying for the 2023 intakes has never been easier. Our streamlined process takes the hassle out of applications. We even offer application fee waivers, ensuring you save money while pursuing your education.
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Col>
            <Col xs={12} md={6}>
                <Card className='nomad-card'>
                        <Card.Body>
                            <Card.Title>Free Services:</Card.Title>
                            <div className='clearfix' />
                            <Card.Text>
                            Yes, you read it right! All our services are entirely free of cost for students. We're committed to helping you achieve your academic goals without breaking the bank.
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Col>
            <Col xs={12} md={6}>
                <Card className='nomad-card'>
                        <Card.Body>
                            <Card.Title>Holistic help:</Card.Title>
                            <div className='clearfix' />
                            <Card.Text>
                            Nomad Credit offers a range of services, from test prep to visa assistance. We're not just consultants but your partners in your study abroad journey.
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Col>
            
            </Row>
            </Container>
            {/* <ScheduleNowBanner title="Begin Your IELTS/TOEFL Journey Now" /> */}
            {/* <Testimonials className='lightblue-background' /> */}

            {/* <Testimonials2023 title="What Other International Graduate Students Are Saying About Us!" /> */}
            {/* <Container fluid className='easy-process-section section-block'>
                <Row className='three-col-row'>
                    <Col xs={12} md={6}>
                        <h2 className='mt-5'>Connect With A Counselor In 3 Simple Steps</h2>
                        <br />
                        <p>
                            <strong>Step 1. Enter your information.</strong>
                            <br />
                            Answer a few simple questions to get started on your abroad education journey.
                        </p>
                        <p>
                            <strong>Step 2. Connect With Your Counselor.</strong>
                            <br />
                            And access additional admissions support.
                        </p>
                        <p>
                            <strong>Step 3. Complete Your Applications.</strong>
                            <br />
                            Apply for your dream American universities in one place. 
                        </p>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image fluid src='/images/admissions-landing-easy-digital.webp' />
                    </Col> 

                </Row>
            </Container> */}
            {/* <IstAdmissionsTeam /> */}
            <LoanBottomForm title="Your Source for the IELTS/TOEFL Exam" landingName="/admissions-ielts-toefl-landing" paragraph="Ready to take the first step? Let's take the first step together towards your bright future. Sign up now to get started! Fill out the form below and receive valuable information to kick-start your preparation." buttonText="Get Started "  />
            {/* <Container fluid className={`section-block testimonials`}>
                <Row> 
                    <Col className='pt-2'>
                        <p style={{textAlign:'center'}}>Elevate your educational journey beyond borders. At Nomad Credit, we're dedicated to propelling you toward success. </p>
                        <h2>Your choices today will define your achievements tomorrow –<br /> Let's make them count!</h2>
                        <Button className='extra-pad btn btn-primary btn-lg' style={{display: 'block', margin: 'auto', width: 'fit-content'}} href='#secondaryForm'>Contact Us</Button>
                        <p style={{textAlign:'center'}} className="mt-3">Have questions? Our team of experts is here to assist you at every turn. Your study abroad dream is just a step away!</p>
                    </Col>
                </Row>
            </Container> */}
        </>
    )
}
export default IeltsToeflLanding