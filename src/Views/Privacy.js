import { Container, Row, Col} from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import '../css/views/privacy.scss';

const Privacy = (props) => {
    return(
        <>
            <Helmet>
                <link rel="canonical" href={props.location.href} />
                <title> Nomad Credit Privacy Policy | Education Loans for International Students </title>
                <meta name='description' content="Privacy Policy | Nomad Credit" />
            </Helmet>
            
            <Container fluid className='section-block'>
                
                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>Privacy Policy</h1>
                        <div style={{minHeight:'11in'}}>
                            <object style={{height:'11in'}} data="/images/privacy.pdf" type="application/pdf" width="100%" height="100%">
                                <p>Download file <a href="/images/privacy.pdf">here</a></p>
                            </object>
                        </div>
                        
                        {/* <table>
                            <tr>
                                <td style={{backgroundColor:'white', }}></td>
                                <td style={{backgroundColor:'white', }}><p style={{textAlign:'right'}}>UNIFI  LENDING  LLC d/b/a  NOMAD  CREDIT
                                <br/>Rev.12/17</p></td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor:'black', color:'white'}}>FACTS</td>
                                <td style={{fontSize:'large'}}>WHAT DOES UNIFI  LENDING  LLC d/b/a  NOMAD  CREDIT(“Company”)  DO  WITH  YOUR  PERSONAL  INFORMATION?</td>
                            </tr>
                            <tr>
                                <td>Why?</td>
                                <td>Financial  companies  choose  how  they  share  your  personal  information.  Federal  law  gives  consumers  the  right  to  limit  some  but  not  all  sharing.  Federal law  also  requires  us  to  tell  you  how  we  collect,  share,  and  protect  your  personal  information.  Please  read  this  notice  carefully  to  understand  what  we  do.</td>
                            </tr>
                            <tr>
                                <td>
                                    What?
                                </td>
                                <td>
                                    The  types  of  personal  information  we  collect  and  share  depend  on  the  product  or  service  youhave  with  us.  This  information  can  include:
                                    <ul>
                                        <li>Social  Security  number and Credit History </li>
                                        <li>Income and Transaction History</li>
                                        <li>Payment  History and Employment  Information</li>
                                    </ul>  
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    How?
                                </td>
                                <td>
                                    All  financial  companies  need  to  share  customers’ personal  information  to  run  their  everyday  business.  In  the  section  below,  we  list  the  reasons  financial  companies  can  share  their  customers’ personal  information;  the  reasons  Companychooses  to  share;  and  whether  you  can  limit  this  sharing.
                                </td>
                            </tr>
                            
                        </table>
                        <table className='three-col'>
                            <tr>
                                <td>
                                    Reasons we can share your personal information
                                </td>
                                <td>
                                    Does Company share?
                                </td>
                                <td>
                                    Can you limit this sharing?
                                </td>
                            </tr>
                            <tr>
                                <td><strong>For  our  everyday  business  purposes</strong>  –such  as  to  process  your  transactions,  maintain  your  account(s),  respond  to  court  orders  and  legal  investigations,  or  report  to  credit  bureaus</td>
                                <td>YES</td>
                                <td>NO</td>
                            </tr>
                            <tr>
                                <td>
                                <strong>For  our  marketing  purposes</strong>  –to  offer  our  products  and  services  to  you
                                </td>
                                <td>YES</td>
                                <td>NO</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>For  joint  marketing  with  other  financial  companies</strong>
                                </td>
                                <td>YES</td>
                                <td>NO</td>
                            </tr>
                            <tr>
                                <td><strong>For  our  affiliates’  everyday  business  purposes</strong>  –information  about  your  transactions  and  experiences</td>
                                <td>YES</td>
                                <td>NO</td>
                            </tr>
                            <tr>
                                <td>
                                <strong>For  our  affiliates’  everyday  business  purposes</strong>  –information  about  your  credit worthiness
                                </td>
                                <td>YES</td>
                                <td>YES</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>For  our  affiliates  to  market  to  you</strong>
                                </td>
                                <td>YES</td>
                                <td>YES</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>For  nonaffiliates  to  market  to  you</strong>
                                </td>
                                <td>YES</td>
                                <td>YES</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td>
                                To  limit  our  sharing
                                </td>
                                <td>
                                <ul>
                                    <li>Call  224-­307-­5127–our  menu  will  prompt  you  through  your  choice(s)</li>
                                </ul>
                                    Please  note:If  you  are  a  new  customer,  we  can  begin  sharing  your  information  (30)days  from  the  date  we  sent  this  notice.  When  you  are  no  longerour  customer,  we  continue  to  share  your information  as  described  in  this  notice. However,  you  can  contact  us  at  any  time  tolimit  our  sharing.
                                </td>
                            </tr>
                            <tr>
                                <td>Questions</td>
                                <td>Call  224-­307-­5127</td>
                            </tr>
                        </table>
                        <p style={{marginTop:'15px', fontSize:'small'}}>
                        Privacy Policy 12.11.17.doc <br />4221297
                        </p> */}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Privacy