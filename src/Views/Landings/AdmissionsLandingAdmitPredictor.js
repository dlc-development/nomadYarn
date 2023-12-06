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

//Test Again
const AdmissionsLandingAdmitPredictor = (props) => {
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
            <title>Admit Predictor | Profile Evaluation for Universities From Our Experts</title>
            <meta name='description' content="Evaluate your profile with Nomad credit & get admission prediction for the US. with our admit predictions, know your potential US universities & increase your admission chances." /> 
            <link rel="canonical" href={props.location.href} />
        </Helmet>
        
            <Container fluid className='secondary-hero section-block  position-relative'>
                
                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>Nomad Admit Predictor</h1>
                        <p>Your journey to study in the US gets successfully completed once you secure admission to a university. Among the public and private universities in the US that offer the courses you love, finding out the best ones is an important task for you.
                        </p>
                        <p>
                        Here’s where we help - get your profile evaluated by our expert counselors and hear out from them regarding your admission to the US. Know the best universities where your profile is eligible for admission, considering your GPA, entrance test scores, academic preferences, affordability, and multiple other factors.
                        </p>
                    </Col>
                    
                </Row>
                <Row className='mt-5 mb-5 three-col-row'>
                <Col xs={12}><h2 className='mt-5 mb-5 text-center'>Why do you need to find out the best universities for your profile?</h2>
                    <p>
                    When you figure out the universities in the US that are perfect for your profile, you have more chances of securing admission, compared to a random selection of universities. You save your time and application fee amount by restricting your admission applications to universities where you have better chances of admission. 
                    <br /><br />
                    Finding out the top universities for your profile makes sense for the following reasons: 

                    </p>
                    </Col>

                    <Col xs={12} >
                    <ul>
                        <li>	<strong>Reduce competition:</strong> The admission process for certain US universities is highly competitive, with a pool of applications every year. If you lack the eligibility requirements prescribed by those universities, there is no point in wasting your valuable time and money.	</li>
                        <li>	<strong>Acknowledge your weak points:</strong> We understand that your profile has certain strengths and weaknesses. But no need to worry - the number of universities in the US is higher, and many universities are open for your low academic and entrance test scores.	</li>
                        <li>	<strong>Check affordability:</strong> Your university of admission must be affordable to you. The cost of study in the US varies drastically among universities. If you cannot afford more than a certain amount in the US, you must explore the top options within your limits.	</li>
                    </ul>
                    </Col>
                </Row>
                <Row className='mt-5 mb-5 three-col-row'>
                <Col xs={12}><h2 className='mt-5 mb-5 text-center'>How does Nomad Admit Prediction help you?</h2>
                    <p>
                    Done with your entrance tests, but confused about getting admission to a US university? No worries, as we are here to help you out. 
                    </p><p>
                    Our dedicated admission counselors are experienced in understanding your strengths and weaknesses quickly. With years of experience guiding students, they can tell you which are the top university options in the US that align with your profile and career goals. 
                    </p><p>
                    <strong>Here’s how you take advantage of our admit prediction and profile evaluation: fill out the enquiry form below:</strong>
                    </p>
                    </Col>

                </Row>
                <Container></Container>
                <Row className='mt-5 mb-5'>
                    <Col md={{span:10, offset:1}}>
                        <LoanLandingForm  landingName="/admit-predictor" paragraph="Fill in the form to make informed decisions. Let's shape your future together." title="Enquiry Form For Profile Evaluation And Admission Prediction" />
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    <Col xs={12}><h2 className='mt-5 mb-5 text-center'>Once you fill out the form, our counselor will reach out to you. You will be required to provide the following details to streamline your profile evaluation</h2>
                    </Col>

                    <Col xs={12} >
                    <ul>
                        <li>	Your personal details and contact information	</li>
                        <li>	Your GPA in the last qualifying exam	</li>
                        <li>	Your entrance test results - IELTS, TOEFL, PTE, GRE, GMAT, SAT, ACT, etc.	</li>
                        <li>	The preferred course of study	</li>
                        <li>	Your SOP	</li>
                    </ul>
                    <p>
                        Why apply to those universities where you have the least chance of getting admission and waste your entire year? Take our help right now. Fill out the enquiry form right now and kickstart an exciting study abroad journey with us! 
                    </p>
                    </Col>
                    
                </Row>
                
                <Image alt='City' className='secondary-hero-city' src={`/images/admission-hero-city-${imgSize}.webp`}/>
            </Container>
            <ScheduleNowBanner />
            
            <Container fluid className=' section-block prodigy-faq' >
                <Row className=''> 
                    
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <Image style={{display:'block', margin:'auto', marginBottom:'20px'}} src='/images/prodigy/prodigy-faqs.webp' alt="FAQs icon" />
                       

                        <h2 style={{textAlign:'center', marginBottom:'20px'}}>Frequently Asked Questions</h2>

                        <div itemscope="" itemType="http://schema.org/FAQPage">

                        <div itemprop="mainEntity" itemscope="" itemType="http://schema.org/Question">
                            <h3 itemprop="name">How accurate are Nomad’s university predictions? </h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemType="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                    Our university predictions are based on your scores, personal preferences, and important documents. While we don’t guarantee you will get admission, we help you to narrow down your preferences by eliminating the options with the least chances of admission for your profile.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemType="http://schema.org/Question">
                            <h3 itemprop="name">For which courses the admission prediction is available?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemType="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                    We offer university admission predictions for undergraduate and graduate admissions to the US.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemType="http://schema.org/Question">
                            <h3 itemprop="name">What is the cost of admission predictions by Nomad for the US? </h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemType="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                We offer admission counseling, profile evaluation, and admission predictions at zero cost to the student.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemType="http://schema.org/Question">
                            <h3 itemprop="name">Can I get admission predictions before attending the entrance tests?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemType="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                No. We offer US university admission predictions based on your entrance test scores, GPA, and multiple other factors.
                                </p>
                             </div>
                        </div>
                        </div>


                        <div itemprop="mainEntity" itemscope="" itemType="http://schema.org/Question">
                            <h3 itemprop="name">What is next after profile evaluation and admission prediction?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemType="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                    Once your profile is evaluated, and you get customized admission predictions, our counselor will have a discussion with you and provide you with further guidance on your study abroad journey.
                                </p>
                             </div>
                        </div>
                        </div>
                
                        </div>
                    </Col>
                </Row>
            </Container>
            
            <LoanBottomForm landingName="/admit-predictor" title="Fill out the form below to get started" />
        </>
    )
}
export default AdmissionsLandingAdmitPredictor