import { Container, Row, Col} from 'react-bootstrap';
import { SignUpForm } from '../../components/Forms';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import signupFormData from "../../components/signupOptions.json";

const SignIn = (props) => {

    const [theseUniversities, setTheseUniversities] = useState([]);

    useEffect(() => {
        let universities = signupFormData.universities.map(x => { 
            return {value: x, label:x}
        });
        setTheseUniversities(universities);

        fetch(`/api/v1/universities`)
            .then(response => response.json())
            .then(response => {
                let theseUnis = response.map(x => {
                    return{value:x.name, label:x.name}
                });
                let universities = signupFormData.universities.map(x => { 
                    return {value: x, label:x}
                })
                universities = universities.concat(theseUnis)
                setTheseUniversities(universities)
            })
            .catch(error => {
                console.log('error', ""+error);
            });
    }, []);

    return(
        <>
            <Helmet>
                <link rel="canonical" href={props.location.href} />
                <title> Sign Up - International Student Loans | International Education Loans </title>
                <meta name='description' content="Sign up to start your study abroad journey, with finance options | Nomad Credit" />
            </Helmet>
            <Container>
                <Row>
                    <Col lg={{offset:3, span:6}}>
                        <SignUpForm universities={theseUniversities} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default SignIn