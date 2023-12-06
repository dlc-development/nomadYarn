import { Container, Row, Col} from 'react-bootstrap';
import { NewApplicationForm } from '../../components/Forms';
import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import { Helmet } from 'react-helmet-async';
import signupFormData from "../../components/signupOptions.json";

const NewApplication = (props) => {
    let {type:propType} = props;
    if(!propType) propType = 'student_loan';

    const [type, setType] = useState(propType)
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState(false);
    const [firstName, setFirstName] = useState(false);
    const [lastName, setLastName] = useState(false);
    const [phone, setPhone] = useState(false);

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

    useEffect(() => {
        fetch(`/api/v1/whoami`)
            .then(response => response.json())
            .then(response => {
                if(!response.logged_in) window.location.href = '/index'
            })
            .catch(error => {
                console.log('error', ""+error);
            });

        fetch(`/api/v1/users`)
            .then(response => response.json())
            .then(response => {
                setEmail(response.email);
                setFirstName(response.first_name);
                setLastName(response.last_name);
                if (response.applications && response.applications.length > 0) {
                    const possible_apps_with_phone = response.applications.filter(it => it.phone_number !== undefined && it.phone_number !== null && it.phone_number !== '')
                    setPhone(possible_apps_with_phone[0].phone_number);
                }

                setLoading(false);
            })
            .catch(error => {
                console.log('error', ""+error);
            });
    }, []);

    if(loading) return(<Spinner />)
    return(
        <>
        <Helmet>
            <link rel="canonical" href={props.location.href} />
        </Helmet>
            <Container>
                <Row>
                    <Col lg={{offset:3, span:6}}>
                        <NewApplicationForm email={email} firstName={firstName} lastName={lastName} phone={phone} type={type} universities={theseUniversities} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default NewApplication