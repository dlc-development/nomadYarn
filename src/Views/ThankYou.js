import { Container, Row, Col} from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const ThankYou = (props) => {
    return(
        <>
            <Helmet>
                <link rel="canonical" href={props.location.href} />
            </Helmet>
            <Container fluid className='section-block'>
                
                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>Thank You</h1>
                        <p>We will be in touch soon. In the meantime, you may finish setting up your NomadCredit.com account using the email we sent you.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ThankYou