import React, {useEffect} from 'react';
import { Container, Row, Col, Nav} from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import '../css/views/site-map.scss';

const SiteMap = (props) => {
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
                <title> Nomad Credit Sitemap| Education Loans for International Students </title>
                <meta name='description' content="Website Sitemap | Nomad Credit" />
            </Helmet>
            
            <Container className='site-map' style={{paddingTop:'50px'}}>
                <Row>
                    <h1 className='hero-header'>Site Map</h1>
                    <div>
                        <span className='map-title'>Products</span>
                        <Nav className="flex-column">
                            <Nav.Link href="/student-loans">Student Loans</Nav.Link>
                            <Nav.Link href="/admissions">Admissions</Nav.Link>
                        </Nav>
                    </div>
                    <div>
                        <span className='map-title'>Company</span>
                        <Nav className="flex-column">
                            <Nav.Link href="/faqs">FAQs</Nav.Link>
                            <Nav.Link href="https://blog.nomadcredit.com/" target='_blank'>Blog</Nav.Link>
                            <Nav.Link href="/how-it-works">How it Works</Nav.Link>
                            <Nav.Link href="/partners">Partners</Nav.Link>
                            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
                            
                        </Nav>
                    </div>
                    <div>
                        <span className='map-title'>Support</span>
                        <Nav className="flex-column">
                            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                            <Nav.Link href="/sitemap">Sitemap</Nav.Link>
                        </Nav>
                    </div>
                    <div>
                        <span className='map-title'>Legal</span>
                        <Nav className="flex-column">
                            <Nav.Link href="/privacy"> Privacy Policy</Nav.Link>
                            <Nav.Link href="/terms">Terms of Use</Nav.Link>
                        </Nav>
                    </div>
                </Row>
            </Container>

        </>
    )
}
export default SiteMap