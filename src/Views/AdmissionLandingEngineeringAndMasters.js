import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import {  Container, Row, Col, Image, Button, Card} from 'react-bootstrap';
import { LoanLandingForm, LoanBottomForm} from '../components/Forms';
import ScheduleNowBanner from '../components/ScheduleNowBanner';
import '../css/views/secondary.scss'; 

const AdmissionLandingEngineeringAndMasters = (props) => {
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
                        <h1 className='hero-header'> Unlock Your Engineering and MS/Masters Dreams Abroad</h1>
                        <p>Your Path to Success Begins with Experts at  Nomad Credit </p>
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    <Col >
                    <h2 className='mt-5 mb-5'>Discover Your Opportunities with Engineering and MS/Masters Degree Abroad</h2>
                        <p>
                        Studying abroad is not just a dream; it's your ticket to a world of possibilities. Nomad Credit, your trusted study abroad consultant, will guide you on your journey to achieving a degree in Engineering and MS/Masters. 
                        </p>
                        <p>
                        We recognize students' distinctive obstacles when pursuing an MS in Engineering. We base our decisions on the following key factors to simplify the process for both you and us.
                        </p>
                        <Image alt="Image of happy student talking to Nomad Credit specialist" fluid className='mt-5' src='/images/how-it-works.webp' />
                        
                    </Col>
                    <Col xs={12} md={6}>
                        <LoanLandingForm landingName="/admission-landing-engineering-and-masters" title="Get Started Now" paragraph="Contact Us for a Personal Consultation" buttonText="Submit" />
                    </Col>
                    
                </Row>
                <Image alt='City' className='secondary-hero-city' src='/images/admission-hero-city.webp' />
            </Container>
            
            <Container fluid className={`section-block testimonials`}>
            <Row> 
                <Col className='pt-5' md={{offset:1}}>
                    <h2>Costs & Timelines</h2>
                </Col>
                <Col className='spacer' md={1} />
            </Row>
            <Row className='three-col-row'>
            <Col xs={12} md={6}>
                <Card className='nomad-card'>
                        <Card.Body>
                            <Card.Title>Costs</Card.Title>
                            <div className='clearfix' />
                            <Card.Text>
                             
                            <strong>Tuition Fees:</strong> The cost of tuition varies significantly between countries and universities. Public universities often offer lower tuition rates for international students than private institutions. On average, tuition fees for an MS in Engineering abroad can range from $10,000 to $50,000 annually.
                            <br /> <br />
<strong>Living Expenses:</strong> Accommodation, food, transportation, and other living expenses will also vary depending on the location of your university. Major cities tend to have higher living costs. Plan for an average of $10,000 to $20,000 per year for living expenses.
 
                           
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Col>
            <Col xs={12} md={6}>
                <Card className='nomad-card'>
                        <Card.Body>
                            <Card.Title>Timelines</Card.Title>
                            <div className='clearfix' />
                            <Card.Text>
                            <strong>Duration:</strong> An MS in Engineering program abroad typically ranges from one to two years, depending on the country and the specific program.
<br /><br /><strong>Application Timelines:</strong> Application deadlines vary among universities and countries. You should start the application process at least 12 to 18 months before your intended start date. Deadlines for scholarships and financial aid may be earlier.


                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Col>
            </Row>
            </Container>
            <Container fluid className='easy-process-section section-block'>
                <Row className='three-col-row'>
                    <Col xs={12} md={6}>
                        <h2 className='mt-5'> Benefits:</h2>
                       <ul>
                        <li><strong>International Experience:</strong> Studying abroad offers a unique opportunity to immerse yourself in a different culture, gain international exposure, and expand your global perspective.</li>
                        <li>
                        <strong>Quality Education:</strong> Many countries renowned for engineering programs, such as the USA, the UK, Canada, and Germany, offer high-quality education with access to cutting-edge research and technology.
                        </li>
                        <li>
                        <strong>Networking Opportunities:</strong> Studying abroad allows you to build a global network of peers, professors, and industry professionals, which can be invaluable for your future career.
                        </li>
                        <li>
                        <strong>Enhanced Career Prospects:</strong> Graduating with an MS in Engineering from a reputable international university can open doors to global job opportunities and potentially higher earning potential.
                        </li>
                       </ul>

                       <h2 className='mt-5'> Example Programs:</h2>
                       <ul>
                        <li>
                        <strong>Master of Science in Mechanical Engineering (USA):</strong> A 2-year program focusing on advanced mechanical engineering concepts, research, and design projects.
                        </li>
                        <li>
                        <strong>Master of Engineering in Civil Engineering (Australia):</strong> A 1.5-year program emphasizing sustainable infrastructure and urban development.
                        </li>
                        <li>
                        <strong>MSc in Electrical Engineering (UK):</strong> A 1-year intensive program covering electrical systems, power electronics, and renewable energy.
                        </li>
                        <li>
                        <strong>MS in Biomedical Engineering(New Zealand):</strong> Combine engineering and life sciences in a 1 to 2-year curriculum focused on healthcare innovation.
                        </li>
                       </ul>






                    </Col>
                    <Col xs={12} md={6}>
                        <Image alt="International Students who got loans from Nomad Credit" fluid src='/images/admissions-easy-process.webp' />
                    </Col> 
                </Row>
            </Container>
            <ScheduleNowBanner title="Begin Your Engineering and MS/Masters Journey Now" />
            {/* <IstAdmissionsTeam /> */}

            <Container fluid className={`section-block testimonials`}>
            <Row> 
                <Col className='pt-5' md={{offset:1}} style={{textAlign:'center'}}>
                    <h2>Why Choose Nomad Credit?</h2>
                    <h3>Your Bridge to International Education</h3>
                    <p>At Nomad Credit, we specialize in helping students like you navigate the complex landscape of studying abroad. Our experienced team and vast network of partner institutions worldwide ensure you receive the support and guidance you need throughout your academic journey.</p>
                    {/* <h4 className='mb-5'>Our Comprehensive Services
                        <br />Turning Dreams into Degrees
</h4> */}
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
                            

Applying to study abroad has never been easier. Our streamlined process takes the hassle out of applications. We even offer application fee waivers, ensuring you save money while pursuing your education.



                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Col>
            </Row>
            <Row className='three-col-row'>
            <Col xs={12} md={6}>
                <Card className='nomad-card'>
                        <Card.Body>
                            <Card.Title>No Cost Services:</Card.Title>
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
                                Nomad Credit offers a range of services, from guidance in test prep to visa assistance. We're not just consultants but your partners in your study abroad journey.
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Col>
            </Row>
            </Container>

            <LoanBottomForm title="Let's Build Your Future Together" landingName="/admission-landing-engineering-and-masters" paragraph="Studying Engineering or pursuing an MS/Masters degree abroad is a life-changing experience. Take the first step towards a brighter future today with Nomad Credit" buttonText="Get Started Now"  />
            <Container fluid className={`section-block testimonials`}>
                <Row> 
                    <Col className='pt-2' md={{span:6, offset:3}} >
                        {/* <p style={{textAlign:'center'}}>Elevate your educational journey beyond borders. At Nomad Credit, we're dedicated to propelling you toward success. </p> */}
                        <h2>Your Journey Begins Here</h2>
                        <Button className='extra-pad btn btn-primary btn-lg' style={{display: 'block', margin: 'auto', width: 'fit-content'}} href='#secondaryForm'>Contact Us</Button>
                        <p md={6}  style={{textAlign:'center'}} className="mt-3">Join the thousands of students who have pursued their dreams with Nomad Credit. Contact us now to schedule a personalized consultation and take the first step toward your Engineering or MS/Masters degree abroad.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default AdmissionLandingEngineeringAndMasters