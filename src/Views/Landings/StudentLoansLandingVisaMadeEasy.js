import Button from 'react-bootstrap/Button'
import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {LoanLandingForm, LoanBottomForm} from '../../components/Forms';
import ScheduleNowBanner from '../../components/ScheduleNowBanner';
import '../../css/views/secondary.scss';
import '../../css/views/prodigy.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import windowSize from '../../helpers/window-size.js';
import Ratio from 'react-bootstrap/Ratio';
 
const StudentLoansLandingVisaMadeEasy = (props) => {
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
            <title>Streamline Your US study Visa Application with Nomad Credit</title>
            <meta name='description' content="Simplify your US visa application process with Nomad Credit's expert assistance. Get the support you need to study abroad at no cost" /> 
            <link rel="canonical" href={props.location.href} />
        </Helmet>
        
            <Container fluid className='secondary-hero section-block  position-relative'>
                
                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>Student Visa Made Easy with Nomad Credit!</h1>
                        <p>Are you dreaming of studying abroad, but visa hassles seem daunting? Say goodbye to worries and embark on your journey to international education with Nomad Credit's Visa Application and Documentation Assistance. 
                        </p>
                        
                        {/* <Image width={293} height={291} fluid className='mt-5 display-mobile' src={`/images/how-it-works-${imgSize}.webp`} /> */}

                        
                    </Col>
                </Row>
                <Row >
                    <Col xs={12} md={{span:8, offset:2}}>
                        <Ratio aspectRatio="16x9">
                            <embed type='video/webm' src="https://www.youtube.com/embed/3-mAqLUtx68" />
                        </Ratio>
                    </Col>
                </Row>
                <Row className='mt-5 mb-5'>
                    <Col md={{span:10, offset:1}}>
                        <LoanLandingForm  title="Get Personalized Study Abroad Counseling" paragraph="Let's shape your future together." landingName="/visa-made-easy" />
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    <Col xs={12}><h2 className='mt-5 mb-5 text-center'>Student Visa Requirements Simplified </h2></Col>
                    <Col xs={12} >
                    <p>Every country has specific immigration laws with unique document requirements. While these requirements may vary, two documents are universally necessary:
                    </p>
                    <p>
                    <b>Valid Passport</b>: Your passport is the primary requirement. Different countries may have varying validity requirements. Some may require your passport to be valid until the end of your course, while others may require validity beyond your intended stay. Ensure you have at least two blank pages in your passport for visa stamps. Even if you have expired passports, copies of all previous passports are typically required.
                    </p>
                    <p>
                    <b>Proof of Enrollment</b>: Regardless of your destination, you must demonstrate that you are a genuine student. This is usually done by confirming admission to an educational institution in your chosen country.
                    <h3>Additional Considerations:</h3>      
                    </p>

                    <p>
                    <b>Financial Proof</b>: Most countries expect you to prove your ability to cover tuition, living expenses, and other costs during your stay. Some countries have specific financial requirements, while others have more flexible guidelines. For example, several European countries calculate a minimum living cost based on government standards. You must provide evidence that you have the required funds readily available. Learn more about Financial Documents Required for Study Abroad Applications.
                    </p>

                    <p>
                    <b>Language Proficiency</b>: Many countries, especially English-speaking ones, require proof of your language proficiency in the medium of instruction. This often involves achieving a minimum score on English language tests like TOEFL, IELTS, or PTE. If your course is in a different language, such as German, you'll need proficiency certification according to the CEFR Certified Levels.
                    </p>
                    <p>
                    Please note that visa requirements can vary widely between countries. Some may require medical documentation or a blocked account, while others might request a Statement of Purpose (SOP). Additionally, it's crucial to ensure that the English language test you take is recognized by the immigration department of your chosen country and meets the minimum score requirement for the visa.
                    </p>
                    </Col>
                    
                </Row>
                
                <Image alt='City' className='secondary-hero-city' src={`/images/admission-hero-city-${imgSize}.webp`}/>
            </Container>
            <Container>
            <Row className='mt-5 three-col-row'>
                <Col xs={12}>
                    <h2 className='mt-5 mb-5 text-center'>Why Choose Nomad Credit?</h2>
                    <p className='text-center'>We understand that applying for a visa can be overwhelming. That's why we're here to make it simple, straightforward, and stress-free. Here's why thousands of students trust us:</p>
                   <h3>Assistance in Visa Process</h3>
                    <ul>
                        <li>No more sleepless nights worrying about visa approvals.</li>
                        <li>Our experts navigate the complex application process for you.</li>

                    </ul>
                    
                    <h3>Simplified Paperwork</h3>
                    <ul>
                        <li>Say farewell to confusing forms and documents.</li>
                        <li>We ensure all your paperwork is in order, saving you time and effort</li>

                    </ul>

                    <h3>Timely Updates</h3>
                    <ul>
                        <li>Stay in the know about your application status.</li>
                        <li>We provide regular updates so you're always informed.</li>

                    </ul>

                        <Button className='extra-pad mb-5 mx-auto' style={{display:'block', width:'fit-content'}} href='#mainForm'>Get Started <FontAwesomeIcon icon={faArrowRight} /> </Button>
                        
                </Col>
            </Row>
            </Container>
            <Container fluid className='easy-process-section section-block prodigy-how pt-5 pb-5'>
                <Row className='three-col-row pt-5 pb-5'>
                    <Col xs={12} md={6}>
                        <Image alt="Happy Students Studying Abroad" width={578} height={550} fluid src={`/images/prodigy/why-choose-prodigy.webp`} />
                    </Col> 
                    <Col xs={12} md={6}>
                    <h2 className='mt-5'>Study Abroad Student Loan Eligibility</h2>
                    
                    <ul>
                        <li>	The borrower must be an Indian citizen.	</li>
                        <li>	Co-applicants(s) must be an Indian citizen.	</li>
                        <li>	Co-borrower(s) must have a bank account in any bank in India with cheque writing facilities.	</li>
                        <li>	Confirmed admission in the colleges before disbursement.	</li>
                        <li>	Borrower and Co-applicant(s) to meet InCred’s credit and underwriting norms as applicable occasionally.	</li>
                    </ul>

                    <h2 className='mt-5'>Co-applicant Requirements</h2>
                    <ul>
                        <li>	Bringing in an earning co-applicant(s) based in India to support the Education Loan application is mandatory.	</li>
                        <li>	Co-applicant (s) may be any of the following relatives, viz Father / Mother / Brother / Sister (married) /Spouse, where such co-applicant income would be considered in determining the loan eligibility per InCred’s credit and underwriting norms;	</li>
                        <li>	Co-applicants liability is co-extensive with the Student;	</li>
                        <li>	Co-applicant(s) to provide documentary proof to establish their relationship with the student to the satisfaction of InCred;	</li>
                    </ul>
                        
                        <Button variant="outline-light" className='extra-pad mt-3 mb-2' href='#mainForm'>See Your Options <FontAwesomeIcon icon={faArrowRight} /> </Button>
                    </Col>
                    
                </Row>
            </Container>
            <Container fluid className='pt-5  section-block required-docs'>
                <Row className='pt-5'> 
                    
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <h3 className='text-center'>Our Comprehensive Services</h3>
                        
                        <table>
                                
                                <tbody>
                                <tr><td>	<strong>Loan Facilitation:</strong><br />
                                        Nomad Credit goes the extra mile by helping students search foreducation loan options, simplifying the financial aspect of their overseas education.	</td><td>	
                                        <strong>Application Simplified:</strong><br />
                                        Applying to study abroad has never been easier. Our streamlined process takes the hassle out of applications. We even offer application fee waivers for some schools, ensuring you save money while pursuing your education.	</td></tr>
                                        <tr><td>	<strong>No Cost Services:</strong><br />
                                        Yes, you read it right! All our services are entirely free of cost for students. We're committed to helping you achieve your academic goals without breaking the bank.	</td><td>	<strong>Holistic help:</strong><br />

                                        Nomad Credit offers a range of services, from guidance in test prep to visa assistance. We're not just consultants but your partners in your study abroad journey.
	                                    </td></tr>
                                </tbody>
                                
                            </table>
                            <br />
                            <br />
                            
                            <p className='text-center'><Button variant="outline-light" className='extra-pad mt-3 mb-2' href='#mainForm'>Click to Begin Your Visa Journey! <FontAwesomeIcon icon={faArrowRight} /> </Button></p>
                            <p className='text-center'>
                            Don't miss this opportunity to simplify your visa application process. Nomad Credit is your trusted partner for studying abroad. Let's make your dreams come true!

                            </p>
                    </Col>
                </Row>
            </Container>


            
            <ScheduleNowBanner />
            <Container fluid className='pt-5 section-block prodigy-faq' >
                <Row className='pt-5'> 
                    
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <Image style={{display:'block', margin:'auto', marginBottom:'20px'}} src='/images/prodigy/prodigy-faqs.webp' alt="FAQs icon" />
                       

                        <h2 style={{textAlign:'center', marginBottom:'20px'}}>Frequently Asked Questions</h2>

                        <div itemscope="" itemtype="http://schema.org/FAQPage">

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name">How Do I Start the Visa Application Process?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>Starting the visa application process can be overwhelming, but it becomes manageable with the right guidance from Nomad Credit. Begin by researching the specific requirements for your destination country. Contact the embassy or consulate to understand the application procedure and the necessary forms to fill out.
                                </p>
                             </div>
                        </div>
                        </div>
                       
                        
                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 className='mt-5' itemprop="name">What Documents Do I Need for a Student Visa Application?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                            <p>To ensure a smooth visa application process, gather essential documents such as your passport with a minimum of six months validity, a completed visa application form, recent passport-sized photographs, proof of admission from your chosen educational institution, financial statements, civil documents (birth certificate, marriage certificate if applicable), international student health insurance, and previous university records.
                        </p>
                             </div>
                        </div>
                        </div>

                        
                        
                        
                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 className='mt-5' itemprop="name">How Long Does the Visa Application Process Take?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                            <p>The duration of the visa application process can vary depending on your chosen destination and the time of year. In general, applying well in advance is advisable to allow for any unexpected delays. Visa processing times can range from a few weeks to several months, so plan accordingly.
                        </p>
                             </div>
                        </div>
                        </div>
                        
                        

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 className='mt-5' itemprop="name">Can I Work While Studying Abroad on a Student Visa?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                            <p>Many countries allow students to work part-time while pursuing their studies. However, the specific rules and limitations vary by country. Typically, you'll need to check the visa regulations of your destination country and obtain the necessary work permits.
                        </p>
                             </div>
                        </div>
                        </div>
                        
                        

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 className='mt-5' itemprop="name">What Happens If My Visa Application Is Denied?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>Visa denials can be disheartening, but don't lose hope. Analyze the reasons for the rejection and consider reapplying with improved documentation. Alternatively, you may explore other study destinations or seek assistance from professionals like Nomad Credit to increase your chances of success.
                            </p>
                             </div>
                        </div>
                        </div>
                        
                        

                        </div>
                    </Col>
                </Row>
            </Container>
            
            <LoanBottomForm landingName="/visa-made-easy" title="Get Personalized Study Abroad Counseling" paragraph="Let's shape your future together."  />
            {/* <Container fluid className='pt-5 section-block prodigy-terms' >
                <Row className='pt-5'> 
                    <Col  xs={{offset:0, span:12}} md={{offset:3, span:6}}>
                    <h4>Terms and conditions</h4>
                    <p>To see HDFC Credila’s full terms and conditions, please visit <a target="_blank" href="https://www.hdfccredila.com/about/fair-practice-code.html">click here.</a></p> 
                    </Col>
                </Row>
            </Container> */}
        </>
    )
}
export default StudentLoansLandingVisaMadeEasy