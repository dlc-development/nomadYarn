import { Container, Row, Col} from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const StudentLoanSignUp = (props) => {
    return(
        <>
            <Helmet>
                <title>Student Loan Sign Up</title>
                <link rel="canonical" href={props.location.href} />
            </Helmet>
            <Container fluid className='section-block'>
                
                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>Student Loan Sign Up</h1>
                        <p>Text will go here</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default StudentLoanSignUp