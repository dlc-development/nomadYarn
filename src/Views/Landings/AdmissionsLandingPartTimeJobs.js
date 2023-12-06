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

const AdmissionsLandingPartTimeJobs = (props) => {
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
            <title>Top Part-Time Jobs in the US For Indian Students in 2023</title>
            <meta name='description' content="Here’s a guide on part-time jobs for international students in the US. See top on & off-campus jobs, how to apply, conditions, & so on about part-time jobs in the US." /> 
            <link rel="canonical" href={props.location.href} />
        </Helmet>
        
            <Container fluid className='secondary-hero section-block  position-relative'>
                
                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>Part-time Jobs in the US for International Students</h1>
                        <p>Part-time jobs are important for international students in the US to finance their everyday expenses. According to the US rules, F-1 visa holders are allowed to work 20 hours a week while studying and get exposed to job roles that are not strictly from their fields of study. Apart from the financial benefits, part-time jobs help you understand the US culture and society better and provide you with professional experience and valuable life lessons.  
                        </p>
                        <p>
                        While part-time jobs are highly beneficial for you, there are rules and regulations by the United States Citizenship and Immigration Service (USCIS) you need to follow. Read on, as we will discuss everything related to part-time jobs in the US for international students.
                        </p>
                    </Col>
                </Row>
                <Row className='mt-5 mb-5'>
                    <Col md={{span:10, offset:1}}>
                        <LoanLandingForm  landingName="/us-part-time-jobs" paragraph="Fill in the form to make informed decisions. Let's shape your future together." title="Begin Your Journey Now" />
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    <Col xs={12}>
                        <h2 className='mt-5 mb-5 text-center'>An overview of part-time work in the US</h2>
                        <p>
                        Part-time work is a component of study popular in abroad countries such as the US. For a foreigner in the US, part-time jobs help to earn a salary while studying. In general, the following options are available for part-time work in the US. 
                        </p>
                    </Col>
                    <Col xs={12}>
                        <h3 className='mt-5 mb-5 text-center'>Optional Practical Training (OPT)</h3>
                        <p>
                        OPT is designed to help students gain practical experience in their field of study. F-1 visa holders can apply for OPT at least 9 months after their enrollment to a study program, when they get Employment Authorization Document (EAD) from USCIS. The OPT is 12 months long and can be done in vacations or after completing studies in the US.
                        </p>

                        <h3 className='mt-5 mb-5 text-center'>Curricular Practical Training (CPT)</h3>
                        <p>
                        The CPT is typically internships or co-op programs, which is part of the study program in the US for F-1 visa holders. There will be a mention of the CPT program in the Form I-20. The CPT is done either during the study or after that.
                        </p>

                         <h3 className='mt-5 mb-5 text-center'>Severe Economic Hardship</h3>
                         <p>
                         If you face severe economic hardship, you can talk to your university and get authorization for off-campus work part-time. Note that you need to provide a genuine and convincing reason to get this authorization. 
                         </p>

                         <h3 className='mt-5 mb-5 text-center'>Internships and cooperative education programs</h3>
                         <p>
                         In the US, students can participate in internships or cooperative education programs related to their field of study and earn while studying. Apart from financial earning, internships and cooperative education programs provides you with exposure to work and practical experience that are beneficial for your career success.
                         </p>
                    </Col>
                    
                </Row>
                
                <Image alt='City' className='secondary-hero-city' src={`/images/admission-hero-city-${imgSize}.webp`}/>
            </Container>
            <Container>
            <Row className='mt-5 three-col-row'>
                <Col xs={12}>
                    <h2 className='mt-5 mb-5 text-center'>Conditions for part-time jobs in the US</h2>
                   <p>
                   To work part-time in the US, international students must seek authorization from their university of study and follow the conditions they specify. If you work without your university’s permission, it can lead to issues like disqualification from study. 
                   </p>
                   <p>
                   Mentioned below are the general conditions for foreign students to work part-time and earn a salary in the US:
                   </p>
                   <ul>
                        <li>	Be a full-time student of a US university or college	</li>
                        <li>	Maximum allowed time for part-time work: 20 hours a week during study and full-time during designated vacations	</li>
                        <li>	You may be eligible for off-campus work authorization under certain circumstances, such as Optional Practical Training (OPT) or Curricular Practical Training (CPT).	</li>
                        <li>	Exchange students and scholars (J-1 visa holders) can work part-time with the approval of their program sponsor. The work must be authorized and relate to their program of study in the US.	</li>
                   </ul>

                    <Button className='extra-pad mb-5 mx-auto' style={{display:'block', width:'fit-content'}} href='#mainForm'>Get started with your no-cost consultations <FontAwesomeIcon icon={faArrowRight} /> </Button>
                        
                </Col>
            </Row>
            </Container>
            
            <Container fluid className='pt-5 easy-process-section  section-block required-docs'>
                <Row className='pt-5'> 
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <h2 className='text-center'>How to apply for part-time jobs in the US?</h2>
                        <p>Applying for a part-time job in the US is an easy process in most cases for foreigners. The application process is not the same for all kinds of part-time jobs in the US that are suitable for you. Here is a general guideline on how to apply for part-time jobs in the US: </p>
                        <ul>
                            <li>	<strong>Get your documents ready with you:</strong> You need a resume, cover letter, and references to successfully complete a part-time job application. Your documents must highlight your extraordinary skills to get selected from a pool of applicants.	</li>
                            <li>	<strong>Search your job opportunities:</strong> You can search for part-time work on job websites, career pages. Local job boards, college notice boards for jobs, etc. Network with friends, family and professionals to explore more job opportunities. Further, note down and attend job fairs, workshops, and networking events to improve your chances of getting a part-time job in the US.	</li>
                            <li>	<strong>Follow the application guidelines:</strong> The application guidelines will be different, and you need to follow the suggested process for each job. While online job applications require you to fill an application form, an offline job application needs you to submit the documents in person. Complete the steps properly with the right documents, without missing deadlines.	</li>

                        </ul>
                        
                    </Col>
                </Row>
            </Container>

            <Container fluid className='guidance-section pt-5'>
                <Row className='pt-5'> 
                    
                    <Col md={{offset:1}}>
                        <h2>Top paying part-time jobs for international students in the US</h2>
                        <p>Getting a top-paying part-time job and earning a salary is a dream for every student in the US who explores the opportunities. Selecting a suitable job depends on your skills, time availability, and personal interests. To help you explore such opportunities, here are some part-time job opportunities in the US you can apply for while studying:  </p>
                        <Table>
                            <thead>
                                <tr style={{background:'white'}}>
                                    <th>Part-time Job</th>
                                    <th>Hourly Rate</th>
                                </tr>
                                
                            </thead>
                            <tbody>
                                    <tr><td>	Campus Ambassador	</td><td>	10 - 25 USD	</td></tr>
                                    <tr><td>	Teaching Assistant	</td><td>	13 - 17 USD	</td></tr>
                                    <tr><td>	Department Assistant	</td><td>	18 - 25 USD	</td></tr>
                                    <tr><td>	Tutor or Peer Mentor	</td><td>	9 - 18 USD	</td></tr>
                                    <tr><td>	Barista	</td><td>	12 - 18 USD	</td></tr>
                                    <tr><td>	Library Assistant	</td><td>	13 - 20 USD	</td></tr>
                                    <tr><td>	Receptionist	</td><td>	13 - 21 USD	</td></tr>
                                    <tr><td>	Research Study Assistant	</td><td>	15 - 20 USD	</td></tr>
                                    <tr><td>	Food Runner or Catering Assistant	</td><td>	13 - 16 USD	</td></tr>
                                    <tr><td>	Sales Assistant	</td><td>	17 - 21 USD	</td></tr>
                                </tbody>
                        </Table>
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
                <Row className='mt-5 three-col-row'>
                    <Col xs={12}>
                        <h2>On-campus part-time jobs in the US</h2>
                        <p>International students who do not qualify for work-study can still seek on-campus employment, such as jobs in libraries, student centers, cafeterias, or administrative offices.  </p>
                        <ol>
                            <li>	<strong>Campus ambassador:</strong> Campus ambassadors promote the university and encourage students to study in the university with reasons. They are sometimes assigned with conducting sessions to answer the concerns of students wishing to study in the university.	</li>
                            <li>	<strong>Teaching assistant:</strong> As a teaching assistant, you will be supervising the classroom activities and helping out students who need help. You need to connect with professors to explore openings for teaching assistant jobs.	</li>
                            <li>	<strong>Library assistant:</strong> Being a library assistant in the US helps you get more study time since the library environment is perfect for studying. Your responsibilities inn this post include supervising decorum in the library hall, shelving books, helping customers, etc.	</li>
                            <li>	<strong>Research study assistant:</strong> Research study assistants help on various projects, maintain lab equipment, assist in data collection, etc. This job suits you even better if you have plans to do research in the future.	</li>
                            <li>	<strong>Department assistant:</strong> Being a department assistant, you will work more like a clark and provide your help in handling departmental matters. You need computer skills, team work, and communication skills to work as a department assistant. This job will guide you to understanding departmental functions and help you network with professors.	</li>
                            <li>	<strong>Campus tech support:</strong> You can apply for campus tech support jobs if you possess computer or technical skills. You will be needed only when there is a technical breakdown, and, in the rest of the time, you can focus on academics.	</li>
                            <li>	<strong>University bookstore assistant:</strong> All US universities have university bookstores. If you get a job as a university bookstore assistant, you will be assisting to order things, sell items, and collecting the money. Also, you will get an employee discount on books and stationeries you purchase.	</li>
                            <li>	<strong>Tour guide:</strong> A tour guide helps fresh students to familiarize themselves with the campus and lead groups of students to places of importance, such as an architectural site. You can take up this job in your second or third year, only when you are familiar with the campus and areas around.	</li>
                        </ol>
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    <Col xs={12}>
                        <h2>Off-campus part-time jobs in the US</h2>
                        <p>Apart from on-campus jobs, there are various off-campus jobs for international students at nearby stores, neighborhoods, organizations, etc. </p>
                        <ol>
                            <li>	<strong>Barista:</strong> If you are interested in work related to coffee, tea, espresso, and similar other drinks, you can work as a barista and earn part-time while studying in the US. You will get the opportunity to meet new people and interact with them, plus serving multiple roles as coffee maker, cashier, and serving customers.	</li>
                            <li>	<strong>Receptionist:</strong> A receptionist offers general office support and customer service in various organizations. You can work part-time as a receptionist for evening or morning shifts, depending on your time availability.	</li>
                            <li>	<strong>Sales assistant:</strong> You can take up sales assistant jobs in groceries, clothing stores, book stores, etc. This job will help you interact with members of the US society and help you get better exposure to the society.	</li>
                            <li>	<strong>Tutor or peer mentor:</strong> Tutoring your peers or juniors, inside or outside your university, is a good opportunity to improve your teaching skills and earn while studying. Teaching while you are a student improves your subject knowledge and enhances communication skills.	</li>
                            <li>	<strong>Food runner or catering assistant:</strong> You can work as catering assistants or run a cafeteria or restaurant part-time in the US. This job is ideal for those students who study a hospitality course, but not limited to them.	</li>
                            <li>	<strong>Babysitter:</strong> Those who like to work with children can work as babysitter in the US part-time. Usually, babysitters are paid based on the age of the child and hours spend for watching the child.	</li>
                        </ol>
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    <Col xs={12}>
                        <h2>Online part-time jobs in the US</h2>
                        <ol>
                            <li>	<strong>Online Tutor:</strong> An online tutor teaches students of lower age groups at scheduled times every week. You can explore openings for online tutor or start yourself independently and charge per hour for teaching.	</li>
                            <li>	<strong>Graphic Designer:</strong> Many companies hire freelance graphic designers and pay them for each work according to industry standards. If you possess graphic designing skills, you can explore such opportunities in the US.	</li>
                            <li>	<strong>Coder:</strong> There are freelance opportunities for coders who possess proficiency with programming languages, mathematical skills, problem solving abilities, etc. This job suits better for MS students in the IT field.	</li>
                            <li>	<strong>Content Writer:</strong> Content writing is among the popular jobs for freelance workers. Many companies hire freelance writers and pay them for words based on the quality of the content and experience of the writer. You need writing proficiency, SEO skills, and subject knowledge to work as a freelance content writer.	</li>
                            <li>	<strong>Blogger:</strong> If you are a passionate writer, you can be a blogger and earn money in the US. However, a career in blogging is built very slowly and you need patience till you succeed in the work.	</li>
                            <li>	<strong>Translator:</strong> Translation jobs are ideal for people with extraordinary proficiency in two languages. Usually, translators must possess proficiency in English and one other language, such as Spanish, French, Arabic, etc., depending on the company’s purpose.	</li>
                        </ol>
                    </Col>
                </Row>
            </Container>
            <ScheduleNowBanner />
            <Container fluid className=' section-block prodigy-faq' >
                <Row className=''> 
                    
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <h2>Benefits of part-time jobs in the US</h2>
                        <p>For international students studying in the US, working part-time comes with a lot of benefits, some of which are listed below:</p>
                        <ol>
                            <li>	<strong>Financial benefits:</strong> Part-time jobs help you earn better and meet your expenses every month. They also help you with financial responsibilities as you will be considerate while spending your hard-earned salary.	</li>
                            <li>	<strong>Helps to develop skills:</strong> When you work part-time, you get an opportunity to practically use the skills you have learned. The working experience will improve your communication, team working, problem-solving, and customer service skills which are critical for a successful career.	</li>
                            <li>	<strong>Contributes professional experience:</strong> Those part-time jobs that are related to your field help you gain professional exposure and learn valuable work-specific skills. The practical learnings and understanding of the industry you get through part-time jobs is highly helpful to land on better professional roles after studies.	</li>
                            <li>	<strong>Provide networking opportunities:</strong> You can broaden your professional network when you work while studying by interacting with your colleagues, seniors, and experts if you are doing a job in your field.	</li>
                            <li>	<strong>Improves time management skills:</strong> One of the top benefits of working when you study is gaining time management skills, a critical skill you need to progress in your profession, studies, and life in general. You will learn to prioritize tasks and finish work before deadlines.	</li>
                            <li>	<strong>Strengthens resume:</strong> Including your experience of working part-time adds strength to your resume. It tells the employer that you are exposed to work and thus have understanding in work ethics, time management, critical skills, industry knowledge, etc.	</li>
                            <li>	<strong>Improves confidence:</strong> Working while studying means you are taking more responsibilities in life. Overcoming new challenges in your work environment naturally boosts up your confidence and provides you with the energy to explore top career opportunities.	</li>
                        </ol>
                        <p>
                        Thus, part-time jobs help foreigners in many ways and ultimately contribute to their financial independence. They do not hinder your academic goals, but adds more value to your learning in the US. However, it is important to find a suitable part-time job in the US that would contribute to your personal and professional learning. Plus, you must have a balance between work and study, and there should be no compromise when it comes to academics. 
                        </p>
                        <p>
                        Know your university options in the US and search part-time job options before you land there. Our expert counselors will analyze your profile and offer admit predictions, based on your strengths and weaknesses. We will also help you strengthen your profile over the weak points, and assist you in exploring education loan options at minimal interest rates. <a href='https://www.nomadcredit.com/users/sign_up?application_type=part-time-job-usa' target='_blank'>Check the link</a>, and start your exciting journey to study in the US!
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className=' section-block prodigy-faq' >
                <Row className=''> 
                    
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <Image style={{display:'block', margin:'auto', marginBottom:'20px'}} src='/images/prodigy/prodigy-faqs.webp' alt="FAQs icon" />
                       

                        <h2 style={{textAlign:'center', marginBottom:'20px'}}>Frequently Asked Questions</h2>

                        <div itemscope="" itemtype="http://schema.org/FAQPage">

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name"> 
                            How much can international students earn from part-time works in the US? 
                            </h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                The part-time job earnings depend on total work hours and payment per hour. Typically , international students earn 8 - 20 USD per hour from part-time jobs in the US.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name"> 
                            Is it easy to find a part-time job in the US?
                            </h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                Finding a part-time job in the US is not easier since the competition will be high for vacant opportunities. However, there are various job opportunities that an international student can explore in the US.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name"> 
                            Can I work 40 hours a week part-time?
                            </h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                You are allowed to work for up to 20 hours a week in normal cases. If there are no classes, it is possible to work up to 40 hours a week in the US.
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name"> 
                            Is it easy to find an on-campuss part-time job in the US?
                            </h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                Compared to off-campus jobs, getting an on-campus job can be tougher for international students in the US. The competition is more for on-campus jobs, and opportunities are limited. 
                                </p>
                             </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name"> 
                            Is it mandatory to submit a cover letter and references to get a part-time job in the US? 
                            </h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                Generally, the requirement for these documents depends upon the type of job you apply for in the US. Having these documents will improve your application’s strength compared to an application without any valid documents.
                                </p>
                             </div>
                        </div>
                        </div>

                
                        </div>
                    </Col>
                </Row>
            </Container>
            
            <LoanBottomForm landingName="/us-part-time-jobs" title="Fill out the form below to get started" />
        </>
    )
}
export default AdmissionsLandingPartTimeJobs