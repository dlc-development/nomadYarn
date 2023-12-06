import { Container, Row, Col} from 'react-bootstrap';
import { SignInForm } from '../../components/Forms';
import { Helmet } from 'react-helmet-async';

const SignIn = (props) => {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    let {message} = props;
    if(message && message === 'email_exists') message = 'That email already exists, please log in.'

    return(
        <>
            <Helmet>
                <link rel="canonical" href={props.location.href} />
                <title> Sign In - International Student Loans | International Education Loans </title>
                <meta name='description' content="Sign in to start your study abroad journey, with finance options | Nomad Credit" />
            </Helmet>
            <Container>
                <Row className={message ? 'mt-5' : 'hidden'}>
                    <Col lg={{offset:3, span:6}}>
                        <h2 className='text-center'>{message ? message : ''}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{offset:3, span:6}}>
                        <SignInForm email={email} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default SignIn