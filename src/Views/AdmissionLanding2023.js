import { Helmet } from 'react-helmet-async';
import {  Container, Row, Col, Image, Button} from 'react-bootstrap';
import { LoanLandingForm} from '../components/Forms';
import {TestimonialsAdmissions}   from '../components/Testimonials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import windowSize from '../helpers/window-size.js';
import '../css/views/secondary.scss';

const AdmissionLanding2023 = (props) => {
    let thisWindowSize = windowSize();
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString);
    const thankYou = urlParams.get('thankYou');
    if(thankYou){
        return(
            <>
            <Helmet>
                <link rel="canonical" href={props.location.href} />
            </Helmet>
            <Container fluid className='section-block'>

                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>Thank You</h1>
                        <p>We will be in touch soon. In the meantime, you may finish setting up your NomadCredit.com account using the email we sent you.</p>
                    </Col>
                </Row>
            </Container>
            </>
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
                        <h1 className='hero-header'>Our Top-Rated Admissions Consultants Will Guide You Through Your Study Abroad Admissions Process  </h1>
                        <p>We’ve Helped 3,500+ International Graduate Students Get Accepted To Their DREAM Universities In The U.S., U.K., Canada, Australia, & New Zealand!</p>
                        {/* <p>Fill out the secure form below to get personalised support & guidance from the only full-service, US-based study abroad and US Masters consultancy.</p> */}
                    </Col>
                </Row>
                <Col className='d-sm-block d-md-none' xs={12} md={6}>
                    <LoanLandingForm landingName="/admissions-landing-2023" title="Get Personalized Study Abroad Counseling" paragraph="Let's shape your future together." buttonText='LET’S GET STARTED'  />
                    </Col>
                <Row className={`mt-5 three-col-row easy-process-section-small`}>
                <Col xs={12} md={6} className=''>
                        <h2 className='mt-5'>How Does It Work? </h2>
                        <br />
                        <p>
                            <strong>Step 1. Enter your information</strong>
                            <br />
                            Answer a few simple questions to get started.
                        </p>
                        <p>
                            <strong>Step 2. Connect With Your Counselor</strong>
                            <br />
                            Complete your initial consultation and access additional admissions support. 
                        </p>
                        <p>
                            <strong>Step 3. Complete Your Applications</strong>
                            <br />
                            Apply for your dream universities in one place.  
                        </p>

                        <Image alt="International Students who got loans with help from Nomad Credit" fluid src='/images/admissions-landing-easy-digital.webp' style={{maxHeight:'400px'}} />
                    </Col>
                    <Col className='d-none d-md-block d-lg-block d-xl-block d-xxl-block' xs={12} md={6}>
                        <LoanLandingForm landingName="/admissions-landing-2023" title="Get Personalized Study Abroad Counseling" paragraph="Let's shape your future together. " buttonText='LET’S GET STARTED'  />
                    </Col>
                    
                </Row>
                <Row className='three-col-row'>

                <Col >
                        <h2 className='mt-5 mb-4 text-center'>Sign Up Now To Access All Of The Following </h2>
                        <p className='mb-4'>As study abroad education consultants, our mission is to help international graduate students get accepted into their DREAM school to study in the U.S. and beyond! Simply enter your contact info so you can connect with a counselor and start your study abroad journey. </p>
                        <ul>                                
                            <li>	Get personalised support and guidance from an experienced counselor.	</li>
                            <li>	Find your best-match universities and programs to earn your MS in USA.	</li>
                            <li>	Get professional help with your SOP and other critical documents.	</li>
                            <li>	Start, submit, and track your applications all in one place.	</li>
                            <li>	Get advice and feedback with every step of the admissions process.	</li>
                            <li>	Access no-fee application options.	</li>
                            <li>	Plus, access student-friendly, low-interest loan options, prepare for your visa interview, and more!	</li>

                        </ul>
                        <p className='text-center'>
                        <Button variant="outline-light" className='extra-pad mt-3 mb-2' href='#secondaryForm'>LET’S GET STARTED <FontAwesomeIcon icon={faArrowRight} /> </Button>
                        </p>
                        
                        {/* <Image alt="Image of happy student talking to Nomad Credit specialist" fluid className='mt-5' src='/images/how-it-works.webp' /> */}
                        
                    </Col>


                </Row>
                <Image alt="City" className='secondary-hero-city' src='/images/admission-hero-city.webp' />
            </Container>
            {/* <Container fluid className=' section-block'>
                <Row className='three-col-row'>
                Force CHange
                <Col >
                        <h2 className='mt-5'>Sign Up Now To Get Free Access To All Of The Following</h2>
                        <p>As study abroad education consultants, our mission is to help international graduate students get accepted into their DREAM school to study in the U.S. and beyond! Simply enter your contact info to unlock our password-protected admissions portal, so you can connect with a counselor and complete your applications.</p>
                        <ul>                                
                            <li>Get personalised support & guidance from an experienced counselor. </li>
                            <li>Find your best-match universities & programs to earn your MS in USA.</li>
                            <li>Get professional help with your SOP (& other critical documents).</li>
                            <li>Start, submit, & track your applications all in one place.</li>
                            <li>Get advice & feedback with every step of the admissions process. </li>
                            <li>Access no-fee application options. 
                            Plus, access student-friendly, low-interest loan options, prepare for your visa interview, and more!</li>

                        </ul>
                        <Button variant="outline-light" className='extra-pad mt-3 mb-2' href='#secondaryForm'>Connect With A Counselor <FontAwesomeIcon icon={faArrowRight} /> </Button>
                        {/* <Image alt="Image of happy student talking to Nomad Credit specialist" fluid className='mt-5' src='/images/how-it-works.webp' />
                        
                    </Col>


                </Row>
            </Container> */}
            {/* <ScheduleNowBanner /> */}
            {/* <Testimonials className='lightblue-background' /> */}
            <TestimonialsAdmissions title="What Other International Graduate Students Are Saying About Us!" />
            <Container>
                <Row>
                    <Col>
                    <p className='text-center'>
                        <Button  className='extra-pad mt-3 mb-2' href='#secondaryForm'>LET’S GET STARTED <FontAwesomeIcon icon={faArrowRight} /> </Button>
                        </p>
                    </Col>
                </Row>
            </Container>
            {/* <IstAdmissionsTeam /> */}
            {/* <LoanBottomForm title="Don’t Wait To Get The Support You Need To Transform Your Dream Into A Reality
" landingName="/admissions-landing-2023" paragraph="Simply enter your info, then tap the button below to unlock our admissions portal and get connected with a counselor dedicated to guiding you through each and every step of the US university admissions process, at no cost to you!"  /> */}
        </>
    )
}
export default AdmissionLanding2023