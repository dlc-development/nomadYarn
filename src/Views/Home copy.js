import React, {useEffect, lazy} from 'react';
// import { Helmet } from 'react-helmet-async';
import { Button, Container, Row, Col, Image,Card} from 'react-bootstrap';
// import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import BasicForm from '../components/Forms';
import ScheduleNowBanner from '../components/ScheduleNowBanner';
import Blogs from '../components/Blogs';
import '../css/views/home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import windowSize from '../helpers/window-size'
const Hero = lazy(() => import('../components/Hero'));
const Helmet = lazy(() => import('react-helmet-async'));
const HelmetProvider = lazy(() => import('react-helmet-async'));

const Home = (props) => {
    const imgSize = windowSize();
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
            <title>Study Abroad Admission Guide with Finance options | Nomad Credit</title>
            <meta name='description' content="Explore your journey to studying abroad with valuable admission guidance and financing options. Plan your dream education journey today with Nomad Credit!" /> 
                <link rel="canonical" href={props.location.href} />
            </Helmet>
            <Hero />
            <Container fluid className='section-block loans-section'>
                <Row>
                    <Col md={{offset:1}}>
                        <h2>Education Loans</h2>
                        <p>
                        Nomad Credit helps students planning to study abroad search for potential student loan options. Get access to multiple lending partners with low-interest rates and potential flexible repayment terms - possibly even without a cosigner or collateral! Simply sign up and start your student loan search today.
                        </p>
                        <Button variant="link" href='/student-loans'>Learn More <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Col>
                    <Col className='center-spacer stripe mb-5' md={1} />
                    <Col>
                        <h2>International Admissions</h2>
                        <p>
                        Nomad Credit offers comprehensive admissions counseling services to match you with the right universities for your needs. Our U.S.-led team has in-depth knowledge of local colleges, job markets, and hiring landscapes, and can also help with the student visa process, SOP writing, and submitting applications.   
                        </p>
                        <Button variant="link" href='/admissions'>Learn More <FontAwesomeIcon icon={faArrowRight} /> </Button>
                    </Col>
                    <Col className='spacer' md={1} />
                </Row>
            </Container>
            <Container fluid className='city-section'>
                <Image width="1440" height="289" alt='Graphic of city' src='/images/city.webp' />
            </Container>
            <Container fluid className='about-us-section'>
                <Row className='pt-5'> 
                    <Col md={{offset:1}}>
                        <p><strong>About Us</strong></p>
                        <h2>How it Works</h2>
                        <p>
                        Our goal is to get you started on your educational journey as soon as possible. Sign up and get matched with potential student loan options today, or get in touch with our team of experts and get connected with universities that may be the right fit for you.
                        </p>
                        <Button variant="primary" className='extra-pad' href='/how-it-works'>Learn More </Button>
                    </Col>
                    <Col className='center-spacer' md={1} />
                    <Col className='image-col' md={5}>
                        <Image fluid={true} width="600" height="453" alt='Image of happy student talking to Nomad Credit specialist' src={`/images/how-it-works-${imgSize}.webp`} />
                    </Col>
                    <Col className='spacer' md={1} />
                </Row>
            </Container>
            <ScheduleNowBanner />
            <Testimonials />
            <Container fluid className='student-load-options pt-5 pb-5'>
                <Row className='pt-5'> 
                    <Col md={{offset:1}}>
                        <Image alt='International Students who got loans from Nomad Credit' width="516" height="468" src='/images/student-loan-options.webp' fluid />
                    </Col>
                    <Col className='center-spacer' md={1} />
                    <Col>
                        <h2>Student Loans Options for International Students</h2>
                        <p>Are you looking to study abroad but not sure how to finance it? Nomad Credit is here to help! We assist international students in finding potential student loan options in the U.S., India, and around the world. Start your journey today by signing up and searching for the potential student loan options that suit your needs.</p>
                        <ul>
                            <li>	Loan options for undergraduate and graduate degrees	</li>
                            <li>	Cover up to 100% your school-certified costs	</li>
                            <li>	Multiple lending partners to search from	</li>
                            <li>	Search for loan options that works for you	</li>
                            <li>	Low interest rates from US and Indian lending partners	</li>
                            <li>	Have Nomad Credit’s lending partners compete for you	</li>
                        </ul>
                        <Button variant="outline-light" className='extra-pad' href='/how-it-works'>See Your Options <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Col>
                    <Col className='spacer' md={1} />
                </Row>
            </Container>
            <Container fluid className='guidance-section pt-5'>
                <Row className='pt-5'> 
                    
                    <Col md={{offset:1}}>
                        <h2>Guidance from College Admissions Experts</h2>
                        <p>Nomad Credit is here to help you take your education abroad! We know the ins and outs of the university admissions process, and we're dedicated to guiding you through it every step of the way. Our experienced counselors are always available to provide personalized advice and service. </p>
                        <ul>
                            <li>	Smart university profile evaluation	</li>
                            <li>	Extensive knowledge of university admissions criteria	</li>
                            <li>	SOP essay editing	</li>
                            <li>	Visa application guidance	</li>
                        </ul>
                        <Button variant="outline-light" className='extra-pad' href='/how-it-works'>BEGIN YOUR JOURNEY  <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Col>
                    <Col className='center-spacer' md={1} />
                    <Col className='guidance-image'>
                        <Image alt='International Students who recieved loans with the help of Nomad Credit' width="648" height="601" src='/images/guidance.webp' />
                    </Col>
                    <Col className='spacer' md={1} />
                </Row>
            </Container>
            <Blogs />
            <BasicForm description="To learn more about how Nomad Credit can help, please fill out the information below and our team will follow up with you as soon as possible." />
        </>
    )
}
 export default Home;