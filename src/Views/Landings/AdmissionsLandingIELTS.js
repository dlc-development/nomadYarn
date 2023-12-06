import Button from 'react-bootstrap/Button'
import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import {LoanLandingForm, LoanBottomForm} from '../../components/Forms';
import ScheduleNowBanner from '../../components/ScheduleNowBanner';
import '../../css/views/secondary.scss';
import '../../css/views/prodigy.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import windowSize from '../../helpers/window-size.js';

const AdmissionsLandingIELTS = (props) => {
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
            <title>IELTS: Eligibility, Syllabus, Exam pattern, & more</title>
            <meta name='description' content="Learn in-depth about the IELTS on Nomad Credit’s page. Get guidance on a comprehensive IELTS syllabus, eligibility, test pattern, test centres, fees, & so on." /> 
            <link rel="canonical" href={props.location.href} />
        </Helmet>
        
            <Container fluid className='secondary-hero section-block  position-relative'>
                
                <Row className='three-col-row'>
                    <Col xs={12}>
                        <h1 className='hero-header'>Overview of the IELTS</h1>
                        <p>International English Language Testing System (IELTS) assesses the test taker’s English skills in a band of 0 - 9.0 and provides certificates to let them study or work abroad. The IELTS certificate is accepted by more than 11,500 organizations across 140 nations. Organizations accepting IELTS scores include immigration authorities in the UK, Canada, Australia, the USA, New Zealand, etc., and top multinational companies.
                        </p>
                    </Col>
                    <Col xs={12}  className='text-left'>
                        <Table style={{textAlign:'left'}}>
                            <tbody>
                                <tr><td>	Full form	</td><td>	International English Language Testing System	</td></tr>
                                <tr><td>	Official website	</td><td>	https://www.ieltsidpindia.com/	</td></tr>
                                <tr><td>	Conducting agency	</td><td>	IDP	</td></tr>
                                <tr><td>	Mode of test	</td><td>	Computer based or Paper and pen	</td></tr>
                                <tr><td>	Exam fee	</td><td>	INR 16,250	</td></tr>
                                <tr><td>	Scores	</td><td>	Band 1 - 9.0	</td></tr>
                                <tr><td>	Official address	</td><td>Sikanderpur Ghosi,Sector-26, M.G. Road, <br />Gurugram, Haryana - 122002, India.
                                <br />
                                <br />Contact Number: +91-124-4445999
                                <br />Email: ielts.india@idp.com
                                <br />Time: Mon-Sat 09.00 AM to 05.30 PM	</td></tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row className='mt-5 mb-5'>
                    <Col md={{span:10, offset:1}}>
                        <LoanLandingForm  landingName="/gre" paragraph="Fill in the form to make informed decisions. Let's shape your future together." title="Begin Your Journey Now" />
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    <Col xs={12}>
                        <h2 className='mt-5 mb-5 text-center'>Latest updates on IELTS</h2>
                        <p>
                        The IELTS fee has increased. INR 16,250 is the revised fee for IELTS computer-based and paper-based tests, and INR 16,500 is the revised fee for IELTS UKVI. 
                        </p>
                    </Col>
                    <Col xs={12}>
                        <h2 className='mt-5 mb-5 text-center'>Types of IELTS</h2>
                        <ul>
                            <li>	<strong>IELTS Academic:</strong> IELTS Academic helps test takers to study abroad in an English-speaking country or work in a professional organization. The test taker’s reading, writing, listening, and speaking skills are assessed with an emphasis on academic language and setting.	</li>
                            <li>	<strong>IELTS General Training:</strong> IELTS General Training is for people to work or take up non-academic courses in an English-speaking country. Just like IELTS Academic, the test taker’s reading, writing, speaking and listening skills are assessed in IELTS General Training.	</li>
                            <li>	<strong>IELTS for UKVI:</strong> This test is specifically designed for those who apply for a US visa. The language requirements are emphasized based on the UK settings. The UK visa and immigration department accepts the test as proof of English proficiency.	</li>
                            <li>	<strong>IELTS Life Skills:</strong> This test is required for UK visa purposes for family and settlement routes. The test assesses listening and speaking skills at two levels, namely A1 for family routes and B1 for the settlement route.	</li>
                        </ul>

                        <h2 className='mt-5 mb-5 text-center'>Who needs to take an IELTS test?</h2>
                        <p>
                        Students from a non-English speaking country who need to study in an English-speaking country need to take an IELTS test to prove their English skills. These countries include the US, the UK, Canada, Australia, New Zealand, Ireland, European countries, etc. 
                        </p>

                         <h3 className='mt-5 mb-5 text-center'>Is IELTS mandatory for admissions abroad?</h3>
                         <p>
                         No. IELTS is one of the many entrance tests to study abroad. While some universities demand an IELTS certificate, it is not mandatory to have an IELTS certificate. Alternatively, students can opt for other English tests like TOEFL, PTE, Duolingo, etc.
                         </p>
                    </Col>
                    
                </Row>
                
                <Image alt='City' className='secondary-hero-city' src={`/images/admission-hero-city-${imgSize}.webp`}/>
            </Container>
            <Container>
            <Row className='mt-5 three-col-row'>
                <Col xs={12}>
                    <h2 className='mt-5 mb-5 text-center'>How do I book for the IELTS test online?</h2>
                   <ol>
                        <li>	Visit the <a href='https://www.ieltsidpindia.com/' target='_blank'>official website</a> of the IELTS by IDP India	</li>
                        <li>	Select either a paper-based or online test, whichever is convenient to you.	</li>
                        <li>	Choose your type of test - IELTS Academic or General Training	</li>
                        <li>	Select a test city from the list and book a test on a comfortable date	</li>
                        <li>	Complete the application form	</li>
                        <li>	Proceed to pay the application fee	</li>
                   </ol>
                   <p>
                   Once your application is complete, you will get a confirmation on your registered email and phone number. 
                   </p>
                   <h3 className='mt-5 mb-5 text-center'>Who is eligible to take the IELTS test?</h3>
                   <p>Anyone who has a minimum of 16 years of age can be a candidate for the IELTS test. Test takers must submit valid proof of their identity while applying.</p>

                   <h2 className='mt-5 mb-5 text-center'>Who is eligible to take the IELTS test?</h2>
                   <p>Anyone who has a minimum of 16 years of age can be a candidate for the IELTS test. Test takers must submit valid proof of their identity while applying.</p>

                    <Button className='extra-pad mb-5 mx-auto' style={{display:'block', width:'fit-content'}} href='#mainForm'>Get started with your no-cost consultations <FontAwesomeIcon icon={faArrowRight} /> </Button>
                        
                </Col>
            </Row>
            </Container>
            <ScheduleNowBanner />

            <Container fluid className='guidance-section pt-5'>
                <Row className='pt-5'> 
                    
                    <Col md={{offset:1}}>
                        <h2>IELTS test slots, dates, and centers</h2>
                        <p>It is important to book your IELTS test date in advance and confirm slot availability. Once you book, start preparing for the test to make it in the first attempt. There are generally 3 time slots for the IELTS test, as listed below:  </p>
                        <p>
                        Slot 1: 09:00 AM - 12:00 PM
                        <br />Slot 2: 01:00 PM - 04:00 PM
                        <br />Slot 3: 05:00 PM - 08:00 PM
                        <br />
                        <br /><a href='http://ielts.idp.com/news-ielts-test-dates' target='_blank'>Click here</a> to see available test dates in 2023.
                        <br />
                        <br /><a href='https://www.ieltsidpindia.com/ielts_test_centres/india' target='_blank'>Click here</a> to explore test centers near you and register.
                        </p>
                        <Button variant="outline-light" className='extra-pad' href='/how-it-works'>BEGIN YOUR JOURNEY  <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Col>
                    <Col className='center-spacer' md={1} />
                    <Col className='guidance-image'>
                        <Image alt='International Students who recieved loans with the help of Nomad Credit' width="648" height="601" src='/images/guidance.webp' />
                    </Col>
                    <Col className='spacer' md={1} />
                </Row>
            </Container>


            
            
            <Container fluid className=' section-block prodigy-faq' >
                <Row className=''> 
                    
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <Image style={{display:'block', margin:'auto', marginBottom:'20px'}} src='/images/prodigy/prodigy-faqs.webp' alt="FAQs icon" />
                       

                        <h2 style={{textAlign:'center', marginBottom:'20px'}}>Frequently Asked Questions</h2>

                        <div itemScope="" itemType="http://schema.org/FAQPage">

                        <div itemProp="mainEntity" itemScope="" itemType="http://schema.org/Question">
                            <h3 itemProp="name">What is the purpose of taking the IELTS exam?</h3>
                            <div itemProp="acceptedAnswer" itemScope="" itemType="https://schema.org/Answer">
                            <div itemProp="text">
                                <p>
                                The IELTS certificate is proof of your English proficiency to study, work, or live in an English-speaking country abroad. A good score on the IELTS is a mandatory requirement for immigration to countries abroad.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemProp="mainEntity" itemScope="" itemType="http://schema.org/Question">
                            <h3 itemProp="name">Is the IELTS exam tough to pass through? </h3>
                            <div itemProp="acceptedAnswer" itemScope="" itemType="https://schema.org/Answer">
                            <div itemProp="text">
                                <p>
                                The level of difficulty in the IELTS test depends on your abilities, and systematic preparation can ease the difficulty level for you. If you have a good command of the English language, the test will not be a tough nut to crack. The test will not be tough if your preparation is effective. 
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemProp="mainEntity" itemScope="" itemType="http://schema.org/Question">
                            <h3 itemProp="name">How long is the IELTS valid?</h3>
                            <div itemProp="acceptedAnswer" itemScope="" itemType="https://schema.org/Answer">
                            <div itemProp="text">
                                <p>
                                The IELTS certificate is valid for 2 years from the date of issuance of the results. 
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemProp="mainEntity" itemScope="" itemType="http://schema.org/Question">
                            <h3 itemProp="name">What is the passing score in IELTS?</h3>
                            <div itemProp="acceptedAnswer" itemScope="" itemType="https://schema.org/Answer">
                            <div itemProp="text">
                                <p>
                                There is no passing score in the IELTS. The scores range from band 0 to band 9, and the minimum band score requirement is determined by the organization abroad to where you migrate.
<br /><br />
In general, a decent score of 6.5 and above can help you get admission into schools. The higher the scores, the better the chances of getting into top-notch schools.

                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemProp="mainEntity" itemScope="" itemType="http://schema.org/Question">
                            <h3 itemProp="name">Is it easy to score 6.5 bands in IELTS? </h3>
                            <div itemProp="acceptedAnswer" itemScope="" itemType="https://schema.org/Answer">
                            <div itemProp="text">
                                <p>
                                Your scores in the IELTS test depend on your skills and preparation. An overall score of 6.5 bands in IELTS is optimum for your academic and professional needs. If you prepare well, scoring 6.5 bands overall is not a hard nut to crack. 
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemProp="mainEntity" itemScope="" itemType="http://schema.org/Question">
                            <h3 itemProp="name">Which is easier, IELTS Academic or General Training?</h3>
                            <div itemProp="acceptedAnswer" itemScope="" itemType="https://schema.org/Answer">
                            <div itemProp="text">
                                <p>
                                IELTS Academic or General Training tests can be easy or tough, depending on your preparation and skills. Typically, IELTS General Training is considered easier than IELTS Academic since the topics in IELTS General Training are taken from everyday situations, whereas the topics in IELTS Academic are ideal for an academically educated crowd.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemProp="mainEntity" itemScope="" itemType="http://schema.org/Question">
                            <h3 itemProp="name">How many days are required to prepare for the IELTS test?</h3>
                            <div itemProp="acceptedAnswer" itemScope="" itemType="https://schema.org/Answer">
                            <div itemProp="text">
                                <p>
                                The period required for IELTS preparation is determined by your abilities in the English language and your personal preparation strategy. Depending on your strengths and weaknesses, you may require 15 days, 6 months, 1 year, or more to prepare for the test.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemProp="mainEntity" itemScope="" itemType="http://schema.org/Question">
                            <h3 itemProp="name">How many times can I take the IELTS test?</h3>
                            <div itemProp="acceptedAnswer" itemScope="" itemType="https://schema.org/Answer">
                            <div itemProp="text">
                                <p>
                                You can take the IELTS test as many times as you want, till you get a satisfactory score in the test. 
                                </p>
                             </div>
                        </div>
                        </div>

                
                        </div>
                    </Col>
                </Row>
            </Container>
            
            <LoanBottomForm landingName="/gre" title="Fill out the form below to get started" />
        </>
    )
}
export default AdmissionsLandingIELTS