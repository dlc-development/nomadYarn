import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {LoanLandingForm, LoanBottomForm} from '../components/Forms';
import Testimonials from '../components/Testimonials';
import '../css/views/secondary.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import windowSize from '../helpers/window-size.js';
import { Helmet } from 'react-helmet-async';

const StudentLoansLandingAndromeda = (props) => {
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
                        <h1 className='hero-header'>U.S. Cosigner Student Loans for International Students</h1>
                        <p>Loan options with interest rates as low as 4.43%<a style={{textDecoration: "none"}} href={"#disclaimer"}><sup>*</sup></a> and no processing fees, check your eligibility now!</p>
                        <p><br /></p>
                        <p>In collaboration with</p>
                        <p></p>
                        <Image alt='Andromeda Logo' src={"/images/partners/andromeda-logo-new.svg"}/>
                        <p><br /></p>

                        <Image alt="Image of happy student talking to Nomad Credit specialist" width={293} height={291} fluid className='mt-5 display-mobile' src={`/images/how-it-works-${imgSize}.webp`} />
                    </Col>
                </Row>
                <Row className='mt-5 three-col-row'>
                    
                    <Col xs={12} md={6}>
                    <h2 className='mt-5'>Start financing your USA study abroad journey</h2>
                        <p></p>
                        <p>Nomad Credit can help you search for potential education loan options for the USA designed specifically with international students in mind, including U.S. Cosigner loan options. A U.S. Cosigner loan option often sees lower interest rates than other loan options, but <strong>it does require a U.S. citizen or permanent resident as a cosigner</strong>.</p>
                        <p><br /></p>
                        <p>Some of the benefits of a U.S. Cosigner loan option are as follows:</p>

                        <ul>
                            <li style={{marginBottom:'15px'}}>Potentially save thousands on your loan repayment due to lower interest rates compared to loan options from Indian banks and NBFCs</li>
                            <li style={{marginBottom:'15px'}}>No processing fees, origination fees, or prepayment penalties</li>
                            <li style={{marginBottom:'15px'}}>May defer payment up to six to nine months after graduation</li>
                            <li style={{marginBottom:'15px'}}>Can cover up to 100% of cost of attendance</li>
                            <li style={{marginBottom:'15px'}}>Potential cost savings compared to loans from Indian lenders as TCS (Tax Collected at Source) and other costs may not be applicable</li>
                            <li>Avoid forex fees as loans are U.S. dollar denominated</li>
                        </ul>
                        <p><br /></p>

                        <p style={{textAlign:"center", fontSize: '75%'}}><a name={"disclaimer"} /><sup>*</sup>U.S. Cosigner Student Loan Rate and Terms Disclosure: The lenders on the Nomadcredit.com platform offer fixed rates from 4.43% - 15.49% APR and Variable interest rates from 5.32% - 16.33% as APR.  Rates displayed include Automatic Payment and Loyalty Discounts, where applicable. Note that such discounts do not apply while loans are in deferment. Variable rates will fluctuate over the term of the borrower's loan with changes in the Index rate. The Index will be either LIBOR or SOFR. Rates are subject to change at any time without notice. Your actual rate may be different from the rates advertised and/or shown above and will be based on factors such as the term of your loan, your financial history (including your cosigner’s (if any) financial history) and the degree you are in the process of achieving or have achieved. While not always the case, lower rates typically require creditworthy applicants with creditworthy co-signers, graduate degrees, and shorter repayment terms (terms vary by lender and can range from 5-20 years) and include Automatic Payment and Loyalty discounts, where applicable. Loyalty and Automatic Payment discount requirements as well as Lender terms and conditions will vary by lender and therefore, reading each lender’s disclosures is important. Additionally, lenders may have loan minimum and maximum requirements, degree requirements, educational institution requirements, citizenship and residency requirements as well as other lender-specific requirements. Lenders will conduct a hard credit pull for you and your cosigner, when you submit your application. Hard credit pulls will have an impact on your credit score and your cosigner’s credit score.</p>
                        <p><br /></p>

                        <Image alt="Image of happy student talking to Nomad Credit specialist" width={578} height={436} fluid className='mt-5 display-desktop' src={`/images/how-it-works-${imgSize}.webp`} />
                    </Col>
                    <Col >
                        <LoanLandingForm  landingName="/student-loans-landing-andromeda" />
                    </Col>
                    
                </Row>
                <Image alt='City' className='secondary-hero-city' src={`/images/admission-hero-city-${imgSize}.webp`}/>
            </Container>
            <Testimonials />
            <Container fluid className='easy-process-section section-block' style={{paddingTop:'20px', paddingBottom:'20px'}}>
                <Row className='three-col-row'>
                    <Col xs={12} md={6}>
                        <h2 className='mt-5 mb-5'>Sign up and start exploring student loan options now!</h2>

                        <ul>
                            <li>Search with ease, knowing thousands have successfully used our services</li>
                            <li>Review potential loan options that can finance up to your entire approved cost of attendance in the USA</li>
                            <li>Discuss your U.S. options with a member of our experienced global team with unique U.S.-based expertise</li>
                        </ul>

                        
                        <Button variant="outline-light" className='extra-pad mt-3 mb-2' href='#mainForm'>See Your Options <FontAwesomeIcon icon={faArrowRight} /> </Button>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image alt="International Student Getting Advice from Nomad Credit Counselor" width={578} height={550} fluid src={`/images/loans-landing-get-advice-${imgSize}.webp`} />
                    </Col> 
                </Row>
            </Container>
            {/* <ScheduleNowBanner /> */}
            <LoanBottomForm  landingName="loan-landing-andromeda"/>
        </>
    )
}
export default StudentLoansLandingAndromeda