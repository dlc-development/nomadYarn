import {lazy} from 'react';
import '../css/views/home.scss';
// import { Button, Container, Row, Col, Image,Card} from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
// import Testimonials from '../Components/Testimonials';
// import BasicForm from '../Components/Forms';
// import ScheduleNowBanner from '../Components/ScheduleNowBanner';
// import Blogs from '../Components/Blogs';
import '../css/views/home.scss';
import windowSize from '../helpers/window-size'
const Hero = lazy(() => import('../Components/Hero'));

const Home = (props) => {
    const imgSize = windowSize();
    return(
        <>
            <Helmet>
            <title>Study Abroad Admission Guide with Finance options | Nomad Credit</title>
            <meta name='description' content="Explore your journey to studying abroad with valuable admission guidance and financing options. Plan your dream education journey today with Nomad Credit!" /> 
                {/* <link rel="canonical" href={props.location.href} /> */}
            </Helmet>
            <Hero />
        </>
    )
};

export default Home;