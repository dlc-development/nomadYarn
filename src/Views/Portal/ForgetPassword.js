import { Container, Row, Col} from 'react-bootstrap';
import { ForgetPasswordForm } from '../../components/Forms';
import { Helmet } from 'react-helmet-async';

const ForgetPassword = (props) => {
    return(
        <>
        <Helmet>
            <link rel="canonical" href={props.location.href} />
        </Helmet>
            <Container>
                <Row>
                    <Col lg={{offset:3, span:6}}>
                        <ForgetPasswordForm />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ForgetPassword