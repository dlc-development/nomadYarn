import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../css/views/secondary.scss';
import '../css/views/prodigy.scss';
import windowSize from '../helpers/window-size.js';
import { Helmet } from 'react-helmet-async';
 
const StudentLoansLandingUscPartnerCollateral = (props) => {
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
                        <h1 className='hero-header'>100% FREE Education Loan Option Help for Study Abroad</h1>
                        <ul style={{listStyleType:'none'}}>
                            <li>	Our services are 100% FREE	</li>
                            <li>	Rates as low as 4.42% APR for graduate studies	</li>
                            <li>	No processing fees	</li>
                            <li>	Borrow up to 100% of school-certified cost of attendance (Aggregate loan limits apply)	</li>
                            <li>	Expert assistance through the entire loan option search, application, and disbursement process	</li>
                            <li>	Nomad answers any and all study abroad questions	</li>
                            <li>	Help with I-20 and visa processes/preparation	</li>
                            <li>	Best-In-Class global team operating at U.S. standards	</li>
                        </ul>
                        
                        <Image width={300} height={300} fluid className='mt-5' src={`/images/partner-qr.png`} />
                    </Col>
                </Row>
            </Container>
            
            <Container fluid className='pt-5 section-block prodigy-terms' >
                <Row className='pt-5'> 
                    <Col  xs={{offset:0, span:12}} md={{offset:3, span:6}}>
                    <h4>*Student Loans Rate and Terms Disclosure:</h4>
                    <p>Rates for US dollar-denominated student loans provided by US based lenders on the Nomad Credit platform range between 4.42%-16.62% APR with terms from 3 to 20 years. Rates presented include eligible lender discounts for enrolling in autopay and interest-only repayment, where applicable. Actual rates may be different from the rates advertised and/or shown and will be based on the lender’s eligibility criteria, which can include factors such as credit score, loan amount, school and program of study, country of study, loan term, credit usage and history, and vary based on loan purpose. The lowest rates available typically require excellent credit from the borrower and/or cosigner, and for some lenders, may be reserved for specific schools, programs of study, loan purposes and/or shorter loan terms. The origination fee charged by the lenders on our platform ranges from 0% to 5%. Each lender has their own qualification criteria with respect to their autopay discounts (e.g., some lenders require the borrower to elect autopay prior to loan funding in order to qualify for the autopay discount). All rates are determined by the lender and must be agreed upon between the borrower and the borrower’s chosen lender.</p> 
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default StudentLoansLandingUscPartnerCollateral