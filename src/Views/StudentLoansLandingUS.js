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
 
const StudentLoansLandingUS = (props) => {
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
                    <Col>
                        <h1 className='hero-header'>USA Education Loan Options for International Students</h1>
                        <p>Ready to embark on a life-changing study abroad adventure to the U.S.?
                            Nomad Credit is here to help you get there.
                        </p>
                        <p></p>
                        
                        <Image alt="Image of happy student talking to Nomad Credit specialist" width={293} height={291} fluid className='mt-5 display-mobile' src={`/images/how-it-works-${imgSize}.webp`} />
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    
                    <Col xs={12} md={6}>
                    <h2 className='mt-5'>Start financing your USA study abroad journey </h2>
                        <p>
                        Nomad Credit can help you search for potential education loan options for the USA designed specifically with international students in mind – you may not even need a cosigner or collateral! With access to education loan options for the USA from multiple lending partners with low interest rates and flexible repayment terms, you could potentially save thousands of dollars on your student loans down the road. Sign up and start exploring U.S. education loan options now!</p>

                        <ul>
                            <li style={{marginBottom:'15px'}}>Search with ease, knowing thousands have successfully used our services </li>
                            <li style={{marginBottom:'15px'}}>Review potential education loan options that can finance up to your entire approved cost of attendance in the USA</li> 
                            <li style={{marginBottom:'15px'}}>Discuss your U.S. options with a member of our experienced global team with unique U.S.-based expertise </li>
                            <li>Potentially save thousands of dollars on student loan repayment</li>
                        </ul>

                        <Image alt="Image of happy student talking to Nomad Credit specialist" width={578} height={436} fluid className='mt-5 display-desktop' src={`/images/how-it-works-${imgSize}.webp`} />
                    </Col>
                    <Col >
                        <LoanLandingForm  landingName="/student-loans-landing-us" />
                    </Col>
                    
                </Row>
                <Image alt='City' className='secondary-hero-city' src={`/images/admission-hero-city-${imgSize}.webp`}/>
            </Container>
            <Testimonials />
            <Container fluid className='easy-process-section section-block' style={{paddingTop:'20px', paddingBottom:'20px'}}>
                <Row className='three-col-row'>
                    <Col xs={12} md={6}>
                        <h2 className='mt-5 mb-5'>Get support from international student loan experts </h2>
                        <p>We strive to make the process of searching for education loans for U.S. study as simple and transparent as possible. Once you have entered your information, our user-friendly platform makes it easy to compare various lending partners based on interest rates, repayment periods, fees, etc., so that you can make an informed decision. </p>

                        <ul>
                            <li>Get personalized service from an experienced team with local USA-based knowledge</li>
                            <li>Choose from multiple lending partners with no cosigner and no collateral education loan options for the USA available</li>
                            <li>Browse education loan USA options with potentially flexible repayment terms</li>

                        </ul>

                        
                        <Button variant="outline-light" className='extra-pad mt-3 mb-2' href='#mainForm'>See Your Options <FontAwesomeIcon icon={faArrowRight} /> </Button>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image alt="Nomad Credit showing International Students how studying abroad works" width={578} height={550} fluid src={`/images/loans-landing-get-advice-${imgSize}.webp`} />
                    </Col> 
                </Row>
            </Container>
            {/* <ScheduleNowBanner /> */}
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
            <LoanBottomForm  landingName="loan-landing-us"/>
        </>
    )
}
export default StudentLoansLandingUS