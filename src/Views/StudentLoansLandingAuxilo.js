import Button from 'react-bootstrap/Button'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {LoanLandingForm, LoanBottomForm} from '../components/Forms';
import ScheduleNowBanner from '../components/ScheduleNowBanner';
import '../css/views/secondary.scss';
import '../css/views/prodigy.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import windowSize from '../helpers/window-size.js';
import Ratio from 'react-bootstrap/Ratio';
 
const StudentLoansLandingAuxilo = (props) => {
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
            <title>Auxilo Education Loan for Abroad -A complete Guide | Nomad</title>
            <meta name='description' content='Unlock Your Study Abroad Dreams with Nomad Credit: Your Guide to Hassle-Free Education Loans' /> 
            <link rel="canonical" href={props.location.href} />
        </Helmet>
        
            <Container fluid className='secondary-hero section-block  position-relative'>
                
                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>Auxilo Education Loan</h1>
                       
                        <Ratio aspectRatio="16x9">
                            <embed type='video/webm' src="https://www.youtube.com/watch?v=v4wHTL1QM24" />
                        </Ratio>
                        
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col md={{span:10, offset:1}}>
                    <table>
                    <thead>
                                <tr>
                                    <th>
                                        Feature
                                    </th>
                                    <th>
                                        Detail
                                    </th>
                                </tr>
                            </thead>
                        <tbody>
                            
                            <tr><td>	Loan Amount	</td><td>100% COA 
                                <br />INR 40 Lakhs for Unsecured Loans
                                <br />INR 1 Cr for Secured loans</td></tr>
                            <tr><td>	Interest Rate	</td><td>	10.25% onwards	</td></tr>
                            <tr><td>	Interest Rate Type	</td><td>	Floating Rates	</td></tr>
                            <tr><td>	Minimum Income	</td><td>Flexibility in Parents income</td></tr>
                            <tr><td>	Repayment	</td><td>	Partial interest payment during the moratorium period	</td></tr>
                            <tr><td>	Processing Fees	</td><td>	0.5 - 1.5%	</td></tr>
                            {/* <tr><td>	Other Charges	</td><td>		</td></tr> */}
                            <tr><td>	Margin Money	</td><td>	Up to 100% expenses are covered	</td></tr>
                            <tr><td>	Loan Tenure	</td><td>	Up to 12 years	</td></tr>
                            <tr><td>	Processing Time	</td><td>	7-10 days	</td></tr>
                            {/* <tr><td>	Repayment Penalty	</td><td>		</td></tr> */}
                        </tbody>
                        </table>
                        <LoanLandingForm title='Kickstart Your Student Loan Option Search' paragraph='Fill out the form to create an account and discover potential student loan for abroad options that meet your requirements.' landingName="/incred-education-loan" />
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    <Col xs={12}><h2 className='mt-5 mb-5 text-center'>How Does an Auxilo Finance Student Loan Benefit Me? </h2></Col>
                    
                    
                </Row>
                    
                <Row className='three-col-row'>
                <Col xs={12} md={6}>
                    
                    <h3>Quality Help from A Trusted Leader in the Industry</h3>
                        <ul>
                            {/* <li>	_______________ has made cumulative disbursements of over ______________	</li> */}
                            <li>	Auxilo has transformed the aspirations of over 10,000+ students pursuing their study abroad higher education across 25+ countries, 1100+ universities.	</li>
                            <li>	Auxilo has been a driving force behind the growth of 150+ educational institutions.	</li>
                            <li>	Awarded As The “Best Education Loan Provider 2022" By National Awards For Leadership & Excellence	</li>
                            <li>	Awarded As the “Most Preferred Education Loan Provider” by Higher Education Digest	</li>
                            <li>	Appreciated Under “The Most Promising NBFC To Watch 2022." by Business Connect	</li>
                        </ul>
                    
                    
                </Col>
                <Col >
                    <h3>Loan Assistance Catered to Your Specific Study Abroad Journey</h3>
                       <ul>
                            <li>	Comprehensive Coverage: Get 100% financing for everything, from pre-admission costs to course fees, airfare, and more.	</li>
                            <li>	Irresistible Rates: Enjoy attractive interest rates that won't break the bank.	</li>
                            <li>	Flexibility is Key: Repay your loan on your terms with flexible options tailored to your convenience.	</li>
                            <li>	"Swift Loans in 24 hours” through this feature a student can easily do the following	
                                <ol>
                                    <li>	Instant Access	</li>
                                    <li>	Document Upload: Share your documents.	</li>
                                    <li>	24-Hour Approval: Get your loan sanctioned within a day	</li>
                                </ol>
                            </li>
                            
                       </ul>
                </Col>
                </Row>

                <Row className='three-col-row'>
                <Col xs={12} md={6}>
                    
                    <h3>Straightforward Process with No Hassle</h3>
                        <ul>
                            <li>	Customised loan options.	</li>
                            <li>	Loan sanctions are hassle-free and quick.	</li>
                            <li>	Repayment Duration Up to 12 years	</li>
                        </ul>
                    
                    
                </Col>
                <Col >
                    <h3>Free Assistance from Nomad Credit</h3>
                       <ul>
                            <li>Nomad Credit will assist you in your entire loan option process completely free of charge</li>
                       </ul>
                </Col>
                </Row>
                
                <Image alt='City' className='secondary-hero-city' src={`/images/admission-hero-city-${imgSize}.webp`}/>
            </Container>
            <Container>
            <Row className='mt-5 three-col-row'>
                <Col xs={12}>
                    <h2 className='mt-5 mb-5 text-center'>Am I Eligible for an Auxilo Education Loan?</h2>
                    <p>
                        <h3>Study Abroad Student Loan Eligibility</h3>
                    </p>
                    <ul>
                        <li>	Age: Be at least 18 years old.	</li>
                        <li>	Citizenship: Must be an Indian citizen.	</li>
                        <li>	Admission Confirmation: Ensure you have admission confirmation.	</li>
                        <li>	Co-Borrower: Your application needs a co-borrower earning in India.	</li>
                    </ul>
                    
                    <p>
                        <h3>Co-applicant Requirements</h3>
                        <br />To secure a loan, you'll need a co-applicant with:
                    </p>
                    <ul>
                    <li>	Income Stability: They must have a steady source of income.	</li>
                    <li>	Positive Credit History: A good credit record is a must.	</li>
                    <li>	Relationship Flexibility: Co-applicants can be family members or legal guardians.	</li>
                    <li>	Wide Range: Eligible co-applicants include parents, siblings, spouses, and more.	</li>
                    </ul>

                    <h2 className='mt-5 mb-5 text-center'>What are my next steps?</h2>
                    <ul>
                        <li>	Get started by registering your interest and telling us more about your study plans. Nomad Credit will help you get everything ready so that applying for funding is effortless.	</li>
                        <li>	Send us the required documents needed to process your loan option and Nomad will organize and send your file to Auxilo Finance if you are eligible.	</li>
                        <li>	A Nomad Education Loan Option Manager will provide you updates of when your loan option is successfully logged in and sanctioned.	</li>
                        <li>	Once you get your application and documents verified by the authorities at Auxilo, you can get your loan structured as per your needs.	</li>
                    </ul>


                        <Button className='extra-pad mb-5 mx-auto' style={{display:'block', width:'fit-content'}} href='#mainForm'>Get Started <FontAwesomeIcon icon={faArrowRight} /> </Button>
                        
                </Col>
            </Row>
            </Container>
           
            <ScheduleNowBanner />
            <Container fluid className='pt-5  section-block required-docs' style={{backgroundColor:'#e9e9e9'}}>
                <Row className='pt-5'> 
                    
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <Image alt="Required Docs Icon" style={{display:'block', margin:'auto', marginBottom:'20px'}} src='/images/prodigy/prodigy-doc-reqs.webp' />
                        <h2 className='text-center'>What documents do I need?</h2>
                        <h3>For Applicants:</h3>
                            <ul>
                                <li>	PAN or Form No. 60 as defied in Income-Tax Rules, 1962	</li>
                                <li>	Know Your Customer (KYC) documents: Permanent Account Number (PAN) card, Aadhar card	</li>
                                <li>	Academic documents: SSC, HSC, graduation	</li>
                                <li>	Passport	</li>
                                <li>	Driving License	</li>
                                <li>	NREGA Card (National Rural Employment Guarantee Act)	</li>
                            </ul>
                        <p>If the documents mentioned above don't have an updated address, then the applicant can use the following documents:</p>
                        <ul>
                            <li>	Fresh Utility Bill: A bill from any service provider (electricity, telephone, post-paid mobile, piped gas, or water) dated within the last two months.	</li>
                            <li>	Tax Receipt: Present your property or Municipal tax receipt as a solid proof of address.	</li>
                            <li>	Pension PPOs: If you're a retired government or PSU employee, PPOs with your address are acceptable.	</li>
                            <li>	Employer's Allotment Letter: A letter of accommodation from certain employers, including government departments, regulatory bodies, and more, can also serve as valid proof	</li>
                        </ul>
                        
                        <h3>For Co-Applicant:</h3>

                            <p><strong>Salaried</strong></p>
                            <ul>
                                <li>	Aadhar Card	</li>
                                <li>	PAN Card	</li>
                                <li>	Passport-sized photograph	</li>
                                <li>	Salary Slips / Salary Certificate (Last 3 months)	</li>
                                <li>	Income Tax Returns (Last 3 years)	</li>
                                <li>	6-month Bank Statement	</li>
                                
                                
                            </ul>

                            <p><strong>Self- Employed</strong></p>
                            <ul>
                                <li>	Aadhar Card	</li>
                                <li>	PAN Card	</li>
                                <li>	Passport-sized photo	</li>
                                <li>	Business Proof	</li>
                                <li>	Income Tax Returns (Last 3 years)	</li>
                                <li>	6-month Bank Statement	</li>
                            </ul>


                        <Button variant="outline-primary" className='extra-pad' href='#mainForm'>Get Started  <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Col>
                </Row>
            </Container>


            
            <Container fluid className='pt-5 section-block prodigy-faq' >
                <Row className='pt-5'> 
                    
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <Image alt="FAQ Icon" style={{display:'block', margin:'auto', marginBottom:'20px'}} src='/images/prodigy/prodigy-faqs.webp'/>
                       
                        
                        <h2 style={{textAlign:'center', marginBottom:'20px'}}>Frequently Asked Questions</h2>

                        <div itemscope="" itemtype="http://schema.org/FAQPage">
                       

                       
                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name" className='mt-5'>Who is eligible for an education loan?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                        <div itemprop="text">
                            <ul>
                                <li>	Indian Residency: You must be an Indian resident.	</li>
                                <li>	Confirmed Admission: Secure admission to recognized institutions, in India or abroad.	</li>
                                <li>	Age Range: Your age should be 18 to 35 when applying.	</li>
                                <li>	Educational Pursuit: Pursue graduate/postgraduate degrees or PG diplomas.	</li>
                                <li>	Approved Institutions: Opt for colleges or universities affiliated with UGC/AICTE/Govt.	</li>
                                <li>	Co-Applicant Requirement: Full-time students need a co-applicant like a parent/guardian or spouse/parent-in-law.	</li>
                                <li>	Steady Income: Your co-applicant should have a stable income source.	</li>
                                <li>	Academic Record Matters: A strong academic record can expedite approval	</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        
                        
                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name" className='mt-5'>Who qualifies as a co-applicant for my education loan application? </h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                        <div itemprop="text">
                            <p>Your co-applicant can be your parents, siblings, parent-in-law, or spouse.
                            </p>
                            </div>
                        </div>
                        </div>
                        
                        
                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name" className='mt-5'>On what basis is my study abroad education loan evaluated?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <ul>
                                    <li>	Comprehensive Assessment: Auxilo employs a thorough evaluation process.	</li>
                                    <li>	Key Parameters: Factors like university/course popularity and co-applicant's creditworthiness shape the eligibility criteria.	</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name" className='mt-5'>Is there a difference in the required documents for an education loan depending on the institution?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <ul>
                                    <li>	Common Requests: Most institutions will ask for documents like proof of where you live, your age, and your income.	</li>
                                    <li>	Unique Needs: But, each institution might also have its own set of documents based on their specific eligibility criteria for student loans.	</li>
                                </ul>
                                </div>
                            </div>  
                        </div>
                        
                        
                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name" className='mt-5'>How to Improve Your Educational Loan Eligibility?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <ul>
                                    <li>	Ace Those Exams: Maximize eligibility by excelling in your qualifying exams. High scores open doors.	</li>
                                    <li>	Choose Wisely: Opt for a renowned institute or university—top-tier choices boost your chances.	</li>
                                    <li>	Academic Excellence: Showcase your strong academic track record as evidence of your commitment to education.	</li>
                                    <li>	Future Promise: Demonstrate a bright future with potential for employment or income generation.	</li>
                                    <li>	Financial Strength: A robust financial background from parents, guardians, or co-borrowers can enhance your eligibility.	</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        

                        </div>
                    </Col>
                </Row>
            </Container>
            
            <LoanBottomForm landingName="/education-loan-without-collateral" />
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
export default StudentLoansLandingAuxilo