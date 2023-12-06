import { Container, Row, Col, Tab, Tabs, Accordion} from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
// import {Helmet} from "react-helmet";

const Faqs = (props) => {
    return(
        <>
            <Helmet>
                <title> Nomad Credit - Frequently Asked Questions </title>
                <meta name='description' content="Get your Answers to Study Abroad and it's Financing Queries" />
                <link rel="canonical" href={props.location.href} />
            </Helmet>
            <Container fluid className='section-block'>
                
                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>Frequently Asked Questions</h1>

                        <Tabs
                            defaultActiveKey="general"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                            >
                            <Tab eventKey="general" title="General">
                            
                            <Accordion>
                                

                                <Accordion.Item eventKey="g1">
                                    <Accordion.Header>What products can be searched through Nomad Credit?</Accordion.Header>
                                    <Accordion.Body>
                                        Nomad is continually adding new product categories and partners to meet your needs. Currently, we can help with university admissions and student loans.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="g2">
                                    <Accordion.Header>What fees does Nomad Credit charge?</Accordion.Header>
                                    <Accordion.Body>
                                        We don't charge our customers any fees for using our online search platform. We do offer further consultant services that may require a fee.
                                    </Accordion.Body>
                                </Accordion.Item>



                                <Accordion.Item eventKey="g11">
                                    <Accordion.Header>Should I enter my spouse's info?</Accordion.Header>
                                    <Accordion.Body>
                                        You should enter your individual financial information including income and expenses. For example, if you pay for half of your house, then enter half of the total rent or mortgage payment.

                                    </Accordion.Body>
                                </Accordion.Item>


                                <Accordion.Item eventKey="g14">
                                    <Accordion.Header>Does Nomad Credit pull my credit?</Accordion.Header>
                                    <Accordion.Body>
                                        Nomad Credit doesn't pull your credit. You're able to submit a search without   getting your credit pulled.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="g15">
                                    <Accordion.Header>Is Nomad Credit a lender?</Accordion.Header>
                                    <Accordion.Body>
                                        No. Nomad Credit is an online marketplace. We do not provide loans or other financial products. We are experts at evaluating your profile, goals, and needs and matching those with multiple partners and institutions that can provide the product or service you are looking for.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="g16">
                                    <Accordion.Header>Does Nomad Credit have a Referral program?</Accordion.Header>
                                    <Accordion.Body>
                                        No, not at this time
                                    </Accordion.Body>
                                </Accordion.Item>

                                
                            </Accordion>

                            


                            </Tab>
                            <Tab eventKey="loan" title="Loans">
                            <Accordion>
                            <Accordion.Item eventKey="g0">
                                    <Accordion.Header>How can Nomad Credit help me find a loan?</Accordion.Header>
                                    <Accordion.Body>
                                        Nomad Credit has relationships with lending partners that provide credit, insurance, and other financial products to international students and/or visa holders currently or planning to live in the U.S. or elsewhere globally. Our platform is designed to efficiently connect those that need credit, insurance, and other financial products with partners that will provide them.
                                    </Accordion.Body>
                                </Accordion.Item>


                                <Accordion.Item eventKey="g3">
                                    <Accordion.Header>How do I know if I am going to be approved by a lender?</Accordion.Header>
                                    <Accordion.Body>
                                        There is no way to know for sure if you are going to be approved by a lender until you fill out an application with that lender. All lenders have different credit and underwriting criteria. However, having a cosigner and/or an acceptable credit score may increase your likelihood of approval.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="g4">
                                    <Accordion.Header>Can I search for options with little or no credit?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, Nomad Credit's mission is to help those with little or no credit find a loan.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="g5">
                                    <Accordion.Header>Can I search for options if I am not a U.S. citizen?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, you may search for options if you aren't a U.S. citizen. Nomad Credit is a global platform and was created to help U.S. and non-U.S. citizens find the academic and financial products they need. This includes international students studying or planning to study in the U.S.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="g6">
                                    <Accordion.Header>Can I search for options if I am a U.S. citizen?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, you may search for options if you are a U.S. citizen. Nomad Credit wants to help all customers with study abroad goals find financial products when knowledge or access to those products is limited.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="g7">
                                    <Accordion.Header>Can I search for multiple products?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, we highly encourage it. Information from your previous searches such as name, address, etc. will be auto-filled into your new search to help save you time and effort.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="g8">
                                    <Accordion.Header>Do I have to fill out the same search again for new products?</Accordion.Header>
                                    <Accordion.Body>
                                        All information that was filled out in a previous search will be auto-filled into your new search. Any personal information that has changed since your last search will need to be changed on your new search.

                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="g9">
                                    <Accordion.Header>Should I have a cosigner?</Accordion.Header>
                                    <Accordion.Body>
                                        For student loan products, lenders often need someone on the loan application to provide 'security' for the loan. That's often someone with an adequate amount of income or collateral. If you do not have income or collateral, having a creditworthy cosigner with either may increase your loan options and reduce the interest rate on your loan.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="g10">
                                    <Accordion.Header>Who can be a cosigner?</Accordion.Header>
                                    <Accordion.Body>
                                        Each lender may have different eligibility requirements, but generally a cosigner can be a parent, relative, spouse, friend or anyone else who is willing to help. They should have an acceptable credit score, income or collateral. They are sometimes required to make your loan payments if you can't.

                                    </Accordion.Body>
                                </Accordion.Item>


                                <Accordion.Item eventKey="g12">
                                    <Accordion.Header>When will I be notified of any loan options that fit my profile?</Accordion.Header>
                                    <Accordion.Body>
                                        You will be notified of any potential options after submitting a search.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="g13">
                                    <Accordion.Header>What if there aren't any loan options that fit my profile?</Accordion.Header>
                                    <Accordion.Body>
                                        If there aren't any loan options that fit your profile, we may reach out to help you find a lender not currently on our platform. We are an evolving company, so not all lenders that we know are on our platform yet.
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                            </Tab>
                            <Tab eventKey="admissions" title="Admissions">
                            <Accordion>
                                <Accordion.Item eventKey="a0">
                                    <Accordion.Header>What are the criteria for the selection of universities?</Accordion.Header>
                                    <Accordion.Body>
                                    Our profile evaluation process takes into account several factors of your profile. Everything including test scores, academic history, and extra-curriculars among many other factors will be considered during the evaluation.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="a1">
                                    <Accordion.Header>How long does the counseling process take?</Accordion.Header>
                                    <Accordion.Body>
                                    Each individual meeting is fairly short, but the overall process from initial evaluation to university admission can take weeks or months depending on program and university.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="a3">
                                    <Accordion.Header>What documents do I need in order to start the process?</Accordion.Header>
                                    <Accordion.Body>
                                    To begin our services, there are no documents required to begin speaking with our counselors. Once you have signed up with Nomad and signed our waiver, our expert admissions counselors will meet with you to discuss the required documentation needed to start the study abroad process.

                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="a4">
                                    <Accordion.Header>Should I choose a school based on my desired program or whichever gives me the most aid?</Accordion.Header>
                                    <Accordion.Body>
                                    That’s a decision that you can decide with the help of one of our Admissions Counselors.

                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="a5">
                                    <Accordion.Header>How long does it take to hear back from a university once I’ve applied?</Accordion.Header>
                                    <Accordion.Body>
                                    Once you’ve applied, on average you can expect to hear back from a university in 2 to 4 months.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="a6">
                                    <Accordion.Header>Do you help in selecting the field for an MS program?</Accordion.Header>
                                    <Accordion.Body>
                                    You can utilize our services even if you are undecided on what program you wish to attend. We can work with you to help you choose your program.

                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="a7">
                                    <Accordion.Header>What should be the GRE score be for getting an admission?</Accordion.Header>
                                    <Accordion.Body>
                                    There is a range of GRE scores that universities will accept during their admissions search. This will vary both by degree and by university.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="a8">
                                    <Accordion.Header>How strong should academics be to get an admission?</Accordion.Header>
                                    <Accordion.Body>
                                    Typically, your academics will only be a portion of your application that is looked at by universities, though some universities and programs might put more weight into the academic portion of your application. Different universities and programs will also have different standards they are looking at in terms of academic record. We can help you understand what universities and programs may be a better fit based on your academic history.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="a9">
                                    <Accordion.Header>Are extracurricular activities considered for admission?</Accordion.Header>
                                    <Accordion.Body>
                                    Typically, your extracurricular activities will only be a portion of your application that’s looked at by universities, though some universities and programs might put more weight into the extracurricular activities portion of your application.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="a10">
                                    <Accordion.Header>When should a student apply to a university?</Accordion.Header>
                                    <Accordion.Body>
                                    Students must submit their applications before the deadlines of the universities they’re applying to. Typically, the earlier a student applies, the better, as they may receive their admissions decisions earlier. There are also priority deadlines that may improve your chances of admissions as they are in an earlier cohort than later deadlines. We can help you determine when deadlines are.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="a11">
                                    <Accordion.Header>What if a student doesn’t receive any acceptance letters?</Accordion.Header>
                                    <Accordion.Body>
                                    You can apply to additional universities, but a university’s admissions decision is final.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="a12">
                                    <Accordion.Header>Do U.S. Universities accept 15 years of education?</Accordion.Header>
                                    <Accordion.Body>
                                    This depends on the university and program. Some may accept a 3-year undergraduate degree, but many do not. We can help you find the programs that will accept 15 years of education.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="a13">
                                    <Accordion.Header>Is work experience required for an MBA?</Accordion.Header>
                                    <Accordion.Body>
                                    This requirement will depend on the universities and programs you apply to.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="a14">
                                    <Accordion.Header>Is work experience required for MS programs?</Accordion.Header>
                                    <Accordion.Body>
                                    This requirement will depend on the universities and programs you apply to.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="a15">
                                    <Accordion.Header>What is the I-20?</Accordion.Header>
                                    <Accordion.Body>
                                    Essentially, an I-20 is a certificate of financial proof from a university for international students that is a requirement to receive before you can apply for a visa.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="a16">
                                    <Accordion.Header>How can one increase their chances of getting financial aid?</Accordion.Header>
                                    <Accordion.Body>
                                    We do not help with getting university financial aid, but we can help you understand and search for potential loan options.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="a17">
                                    <Accordion.Header>What if a student wants to change their course or university after landing in the USA?</Accordion.Header>
                                    <Accordion.Body>
                                    You can continue to use Nomad as a resource for any inquiries while you are in the United States. Changes in majors/programs vary by the university’s policies, so you should check with your university about transferring programs. Typically, you will not be able to transfer universities until completing a semester/year at your current chosen university.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="a19">
                                    <Accordion.Header>Can we get on campus jobs in the U.S.?</Accordion.Header>
                                    <Accordion.Body>
                                    Your university may offer different job/internship/assistantship opportunities. Additionally, you may be able to find job/internship opportunities in the town of your university.
                                    </Accordion.Body>
                                </Accordion.Item>



                            </Accordion>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Faqs