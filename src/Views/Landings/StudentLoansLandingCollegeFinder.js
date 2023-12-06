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
 
const StudentLoansLandingCollegeFinder = (props) => {
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
            <title>Find your dream University with Nomad Credit!</title>
            <meta name='description' content="Get help with university shortlisting for your academic journey with Nomad Credit. Explore essential factors to find the perfect fit for your higher education goals." /> 
            <link rel="canonical" href={props.location.href} />
        </Helmet>
        
            <Container fluid className='secondary-hero section-block  position-relative'>
                
                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>Begin Your Journey to the Top University Abroad with Nomad Credit</h1>
                        <p>Shortlisting Universities for MS in the USA is a critical initial step in the study abroad application process. 
                        </p>
                        <p>
                        To find or select the university that's right can be daunting, but Nomad Credit is here to make it easier than ever.  Our dedicated team of expert counsellors is here to guide you through the university shortlisting process.
                        </p>
                    </Col>
                </Row>
                <Row className='mt-5 mb-5'>
                    <Col md={{span:10, offset:1}}>
                        <LoanLandingForm  landingName="/college-finder" title="Get Personalized Study Abroad Counseling" paragraph="Let's shape your future together." />
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    <Col xs={12}><h2 className='mt-5 mb-5 text-center'>How to shortlist universities for MS, masters, or graduation?</h2></Col>
                    <Col xs={12} >
                    <p>Embarking on the journey of higher studies abroad, especially in the USA, can be complex when selecting the right university. This guide aims to assist you in shortlisting universities for your Master of Science (MS) or any other program.
                    </p>
                    <p>The process of shortlisting a foreign university depends on several crucial factors:
                    </p>
                    <ol>
                        <li>	<strong>Course/Stream of Interest:</strong> Your academic passion and chosen field of study should be considered foremost.	</li>
                        <li>	<strong>On-Campus Placements and Career Prospects:</strong> Investigate the university's track record in providing on-campus placement opportunities and the potential for your future career.	</li>
                        <li>	<strong>Tuition Fees and Living Expenses:</strong> Assess the cost of tuition and the affordability of living in your chosen location.	</li>
                        <li>	<strong>Financial Aid for International Students:</strong> Explore available financial aid options or scholarships for international students.	</li>
                        <li>	<strong>Location Advantage for Off-Campus Jobs:</strong> Consider the location's relevance in securing off-campus employment opportunities.	</li>
                        <li>	<strong>University Ranking:</strong> Consider the university's global and national ranking in your field.	</li>
                        <li>	<strong>Acceptance Rate for International Students:</strong> Research the acceptance rate of international students to gauge your chances of admission.	</li>
                        <li>	<strong>Course Duration:</strong> Understand your selected program's duration and alignment with your goals.	</li>
                        <li>	<strong>Course Difficulty:</strong> Assess the level of difficulty associated with your chosen courses.	</li>
                        <li>	<strong>Local Weather:</strong> Consider the climate and weather conditions of the region where the university is located.	</li>
                        <li>	<strong>Network:</strong> Explore the presence of friends, classmates, or relatives in the area for additional support.	</li>
                    </ol>
                    <p>
                    Among these factors, your choice of course is paramount, as it plays a pivotal role in shaping your future. Engage with your seniors who have previously pursued similar courses abroad during the fall intake to gain valuable insights and feedback.
                    </p>
                    <p>
                    Once you have narrowed your course options to one or two, begin with a university search that aligns with your academic and career aspirations.
                    </p>
                    </Col>
                    
                </Row>
                
                <Image alt='City' className='secondary-hero-city' src={`/images/admission-hero-city-${imgSize}.webp`}/>
            </Container>
            <Container>
            <Row className='mt-5 three-col-row'>
                <Col xs={12}>
                    <h2 className='mt-5 mb-5 text-center'>How many universities can I shortlist and manage risk?</h2>
                    <p className='text-center'>WThere is no definitive rule book for determining the ideal number of universities to apply to or gauging the ease of acceptance. However, as a general guideline, students often apply to 8-10 universities, distributing them as follows:</p>
                    <ol>
                        <li>	<strong>Ambitious (4):</strong> Ambitious universities have a low acceptance rate and fierce competition. Only the strongest profiles gain admission.	</li>
                        <li>	<strong>Moderate (3):</strong> Moderate universities maintain a reasonable acceptance rate, and the chances of acceptance are above average, making them a realistic choice for your profile.	</li>
                        <li>	<strong>Safe (2):</strong> Safe universities have a relatively high acceptance rate, offering a very good chance of admission, though it's essential to remember that no acceptance is ever guaranteed.	</li>

                    </ol>
                    <p>
                        These guidelines help you balance your applications to ensure a mix of aspirations and probabilities when applying to foreign universities.
                    </p>

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
                    <h2 className='mt-5'>Best time to choose and apply for a university:</h2>
                    <p>
                    When to apply is a common dilemma for students. Ideally, the application process should commence in the first week of November for those aiming for the Fall intake. For Spring intake, the process should start around September. Typically, engineering students opt for this timeline since they have university exams a month later, adding to the stress. Therefore, it's advisable to have all the necessary application documents prepared by the beginning of November for the Fall intake or September for the Spring intake.
                    </p><p>
                    Once you've finalized your list of universities, the next step is to begin filling out the online application forms. For many universities, the application deadlines for the Fall intake typically fall in mid-December. 
                    </p><p>
                    It's crucial to verify these deadlines with the specific university, as some may extend into January or March, and others might employ a rolling admission process. On the other hand, spring intake deadlines tend to range from September to November.

                    </p>

                        <Button variant="outline-light" className='extra-pad mt-3 mb-2' href='#mainForm'>See Your Options <FontAwesomeIcon icon={faArrowRight} /> </Button>
                    </Col>
                    
                </Row>
            </Container>
            <Container fluid className='pt-5  section-block required-docs'>
                <Row className='pt-5'> 
                    
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <h2 className='text-center'>Why Choose Nomad Credit?</h2>
                        <p>
                        At Nomad Credit, we understand that your educational journey is unique and work as a university finder for you. 
                        </p>
                        <p>
                        Our experienced counselors provide personalized guidance tailored to your individual needs and aspirations. Here's how we can help you shortlist the universities that are the perfect fit for you:
                        </p>

                        <ul>
                            <li>	<strong>Program/Course Requirement:</strong> Our course finder helps you identify programs that match your interests, background, and career aspirations. We consider program duration, curriculum, and suitability for your profile.	</li>
                            <li>	<strong>Work Experience:</strong> If you have work experience, we'll assess whether it can enhance your application. Certain universities may offer test score waivers for applicants with relevant professional experience.	</li>
                            <li>	<strong>Ranking and Reputation:</strong> We'll provide insights into university rankings and program-specific strengths, helping you make informed decisions	</li>
                            <li>	<strong>Test Scores (GRE/GMAT/SAT/ACT & IELTS/TOEFL/Duolingo):</strong> We'll guide you through the test score requirements as a college finder. Some universities have specific score criteria, while others offer waivers based on your profile.	</li>
                            <li>	<strong>Acceptance Rate for International Students:</strong> We'll share acceptance rates, helping you gauge your chances of admission at various institutions.	</li>
                            <li>	<strong>Academics (Bachelor's/Master’s):</strong> We'll ensure you meet the minimum academic requirements for your preferred programs and universities. GPA is critical, and we'll help you find the right universities that align with your educational qualifications.	</li>
                            <li>	<strong>Job Opportunities/Career Prospects:</strong> We'll provide insights into job opportunities and industries in specific locations, ensuring you choose a university that aligns with your career goals.	</li>
                        </ul>
                        
                            
                            <p className='text-center'><Button variant="outline-light" className='extra-pad mt-3 mb-2' href='#mainForm'>Click to Begin Your Visa Journey! <FontAwesomeIcon icon={faArrowRight} /> </Button></p>
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
                            <h3 itemprop="name">How to shortlist universities for MS in Canada?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>To shortlist universities for an MS in Canada:
                                </p>
                                <ol>
                                    <li>	Identify your field of interest.	</li>
                                    <li>	Consider your budget and scholarship options.	</li>
                                    <li>	Explore location preferences.	</li>
                                    <li>	Research program quality and university rankings.	</li>
                                    <li>	Ensure you meet language proficiency and admission criteria.	</li>
                                </ol>
                             </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name">Minimum GPA for MS Admissions in the USA?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                Admission to MS programs in the USA can be competitive, typically necessitating a minimum GPA of approximately 3.4 on a 4.0 scale or higher. However, some US universities might accept slightly lower GPAs. International students should generally aim for a GPA ranging from 3.2 to 3.4 to be eligible for MS programs in US universities, although requirements can vary by course and institution. It's advisable to check specific program and university requirements for precise GPA expectations.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name">Is it beneficial to apply to a university early?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                Not always. Some reputable universities review applications after their deadlines. However, this doesn't imply you should procrastinate your admission process.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name">How to shortlist universities for MS in the  USA?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                First, define your field of study and academic interests. Next, assess your budget and explore available scholarships or financial aid. Consider your preferred location, as the USA offers diverse settings and climates. Research program quality, faculty expertise, and university rankings to ensure a strong academic fit. Review admission criteria, including standardised test requirements and language proficiency. Connect with alumni or current students for insights into the university culture and opportunities. Apply to a mix of ambitious, moderate, and safe universities to maximized your chances of acceptance and a successful academic journey.
                                </p>
                             </div>
                        </div>
                        </div>
                
                        </div>
                    </Col>
                </Row>
            </Container>
            
            <LoanBottomForm landingName="/college-finder" title="Get Personalized Study Abroad Counseling" paragraph="Let's shape your future together."  />
        </>
    )
}
export default StudentLoansLandingCollegeFinder