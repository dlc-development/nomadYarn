import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {LoanLandingForm, LoanBottomForm} from '../components/Forms';
import '../css/views/secondary.scss';
import '../css/views/prodigy.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import windowSize from '../helpers/window-size.js';
import { Helmet } from 'react-helmet-async';
 
const StudentLoansLandingMpower = (props) => {
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
                        <h1 className='hero-header'>Nomad Credit and MPOWER Financing Can Help You Find No-Collateral and No-Cosigner Funding to Study Abroad </h1>
                        <p>Nomad Credit prides itself on making study abroad a pain-free process by helping international students find education loan options that best benefit them. To that end, Nomad Credit has partnered with MPOWER Financing to help students find the best no-cosigner, no-collateral loan options for their unique needs. 
                        </p><p>
                        Nomad Credit will walk you through the entire MPOWER loan application process. Don't let financing hold you back from pursuing your dreams of studying abroad. </p>
                        <Image alt="Image of happy student talking to Nomad Credit specialist" width={293} height={291} fluid className='mt-5 display-mobile' src={`/images/how-it-works-${imgSize}.webp`} />
                    </Col>
                </Row>
                <Container>
                <Row >
                    <Col md={{span:10, offset:1}} >
                        <LoanLandingForm landingName="/student-loans-landing-mpower" />
                    </Col>
                </Row>
                </Container>
                
                <Row className='mt-5 three-col-row'>
                    <Col xs={12}><h2 className='mt-5 mb-5 text-center'>How Does an MPOWER Education Loan Benefit Me?</h2></Col>
                    <Col xs={12} md={6}>
                    
                        <h3>Quality Help from a Trusted Leader in the Industry</h3>
                        <ul>
                            <li>	The potential for a conditional loan offer in a matter of days	</li>
                            <li>	Visa support letters and exclusive career strategy services at no additional cost	</li>
                            <li>	Over 200 countries worldwide and 400 schools in the United States and Canada are eligible for the MPOWER loan program.	</li>
                        </ul>
                        <h3>Loan Assistance Catered to Your Specific Study Abroad Journey</h3>
                        <ul>
                            <li>	Fixed-rate loans from US$2,001 to US$100,000 total.	</li>
                            <li>	No issues if you have study abroad education loans from other lenders. You can still apply for an MPOWER education loan.	</li>
                            

                        </ul>
                            
                        <h3>Straightforward Process with No Hassle</h3>
                            <ul>
                                <li>	The entire application process for MPOWER Financing is 100% digital, ensuring ease of access around the globe no matter your location.	</li>
                                <li>	It takes just 30 seconds to see if you’re eligible to apply and less than 30 minutes to complete the application.	</li>
                            </ul>
                        <h3>Free Assistance from Nomad Credit</h3>
                            <ul>
                                <li>Nomad Credit will assist you in your entire loan process with MPOWER Financing completely free of charge.</li>
                            </ul>
                        


                        <Image alt="Image of happy student talking to Nomad Credit specialist" width={578} height={436} fluid className='mt-5 display-desktop' src={`/images/how-it-works-${imgSize}.webp`} />
                    </Col>
                    
                    <Col >
                        <p><strong>MPOWER Financing Education Loan Features At a Glance</strong>
                            <table>
                                <thead>
                                    <th>Feature</th>
                                    <th>Detail</th>
                                </thead>
                                <tbody>
                                    <tr><td>	Interest rate discount	</td><td>	0.25% for signing up for autopay	</td></tr>
                                    <tr><td>	Interest Rate After Discount	</td><td>	12.74% (13.72% APR) for Graduates	</td></tr>
                                    <tr><td>	Interest Rate Type	</td><td>	Fixed	</td></tr>
                                    <tr><td>	Current Minimum Income	</td><td>	Not required	</td></tr>
                                    <tr><td>	Repayment	</td><td>	Simple interest only during the course & during 6-month grace period, EMI afterward	</td></tr>
                                    <tr><td>	Origination Fee	</td><td>	5% of the loan amount	</td></tr>
                                    <tr><td>	Other Fees to approve loan	</td><td>	None	</td></tr>
                                    <tr><td>	Loan Term	</td><td>	10 years	</td></tr>
                                    <tr><td>	Processing Time	</td><td>	Up to 10 business days	</td></tr>
                                    <tr><td>	 Repayment Penalty	</td><td>	No penalty	</td></tr>
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
                    <h2 className='mt-5 text-center'>Am I Eligible for an MPOWER Finance Education Loan? </h2>
                    <h3 className='text-center'>Please complete the loan option search to see if you  may be eligible! Start your Search Now!</h3>
                        <Button className='extra-pad mt-5 mb-5 mx-auto' style={{display:'block', width:'fit-content'}} href='#mainForm'>Start your Search Now! <FontAwesomeIcon icon={faArrowRight} /> </Button>
                    <p style={{textAlign: 'center'}}> 
                        <strong>MPOWER Financing is proud to support international students from more than 200 countries</strong>
                        <br />
                        <strong>Over 400 schools in the U.S. and Canada (across all degree types) are eligible for the MPOWER Financing loan program.</strong>
                        <br/>The full list of eligible MPOWER Financing schools can be found <a href="https://www.mpowerfinancing.com/get-a-loan/schools-we-support#schools" target="_blank">here.</a>

                    </p>
                        
                </Col>
            </Row>
            </Container>
            <Container style={{fontSize:'large', textAlign:'center'}} className='section-block'>
                <Row>
                    <Col sm={12} md={6}><Image src='/images/prodigy/prodigy-interest-rate.webp' alt='interest rate icon' /><h2>Interest Rate</h2><p>Starting at 12.99% (13.98% APR)</p></Col>
                    <Col sm={12} md={6}><Image src='/images/prodigy/prodigy-processing-fees.webp' alt='processing fees icon' /><h2>Processing Fees</h2><p>5% <br /><small>added to loan amount</small></p></Col>
                    {/* <Col sm={12} md={4}><Image src='/images/prodigy/prodigy-loan-margin.webp' alt='loan margin icon' /><h2>Loan Margin</h2><p>0%</p></Col> */}
                </Row>
            </Container>
            {/* <Testimonials /> */}
            <Container fluid className='easy-process-section section-block prodigy-how' style={{paddingTop:'20px', paddingBottom:'20px'}}>
                <Row className='three-col-row pt-5 pb-5'>
                    <Col xs={12} md={6}>
                        <Image alt='International Students studying abroad with the help of Nomad Credit' width={578} height={550} fluid src={`/images/prodigy/why-choose-prodigy.webp`} />
                    </Col> 
                    <Col xs={12} md={6}>
                        <h2 className='mt-5 mb-5'>What Are My Next Steps? </h2>

                        <ol>
                            <li>	Register your interest with Nomad Credit and tell us more about your study plans. Nomad Credit will then contact you to help you get everything ready – at no cost to you – so that applying for funding is effortless.	</li>
                            <li>	Apply for funding and receive a customized quote from MPOWER Financing in exchange for some additional details about your plans.	</li>
                            <li>	Upload your documents to MPOWER Financing’s secure platform (see document list below).	</li>
                            <li>	Finalize your loan and sign on the dotted line.	</li>

                        </ol>

                        
                        <Button variant="outline-light" className='extra-pad mt-3 mb-2' href='#mainForm'>See Your Options <FontAwesomeIcon icon={faArrowRight} /> </Button>
                    </Col>
                    
                </Row>
            </Container>
            <Container fluid className='pt-5  section-block required-docs' style={{backgroundColor:'#e9e9e9'}}>
                <Row className='pt-5'> 
                    
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <Image style={{display:'block', margin:'auto', marginBottom:'20px'}} src='/images/prodigy/prodigy-doc-reqs.webp' alt="Required Document Icon" />
                        <h2 style={{textAlign:'center'}}>What Documents Do I Need?</h2>
                        <p  style={{textAlign:'center'}}>There are the  documents that are required to process your MPOWER education loan as a study abroad student – some will need to be uploaded when you apply for your student loan, while others may only be needed later. To ensure a speedy process, it’s best to prepare all your documents early on. </p>
                        <ol>
                            <li>	Resume or CV (curriculum vitae)	</li>
                            <li>	Proof of home country address – utility bill, bank statement, signed lease, letter from the university	</li>
                            <li>	Three standardized test scores (GRE, GMAT, LSAT, MCAT, NBDE)	</li>
                            <li>	English proficiency exam scores (TOEFL / IELTS) or waiver from the university	</li>
                            <li>	Admission letter	</li>
                            <li>	Past transcripts and/or diploma from previous universities	</li>
                            <li>	Estimated cost of attendance or program financial summary	</li>
                            <li>	Passport	</li>
                            <li>	Secondary photo ID from your home country; this is in addition to your passport – driver's license, national ID, voter's ID, other government issued ID	</li>
                            <li>	Supporting evidence for the funds you listed in your application – bank statements, scholarships, salary evidence, internships	</li>
                            <li>	References	</li>
                        </ol>
                        <p>Note: Document requirements above are shown for a typical study abroad student on Nomad’s platform. For full document details for your specific situation, please see <a href='https://support.mpowerfinancing.com/hc/en-us/articles/360020938634-What-documents-and-personal-information-should-I-have-prepared-when-applying-' target='_blank'>here</a></p>
                        <Button variant="outline-primary" className='extra-pad' href='#mainForm'>Get Started  <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='pt-5 section-block prodigy-faq' >
                <Row className='pt-5'> 
                    
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <Image style={{display:'block', margin:'auto', marginBottom:'20px'}} src='/images/prodigy/prodigy-faqs.webp' alt="FAQs Icon" />
                       

                        <h2 style={{textAlign:'center', marginBottom:'20px'}}>Frequently Asked Questions</h2>
                        

                        <div itemscope="" itemtype="http://schema.org/FAQPage">

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name">Can MPOWER Financing provide a letter of financial support? </h3>
                            <div itemprop="acceptedAnswer" itemscope itemtype="http://schema.org/Answer">
                            <div itemprop="text">
                                <p><strong>U.S. SCHOOLS</strong></p>
                                <ul>
                                <li>Upon credit approval, MPOWER will provide you a support letter to assist you with the visa process at no additional cost. You will need to provide the support letter to your school in order to receive your I-20.</li>
                                    <li>To summarize:	
                                    <ol>
                                        <li>	You must be accepted by an MPOWER approved school and apply for an MPOWER student loan.	</li>
                                        <li>	If your loan application is approved, you will receive an MPOWER support letter.	</li>
                                        <li>	Provide the MPOWER support letter to the school and receive your I-20 form.	</li>
                                        <li>	Include the I-20 form in your visa application with the U.S. government.	</li>   
                                    
                                    </ol></li>
                                    <li>	Note: You must provide MPOWER with the required immigration documentation before your loan can be disbursed</li>
                                </ul>

                                <p><strong>CANADIAN SCHOOLS</strong></p>
                                    <ul>
                                        <li>Your MPOWER loan approval letter can help prove that you have funds to support your study abroad education.</li>
                                        <li>To summarize:
                                        <ol>
                                            <li>	You must be accepted by an MPOWER approved school and apply for an MPOWER student loan.	</li>
                                            <li>	You will receive your MPOWER education loan approval document following your acceptance of loan terms.	</li>
                                            <li>	Include the loan approval letter in your study permit application with the Canadian government.	</li>
                                            
                                            </ol>
                                        </li>
                                        <li>
                                        Note: You must provide MPOWER with the required immigration documentation before your loan can be disbursed.
                                        </li>
                                    </ul>
                            </div>
                            </div>
                        </div>
                        
                        
                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name" className='mt-5'>How can I calculate my student loan payments?</h3>
                            <div itemprop="acceptedAnswer" itemscope itemtype="http://schema.org/Answer">
                            <div itemprop="text">
                                <p>You can calculate your student loan payments using the MPOWER <a href='https://www.mpowerfinancing.com/get-a-loan/' target='_blank'>loan payment calculator</a>. Enter your loan amount, degree type, citizenship status, country of study, and time left until degree completion. The MPOWER loan payment tool will then calculate your in-school payment, monthly payment after graduation, and any interest reduction you may be eligible for by using MPOWER’s autopay discount.</p>
                            </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name" className='mt-5'>It’s time for my next MPOWER loan. How do I submit my second application?</h3>
                            <div itemprop="acceptedAnswer" itemscope itemtype="http://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                    Current MPOWER customers can start and submit a second application by signing in to the MPOWER Portal. There is a lifetime borrowing limit of US$100,000 and a maximum of US$50,000 per academic period. An academic period can be a semester, academic year, quarter, or trimester. For example, a student may choose to borrow US$50,000 in their fall semester and an additional US$50,000 in their spring semester. Or, a student with 2 years remaining until graduation may choose to borrow US$25,000 over each of their 4 academic semesters. You can request funding for all academic periods in one application. Please note that each academic period is reviewed independently.
                                </p>
                            </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name" className='mt-5'>How does MPOWER help me build my U.S. credit history and credit score?</h3>
                            <div itemprop="acceptedAnswer" itemscope itemtype="http://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                You do not need to have a U.S. credit history or credit score to be approved for an MPOWER no-cosigner, no-collateral loan. However, it’s important to start building credit in the U.S. for your future–you’ll need it to open a credit card, lease a car, rent an apartment, and get a mortgage. You will build your U.S. credit history every time you make an on-time payment on your MPOWER loan. MPOWER reports information on your payments monthly to each of the U.S. credit bureaus, which in turn helps to build a credit history for you.
                                </p>
                            </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name" className='mt-5'>Is MPOWER accepting new loan applications?</h3>
                            <div itemprop="acceptedAnswer" itemscope itemtype="http://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                Yes, MPOWER is accepting loan applications for past, current, and future semesters. Check your eligibility in 30 seconds <a href='https://registration.mpowerfinancing.com/eligibility' target='_blank'>here</a>.
                                </p>
                            </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name" className='mt-5'>Which universities does MPOWER work with?</h3>
                            <div itemprop="acceptedAnswer" itemscope itemtype="http://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                MPOWER supports students at a growing list of over 400 universities in the U.S. and Canada. The full list is available <a href='https://www.mpowerfinancing.com/get-a-loan/schools-we-support/' target='_blank'>here</a>.
                                </p>
                            </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name" className='mt-5'>Can a student use additional financing with their MPOWER loan?</h3>
                            <div itemprop="acceptedAnswer" itemscope itemtype="http://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                Yes, depending on a student's individual circumstances, having an MPOWER student loan does not prevent a student from accessing additional financing.
                                </p>
                            </div>
                        </div>
                        </div>

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name" className='mt-5'>How long does the application process take?</h3>
                            <div itemprop="acceptedAnswer" itemscope itemtype="http://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                It takes 30 seconds to check your eligibility, approximately 30 minutes to submit an application, and usually less than 3 days to receive your conditional offer. MPOWER accepts loan applications for past, current, and future semesters.
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
            <LoanBottomForm landingName="/student-loans-landing-mpower" />
            <Container fluid className='pt-5 section-block prodigy-terms' >
                <Row className='pt-5'> 
                    
                    <Col  xs={{offset:0, span:12}} md={{offset:3, span:6}}>
                    <h4>Terms and conditions</h4>
                    <p>To see MPOWER Financing’s full terms and conditions, please visit <a href='https://www.mpowerfinancing.com/terms-of-service' target="_blank">here</a>.</p> 
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default StudentLoansLandingMpower