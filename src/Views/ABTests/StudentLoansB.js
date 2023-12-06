import Button from 'react-bootstrap/Button'
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
import Table from 'react-bootstrap/Table';
 
const StudentLoansB = (props) => {
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
            <title>Education loans for abroad studies: A</title>
            <meta name='description' content='Read on to explore education loans for abroad studies. Learn in-depth everything about education loans, such as key features, eligibility criteria, documents required, and so on.' /> 
            <link rel="canonical" href={props.href} />
        </Helmet>
        
            <Container fluid className='secondary-hero section-block  position-relative'>
                
                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>Education loans for abroad studies</h1>
                       <p className='text-center'>
                            <h2>What is an Education Loan?</h2>
                            Education loans are a form of financial aid that helps students study without worrying about the associated costs. There are different education loans available in the lending marketplace, and students can explore the options to find the most suitable option for their profile. Education loans are also known as Student Loans.
                       </p>
                       <p>In the study abroad space, education loans financially empower students to explore great opportunities in foreign universities. While the cost of studying abroad can be hefty for the average student from an ordinary, middle-class family, an education loan helps the student study in top-tier universities and explore better academic and professional opportunities.</p>
                       <p>Unlike in the past, education loan options are broadened today, catering to the needs of students from different financial backgrounds. We, at Nomad, attempt to bridge the gap by offering expert guidance and tailored solutions for your educational needs. </p>

                        <p>
                        <h2>Education loan categories</h2>
                            Broadly, there are two types of education loans - Secured and Unsecured. See the table for a comparison of the two:
                        </p>
                        
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col md={{span:10, offset:1}}>
                    <Table responsive>
                    <thead>
                                <tr>
                                    <th>
                                    Secured education loans
                                    </th>
                                    <th>
                                    Unsecured education loans
                                    </th>
                                </tr>
                            </thead>
                        <tbody>
                            <tr><td>	You need to pledge collateral security to apply for a loan. The loan amount is determined by the collateral value	</td><td>	No need to pledge collateral security. Education loan is provided against your co-borrower’s income	</td></tr>
                            <tr><td>	The rate of interest is lower than unsecured education loan options	</td><td>	Higher rate of interest than secured education loan options	</td></tr>
                            <tr><td>	Give longer repayment periods	</td><td>	The repayment period is moderate but shorter compared to secured education loan options	</td></tr>
                            <tr><td>	No need to prove your parental income	</td><td>	Your parental income must be up to the set standards	</td></tr>
                        </tbody>
                        </Table>
                        <br />
                        <p>
                            <strong>Among Unsecured education loans, there are different categories that cater to diverse needs such as:</strong>
                        </p>
                        <ul>
                            <li>Education loans without collateral or co-borrower: Education loans without collateral or co-borrower are offered by international lenders. Note that your university of admission must be listed by the lenders for you to be eligible for such loans. </li>
                            <li>Education loans with co-borrower in the US: An education loan can be availed from prominent banks in the US if you have a US citizen or permanent resident in the US as the co-borrower. They are also called US Cosigner loans for convenience.</li>
                        </ul>

                        <LoanLandingForm title='Kickstart Your Student Loan Option Search' paragraph='Fill out the form to create an account and discover potential student loan for abroad options that meet your requirements.' landingName="/education-loan-for-abroad-studies" />
                    </Col>
                </Row>
                

                
                <Image alt='City' className='secondary-hero-city' src={`/images/admission-hero-city-${imgSize}.webp`}/>
            </Container>
            <Container>
            <Row className='mt-5 three-col-row'>
                <Col xs={12}>
                    <h2 className='mt-5 mb-5 text-center'>Lenders of education loans </h2>
                    
                    <p className='text-center'>There are mainly three types of lenders who offer education loans to study abroad - banks, NBFCs, and international lenders.</p>
                    <ol>
                        <li>	Banks: Banks have been the conventional resort for education loans for years since the establishment of education loans. In India, public and private banks offer secured and unsecured education loans to study abroad. Prominent banks in the US also offer student loans to international students.	</li>
                        <li>	NBFCs: Non-Banking Financial Companies (NBFCs) offer education loans to needy students with affordable terms and conditions. Compared to banks, NBFCs have relaxed terms in accepting your loan application.	</li>
                        <li>	International lenders: International lenders are financial institutions with capital in one country and operations in more countries. Unlike banks or NBFCs, they offer hassle-free education loans if your profile is eligible.	</li>
                    </ol>
                    
                    <h2 className='mt-5 mb-5 text-center'>Top features of education loans for abroad studies </h2>
                    <Table responsive>
                        <thead>
                           <tr> <th>Features</th>
                            <th>US banks</th>
                            <th>Indian public banks</th>
                            <th>Indian private banks</th>
                            <th>Indian NBFCs</th>
                            <th>International lenders</th></tr>
                        </thead>
                        <tbody>
                        <tr><td>	Maximum loan amount	</td><td>	"15,000 - 220,000 USD
(INR 12.5 Lakh - 1.8 Cr Approx.)"	</td><td>	Up to INR 1.5 Cr	</td><td>	Up to INR 60 Lakh - 1 Cr Approx.	</td><td>	Up to INR 40 - 60 Lakh Approx.	</td><td>	100,000 USD (INR 83 Lakh Approx.)	</td></tr>
                        <tr><td>	Loan type	</td><td>	Unsecured	</td><td>	Secured & Unsecured	</td><td>	Secured & Unsecured	</td><td>	Unsecured	</td><td>	Unsecured	</td></tr>
                        <tr><td>	Interest rates	</td><td>	5.66% - 16.37% APR	</td><td>	9.5% - 10%	</td><td>	10.28% - 12.5%	</td><td>	10.5% - 13.5%	</td><td>	11% - 20% APR	</td></tr>
                        <tr><td>	Processing fee	</td><td>	0	</td><td>	INR 10,000	</td><td>	1% of the loan amount	</td><td>	1% of the loan amount	</td><td>	5% of the loan amount	</td></tr>
                        <tr><td>	Repayment tenure	</td><td>	Up to 15 years	</td><td>	Up to 15 years	</td><td>	Up to 15 years	</td><td>	Up to 15 years	</td><td>	Up to 10 - 20 years	</td></tr>
                        <tr><td>	Grace period	</td><td>	9 months	</td><td>	6 - 12 months	</td><td>	6 - 12 months	</td><td>	6 - 12 months	</td><td>	6 months	</td></tr>
                        <tr><td>	Co-borrower requirement	</td><td>	A US citizen or a permanent US resident is required as the financial co-borrower	</td><td>	No financial co-borrower is mandatory for secured loans	</td><td>	A financial co-borrower with sufficient income is required	</td><td>	A financial co-borrower with sufficient income is required	</td><td>	No co-borrower is required	</td></tr>
                        </tbody>
                    </Table>

                    <h2 className='mt-5 mb-5 text-center'>Eligibility requirements for education loans </h2>
                    <p className='text-center'>It is crucial to check the eligibility criteria before you apply for an education loan. The eligibility requirements vary for each type of education loan. However, the following requirements need to be fulfilled to apply for any education loan:</p>
                    <ul>
                        <li>	You must be a citizen of India or an NRI	</li>
                        <li>	You must have secured or be awaiting admission to a university abroad	</li>
                        <li>	You shall not have any existing loan overdue	</li>
                        <li>	Your co-borrower’s CIBIL scores should be sufficient as demanded by the lender	</li>
                        <li>	Documents you submit must be legally valid	</li>
                    </ul>

                        <Button className='extra-pad mb-5 mx-auto' style={{display:'block', width:'fit-content'}} href='#mainForm'>Get Started <FontAwesomeIcon icon={faArrowRight} /> </Button>
                        
                </Col>
            </Row>
            </Container>
           
            <ScheduleNowBanner />
            <Container fluid className='pt-5  section-block required-docs' style={{backgroundColor:'#e9e9e9'}}>
                <Row className='pt-5'> 
                    
                    <Col xs={{offset:0, span:12}} md={{offset:2, span:8}}>
                        <Image style={{display:'block', margin:'auto', marginBottom:'20px'}} src='/images/prodigy/prodigy-doc-reqs.webp' alt="Required Document Icon" />
                        <h2 className='text-center'>Documents required for education loans for abroad studies</h2>
                        <p><strong>Documents from the student</strong></p>
                            <ul>
                                <li>	Duly filled loan application form	</li>
                                <li>	Recently taken passport-size photographs	</li>
                                <li>	KYC documents of the student and co-borrower - Aadhar, Driving license, passport, etc.	</li>
                                <li>	Address proof	</li>
                                <li>	Proof of admission or application	</li>
                                <li>	Academic documents - undergraduate, +2, 10th certificates	</li>
                                <li>	Entrance test results - IELTS, GRE, GMAT, TOEFL, etc.	</li>
                                <li>	Bank statement of the last 6 months	</li>
                            </ul>
                        
                            <p><strong>Documents from the co-borrower:</strong></p>
                            <ul>
                                <li>	KYC documents of the student and co-borrower - Aadhar, Driving license, passport, etc.	</li>
                                <li>	Address proof	</li>
                                <li>	Recent passport size photographs	</li>
                                <li>	Proof of income	</li>
                                <li>	Bank account statement of the last 6 months	</li>
                                <li>	Salary slips of the last 3 months	</li>
                                <li>	IT Returns and other documents, if self-employed co-borrower	</li>
                                <li>	Collateral documents if the loan is secured	</li>
                            </ul>



                        <Button variant="outline-primary" className='extra-pad' href='#mainForm'>Get Started  <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Col>
                </Row>
            </Container>

            <Container>
            <Row className='mt-5 three-col-row'>
                <Col xs={12}>
                    <h2 className='mt-5 mb-5 text-center'>How to choose the best abroad education loan? </h2>
                    
                    
                    <p className='text-center'>Taking an education loan is an important financial decision you make while being a student. Here are some checkpoints to ensure you get the best education loan: </p>
                    <ul>
                        <li>	Interest rates: It is best to go for an education loan that has the lowest interest rates for you. Low rates of interest will help you save money, and even a small difference in interest rates can cost a significant amount in loan repayment.	</li>
                        <li>	Interest difference in different countries: Usually, the rate of interest will be lower in INR rates compared to USD rates. When you see an education loan in the US currency offers lower interest than education loans in India, be mindful that the rates will be much higher when converted to the Indian currency.	</li>
                        <li>	Repayment period: You must choose an education loan that offers you a sufficient repayment tenure. You can either negotiate with the lender or choose a different loan option if you come across issues related to your repayment tenure.	</li>
                        <li>	Tax benefits: Education loans from Indian banks and HDFC Credila offer you tax benefits under Section 80 E. You can prioritize education loan options with tax benefits to save more money.	</li>
                        <li>	Other costs: There will be other charges, like Forex conversion, processing fee, Insurance cost, etc. Go through them and choose the loan option with the least possible charges.	</li>
                    </ul>
                    <h2 className='mt-5 mb-5 text-center'>Looking for guidance to apply for education loans? </h2>
                    <p className='text-center'>We at Nomad Credit are committed to bringing ease and comfort to students by properly guiding them to search for the best education loan options. Our dedicated team of experts will analyze your profile and suggest the education loan options that may best fit you. And what’s more - all our services are of zero cost to you.</p>
                    <p className='text-center'><Button variant="outline-primary" className='extra-pad' href='#mainForm'>Wait no more. Connect with our experts right now!  <FontAwesomeIcon icon={faArrowRight} /></Button></p>
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
                            <h3 itemprop="name">What is margin money in education loans? </h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                            <p>
                        Margin money refers to the amount that the student has to contribute to the total loan amount. For example, if your loan has a 5% margin, you will get only 95% of the loan amount, and it's your duty to add the remaining 5% to the loan. 
                        </p>
                             </div>
                        </div> 
                        </div>

                        
                        
                        
                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 className='mt-5' itemprop="name"> Can I get a 100% loan to study abroad?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                            <p>Yes. If approved, many lenders offer education loans with no margin money that cover 100% of your expenses. However, it is mandatory that you meet the eligibility requirements.
                        </p>
                             </div>
                        </div> 
                        </div>
                        
                       

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 className='mt-5' itemprop="name"> What is the maximum loan amount students can get from education loans?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                            <p>
                        From Indian lenders, students can get up to INR 1.5 Cr and from banks in the US, the maximum loan amount can be up to INR 1.8 Cr. If approved, the maximum loan amount depends on your co-borrower's income (or collateral value), country and course of study, and similar other factors.
                        </p>
                             </div>
                        </div> 
                        </div>
                        
                        
                        
                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 className='mt-5' itemprop="name"> Who can be a co-borrower for an education loan?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                In India, the co-borrower must be a close relative of the student, such as a parent, sibling, spouse, parent-in-law, etc. The co-borrower must be earning the minimum income specified by lenders without any other obligations, as well as other eligibility requirements to be approved 
                                </p>
                                <p>
                                However, for US banks, the co-borrower can be anyone who is a US citizen or a permanent resident in the country. Like in India, the co-borrower must meet the income criteria and other eligibility requirements to be approved.
                                </p>
                             </div>
                        </div> 
                        </div>
                        
                        

                        <div itemprop="mainEntity" itemscope="" itemtype="http://schema.org/Question">
                            <h3 className='mt-5' itemprop="name">Why there is insurance for education loans?</h3>
                            <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <p>
                                Education loan insurance helps when unexpected events, like the student's untimely demise, occur. The insurance company will take care of the loan, thereby not troubling the student's family with repayment. 
                                </p>
                             </div>
                        </div> 
                        </div>
                        
                        

                        </div>
                    </Col>
                </Row>
            </Container>
            
            <LoanBottomForm landingName="/education-loan-for-abroad-studies" />

        </>
    )
}
export default StudentLoansB