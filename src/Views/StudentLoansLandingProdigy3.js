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
import '../css/views/prodigy.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import windowSize from '../helpers/window-size.js';
import { Helmet } from 'react-helmet-async';
 
const StudentLoansLandingProdigy3 = (props) => {
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
                        <h1 className='hero-header'> Help Fund your Study Abroad Education with Nomad Credit and Prodigy Finance</h1>
                        <p>Nomad Credit prides itself on making study abroad a pain-free process by helping international students find education loan options that best benefit them. The need for an eligible cosigner or collateral are common obstacles for these students. To combat these barriers, Nomad Credit has partnered with Prodigy Finance to help students find the best loan options for their unique needs. Don't let financing hold you back from pursuing your dreams of studying abroad. Let Nomad Credit and Prodigy Finance help you find the best loan options!</p>
                        <p></p>
                        
                        <Image alt="Image of happy student talking to Nomad Credit specialist" width={293} height={291} fluid className='mt-5 display-mobile' src={`/images/how-it-works-${imgSize}.webp`} />
                    </Col>
                </Row>
                <Row className='mt-5 mb-5'>
                    <Col md={{span:10, offset:1}}>
                        <LoanLandingForm  landingName="student-loans-landing-prodigy-3" />
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    <Col xs={12}><h2 className='mt-5 mb-5 text-center'>How Does a Prodigy Finance Education Loan Benefit Me? </h2></Col>
                    <Col xs={12} md={6}>
                    
                        <p><strong>Quality Help from A Trusted Leader in the Industry</strong>
                            <ul>
                                <li>Over $1B in loans have been provided to over 30,000 students from 150 countries, at over 1,100 schools around the world by Prodigy Finance since 2007</li>
                            </ul>
                        </p>
                        <p><strong>Loan Assistance Catered to Your Specific Study Abroad Journey</strong>
                            <ul>
                                <li>Prodigy Finance interest rates are based off your unique profile, eliminating the need of a co-applicant or collateral</li>
                                <li>
                                Loans are provided in USD or EUR, catering specifically to the needs of international students
                                </li>
                            </ul>
                        </p>
                        <p><strong>Straightforward Process with No Hassle</strong>
                            <ul>
                                <li>The entire application process for Prodigy Finance is conducted online, ensuring a smooth and convenient experience</li>
                                <li>
                                Your loan will be sanctioned within 7 days after all the documents have been submitted
                                </li>
                            </ul>
                        </p>
                        <p><strong>Free Assistance from Nomad Credit</strong>
                            <ul>
                                <li>Nomad Credit will assist you in your entire loan process completely free of charge</li>
                            </ul>
                        </p>
                        


                        <Image alt="Image of happy student talking to Nomad Credit specialist" width={578} height={436} fluid className='mt-5 display-desktop' src={`/images/how-it-works-${imgSize}.webp`} />
                    </Col>
                    <Col >
                        {/* <LoanLandingForm  landingName="student-loans-landing-prodigy"Frequir /> */}
                        <p><strong>Prodigy Finance Education Loan Features At a Glance</strong>
                            <table>
                                <thead>
                                    <th>Feature</th>
                                    <th>Detail</th>
                                </thead>
                                <tbody>
                                    <tr><td>	Loan Amount	</td><td>	Up to $100,000	</td></tr>
                                    <tr><td>	Interest Rate	</td><td>	11.06% Min	</td></tr>
                                    <tr><td>	Interest Rate Type	</td><td>	Floating	</td></tr>
                                    <tr><td>	Minimum Income	</td><td>	Not Required	</td></tr>
                                    <tr><td>	Repayment	</td><td>	Full moratorium during course & 6 month of grace period	</td></tr>
                                    <tr><td>	Processing Fees	</td><td>	Up to 5%, added to loan amount	</td></tr>
                                    <tr><td>	Other Charges	</td><td>	No Charges	</td></tr>
                                    <tr><td>	Margin Money	</td><td>	0	</td></tr>
                                    <tr><td>	Loan Tenure	</td><td>	Up to 20 years	</td></tr>
                                    <tr><td>	Processing Time	</td><td>	Up to 7 Days	</td></tr>
                                    <tr><td>	Repayment Penalty	</td><td>	No Penalty	</td></tr>
                                </tbody>
                                
                            </table>
                        </p>
                    </Col>
                    
                </Row>
                
                <Image alt='City' className='secondary-hero-city' src={`/images/admission-hero-city-${imgSize}.webp`}/>
            </Container>
            <Container>
            <Row className='mt-5 three-col-row'>
                <Col xs={12}>
                    <h2 className='mt-5 text-center'>Am I Eligible for a Prodigy Finance Education Loan? </h2>
                    <h3 className='text-center'>
                        Please complete our loan option search to see if you  may be eligible!  </h3>
                        <Button className='extra-pad mt-5 mb-5 mx-auto' style={{display:'block', width:'fit-content'}} href='#mainForm'>Start your Search Now! <FontAwesomeIcon icon={faArrowRight} /> </Button>
                    <p>
                        <strong>Prodigy Finance is proud to support international students from more countries than any other current lender</strong>
                        <br/>The full list of Prodigy Finance eligible countries can be found <a href="https://support.prodigyfinance.com/hc/en-us/articles/360000134385-Which-regions-aren-t-eligible-for-a-loan-" target="_blank">here.</a>

                        <br/>
                        <br/>
                        <strong>Prodigy Finance currently supports over 800 schools globally across Business, Engineering, Law, Public Policy and Medical and are expanding all the time.</strong>
                        <br />The full Prodigy Finance university list can be found <a href='https://support.prodigyfinance.com/hc/en-us/articles/360000145589-Which-schools-do-you-support-' target="_blank">here.</a>
                    </p>
                        
                </Col>
            </Row>
            </Container>
            <Container style={{fontSize:'large', textAlign:'center'}} className='section-block'>
                <Row>
                    <Col sm={12} md={4}><Image src='/images/prodigy/prodigy-interest-rate.webp' alt='interest rate icon' /><h2>Interest Rate</h2><p>Starting at 11.06%</p></Col>
                    <Col sm={12} md={4}><Image src='/images/prodigy/prodigy-processing-fees.webp' alt='processing fees icon' /><h2>Processing Fees</h2><p>Up to 5% <br /><small>added to loan amount</small></p></Col>
                    <Col sm={12} md={4}><Image src='/images/prodigy/prodigy-loan-margin.webp' alt='loan margin icon' /><h2>Loan Margin</h2><p>0%</p></Col>
                </Row>
            </Container>
            {/* <Testimonials /> */}
            <Container fluid className='easy-process-section section-block prodigy-how' style={{paddingTop:'20px', paddingBottom:'20px'}}>
                <Row className='three-col-row pt-5 pb-5'>
                    <Col xs={12} md={6}>
                        <Image alt="Happy Students Studying Abroad" width={578} height={550} fluid src={`/images/prodigy/why-choose-prodigy.webp`} />
                    </Col> 
                    <Col xs={12} md={6}>
                        <h2 className='mt-5 mb-5'>What Are My Next Steps?</h2>

                        <ol>
                            <li>Get started by registering your interest and telling us more about your study plans. Nomad Credit will help you get everything ready so that applying for funding is effortless.</li>
                            <li>Apply for funding and receive a customized quote from Prodigy Finance in exchange for some additional details about your plans. If you're still deciding where to study, you can apply to each school and compare offers.</li>
                            <li>Upload your documents to Prodigy Finance's secure platform.</li>
                            <li>Finalize your loan and sign on the dotted line.</li>
                            <li>Study first, pay later with Prodigy Finance's flexible repayment options.</li>
                        </ol>

                        
                        <Button variant="outline-light" className='extra-pad mt-3 mb-2' href='#mainForm'>See Your Options <FontAwesomeIcon icon={faArrowRight} /> </Button>
                    </Col>
                    
                </Row>
            </Container>
            
            <Container fluid className='pt-5  section-block required-docs' style={{backgroundColor:'#e9e9e9'}}>
                <Row className='pt-5'> 
                    
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <Image style={{display:'block', margin:'auto', marginBottom:'20px'}} src='/images/prodigy/prodigy-doc-reqs.webp' alt="Required Document icon" />
                        <h2 style={{textAlign:'center'}}>What Documents Do I Need?</h2>
                        <p  style={{textAlign:'center'}}>There are quite a few documents that are required to process your Prodigy Finance loan - some will need to be uploaded when you apply for your loan, while others may only be needed later. To ensure a speedy process, it’s best to prepare all your documents early on</p>
                        
                        <ol>
                            <li><strong>Proof of Identity</strong> - a passport, driver's license, or government issued identification document.</li>
                            <li><strong>Proof of Address</strong> - a water bill, electricity bill, bank document, rent agreement, etc.</li>
                            <li><strong>Proof of Admission</strong> - a letter from your school confirming that you've been accepted into your program or an email from your school confirming your admission.</li>
                            <li><strong>Credit Report</strong></li>
                            <li><strong>Proof of Income</strong> (if applicable)</li>
                            <li><strong>Proof of Savings</strong> (if applicable)</li>
                            <li><strong>Proof of Scholarships or Company Sponsorship</strong> (if applicable)</li>
                        </ol>

                        
                        <Button variant="outline-primary" className='extra-pad' href='#mainForm'>Get Started  <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='pt-5 section-block prodigy-faq' >
                <Row className='pt-5'> 
                    
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <Image style={{display:'block', margin:'auto', marginBottom:'20px'}} src='/images/prodigy/prodigy-faqs.webp' alt="FAQs icon" />
                       

                        <h2 style={{textAlign:'center', marginBottom:'20px'}}>Frequently Asked Questions</h2>
                        <h3>Can I change my student loan amount after accepting my conditional offer?</h3>
                        <p>You can change your loan amount after you’ve received and accepted conditional approval from us.</p>
                        <ul>
                            <li><strong>Reducing your loan amount</strong> <br />
                            You can reduce your Prodigy Finance student loan amount any time before you sign the final loan agreement, which happens when you arrive on campus for the start of class. And, the administration fee will also be reduced accordingly.</li>
                            <li><strong>Increasing your loan amount</strong> <br />
                            You may also request an increase in your Prodigy Finance student loan amount; however, it isn’t guaranteed. The Prodigy Finance committee will need to approve your new loan amount. Keep in mind that the associated admin fee will also increase..</li>
                        </ul>
                        <h3 className='mt-5'>How do Prodigy Finance loan interest rates work?</h3>
                        <p>TThere are 3 different types of interest rates that apply to your Prodigy Finance loan. But, it’s critical that while they all apply, they’re not separate interest rates; they’re different ways of looking at your interest costs.</p>
                        <ul>
                        <li><strong>Simple interest rate</strong> <br />
                            This is the interest rate you receive for your loan, plus the SOFR base rate, which varies every 3 months. For example, if you receive a loan offer of €40 000 at 7.2%, and the 3 month Euribor is 0.12%, your simple interest rate is 7.32% (7.2% + 0.12%). One twelfth (1/12) of this is added to your account balance at the end of each month.</li>
                        <li><strong>Annual effective interest rate</strong> <br />
                        The effective interest rate (EIR) also includes the effect of compounding during your study and grace periods (where you aren’t making payments). For this example, the EIR is 7.62%.</li>
                        <li><strong>APR (annual percentage rate)</strong> <br />
                        While the EIR takes the effect of compounding into account, the APR also takes all fees associated with your loan (ie, administration fees) into account. For this example, the APR of your Prodigy education loan would be 8.09%.</li>
                        </ul>
                        <p>Students who are considering different loan options should use the APR for the purposes of comparison.</p>
                      


                        <h3 className='mt-5'>When do the funds get disbursed?</h3>
                        <p>Disbursement dates of Prodigy Finance student loans vary from school to school. And, you can rest assured that Prodigy Finance is in continuous communication with every school, and we have agreements in place that allow students to defer payment until the date on which the funds are disbursed. Please note that Prodigy Finance education loans cannot be used to pay any acceptance deposits or reservation fees required to secure your place at your school.</p>

                        
 

                        <h3 className='mt-5'>What can I use the funds for?</h3>
                        <p>Some schools allow funds to be used for living expenses as well as tuition fees. If your loan includes living expenses, we will send all funds to your school. Once tuition fees are paid the school will then transfer living expense funds to you directly. In this case, it is best to reach out to your school's Financial Aid Office to coordinate the times and dates.</p>

                        <h3 className='mt-5'>How long does it take for my funds to reach my school?</h3>
                        <p>Once you have signed your loan agreement and Prodigy Finance has released your funds, it takes between 3 to 5 business days for the funds to arrive in your school’s account.</p>
                        <p>You'll need to allow a few extra days to give your school's admin department the opportunity to allocate our payment to your student account.</p>

                        <h3 className='mt-5'>What happens if I repay my loan early?</h3>
                        <p>You don’t need to make any repayments during the grace period (which lasts for six months after you graduate). However, there are no charges or penalties if you do decide to make early repayments or settle your loan early. Want to start repaying your loan while you’re still studying? No worries there either.</p>
                        
                    </Col>
                </Row>
            </Container>
            
            <LoanBottomForm landingName="/student-loans-landing-prodigy-3" />
            <Container fluid className='pt-5 section-block prodigy-terms' >
                <Row className='pt-5'> 
                    
                    <Col  xs={{offset:0, span:12}} md={{offset:3, span:6}}>
                    <h4>Terms and conditions</h4>
                    <p>11.06% is the minimum possible Annual Percentage Rate you could be offered. This APR assumes a 4.98% fixed margin rate, a 4.89%* variable base rate (3-month CME Term SOFR as of 6 April 2023), and a 5% administration fee. The actual rate offered will depend on your circumstances, loan amount and term, and may differ from the minimum and/or the average representative APR shown in our representative example above.
                    <br />The average APR for student loans is 14.96%.
<br />To qualify, borrowers must meet Prodigy Finance eligibility and underwriting requirements.
Prodigy Finance reserves the right to vary or discontinue its student loan product at any time without notice.
<br />* Benchmark rates shown on this page are rounded to 2 decimals of a percentage for illustrative purposes. For the actual rate used, <a target="_blank" href="https://prodigyfinance.com/legal/sofr/">click here.</a></p> 
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default StudentLoansLandingProdigy3