import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Image, Button, Ratio} from 'react-bootstrap';
import '../css/views/partners.scss';

const Partners = (props) => {
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
      
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true
      };

    return(

        <>
            <Helmet>
                <link rel="canonical" href={props.location.href} />
                <title> Nomad Credit Partners | Financial, Marketing & School Partners </title>
                <meta name='description' content="Nomad Credit Partners | Financial, Marketing & Universities Partners" />
            </Helmet>
            <Container fluid className='secondary-hero section-block position-relative mb-5'>
                 <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>Partners</h1>
                    </Col>
                </Row>
                <Row className='three-col-row mb-5'>
                    <Col xs={12} md={5}>
                        <p> Nomad Credit is continuing to expand our partnerships with universities and companies around the world to further our goal of helping reduce the barriers to education, credit, and financial products for our international customers.</p>
                    </Col>
                    <Col>
                        <Ratio aspectRatio="16x9">
                            <embed type="video/webm" src="https://www.youtube.com/embed/qVR7MRkosyQ?ecver=2" />
                        </Ratio>
                    </Col>
                </Row>
                
                <Image alt='City' className='secondary-hero-city' src='/images/admission-hero-city.png' />
            </Container>
            <Container>
            <Row className='mt-5'>
                <Col xs={12} className="partner-logos-holder">
                    <div className='slick-slide'>
                        <div className='slick-slide-inner'>
                            <Image alt='Achievers Point Logo' src='/images/partners/achievers_point.jpg' />
                        </div>
                    </div>
                    <div className='slick-slide'>
                        <div className='slick-slide-inner'>
                            <Image alt='Auxilo Logo' src='/images/partners/AuxiloWithBL.jpg' />
                        </div>
                    </div>
                    <div className='slick-slide'>
                        <div className='slick-slide-inner'>
                            <Image alt='Avanse Logo' src='/images/partners/avanse.png' />
                        </div>
                    </div>

                     
                </Col>
                <Col xs={12} className="partner-logos-holder">
                <div className='slick-slide'>
                                <div className='slick-slide-inner'>
                                    <Image alt='Carthage Logo' src='/images/partners/Carthage.jpg' />
                                </div>
                            </div>
                            <div className='slick-slide'>
                                <div className='slick-slide-inner'>
                                    <Image alt='Imperial Logo' src='/images/partners/imperial.png' />
                                </div>
                            </div>

                            <div className='slick-slide'>
                                <div className='slick-slide-inner'>
                                    <Image alt='Prodigy Logo' src='/images/partners/prodigy.png' />
                                </div>
                            </div>
                </Col>
                <Col xs={12} className="partner-logos-holder">
                    <div className='slick-slide'>
                        <div className='slick-slide-inner'>
                            <Image alt='Profile Evaluator Logo' src='/images/partners/profileevaluator.png' />
                        </div>
                    </div>
                    <div className='slick-slide'>
                        <div className='slick-slide-inner'>
                            <Image alt='Stmarys Logo' src='/images/partners/stmarys.jpg' />
                        </div>
                    </div>

                    <div className='slick-slide'>
                        <div className='slick-slide-inner'>
                            <Image alt='Study USA Logo' src='/images/partners/studyusa.jpg' />
                        </div>
                    </div>
                </Col>
                <Col xs={12} className="partner-logos-holder">
                <div className='slick-slide'>
                                <div className='slick-slide-inner'>
                                    <Image alt='UDallas Logo' src='/images/partners/UDallas.jpg' />
                                </div>
                            </div>
                            <div className='slick-slide'>
                        <div className='slick-slide-inner'>
                            <Image alt='Boro Logo' src='/images/partners/boro.jpg' />
                        </div>
                    </div> 
                </Col>
                    {/* <Col md={{offset: 2, span:8}}>
                        <h2 style={{textAlign:'center'}}>Partners</h2>
                        <p  style={{textAlign:'center'}}>Nomad Credit invests a lot of time and resources into finding partners that help provide options to our customers.</p>
                        <Slider  style={{maxWidth:'800px'}} {...settings}>
                            
                            
                           
                            
                        </Slider>
                    </Col> */}
                </Row>
                <Row className='three-col-row'>
                    <Col>
                        <p>
                            Please reach out to us, if you are prospective partner that can help service international students in their study abroad journey
                            <Button style={{display:"block"}} size="lg" href='mailto:ceo@nomadcredit.com'>Learn More</Button>
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Partners