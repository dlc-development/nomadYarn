import { Container, Row, Col} from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { InlineWidget } from "react-calendly";

const CalendlyWidget = (props) => {
    return(
        <>
            <Helmet>
                <link rel="canonical" href={props.location.href} />
                <title>Schedule Your Admission Consultation | Nomad Credit</title>
                <meta name='description' content="Book a consultation with our study abroad experts via Nomad Credit. Get guidance on admissions and embark on your academic journey." />
            </Helmet>
            <Container fluid>
                
                <Row className='three-col-row'>
                    <Col>
                        <InlineWidget url='https://calendly.com/nomadcredit/30min' />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default CalendlyWidget