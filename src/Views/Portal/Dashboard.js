import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Image,Card, Form} from 'react-bootstrap';
import '../../css/views/secondary.scss';
import '../../css/views/student-portal.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPencil } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet-async';

const Dashboard = (props) => {

    let loanOptions = 3;
    let welcomeMessage = 'Welcome Back!';
    let [loans, setLoans] = useState([]);
    let [admissions, setAdmissions] = useState([]);


    useEffect(() => {

        fetch(`/api/v1/whoami`)
            .then(response => response.json())
            .then(response => {
                if(!response.logged_in) window.location.href = '/index'
            })
            .catch(error => {
                console.log('error', ""+error);
            });

        fetch(`/api/v1/users/applications/types`)
            .then(response => response.json())
            .then(response => {
                setLoans(response.filter(x => x.application_type === "student_loan"))
                setAdmissions(response.filter(x => x.application_type === "admissions"));
            })
            .catch(error => {
                console.log('error', ""+error);
            });

    
        
    }, []);

    return(
        <div className='dashboard'>
            <Helmet>
            <link rel="canonical" href={props.location.href} />
        </Helmet>
            <Container fluid className='section-block'>
                <Row className='three-col-row'>
                    <Col xs={12} md={8}>
                        <div className="welcome-panel">
                            <h3>{welcomeMessage}</h3>
                            <h2>{loans.length ? `You Have 1 or more Student Loan Options Available!` : ''}</h2>
                            <p className='mb-5'>Please view your potential student loan options.</p>
                            <Row>
                                <Col xs={12} md={6}>
                                    <Image fluid src='/images/portal/student_loans.png' style={{maxHeight:'200px', display:'block', margin:'auto'}} />
                                </Col>
                                <Col xs={12} md={6}>
                                    <h3>{loans.length ? `1 or more options available` : ''} </h3>
                                    {loans.length > 0 ? <Button variant="outline-light" className='extra-pad mt-3' href={"options/"+loans[0].id}>View Now <FontAwesomeIcon icon={faArrowRight} /> </Button> : ''}
                                    
                                </Col>
                            </Row>
                            <div style={{padding:'10px', width:'100%', height:'60px'}}>
                                {loans && loans.length ? <Button variant="outline-light" className='extra-pad edit-pencil' href={`/edit/` + loans[0].id}>Edit <FontAwesomeIcon icon={faPencil} /> </Button> : <Button variant="outline-light" className='extra-pad mt-3' href={"new/student_loan"}>Start <FontAwesomeIcon icon={faArrowRight} /> </Button> }
                                
                            </div>
                        </div>
                        
                        
                        
                       
                    </Col>
                    <Col xs={12} md={4} className="admissions-panel">
                        <h3>Admissions</h3>
                        <p>Find the school options for the education that you need.</p>
                        <Image fluid src='/images/portal/accepted.png' style={{maxHeight:'200px', display:'block', margin:'auto'}} />
                        {admissions.length ? <Button className='extra-pad view-now mt-3' href={"options/"+admissions[0].id}>View Now <FontAwesomeIcon icon={faArrowRight} /> </Button> : ''}
                        {admissions && admissions.length ? <Button className='extra-pad edit-pencil mt-3' href={`/edit/` + admissions[0].id}>Edit <FontAwesomeIcon icon={faPencil} /> </Button> :
                         <Button className='extra-pad edit-pencil mt-3' href={`/new/admissions`}>New <FontAwesomeIcon icon={faPencil} /> </Button>
                        }
                        
                    </Col> 
                </Row>
                <Row className='three-col-row mt-5'>
                    <Col xs={12} className="docs-panel">
                        <Row>
                            <Col xs={12} md={3}>
                                
                                <Button className='extra-pad edit-pencil mt-3' href='/my-documents'>Add my docs </Button>
                                <Image fluid src='/images/portal/3-layers.png' style={{margin:'20px 0 0 20px'}} />
                            </Col>
                            <Col xs={12} md={9}>
                                <p  style={{margin:'20px 0 20px 20px'}}>
                                    Providing your documents may decrease the time it takes to get a decision. Please upload your documents for the product(s) you’re interested in.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Dashboard