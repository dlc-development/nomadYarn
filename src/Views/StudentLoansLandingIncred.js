import Button from 'react-bootstrap/Button'
import { Helmet } from 'react-helmet-async';
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
 
const StudentLoansLandingIncred = (props) => {
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
            <title>InCred Education Loan for Abroad -A complete Guide | Nomad</title>
            <meta name='description' content='InCred is our lending partner, providing diverse education loan options for students aspiring to pursue international studies.' /> 
            <link rel="canonical" href={props.location.href} />
        </Helmet>
        
            <Container fluid className='secondary-hero section-block  position-relative'>
                
                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>InCred Education Loan</h1>
                        <p>Studying abroad opens doors to incredible opportunities, but financing it can be challenging. Nomad Credit understands these hurdles and is dedicated to simplifying the process for international students. Common roadblocks like the requirement of a cosigner or collateral often deter students. That's why Nomad Credit has partnered with Incred to offer the perfect solution. Don't let financial constraints limit your dreams of studying abroad. Let Nomad Credit and InCred Finance empower you to find the best education loan options, ensuring your educational aspirations become a reality. 
                        </p>

                        
                    </Col>
                </Row>
                <Row className='mt-5 mb-5'>
                    <Col md={{span:10, offset:1}}>
                    <h2 className='text-center'>InCred Finance Overview</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>	Loan Amount	</td><td>	40-45 Lakhs	</td></tr>
                            <tr><td>	Interest Rate	</td><td>	10.5% to 13.5%	</td></tr>
                            <tr><td>	Interest Rate Type	</td><td>	Floating	</td></tr>
                            <tr><td>	Minimum Income	</td><td>	Not Required	</td></tr>
                            <tr><td>	Repayment	</td><td>	"Immediate: The student must pay the full principal and partial simple interest. 

                            Interest Only: The student must pay the interest charges each month."	</td></tr>
                            <tr><td>	Processing Fee	</td><td>	1%	</td></tr>
                            <tr><td>	Other Charges	</td><td>	No charges	</td></tr>
                            <tr><td>	Margin Money	</td><td>	0	</td></tr>
                            <tr><td>	Loan Tenure	</td><td>	10 years	</td></tr>
                            <tr><td>	Processing Time	</td><td>	5 working days	</td></tr>
                            <tr><td>	Repayment Penalty	</td><td>	No Penalty	</td></tr>
                        </tbody>
                        </table>
                        <LoanLandingForm title='Kickstart Your Student Loan Option Search' paragraph='Fill out the form to create an account and discover potential student loan for abroad options that meet your requirements.' landingName="/incred-education-loan" />
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    <Col xs={12}><h2 className='mt-5 mb-5 text-center'>Admissible Programs and Countries for Incred Education Loan </h2></Col>
                    <Col xs={12} md={6}>
                    
                        <strong>Admissible Programs:</strong>
                            <ul>
                                <li>	Incred, much like other lending institutions in India, exclusively offers unsecured loans for postgraduate or master's level programs, including PG Diplomas.	</li>
                                <li>	For undergraduate programs, secured education loans are primarily available. Still, undergraduate students with a robust co-applicant income profile may qualify for unsecured loans with direct EMI payments during the moratorium period.	</li>
                                <li>	Incred extends loan approvals for STEM (Science, Technology, Engineering, and Mathematics) and MBA programs.	</li>
                                <li>	As for individuals interested in Arts and Humanities, they should seek out esteemed institutions specializing in these fields. Moreover, having relevant work experience significantly enhances the likelihood of loan approval.	</li>
                            </ul>
                        
                        
                    </Col>
                    <Col >
                        <strong>Admissible Countries:</strong>
                           <ul>
                                <li>	Incred provides loans for well-known study-abroad destinations such as the US, UK, Canada, and Germany.	</li>
                                <li>	Other countries like Singapore, Netherlands, and Sweden may be considered case-by-case, depending on the institute's ranking.	</li>
                                <li>	However, there is a clear policy against offering loans to countries like Ukraine, the Philippines, Russia, and China, commonly chosen for MBBS studies.	</li>
                           </ul>
                    </Col>
                    
                </Row>
                
                <Image alt='City' className='secondary-hero-city' src={`/images/admission-hero-city-${imgSize}.webp`}/>
            </Container>
            <Container>
            <Row className='mt-5 three-col-row'>
                <Col xs={12}>
                    <h2 className='mt-5 mb-5 text-center'>How is InCred Education Loan Beneficial for Me?</h2>
                    <p>
                        <h3>Quality Help from A Trusted Leader in the Industry</h3>
                    </p>
                    <ul>
                        <li>	InCred has secured over $500 million in loan approvals, demonstrating its strong commitment to supporting students in financing their education.	</li>
                        <li>	InCred loan process has funded thousands of students pursuing their study abroad higher education in 700+ Eligible Universities and  200+ Eligible Programs.	</li>
                    </ul>
                    
                    <p>
                        <h3>Loan Assistance Catered to Your Specific Study Abroad Journey</h3>
                    </p>
                    <ul>
                        <li>	Up to 100% finance covering tuition fees & living costs	</li>
                        <li>	Can receive student loan sanction even before Visa, Admissions & I20)	</li>
                        <li>	InCred education loan interest rates are competitive in the market	</li>
                    </ul>

                    <p>
                        <h3>Easy Process with No Hassle</h3>
                    </p>
                    <ul>
                        <li>	InCred loan application status and the process is conducted online, ensuring a quick and hassle-free experience.	</li>
                        <li>	Easy EMIs with repayment tenure of up to 15 years	</li>
                    </ul>

                    <p>
                        <h3>Free Assistance from Nomad Credit</h3>
                    </p>
                    <ul>
                        <li>Nomad Credit will assist you in your entire loan process completely free of charge.</li>
                    </ul>

                    <h3 className='mt-5 text-center'>Am I Eligible for an InCred education loan without or with collateral?</h3>
                    <p className='text-center'>
                        <strong>Please complete our loan option search to see if you may be eligible!</strong>
                    </p>
                        <Button className='extra-pad mb-5 mx-auto' style={{display:'block', width:'fit-content'}} href='#mainForm'>Get Started <FontAwesomeIcon icon={faArrowRight} /> </Button>
                        
                </Col>
            </Row>
            </Container>
           
            {/* <Testimonials /> */}
            <Container fluid className='easy-process-section section-block prodigy-how pt-5 pb-5'>
                <Row className='three-col-row pt-5 pb-5'>
                    <Col xs={12} md={6}>
                        <Image alt='International Students studying abroad with the help of Nomad Credit' width={578} height={550} fluid src={`/images/prodigy/why-choose-prodigy.webp`} />
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
            
            <Container fluid className='pt-5  section-block required-docs' style={{backgroundColor:'#e9e9e9'}}>
                <Row className='pt-5'> 
                    
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <Image style={{display:'block', margin:'auto', marginBottom:'20px'}} src='/images/prodigy/prodigy-doc-reqs.webp' alt="Required Document Icon" />
                        <h2 className='text-center'>What Documents Do I Need?</h2>
                        <p className='text-center'>
                        Nomad Credit offers a tailored document checklist for InCred education loan options based on your profile, co-applicant profile, and any property or assets you may use as collateral.
                        </p>
                        <p><strong>On behalf of the applicant:</strong></p>
                            <ol>
                                <li>	Identity proof: PAN/ Passport/ Driver’s License/ Voter ID card or government-issued identification document.	</li>
                                <li>	Education loan application form.	</li>
                                <li>	Address proof: recent copy of telephone bill/ electricity bill/water bill/ piped gas bill/ Driving License/ Aadhaar card.	</li>
                                <li>	Passport	</li>
                                <li>	Past academic record.	
                                    <ul>
                                        <li>	10th standard mark sheet	</li>
                                        <li>	12th standard mark sheet	</li>
                                        <li>	Undergraduate result (semester-wise)	</li>

                                    </ul>
                                </li>
                                
                                <li>	Entrance exam results (e.g. GMAT, GRE, TOEFL, etc.)	</li>
                                <li>	Proof of admission: admission letter (A conditional admission letter is also applicable).	</li>
                                <li>	Statement of expenses.	</li>
                            </ol>
                        
                            <p><strong>On behalf of the co-applicant:</strong></p>
                            <ul>
                                <li>	Identity proof: PAN/ Passport/ Driver’s license/ Voter ID card or government-issued identification document.	</li>
                                <li>	Address: recent copy of telephone bill/ electricity bill/water bill/ piped gas bill or copy of Driving license/ Aadhaar card.	</li>
                                <li>	2 passport-size photographs.	</li>
                                <li>	Bank account statement of the co-borrower/guarantor for the last 6 months (in case of takeover of education loan).	</li>
                                <li>	Income proof for salaried co-applicant/guarantor	
                                    <ol>
                                        <li>	Salary slips for the last 3 months.	</li>
                                        <li>	Copy of Form 16 of the last 2 years or copy.	</li>
                                        <li>	Bank account statement for the last 6 months (Salary account).	</li>
                                        <li>	Brief statement of assets & liabilities of parent/ guardian/ other co-borrower.	</li>
                                    </ol>
                                </li>
                                
                                <li>	Income proof for self-employed co-applicant/guarantor	
                                    <ol>
                                        <li>	Business address proof.	</li>
                                        <li>	Last 2 years IT returns ( If IT Payee).	</li>
                                        <li>	TDS certificate (Form 16A, if applicable).	</li>
                                        <li>	Certificate of qualification (for C.A./ doctor and other professionals).	</li>
                                        <li>	Brief statement of assets & liabilities of parent/ guardian/ other co-borrower	</li>
                                        <li>	Bank account statement for the last 6 months.	</li>

                                    </ol>
                                </li>
                                
                            </ul>

                            <p><strong>Other Documents:</strong></p>
                            <ul>
                                <li>	Notarized affidavit from the borrower and co-applicant, as provided by your assigned financial consultant at Nomad Credit.	</li>
                                <li>	Declaration from the co-applicant stating their commitment to cover all expenses apart from the loan amount.	</li>
                                <li>	Previous loan account statements are active in the last year.	</li>
                                <li>	Receipts of any prior payments made.	</li>
                            </ul>


                        <Button variant="outline-primary" className='extra-pad' href='#mainForm'>Get Started  <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Col>
                </Row>
            </Container>


            <Container fluid className='pt-5  section-block required-docs'>
                <Row className='pt-5'> 
                    
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <h2 className='text-center'>What Should I Do Next?</h2>
                        <p>
                            <strong>How to apply for an education loan at Incred via Nomad Credit?</strong> 
                        </p>
                        <ol>
                            <li>	Begin by registering your interest and providing details about your study plans. Nomad Credit will assist you in preparing everything for a smooth funding application process.	</li>
                            <li>	Submit the necessary documents for processing your loan option, and Nomad will handle the organization and submission to InCred.	</li>
                            <li>	Stay informed with updates from a Nomad Education Loan Option Manager regarding successfully logging in and sanctioning your loan.	</li>
                            <li>	Complete any required sanction fees and await disbursement.	</li>
                            <li>	With flexible InCred EMI payment repayment options, you can focus on your studies first and pay later.	</li>
                        </ol>

                        <p>
                            <strong>Incred Education Loan Insurance</strong> 
                        </p>
                        <p>
                            Incred offers student loan insurance with fees ranging from 1% to 2% of the loan amount. Many  students opt to invest in education loan insurance to ensure that in the event of unforeseen circumstances, including the applicant's unfortunate demise, the responsibility for repaying the debt falls on the insurance company, not the borrower's parents or co-borrower. 
                            <br />When finalizing your loan option assisted by Nomad Credit, consult your financial advisor for additional information about loan insurance.

                        </p>

                        <p><strong>Benefits of Getting your InCred Education Loan through Nomad Credit</strong></p>

                        <table>
                                
                                <tbody>
                                <tr><td>	<strong>Online Documentation</strong><br />


                                        With our online document upload facility, you can seamlessly submit your paperwork from your home, expediting your loan approval process. Bid farewell to the need for physical visits to the NBFC for document submission.	</td><td>	
                                        <strong>Streamlined Processing Time:</strong><br />
                                        When you opt for a public bank to process your education loan, you can expect the sanctioning process to conclude within 15-20 days. However, if you choose InCred, in collaboration with Nomad Credit, the wheels of approval turn even more swiftly. Typically, your loan will be sanctioned within 5-7 working days after completing your paperwork.	</td></tr>
                                        <tr><td>	<strong>100% no-cost services from Nomad</strong><br />
                                        Nomad Credit goes the extra mile in providing services that come at no financial burden to applicants. We proudly offer our services completely free of charge, without imposing any fees or hidden costs. Your financial peace of mind is our priority.	</td><td>	<strong>Holistic help</strong><br />

                                        Nomad Credit offers a range of services, from admission guidance to visa to loan assistance. We're not just consultants but your partners in your study abroad journey.	</td></tr>
                                </tbody>
                                
                            </table>
                    </Col>
                </Row>
            </Container>
            <ScheduleNowBanner />
            <Container fluid className='pt-5 section-block prodigy-faq' >
                <Row className='pt-5'> 
                    
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <Image style={{display:'block', margin:'auto', marginBottom:'20px'}} src='/images/prodigy/prodigy-faqs.webp' alt="FAQs Icon" />
                       

                        <h2 style={{textAlign:'center', marginBottom:'20px'}}>Frequently Asked Questions</h2>

                        <div itemscope="" itemtype="http://schema.org/FAQPage">

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 itemprop="name">Who can apply for an InCred Education loan?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>The co-signer must also be an Indian national or passport holder.
                                Non-resident Indians (NRIs) with an Indian passport or those holding Overseas Citizens of India (OCI) or Persons of Indian Origin (PIO) cards are also eligible to apply for an InCred student loan options. Certain additional conditions may apply case-by-case for such applicants and co-signers.
                            </p>
                            <p>Citizens of India and Indian passport holders currently enrolled in or intending to enroll in an eligible course are eligible to apply.</p>
                                </div>
                            </div>
                        </div>
                        
                        
                        

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 className='mt-5' itemprop="name">Which courses are eligible for funding?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                            <p>InCred offers education loans for undergraduate (bachelor's), graduate (master's), and doctoral programs. Certifications and diplomas are also considered eligible.
                        Regarding fields of study, majors, or subject areas, InCred provides loan options for all disciplines.
                        </p>
                        <p>
                            Please note that InCred will only process loans for courses and institutions that have obtained the necessary approvals, authorizations, or accreditation from relevant governing bodies.
                        </p>
                             </div>
                        </div>
                       
                        </div>
                        

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 className='mt-5' itemprop="name">Are There Income Tax Benefits for InCred Education Loans?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                            <p>Unfortunately, education loans obtained from Non-Banking Financial Companies (NBFCs) like InCred do not offer income tax benefits. Unlike education loans from banks, which may provide tax benefits under certain conditions, loans from NBFCs typically do not qualify for such tax benefits. It's essential to consider this when planning your education financing, as the tax implications can vary depending on the type of lender you choose for your loan.</p>
                             </div>
                        </div>
                        </div>
                        
                        

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 className='mt-5' itemprop="name">Is there an application fee?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                            <p>No, there are no initial fees or charges when you apply. However, after provisionally approving your loan, you will be asked to pay a processing/administration fee. This fee typically amounts to around 1% to 1.5% of your total loan amount.
                        </p>
                             </div>
                        </div>
                        </div>
                        
                        

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 className='mt-5' itemprop="name">Which countries qualify for an InCred Education Loan?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>Currently, InCred education loans are accessible for eligible programs in numerous prominent destinations. These destinations encompass the United States of America, Canada, Australia, Ireland, New Zealand, India, and more.
                            </p>
                                
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
export default StudentLoansLandingIncred