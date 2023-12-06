import Button from 'react-bootstrap/Button'
import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import Ratio from 'react-bootstrap/Ratio';
import {LoanLandingForm, LoanBottomForm} from '../../components/Forms';
import ScheduleNowBanner from '../../components/ScheduleNowBanner';
import '../../css/views/secondary.scss';
import '../../css/views/prodigy.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import windowSize from '../../helpers/window-size.js';

//Test Again
const AdmissionsLandingStudyAbroadConsultants = (props) => {
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
                        <h1 className='hero-header'>Nomad Credit - Your Online Study Abroad Consultants</h1>
                        <p>Dreaming of studying at the world's most prestigious universities? Join the ranks of ambitious students pursuing their education in top destinations like the US, UK, Canada, Australia, New Zealand, and Ireland. While achieving this dream can be challenging- That's where the Nomad Credit pros step in. 
                        </p>
                        <p>
                        We are making a mark as one of the leading study-abroad consultants in India. We are your experienced buddies who help you pick the right course, the perfect country, the dream university, and overseas counseling. Plus, they've got your back on the whole visa and funding thing.
                        </p>
                    </Col>
                </Row>
                <Row >
                    <Col xs={12} md={{span:8, offset:2}}>
                        <Ratio aspectRatio="16x9">
                            <embed type='video/webm' src="https://www.youtube.com/embed/iwJMy6nqXgg" />
                        </Ratio>
                    </Col>
                </Row>
                <Row className='mt-5 mb-5'>
                    <Col md={{span:10, offset:1}}>
                        <LoanLandingForm  landingName="/admissions" paragraph="Fill in the form to make informed decisions. Let's shape your future together." title="Begin Your Journey Now" />
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    <Col xs={12}><h2 className='mt-5 mb-5 text-center'>How can a study abroad agency help with overseas education?</h2></Col>
                    <Col xs={12} >
                    <ul>
                        <li>	<strong>Expert Guidance:</strong> Study abroad consultants are well-versed in the complexities of international education. They can provide valuable insights into the admission process, visa requirements, and university selection, ensuring you make informed decisions.	</li>
                        <li>	<strong>Updated with opportunities:</strong> Education consultants are intricately connected within the academic community. They have cultivated robust associations with esteemed universities, colleges, and training centers.	</li>
                        <li>	<strong>Application Support:</strong> Navigating the application process for foreign universities can be daunting. Study abroad consultants assist with document preparation, application submission, and adherence to deadlines, reducing the risk of costly mistakes.	</li>
                        <li>	<strong>Financial Planning:</strong> Education abroad can be expensive. Consultants can advise on available scholarships, financial aid, loan options, and part-time work opportunities, helping you make the most of your financial resources.	</li>
                    </ul>
                    </Col>
                    
                </Row>
                
                <Image alt='City' className='secondary-hero-city' src={`/images/admission-hero-city-${imgSize}.webp`}/>
            </Container>
            <Container>
            <Row className='mt-5 three-col-row'>
                <Col xs={12}>
                    <h2 className='mt-5 mb-5 text-center'>Nomad Credit is a cut above the rest of the foreign education consultants.</h2>
                    <p className='text-center'>We've got you covered for your study abroad plans with our all-inclusive, no-cost services. Everything you need is right here under one roof; our experts are ready to assist.</p>
                    <ol>
                        <li>	Extensive Eligibility assessment	</li>
                        <li>	Best-in-Class Loan Option Expertise	</li>
                        <li>	Personalized Application processing	</li>
                        <li>	Complete Visa Aid	</li>
                        <li>	Professional SOP assistance	</li>

                    </ol>

                        <Button className='extra-pad mb-5 mx-auto' style={{display:'block', width:'fit-content'}} href='#mainForm'>Get started with your no-cost consultations <FontAwesomeIcon icon={faArrowRight} /> </Button>
                        
                </Col>
            </Row>
            </Container>
            <ScheduleNowBanner />
            <Container fluid className='pt-5 easy-process-section  section-block required-docs'>
                <Row className='pt-5'> 
                    
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <h2 className='text-center'>Why choose Nomad Credit as your study abroad education Consultant?</h2>
                        <Table>
                            <tbody>
                            <tr>
                                <td>
                                    <p><strong>Our Expert Counselors</strong></p>
                                    <p>Introducing our team of skilled Counselors and Senior Counselors dedicated to offering you invaluable insights for selecting the perfect universities.</p>
                                </td>
                                <td>
                                    <p><strong> Non-biased University Profiling</strong></p>
                                    <p>
                                        Our expert team of Counselors/senior counselors believe in bringing the right perspective to choosing the most relevant and well-suited universities as per students' profiles.
                                    </p>
                                </td>
                                <td>
                                    <p><strong>Freedom to Choose</strong></p>
                                    <p>
                                        Enjoy choosing institutions aligned with your aspirations and interests. No pressure to opt exclusively for partner universities. Your education, your choice.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>Navigating Admissions</strong></p>
                                    <p>Research acceptance rates to gauge your chances. We help you Opt for universities aligning with your profile's strengths.</p>
                                </td>
                                <td>
                                    <p><strong>A Path of Affordability</strong></p>
                                    <p>
                                        Help explore financial aid options and scholarships with our experts.
                                        Full assistantships with different loan options and lending partners are readily available to apply for.
                                    </p>
                                </td>
                                <td>
                                    <p><strong>Crafting Your Experience</strong></p>
                                    <p>
                                    With our localized knowledge, you can research location factors for safety and career potential.
                                    </p>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <p className='text-center'>
                        Have questions? Our team of experts is here to assist you at every turn. Your study abroad dream is just a step away!
                            </p>
                    </Col>
                </Row>
            </Container>


            
            
            <Container fluid className=' section-block prodigy-faq' >
                <Row className=''> 
                    
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <Image style={{display:'block', margin:'auto', marginBottom:'20px'}} src='/images/prodigy/prodigy-faqs.webp' alt="FAQs icon" />
                       

                        <h2 style={{textAlign:'center', marginBottom:'20px'}}>Frequently Asked Questions</h2>

                        <div itemScope="" itemType="http://schema.org/FAQPage">

                        <div itemProp="mainEntity" itemScope="" itemType="http://schema.org/Question">
                            <h3 itemProp="name">What is the role of a study abroad consultant?</h3>
                            <div itemProp="acceptedAnswer" itemScope="" itemType="https://schema.org/Answer">
                            <div itemProp="text">
                                <p>
                                Study abroad consultants guide and support students aspiring to pursue higher education overseas. They assist with the application process, scholarships, visa requirements, etc.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemProp="mainEntity" itemScope="" itemType="http://schema.org/Question">
                            <h3 itemProp="name">How can Nomad Credit help with my study abroad journey?</h3>
                            <div itemProp="acceptedAnswer" itemScope="" itemType="https://schema.org/Answer">
                            <div itemProp="text">
                                <p>
                                Nomad Credit specializes in education loans options, scholarship information, financial guidance, and relocation support tailored to international students' unique needs.
                                </p>
                             </div>
                        </div>
                        </div>


                        <div itemProp="mainEntity" itemScope="" itemType="http://schema.org/Question">
                            <h3 itemProp="name">What are the benefits of studying abroad?</h3>
                            <div itemProp="acceptedAnswer" itemScope="" itemType="https://schema.org/Answer">
                            <div itemProp="text">
                                <p>
                                Studying abroad can offer numerous benefits, including exposure to diverse cultures, personal growth, and high-quality education and career opportunities.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemProp="mainEntity" itemScope="" itemType="http://schema.org/Question">
                            <h3 itemProp="name">What financial challenges do international students face, and how can Nomad Credit assist?</h3>
                            <div itemProp="acceptedAnswer" itemScope="" itemType="https://schema.org/Answer">
                            <div itemProp="text">
                                <p>
                                    International students often encounter financial challenges related to loans, credit cards, and accommodation. Nomad Credit can help with funding strategies and guidance tailored to overcome these challenges.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemProp="mainEntity" itemScope="" itemType="http://schema.org/Question">
                            <h3 itemProp="name">Do study abroad consultants charge for their services?</h3>
                            <div itemProp="acceptedAnswer" itemScope="" itemType="https://schema.org/Answer">
                            <div itemProp="text">
                                <p>
                                Nomad Credit offers no-cost service or free consultancy for study abroad. However, other Study abroad consultants may charge fees for their services</p>
                             </div>
                        </div>
                        </div>

                
                        </div>
                    </Col>
                </Row>
            </Container>
            
            <LoanBottomForm landingName="/college-finder" title="Fill out the form below to get started" />
        </>
    )
}
export default AdmissionsLandingStudyAbroadConsultants