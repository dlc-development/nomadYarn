import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import {  Container, Row, Col, Image, Button, Card} from 'react-bootstrap';
import { LoanLandingForm, LoanBottomForm} from '../components/Forms';
import {Testimonials2023}   from '../components/Testimonials';
import ScheduleNowBanner from '../components/ScheduleNowBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import{IstAdmissionsTeam} from '../components/Team';
import '../css/views/secondary.scss';
 
const AdmissionLandingProfileEvaluation = (props) => {
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
                        <h1 className='hero-header'> Navigating Success Abroad: Personalize Your Journey with Nomad Credit's Profile Evaluation</h1>
                        <p>Are you prepared to embark on an extraordinary academic adventure? That's where a profile evaluation comes in. It's more than just a formality – your roadmap to success. </p>
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    <Col >
                    <h2 className='mt-5 mb-5'>Opportunities await, and we're here to help you seize them.</h2>
                        <ul>    

                            <li><strong>Meet Our Expert Counselors:</strong> Introducing our team of skilled Counselors and Senior Counselors dedicated to offering you invaluable insights for selecting the perfect universities.</li>
                            <li><strong>Freedom to Choose:</strong> Enjoy choosing institutions aligned with your aspirations and interests. No pressure to opt exclusively for partner universities. Your education, your choice.</li>
                            <li><strong>Service Excellence:</strong> Our service-oriented approach to profile evaluation ensures an end-to-end process that leads to effective results.</li>
                            <li><strong>In-Depth US Knowledge:</strong> Benefit from our localized knowledge for selecting universities offering post-education opportunities in the US.</li>
                            <li><strong>Holistic Approach:</strong> With a strong focus on service excellence, we are part of your journey – from admission to visa processing and beyond.</li>
                            <li><strong>Comprehensive Recommendations:</strong> We extend our commitment to excellence by focusing on partner institutions and identifying top non-partner schools that match our students' profiles perfectly.</li>

                        </ul>
                        {/* <Button variant="outline-light" className='extra-pad mt-3 mb-2' href='#mainForm'>Connect With A Counselor <FontAwesomeIcon icon={faArrowRight} /> </Button> */}
                        <Image alt="Image of happy student talking to Nomad Credit specialist" fluid className='mt-5' src='/images/how-it-works.webp' />
                        
                    </Col>
                    <Col xs={12} md={6}>
                        <LoanLandingForm landingName="/admissions-landing-profile-evaluation" title="Begin Your Journey Now" paragraph="Ready to make your mark on the global academic landscape? 
                                    Fill in our streamlined profile evaluation form to make informed decisions.
                                    Let's shape your future together." buttonText="Start Your Profile Evaluation" />
                    </Col>
                    
                </Row>
                <Image alt='City' className='secondary-hero-city' src='/images/admission-hero-city.webp' />
            </Container>
            
            <Container fluid className={`section-block testimonials`}>
            <Row> 
                <Col className='pt-5' md={{offset:1}}>
                    <h2>Why get your profile evaluated by Nomad Credit?</h2>
                </Col>
                <Col className='spacer' md={1} />
            </Row>
            <Row className='three-col-row'>
            <Col xs={12} md={4}>
                <Card className='nomad-card'>
                        <Card.Body>
                            <Card.Title>Building Your Foundation</Card.Title>
                            <div className='clearfix' />
                            <Card.Text>
                             
                            Select the right program/course that aligns with your goals.
                            <br /><br />
                            Ensure core courses resonate with your study area for a fulfilling education.
 
                           
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card className='nomad-card'>
                        <Card.Body>
                            <Card.Title>Securing Your Future</Card.Title>
                            <div className='clearfix' />
                            <Card.Text>
                            Assess universities' track records in student placements.
                            <br /><br />
                            Consider industry trends and location-specific opportunities.
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card className='nomad-card'>
                        <Card.Body>
                            <Card.Title>Paving Your Path</Card.Title>
                            <div className='clearfix' />
                            <Card.Text>
                                Consider program-specific university rankings for insights.
                                <br /><br />
                                Rankings offer insights into future opportunities and returns on investment.
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card className='nomad-card'>
                        <Card.Body>
                            <Card.Title>Navigating Admissions</Card.Title>
                            <div className='clearfix' />
                            <Card.Text>
                                Research acceptance rates to gauge your chances.
                                <br /><br />
                                Opt for universities aligning with your profile's strengths.
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card className='nomad-card'>
                        <Card.Body>
                            <Card.Title>A Path to Affordability</Card.Title>
                            <div className='clearfix' />
                            <Card.Text>
                                Explore financial aid options and scholarships.
                                <br /><br />
                                Assistantships and deserving student grants are readily available.
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card className='nomad-card'>
                        <Card.Body>
                            <Card.Title>Crafting Your Experience</Card.Title>
                            <div className='clearfix' />
                            <Card.Text>
                                Research location factors for safety and career potential.
                                <br /><br />
                                Choose a location with weather suited to your preferences.
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Col>
            </Row>
            </Container>
            <ScheduleNowBanner title="Begin Your Profile Evaluation Journey Now" />
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
            <IstAdmissionsTeam />
            <LoanBottomForm title="Begin Your Journey Now" landingName="/admissions-landing-2023" paragraph="Ready to make your mark on the global academic landscape? Fill in our streamlined profile evaluation form to make informed decisions. Let's shape your future together." buttonText="Start Your Profile Evaluation"  />
            <Container fluid className={`section-block testimonials`}>
                <Row> 
                    <Col className='pt-2'>
                        <p style={{textAlign:'center'}}>Elevate your educational journey beyond borders. At Nomad Credit, we're dedicated to propelling you toward success. </p>
                        <h2>Your choices today will define your achievements tomorrow –<br /> Let's make them count!</h2>
                        <Button className='extra-pad btn btn-primary btn-lg' style={{display: 'block', margin: 'auto', width: 'fit-content'}} href='#secondaryForm'>Contact Us</Button>
                        <p style={{textAlign:'center'}} className="mt-3">Have questions? Our team of experts is here to assist you at every turn. Your study abroad dream is just a step away!</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default AdmissionLandingProfileEvaluation