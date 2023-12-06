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
const AdmissionsLandingGre = (props) => {
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
            <title>GRE Exam Overview 2023 : Know all details</title>
            <meta name='description' content="Get an overview of the GRE exam, including key details, requirements, types  of test, and preparation insights." /> 
            <link rel="canonical" href={props.location.href} />
        </Helmet>
        
            <Container fluid className='secondary-hero section-block  position-relative'>
                
                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>All About the GRE You Need to Know!</h1>
                        <p>Are you aspiring to pursue a Master of Science (MS), MBA, or specialized Master's program in the United States? Look no further – the GRE (Graduate Record Examination) is your stepping stone to studying abroad!  
                        </p>
                        <p>
                        Nomad Credit enlightens you about GRE exam insights, updates, resources, and guidance journeys.
                        </p>
                    </Col>
                </Row>
                <Row className='mt-5 mb-5'>
                    <Col md={{span:10, offset:1}}>
                        <LoanLandingForm  landingName="/gre" paragraph="Fill in the form to make informed decisions. Let's shape your future together." title="Begin Your Journey Now" />
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    <Col xs={12}>
                        <h2 className='mt-5 mb-5 text-center'>What is the GRE exam?</h2>
                        <p>
                        The GRE is more than just an exam – it's a pathway to your aspirations. It evaluates your verbal reasoning, quantitative reasoning, analytical writing, and critical thinking skills, honed through years of learning.
                        </p>
                        <p>
                        Developed and administered by ETS, the GRE exam is structured to assess the test taker's knowledge in fundamental areas such as algebra, arithmetic, data analysis, geometry, and college-level vocabulary. Equally significant, the GRE exam gauges the individual's capacity for critical thinking, the analysis of written material, and problem-solving.
                        </p>
                    </Col>
                    <Col xs={12}>
                        <h2 className='mt-5 mb-5 text-center'>What is the GRE exam used for?</h2>
                        <p>
                        Commonly, the GRE is required for a master's in the USA and is used for admissions into graduate and business programs worldwide. It assesses a student's readiness for advanced academic study and helps universities evaluate applicants for graduate and business programs, including master's, MBA, and Ph.D. programs. Additionally, some business schools use GRE scores as part of their admissions process for MBA programs.
                        </p>

                        <h2 className='mt-5 mb-5 text-center'>Why GRE exam is required?</h2>
                        <p>
                        Taking the GRE is crucial for your Master's degree as it's a widely accepted standardized test that assesses your readiness for graduate-level studies. Admissions committees use GRE scores to evaluate your academic skills and potential, aiding in selecting various Master's programs.
                        </p>
                         <ul>
                            <li>	Graduate Program Admissions: The GRE is a widely accepted exam for admission to various graduate programs, including Master of Science (MS) courses, Master of Business Administration (MBA) programs, and professional degree programs.	</li>
                            <li>	Diverse Academic Pursuits: It's not just for traditional postgraduate degrees; the GRE is also a prerequisite for those pursuing thesis-based academic research and other specialized courses.	</li>
                            <li>	Flexibility: The GRE entrance exam is available year-round, allowing candidates to choose a convenient time for the examination.	</li>
                            <li>	Business School Acceptance: Many business schools now favor GRE scores as an alternative to the traditional Graduate Management Admission Test (GMAT).	</li>
                         </ul>

                         <h2 className='mt-5 mb-5 text-center'>Why GRE exam is required?</h2>
                         <p>
                         <strong>The GRE offers two distinct test types:</strong>
                         </p>
                         <ul>
                            <li>	GRE General Test: Designed for students pursuing MS courses abroad, it assesses quantitative ability, analytical writing, and verbal reasoning. The test is available yearly, with paper-based options in some countries.	</li>
                            <li>	GRE Subject Test: Intended to evaluate candidates in Physics, Psychology, Mathematics, Literature (English), Biochemistry, Biology, and Chemistry. Typically required for specialized courses.	</li>
                         </ul>
                    </Col>
                    
                </Row>
                
                <Image alt='City' className='secondary-hero-city' src={`/images/admission-hero-city-${imgSize}.webp`}/>
            </Container>
            <Container>
            <Row className='mt-5 three-col-row'>
                <Col xs={12}>
                    <h2 className='mt-5 mb-5 text-center'>GRE Test Structure and Fees</h2>
                   <Table>
                    <thead>
                        <tr>
                            <th colSpan={4}><p className='text-center'><strong>Format from 22nd September 2023</strong></p></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Number of questions</th>
                            <th>Time</th>
                            <th>Score Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>	Analytical Writing	</td><td>	One essay task	</td><td>	30 minutes	</td><td>	0 - 6	</td></tr>
                        <tr><td>	Verbal Reasoning - 2 sections	</td><td>	27 questions total	</td><td>	41 minutes	</td><td>	130 - 170	</td></tr>
                        <tr><td>	Quantitative Reasoning - 2 sections	</td><td>	27 questions total	</td><td>	47 minutes	</td><td>	130 - 170	</td></tr>
                        <tr><td>	Unscored	</td><td>	None	</td><td>	None	</td><td>		</td></tr>
                        <tr><td>	Research	</td><td>	None	</td><td>	None	</td><td>		</td></tr>
                        <tr><td>	Total Time   </td><td colSpan={2}>	1 hour 58 minutes	</td><td>260 - 340</td></tr>
                    </tbody>
                   </Table>
                   <Table>
                        <tbody>
                            <tr>
                                <td>Test Fees</td>
                                <td>USD 271</td>
                            </tr>
                            <tr>
                                <td>Score report</td>
                                <td>USD 35 each</td>
                            </tr>
                        </tbody>
                   </Table>
                   <p>
                   It is imperative for students to note that GRE scores remain valid for a duration of 5 years from the day of the examination.
                   </p>

                    <Button className='extra-pad mb-5 mx-auto' style={{display:'block', width:'fit-content'}} href='#mainForm'>Get started with your no-cost consultations <FontAwesomeIcon icon={faArrowRight} /> </Button>
                        
                </Col>
            </Row>
            </Container>
            <ScheduleNowBanner />
            <Container fluid className='pt-5 easy-process-section  section-block required-docs'>
                <Row className='pt-5'> 
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <h2 className='text-center'>What is a good score, and does the GRE have a negative marking?</h2>
                        <p><strong>The GRE score distribution is detailed as follows:</strong></p>
                        <ul>
                            <li>	<strong>Verbal Reasoning:</strong> Achieved within a 130–170 scale, with adjustments made in 1-point increments.	</li>
                            <li>	<strong>Quantitative Reasoning:</strong> Similarly, measured on a 130–170 scale, with 1-point increments.	</li>
                            <li>	Analytical Writing: Scores range from 0 to 6, with half-point increments applied.	</li>
                            <li>	<strong>Total Score:</strong> Computed on a 260–340 scale.	</li>
                            <li>	<strong>Subject Test:</strong> Assessed using a 200 to 990 scale, with increments of 10 points.	</li>
                        </ul>
                        <p>
                        The GRE exam doesn't involve negative marking. Instead, your scores are determined by the number of correct answers and the section's difficulty level.
                        </p>
                        <h2 className='text-center'>How to prepare for the GRE at home?</h2>
                        <p>Candidates often opt for various classroom or in-person GRE preparation courses, typically spanning a duration of 2-4 months before their scheduled test date. Here are some valuable GRE preparation tips to aid you in your GRE journey from home:</p>
                        <ul>
                            <li>	Begin by defining your target GRE score and the programs you wish to apply for. Having clear goals will guide your preparation	</li>
                            <li>	Utilize GRE prep books and practice papers.	</li>
                            <li>	ETS, the organization that conducts the GRE, offers official practice tests and questions. Make sure to use these for the most authentic practice.	</li>
                            <li>	Consider online crash courses to assess your strengths and weaknesses.	</li>
                            <li>	Engage a personal tutor for regular feedback on your preparation progress.	</li>
                            <li>	After each practice test, thoroughly review your performance. Analyze your mistakes and areas for improvement.	</li>
                            <li>	Familiarize yourself with the GRE syllabus and exam structure.	</li>
                            <li>	Customize your preparation materials, including GRE prep books, CDs, videos, sample questions, and webinars.	</li>
                            <li>	Incorporate regular mock tests into your preparation routine to evaluate your readiness.	</li>
                            <li>	Develop a comprehensive study plan to monitor your progress.	</li>
                            <li>	Familiarize yourself with the GRE format, question types, and time constraints. This will help you plan your study sessions effectively.	</li>
                            <li>	Expand your comprehension by reading various analytical non-fiction works.	</li>
                            <li>	When tackling sentence equivalence and text completion questions, thoroughly read the passage.	</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='guidance-section pt-5'>
                <Row className='pt-5'> 
                    
                    <Col md={{offset:1}}>
                        <h2>How can Nomad Credit Help?</h2>
                        <p>Nomad Credit is more than an education consultant – we're your allies in realizing your dreams. Here's why you should choose us: </p>
                        <ul>
                            <li><strong>Comprehensive Support: </strong>
                                <br />Our experienced professionals offer comprehensive exam and admissions consulting services to ensure effective and thorough preparation for your GRE exam.
                                </li>
                            <li><strong>In-depth Understanding of U.S. Education: </strong><br />Benefit from our deep understanding of the U.S. education system, enhancing your exam readiness and helping you select universities that align with your aspirations.</li>
                            <li><strong>Holistic Approach:</strong><br /> Admission counseling, career guidance, university selection, application assistance, and loan support are all tailored to enhance every aspect of your study abroad journey.</li>
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


            
            
            <Container fluid className=' section-block prodigy-faq' >
                <Row className=''> 
                    
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <Image style={{display:'block', margin:'auto', marginBottom:'20px'}} src='/images/prodigy/prodigy-faqs.webp' alt="FAQs icon" />
                       

                        <h2 style={{textAlign:'center', marginBottom:'20px'}}>Frequently Asked Questions</h2>

                        <div itemscope="" itemtype="http://schema.org/FAQPage">

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name">How long is the GRE exam?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                The total testing time for the GRE exam is about 3 hours and 45 minutes.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name">What is the scoring scale for the GRE exam?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                The GRE exam is scored on a scale of 130 to 170 for Verbal and Quantitative Reasoning and 0 to 6 for Analytical Writing.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name">How often can I take the GRE exam?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                You can take the GRE exam once every 21 days, up to five times within a continuous rolling 12-month period.
                                </p>
                             </div>
                        </div>
                        </div>


                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name">Do all graduate schools require the GRE exam?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                No, not all graduate programs require the GRE exam. Some schools and programs may have different admission requirements.
                                </p>
                             </div>
                        </div>
                        </div>


                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name">Can I send my GRE scores to multiple universities?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                Yes, you can choose up to four universities or business schools to send your GRE scores to for free at the time of the test.
                                </p>
                             </div>
                        </div>
                        </div>

                       

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name">Are there any special accommodations for test-takers with disabilities?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                Yes, ETS provides accommodations for test-takers with documented disabilities. You need to request accommodations in advance.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name">Does GRE have a negative marking?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                No, the GRE (Graduate Record Examination) has no negative marking. You do not lose points for incorrect answers, so it's generally a good practice to attempt all questions.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name">How long are GRE scores valid?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                GRE scores are typically valid for five years. After five years, your scores are no longer officially reportable.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name">Is a calculator allowed in GRE?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                No, you cannot use a calculator in the GRE General Test. You will be provided with an on-screen calculator for the Quantitative Reasoning section.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name">Is GRE required for MS in Canada?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                GRE requirements for MS (Master of Science) programs in Canada vary by university and program. Some universities may require GRE scores, while others do not. It's essential to check the specific admission requirements of the university and program you are interested in.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name">Is the GRE mandatory for MS in the USA?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                Like Canada, GRE requirements for MS programs in the USA vary by university and field of study. Some universities may require GRE scores, while others have made the test-optional recently. You should review the admission requirements of the universities you plan to apply to for MS programs in the USA.
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
export default AdmissionsLandingGre