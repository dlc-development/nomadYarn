import { Container, Row, Col} from 'react-bootstrap';
import { EditApplicationForm } from '../../components/Forms';
import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import { Helmet } from 'react-helmet-async';
import signupFormData from "../../components/signupOptions.json";
import { useFeatureFlagVariantKey } from 'posthog-js/react';

const Edit = (props) => {
    let {id} = props;
    const studentLoanVariant = useFeatureFlagVariantKey('student_loans_search_form')
    const admissionsVariant = useFeatureFlagVariantKey('admissions_search_form')
    // if(studentLoanVariant) console.log('student_loans_search_form variant:', studentLoanVariant)
    // if(admissionsVariant) console.log('admissions_search_form variant:', admissionsVariant)

    const [type, setType] = useState('student_loan')
    const [application, setApplication] = useState(false);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState(false);
    const [firstName, setFirstName] = useState(false);
    const [lastName, setLastName] = useState(false);
    const [phone, setPhone] = useState(false);
    const [phoneCountryCode, setPhoneCountryCode] = useState(false);
    const [theseUniversities, setTheseUniversities] = useState([]);

    function sessionStorageHasUtms() {
        return sessionStorage.getItem('utm_source') !== null
            || sessionStorage.getItem('utm_medium') !== null
            || sessionStorage.getItem('utm_campaign') !== null
            || sessionStorage.getItem('utm_term') !== null
            || sessionStorage.getItem('utm_content') !== null;
    }

    useEffect(() => {
        fetch(`/api/v1/whoami`)
            .then(response => response.json())
            .then(response => {
                if(!response.logged_in) window.location.href = '/index'
            })
            .catch(error => {
                console.log('error', ""+error);
            });
        
        if(!id) return;

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
                let universities = []
                
                universities = universities.concat(theseUnis)
                setTheseUniversities(universities)
            })
            .catch(error => {
                console.log('error', ""+error);
            });

        if (sessionStorageHasUtms()) {
            fetch(`/api/v1/utms`,
                {credentials: "include",
                    method: "POST",
                    body: JSON.stringify({
                        utm_source: sessionStorage.getItem('utm_source'),
                        utm_medium: sessionStorage.getItem('utm_medium'),
                        utm_campaign: sessionStorage.getItem('utm_campaign'),
                        utm_term: sessionStorage.getItem('utm_term'),
                        utm_content: sessionStorage.getItem('utm_content'),
                        path: sessionStorage.getItem('path_for_utm'),
                    }),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }})
                .then(response => console.log(response.json()))
                .catch(error => console.log(error));
            sessionStorage.removeItem('utm_source');
            sessionStorage.removeItem('utm_medium');
            sessionStorage.removeItem('utm_campaign');
            sessionStorage.removeItem('utm_term');
            sessionStorage.removeItem('utm_content');
            sessionStorage.removeItem('path_for_utm');
        }

        fetch(`/api/v1/users`)
            .then(response => response.json())
            .then(response => {
                setEmail(response.email);
                setFirstName(response.first_name);
                setLastName(response.last_name);

                fetch(`/api/v1/applications/${id}/details`)
                .then(response => response.json())
                .then(response => {
                    setPhone(response.phone_number);
                    if (typeof response.phone_country_code === "string") {
                        setPhoneCountryCode(response.phone_country_code.toUpperCase());
                    }
                    setType(response.application_type)
                    setApplication(response);
                    setLoading(false);

                    
                    
                })
                .catch(error => {
                    console.log('error', ""+error);
                });
            })
            .catch(error => {
                console.log('error', ""+error);
            });
    }, []);
        

    //type should be student_loan or admissions, defaults to student_loan
    if(loading) return(<Spinner />)
    if(!id) return(<p>No Application ID Found</p>);

    return(
        <>
        <Helmet>
            <link rel="canonical" href={props.location.href} />
        </Helmet>
            <Container>
                <Row>
                    <Col lg={{offset:3, span:6}}>
                        <EditApplicationForm phoneCountryCode={phoneCountryCode} email={email} firstName={firstName} lastName={lastName} phone={phone} type={type} application={application} universities={theseUniversities} studentLoanVariant={studentLoanVariant} admissionsVariant={admissionsVariant} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Edit