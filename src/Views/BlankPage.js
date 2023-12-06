import { Container, Row, Col} from 'react-bootstrap';

const BlankPage = (props) => {
    return(
        <>
            <Container fluid className='section-block'>
                
                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>BlankPage</h1>
                        <p>Text will go here</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default BlankPage