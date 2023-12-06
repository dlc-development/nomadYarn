
import React, {useEffect} from 'react';
import { Container, Row, Col, Image, Ratio} from 'react-bootstrap';
import { AllTestimonials } from '../components/Testimonials';
import {BasicForm} from '../components/Forms';
import '../css/components/contact.scss';
import { Helmet } from 'react-helmet-async';

const TestimonialsView = (props) => {
    useEffect(() => {
        fetch(`/api/v1/whoami`)
            .then(response => response.json())
            .then(response => {
                if(response.logged_in) window.location.href = '/dashboard'
            })
            .catch(error => {
                console.log('error', ""+error);
            });
      }, [])
      
    return(
        <>
            <Helmet>
                <link rel="canonical" href={props.location.href} />
                <title> Nomad Credit Testimonials | Customer Stories from Nomad Credit </title>
                <meta name='description' content="Testimonials | Customer Stories from Nomad Credit" />
            </Helmet>
            <Container fluid className='secondary-hero section-block position-relative mb-5'>
                 <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>Customer Testimonials</h1>
                        <p> 
                            Nomad Credit understands that the decision to study abroad is a very big one for you and your family. We hope that hearing from some of our satisfied customers gives you the peace of mind that you need to look no further than Nomad Credit. We look forward to helping you along your study abroad journey.
                        </p>
                    </Col>
                </Row>
                <Row className='three-col-row'>
                    <Col xs={12} md={6}>
                        <Ratio aspectRatio="16x9" style={{marginBottom:'50px'}}>
                            <embed type="video/webm" src="https://www.youtube.com/embed/yDy1SMNkTwY" />
                        </Ratio>
                    </Col>
                    <Col xs={12} md={6}>
                        
                        <Ratio aspectRatio="16x9">
                            <embed type="video/webm" src="https://www.youtube.com/embed/UI5sntS-r8w" />
                        </Ratio>
                    </Col>
                </Row>
                <Image className='secondary-hero-city' src='/images/admission-hero-city.png' />
            </Container>
            <AllTestimonials />
            <BasicForm />
        </>
    )
}
export default TestimonialsView