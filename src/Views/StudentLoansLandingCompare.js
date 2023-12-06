import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion'
import '../css/views/secondary.scss';
import '../css/views/prodigy.scss';
import '../css/views/comparePartners.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import windowSize from '../helpers/window-size.js';
import { Helmet } from 'react-helmet-async';
 
const StudentLoansLandingCompare = (props) => {
    const imgSize = windowSize();
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString);
    const thankYou = urlParams.get('thankYou');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    if(thankYou){
        return(
            <Container fluid className='section-block'>
                
                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'>Thank You</h1>
                        <p>We will be in touch soon. In the meantime, you may finish setting up your NomadCredit.com account using the email we sent you.</p>
                    </Col>
                </Row>
            </Container>
        )
    }

    return(

        <>
            <Helmet>
                <link rel="canonical" href={props.location.href} />
            </Helmet>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Disclosures</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <span class="c18 c42">Prodigy</span>
<p></p>
<p class="c32"><span class="c46"></span></p>
<h1 class="c30" id="h.aus8662t0u90"><span class="c18 c43">Our Terms</span></h1>
<p class="c6"><span class="c1">Effective Date: 22 April 2022</span></p>
<p class="c6"><span class="c18 c17">Please read these terms of use, terms of service and general terms (the &ldquo;terms&rdquo;) carefully before using our site and creating an account to use our services.</span></p>
<p class="c6"><span class="c17">Section 1 (TERMS OF USE) and Section 3 (GENERAL TERMS) apply to anyone who uses</span> <span class="c17"><a class="c35" href="https://www.google.com/url?q=https://prodigyfinance.com/&amp;sa=D&amp;source=editors&amp;ust=1696374131569904&amp;usg=AOvVaw1SKnR-oIyLqJZJsee304A_">our website</a></span><span class="c1">, including our online portal accessed via the website (&ldquo;Portal&rdquo;) (together, our &ldquo;Site&rdquo;). Section 2 (TERMS OF SERVICE) also applies to anyone who registers to apply for and use any of the products or services offered by Prodigy Finance (&ldquo;Services&rdquo;) via the Portal.</span></p>
<p class="c6"><span class="c1">Click on the links below to go straight to more information on each area:</span></p>
<p class="c6"><span class="c17"><a class="c35" href="https://www.google.com/url?q=https://prodigyfinance.com/legal/terms-of-use/%23Terms-of-use&amp;sa=D&amp;source=editors&amp;ust=1696374131570188&amp;usg=AOvVaw2u4C4jUZvPMT7Sfx92NoRb">Terms of use<br/></a></span><span class="c17"><a class="c35" href="https://www.google.com/url?q=https://prodigyfinance.com/legal/terms-of-use/%23Terms-of-service&amp;sa=D&amp;source=editors&amp;ust=1696374131570297&amp;usg=AOvVaw3iYQc_t_dHB4V9LGMFtw-6">Terms of service<br/></a></span><span class="c17"><a class="c35" href="https://www.google.com/url?q=https://prodigyfinance.com/legal/terms-of-use/%23General-terms&amp;sa=D&amp;source=editors&amp;ust=1696374131570378&amp;usg=AOvVaw1kW-tND4TCvRhZkB4m7niA">General terms</a></span></p>
<h2 class="c41" id="h.bxzrquc5ooag"><span class="c18 c26">Terms of use</span></h2>
<p class="c6"><span class="c17">These terms (&ldquo;</span><span class="c20 c17">Terms of Use</span><span class="c1">&ldquo;) and the General Terms in Section 3 tell you the rules for using our Site.</span></p>
<p class="c6"><span class="c18 c17">1.1. Who we are and how to contact us</span></p>
<p class="c6"><span class="c17">Prodigy Finance Limited (&ldquo;</span><span class="c17 c20">Prodigy Finance</span><span class="c1">&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is incorporated in the United Kingdom (Company Number 05912562) with its registered address at 85 Great Portland Street, London, W1W 7LT, London, W1F 7LD. Prodigy&rsquo;s main operating address is Hardy House, 16-18 Beak Street W1F 9RD, London, United Kingdom.</span></p>
<p class="c6"><span class="c17">Prodigy Finance is authorised and regulated by the UK Financial Conduct Authority (firm registration number 709641) for certain consumer credit activities and for investment activities for investors who have agreed to its terms. Prodigy Finance loans are offered to eligible borrowers who are studying outside of their country of residence and the loans are governed by English law.<br/>
We can be contacted by</span> <span class="c17"><a class="c35" href="https://www.google.com/url?q=https://prodigyfinance.com/contact-us/&amp;sa=D&amp;source=editors&amp;ust=1696374131570893&amp;usg=AOvVaw0GHKuU_Ny679crX0fzYWho">e-mail and telephone</a></span><span class="c1">.</span></p>
<p class="c6"><span class="c18 c17">1.2. By using our site, you accept these terms of use and the general terms</span></p>
<p class="c6"><span class="c17">By using our Site, you confirm that you accept these Terms of Use and the General Terms and that you agree to comply with them. There are other terms that will also apply when you use our Site: our</span> <span class="c17"><a class="c35" href="https://www.google.com/url?q=https://prodigyfinance.com/legal/privacy-policy/&amp;sa=D&amp;source=editors&amp;ust=1696374131571133&amp;usg=AOvVaw3CEBGOhKLIbKrE3S03U7At">Privacy Policy</a></span><span class="c17">&nbsp;and our</span> <span class="c17"><a class="c35" href="https://www.google.com/url?q=https://prodigyfinance.com/legal/cookie-policy/&amp;sa=D&amp;source=editors&amp;ust=1696374131571229&amp;usg=AOvVaw2yQ_-324aeuiUwD-VmITRY">Cookie Policy</a></span><span class="c1">.</span></p>
<p class="c6"><span class="c1">If you decide to apply for and use any of our Services, the terms set out in Section 2 (Terms of Service) below will also apply, and you will be required to agree to such terms and conditions at the appropriate time of application or usage of our Services.</span></p>
<p class="c6"><span class="c1">If you do not agree to these Terms of Use and the General Terms, you must not use our Site. You may print a copy of these Terms for future reference.</span></p>
<p class="c6"><span class="c18 c17">1.3. What is unacceptable use of our site?</span></p>
<p class="c6"><span class="c1">You may use our Site only for lawful purposes. You may not use our Site:</span></p>
<ul class="c5 lst-kix_b06fmqb3ygra-0 start">
	<li class="c0 li-bullet-0"><span class="c1">in any way that breaches any applicable local, national or international law or regulation;</span></li>
	<li class="c0 li-bullet-0"><span class="c1">in any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect;</span></li>
	<li class="c0 li-bullet-0"><span class="c1">for the purpose of harming or attempting to harm minors in any way;</span></li>
	<li class="c0 li-bullet-0"><span class="c1">to transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material or any other form of similar solicitation (spam); or</span></li>
	<li class="c0 li-bullet-0"><span class="c1">to knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware.<br/>
	You also agree:</span></li>
	<li class="c0 li-bullet-0"><span class="c1">not to reproduce, duplicate, copy or re-sell any part of our Site in contravention of these Terms of Use;</span></li>
	<li class="c0 li-bullet-0"><span class="c1">not to access without authority, interfere with, damage or disrupt:</span></li>
	<li class="c0 li-bullet-0"><span class="c1">any part of our Site;</span></li>
	<li class="c0 li-bullet-0"><span class="c1">any equipment or network on which our Site is stored;</span></li>
	<li class="c0 li-bullet-0"><span class="c1">any software used in the provision of our Site; or</span></li>
	<li class="c0 li-bullet-0"><span class="c1">any equipment or network or software owned or used by any third party; and</span></li>
	<li class="c0 li-bullet-0"><span class="c1">not to attack our Site via a denial-of-service attack or a distributed denial-of service attack.<br/>
	Any violation of our system or network security may subject you to civil and/or criminal liability. By breaching these provisions, you would commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our Site will cease immediately.</span></li>
</ul>
<p class="c6"><span class="c18 c17">1.4. We may make changes and modifications</span></p>
<p class="c6"><span class="c1">Our Site is made available free of charge. We do not guarantee that our Site, or any content on it, will always be available or be uninterrupted and we reserve the right to temporarily or permanently modify or discontinue the Site, or any portion of the Site, for any reason, without notice to you. Although we make reasonable efforts to update the information on our Site, we make no promises that the content on our Site is accurate, complete or up to date.<br />
The content on our Site is provided for general information only. It is not intended to amount to financial advice on which you should rely. You must obtain professional or specialist financial advice before taking, or refraining from, any action on the basis of the content on our Site.</span></p>
<p class="c6"><span class="c18 c17">1.5. How you may use material on our site</span></p>
<p class="c6"><span class="c1">The Site; its content, including all page headers, custom graphics, button icons, and scripts; any materials downloaded; and all intellectual property pertaining to or contained on the Site (including but not limited to copyrights, patents, database rights, graphics, designs, text, logos, trade dress, trade marks, and service marks) are owned by Prodigy Finance or third parties. All rights, title, and interests in and to the Site, any content thereon, our Services and the technology related to our Services and any and all technology and content created or derived from any of the foregoing are our or such third-party owner&rsquo;s exclusive property. All content is protected by trade dress, copyright, patent, and trade mark laws, as well as various other intellectual property and unfair competition laws. All such rights are reserved.<br/>
You are authorised solely to view and retain a copy of pages of the Site for your own use. You may also view and make copies of relevant documents, pages, images, or other materials on the Site for the purpose of transacting business with Prodigy Finance. You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text. You agree that you will not use, duplicate, publish, modify, create derivative works from, participate in the transfer of, post on the Internet, or in any way distribute or exploit the Site, or any portion of the Site, for any public or commercial use without the express written consent of Prodigy Finance.<br/>
Additionally, you agree that you:</span></p>
<ul class="c5 lst-kix_zcvx7fht6x71-0 start">
	<li class="c0 li-bullet-0"><span class="c1">will not remove or alter any author, trade mark, or other proprietary notice or legend displayed on the Site (or printed pages produced from the Site); and</span></li>
	<li class="c0 li-bullet-0"><span class="c1">will not make any other modifications to any documents obtained from the Site other than in connection with completing information required to transact business with Prodigy Finance.<br/>
	If you print off, copy or download any part of our Site in breach of these Terms of Use, your right to use our Site will cease immediately and you must, at our option, return or destroy any copies of the materials you have made.</span></li>
</ul>
<p class="c6"><span class="c18 c17">1.6. Rules on linking to and from our site</span></p>
<p class="c6"><span class="c17">The Site may contain links to websites controlled or offered by third parties (non-affiliates of Prodigy Finance). Prodigy Finance hereby disclaims liability for any information, materials, products, or services offered or advertised at any of the third-party websites linked to on the Site. By creating a link to a third-party website, Prodigy Finance does not endorse or recommend any products or services offered on or information contained at that website, nor is Prodigy Finance liable for any failure of any products or services offered on or advertised at those websites.<br/>
We are not responsible for the information practices employed by websites linked to or from our Site. In most cases, links to other websites are provided solely as pointers to information on topics that may be useful to our users. Since third-party websites may have different privacy policies and/or security standards governing their websites, we advise that you review the privacy policies and terms and conditions of these websites prior to providing any personal information.<br/>
You may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it and have obtained our prior written consent for the link. You must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists. If you wish to link to or make any use of content on our Site, please contact</span> <span class="c17">info@prodigyfinance.com</span><span class="c1">. We reserve the right to withdraw linking permission without notice.<br/>
You must not establish a link to our Site in any website that is not owned by you. Our Site must not be framed on any other site, nor may you create a link to any part of our Site other than the home page. The website in which you are linking must comply in all respects with the prohibitions and requirements set out in Section 1.3 of these Terms of Use.</span></p>
<p class="c6"><span class="c18 c17">1.7. Security of site</span></p>
<p class="c6"><span class="c1">We make no warranty whatsoever to you, express or implied, regarding the security of the Site, including that the Site will be secure or free from bugs or viruses and with respect to the ability of unauthorized persons to intercept or access information transmitted by you through the Site or any Service (if applicable).<br/>
You are responsible for configuring your information technology, computer programs and platform to access our Site. You acknowledge and agree that you are solely responsible for maintaining and the security of your devices. You should use your own virus protection software.</span></p>
<p class="c6"><span class="c18 c17">1.8. System outages, slowdowns, and capacity limitations</span></p>
<p class="c6"><span class="c1">At times you may experience difficulty accessing the Site or communicating with Prodigy Finance through the Internet or other electronic wireless services as a result of high Internet traffic, transmission problems, systems capacity limitations, or other problems. Any computer system or other electronic device, whether it is yours, an Internet service provider&rsquo;s, or Prodigy Finance&rsquo;s, can experience unanticipated outages or slowdowns or have capacity limitations. Prodigy Finance is not responsible for any such outages, slowdowns, or capacity limitations.</span></p>
<h2 class="c41" id="h.4ieeos4una6p"><span class="c18 c26">Terms of service</span></h2>
<p class="c6"><span class="c17">These terms (&ldquo;</span><span class="c20 c17">Terms of Service</span><span class="c1">&ldquo;) are for account holders and loan applicants and are provided on behalf of Prodigy Finance and its affiliates. When you register to apply and use any of the Services offered by Prodigy Finance by accessing the Portal you signify that you have read, understand, and agree to be bound by these Terms of Service. Please read these Terms of Service very carefully. If you do not wish to be bound by these Terms of Service, you should not access the Portal or register for any of our Services.<br/>
In addition to these Terms of Service, you may enter into other agreements with us that will govern your use of the Services offered on the Site. If there is any contradiction between these Terms of Service and another agreement you enter into that is applicable to a Service offered on the Site then the other agreement will take precedence as it applies to the Service.</span></p>
<p class="c6"><span class="c18 c17">If you are not an account holder or loan applicant this Section 2 does not apply to you.</span></p>
<p class="c6"><span class="c18 c17">2.1. Additional terms</span></p>
<p class="c6"><span class="c1">In using our Service you are bound by the terms contained in our Terms of Use in Section 1 and the General Terms in Section 3 in addition to those contained in this Terms of Service.</span></p>
<p class="c6"><span class="c18 c17">2.2. Eligibility</span></p>
<p class="c6"><span class="c1">The Portal is intended solely for users who are 18 years of age or older, and any registration or use of the Portal by anyone under 18 years of age is unauthorized and in violation of these Terms of Service. By using the Portal, you represent you are 18 years of age or older and that you agree to and will abide by all of the terms and conditions of these Terms of Service. The Portal is not intended for distribution to, or use by, any person or entity in any jurisdiction or country where such distribution or use would be contrary to local law or regulation.</span></p>
<p class="c6"><span class="c18 c17">2.3. Registration and application</span></p>
<p class="c6"><span class="c1">You may be presented with the opportunity to register for an account and/or apply to use our Services on the Portal. When you register for an account or apply to use our Services, you agree to provide current, complete, and accurate information about yourself. If any information you provide is untrue, inaccurate, not current, or incomplete, we have the right to cancel or withdraw your registration, reject any application you have submitted, terminate any agreement we have with you, and restrict your future use of the Portal and our Services. We reserve the right to reject any registration and/or decline any application for a loan. If you have submitted multiple loan applications with the same or different email addresses and accepted our provisional loan offer for one of the applications, we will automatically withdraw all the other loan applications, as you are only permitted to proceed with one loan application after accepting our provisional loan offer. You agree not to continue with or to actively withdraw from all other loan applications made with the same or other email addresses and otherwise inform us of all the email addresses that you have used to make the loan applications.</span></p>
<p class="c6"><span class="c18 c17">2.4. Your content and information sharing</span></p>
<p class="c6"><span class="c1">By providing information or content on the Portal or in connection with the Services, you expressly agree to all of the following:<br/>
You grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide licence to use any information or content that you provide in connection with your use of the Portal or Services forever, subject to the privacy provisions described in our Privacy Policy. We have the right to review, delete, edit, modify, reformat, excerpt, or translate any of your information or content.<br/>
You are solely responsible for the content and information you make available through or in connection with the Portal or Services.<br/>
All the information and content posted on the Portal or privately transmitted through the Portal or via other means in connection with the Services is the sole responsibility of the person from which that content originated. We will not be responsible for any errors or omissions in any information or content posted by a user.</span></p>
<p class="c6"><span class="c18 c17">2.5. Your licence</span></p>
<p class="c6"><span class="c1">Subject to these Terms of Service, Prodigy Finance grants you a personal, non-exclusive, non-transferable, limited, and revocable licence to access the Portal for personal, not commercial use (&ldquo;Your Licence&rdquo;).</span></p>
<p class="c6"><span class="c18 c17">2.6. Restrictions on use</span></p>
<p class="c6"><span class="c1">In addition to these Terms of Service, you agree to abide by all applicable laws and regulations in your use of the Portal and Services. In addition, you agree that you will not do any of the following:<br/>
register for more than one account or continue with more than one loan application, after you have accepted our provisional offer for a loan, unless instructed to do so by us in connection with a new loan application;</span></p>
<ul class="c5 lst-kix_205zyi3v6zx-0 start">
	<li class="c0 li-bullet-0"><span class="c1">register for an account, make or submit any loan application or other application to use the Services of Prodigy Finance on behalf of an individual other than yourself or on behalf of any group or entity;</span></li>
	<li class="c0 li-bullet-0"><span class="c1">post or otherwise make available content or take any action on the Portal, that may constitute libel or slander, that infringes or violates someone else&rsquo;s rights, that violates any copyright or trademark protections, or otherwise violates the law;</span></li>
	<li class="c0 li-bullet-0"><span class="c1">post or otherwise make available content that in our judgement is objectionable, such as content that is harmful, threatening, inflammatory, obscene, fraudulent, invasive of privacy or publicity rights, hateful, or otherwise objectionable, which restricts or inhibits any other person from using or enjoying the Portal, or which may expose us or our users to any harm or liability of any type;</span></li>
	<li class="c0 li-bullet-0"><span class="c1">post or otherwise make available any unsolicited or unauthorised advertising, solicitations, promotional materials, or any other form of solicitation;</span></li>
	<li class="c0 li-bullet-0"><span class="c1">use the information or content on our Portal to send unwanted messages to any other user;</span></li>
	<li class="c0 li-bullet-0"><span class="c1">impersonate any person or entity or falsely state or otherwise misrepresent yourself, your age, or your affiliation with any person or entity;</span></li>
	<li class="c0 li-bullet-0"><span class="c1">post or otherwise make publicly available on the Portal any personal or financial information of any third party;</span></li>
	<li class="c0 li-bullet-0"><span class="c1">solicit personal information from anyone under 18 years of age or solicit passwords or personal information for commercial or unlawful purposes;</span></li>
	<li class="c0 li-bullet-0"><span class="c1">use the Portal or Services in any manner that could damage, disable, overburden, or impair the Portal, the Site or systems of Prodigy Finance;</span></li>
	<li class="c0 li-bullet-0"><span class="c1">use or launch any automated system, including without limitation, &ldquo;robots,&rdquo; &ldquo;spiders,&rdquo; or &ldquo;offline readers,&rdquo; to access content or systems of Prodigy Finance;</span></li>
	<li class="c0 li-bullet-0"><span class="c1">harvest or collect email addresses or other contact information of our users from the Portal by electronic or other means, including via the use of automated scripts; or</span></li>
	<li class="c0 li-bullet-0"><span class="c1">post or otherwise make available any material that contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of the Portal or any computer software or hardware or telecommunications equipment</span></li>
</ul>
<p class="c6"><span class="c18 c17">2.7. Responsibility for your account</span></p>
<p class="c6"><span class="c17">When you successfully register with us you will be required to create an account on the Portal. When you create an account, you can choose your own preferred name, email address and password as part of our security procedures. You acknowledge and agree that you are responsible for maintaining the confidentiality of such information, and to keep it safe and not disclose it to any third party or allow any third party to use your information and access our Portal. Prodigy Finance is not responsible for any losses resulting from the loss or theft of your device or the loss or theft of your information transmitted from or stored on your devices.<br/>
For your own safety, Prodigy Finance does not have access to your user log-in information. If you have forgotten any of your user log-in information or know or suspect that anyone other than you knows your user identification code or password, you must promptly change your log-in information, by using our reset password functionality on the log-in page or by contacting us at</span> <span class="c17">info@prodigyfinance.com</span><span class="c1">&nbsp;to lock your account and/or change your password. We have the right to disable or lock any user profile, at any time, if in our reasonable opinion you have failed to comply with any of the provisions of these Terms.</span></p>
<p class="c6"><span class="c18 c17">2.8. Termination of your licence</span></p>
<p class="c6"><span class="c1">Prodigy Finance reserves the right, in its sole discretion, to terminate Your Licence or user account, delete your loan listing and any content or information that you have posted on the Portal, prohibit you from using or accessing the Portal or the Services and/or assert legal action with respect to your content or use of the Portal or Services that Prodigy Finance reasonably believes is or might be in violation of the Terms or Service, additional terms and conditions, or other Prodigy Finance policies. Prodigy Finance&rsquo;s failure or delay in taking such actions does not constitute a waiver of its rights to enforce the Terms of Service or the terms of any Service.</span></p>
<h2 class="c41" id="h.ba9jnetgumvq"><span class="c18 c26">General terms</span></h2>
<p class="c6"><span class="c1">These General Terms and the Terms of use in Section 1 tell you the rules for using our Site:</span></p>
<p class="c6"><span class="c18 c17">3.1. Our responsibility for loss or damage suffered by you</span></p>
<p class="c6"><span class="c18 c17">Whether you are a consumer or a business user:</span></p>
<p class="c6"><span class="c1">We do not exclude or limit in any way our liability to you where it would be unlawful to do so. This includes liability for death or personal injury caused by our negligence or the negligence of our employees, agents or subcontractors and for fraud or fraudulent misrepresentation.</span></p>
<p class="c6"><span class="c17 c18">If you are a business user:</span></p>
<p class="c6"><span class="c1">We exclude all implied conditions, warranties, representations or other terms that may apply to our Site or any content on it.<br/>
We will not be liable to you for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with:</span></p>
<ul class="c5 lst-kix_y2b1kxc5g2ro-0 start">
	<li class="c0 li-bullet-0"><span class="c1">use of, or inability to use, our Site; or</span></li>
	<li class="c0 li-bullet-0"><span class="c1">use of or reliance on any content displayed on our Site.</span></li>
	<li class="c0 li-bullet-0"><span class="c1">In particular, we will not be liable for:</span></li>
	<li class="c0 li-bullet-0"><span class="c1">loss of profits, sales, business, or revenue;</span></li>
	<li class="c0 li-bullet-0"><span class="c1">business interruption;</span></li>
	<li class="c0 li-bullet-0"><span class="c1">loss of anticipated savings;</span></li>
	<li class="c0 li-bullet-0"><span class="c1">loss of business opportunity, goodwill or reputation; or</span></li>
	<li class="c0 li-bullet-0"><span class="c1">any indirect or consequential loss or damage.<br/>
	If you are a consumer user:<br/>
	We are responsible to you for foreseeable loss and damage caused by us. If we fail to comply with these terms, we are responsible for loss or damage you suffer that is a foreseeable result of our breaking this contract or our failing to use reasonable care and skill, but we are not responsible for any loss or damage that is not foreseeable. Loss or damage is foreseeable if either it is obvious that it will happen or if, at the time the contract was made, both we and you knew it might happen, for example, if you discussed it with us during the sales process.<br/>
	Please note that we only provide our Site for domestic and private use. You agree not to use our Site for any commercial or business purposes, and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity.</span></li>
</ul>
<p class="c6"><span class="c18 c17">3.2. We may transfer this agreement to someone else</span></p>
<p class="c6"><span class="c1">We may transfer our rights and obligations under the Terms to another organisation. We will always tell you in writing if this happens and we will ensure that the transfer will not affect your rights under the contract.</span></p>
<p class="c6"><span class="c18 c17">3.3. Legal rights</span></p>
<p class="c6"><span class="c1">Our failure to exercise or enforce any right or provision of the Terms shall not constitute a waiver of such right or provision. If any provision of the Terms are found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavour to give effect to the parties&rsquo; intentions as reflected in the provision and that the other provisions of the Terms shall remain in full force and effect.</span></p>
<p class="c6"><span class="c18 c17">3.4. Changes to these terms</span></p>
<p class="c6"><span class="c1">We may also change the Terms from time to time without notice to you. Please review the Terms of Use and, if applicable, the Terms of Service set out in Section 2, because your continued access or use of the Site and, where applicable, the Services, after any modifications have become effective shall be deemed your conclusive acceptance of the modified Terms.</span></p>
<p class="c6"><span class="c18 c17">3.5. Law and jurisdiction</span></p>
<p class="c6"><span class="c1">If you are a consumer, please note that these Terms, their subject matter and their formation, are governed by English law. You and we both agree that the courts of England and Wales will have exclusive jurisdiction except that if you are a resident of Northern Ireland you may also bring proceedings in Northern Ireland, and if you are resident of Scotland, you may also bring proceedings in Scotland.</span></p>
<p class="c6"><span class="c1">If you are a business, these Terms, their subject matter and their formation, are governed by English law. You and we both agree that the courts of England and Wales will have exclusive jurisdiction.</span></p>
<p class="c6 c39"><span class="c1"></span></p>
<p class="c6 c38 title" id="h.lepluvov5yi7"><span class="c40">MPOWER</span></p>
<h1 class="c47" id="h.wh1trwc8ljvb"><span class="c50 c52">Terms of Service</span></h1>
<p class="c53 c55"><span class="c17">Last Modified:</span> <span class="c17 c44">March 15, 2020</span></p>
<p class="c7"><span class="c17">Welcome to MPOWER, these terms of use govern your use of the</span> <span class="c17 c34"><a class="c35" href="https://www.google.com/url?q=https://mpowerfinancing.com/&amp;sa=D&amp;source=editors&amp;ust=1696374131577632&amp;usg=AOvVaw1cGBUHWzUgAqEZw8_cH40x">https://mpowerfinancing.com</a></span><span class="c1">&nbsp;website and related MPOWER Financing services (collectively the &ldquo;Services&rdquo;).</span></p>
<p class="c7"><span class="c17">These terms are a legally binding agreement between you and MPOWER Financing, PBC, is a Delaware public benefit corporation (&ldquo;MPOWER&rdquo;). By using the</span> <span class="c34 c17"><a class="c35" href="https://www.google.com/url?q=https://mpowerfinancing.com/&amp;sa=D&amp;source=editors&amp;ust=1696374131577845&amp;usg=AOvVaw06gB6TR-f93EchY9gUhEiP">https://mpowerfinancing.com</a></span><span class="c1">&nbsp;website or registering with the Services as defined below you acknowledge and agree that you have read, understand and accept the terms and conditions described below (the &ldquo;Terms of Use&rdquo;) and you agree to be bound by the Terms of Use and all terms, policies and guidelines incorporated in the Terms of Use by reference.</span></p>
<p class="c7"><span class="c1">&nbsp;</span></p>
<h5 class="c9" id="h.3cw3sr9bj7n"><span class="c13">YOUR USE OF MPOWER FINANCING SOFTWARE AND SERVICES</span></h5>
<p class="c7"><span class="c1">Subject to you remaining in compliance with the provisions of the Terms of Use, MPOWER hereby grants to you a limited, worldwide, royalty-free, non-exclusive, non-transferable, non-sublicensable license solely to access and use the Services. The Services shall not be used in any other manner or for any other purpose.</span></p>
<p class="c7"><span class="c1">Use of the Services by children under the age of 13 is prohibited. By using the Services, you warrant that you are 13 years of age or older.</span></p>
<p class="c7"><span class="c1">&nbsp;</span></p>
<h5 class="c9" id="h.qlrrr5pri6ao"><span class="c13">REGISTRATION AND ACCOUNTS</span></h5>
<p class="c7"><span class="c17">Some Services may require that you register on the MPOWER website (</span><span class="c34 c17"><a class="c35" href="https://www.google.com/url?q=https://mpowerfinancing.com/&amp;sa=D&amp;source=editors&amp;ust=1696374131578461&amp;usg=AOvVaw0oMi1FM9A_b0yZhTREYtir">https://mpowerfinancing.com</a></span><span class="c1">). You must provide complete and accurate information during registration, including your email address, and update your information should it change in the future.</span></p>
<p class="c7"><span class="c17">You must maintain the confidentiality of your assigned user IDs and passwords. You agree to immediately notify MPOWER at</span> <span class="c17">mpower.me@mpowerfinancing.com</span><span class="c1">&nbsp;of any unauthorized use of your password or username or any other breach of security. If a password is lost or stolen, it is your responsibility to change the password, and immediately notify MPOWER , so that your account remains secure and functional.</span></p>
<p class="c7"><span class="c1">&nbsp;</span></p>
<h5 class="c9" id="h.n5z6hm2pq17b"><span class="c13">USER GENERATED CONTENT</span></h5>
<p class="c7"><span class="c1">The Services include features which allow you to submit content that others can access, both within and outside of the Services. You retain any rights you hold in the content that you submit. All content submitted to the Services is the sole responsibility of the user who submitted the content.</span></p>
<p class="c7"><span class="c1">By submitting content to the Services, you give MPOWER and its affiliates a worldwide and royalty-free license to use, host, store, reproduce, modify, create derivative works, communicate, publish, publicly perform, publicly display, and distribute such content. This license continues indefinitely beyond any termination of the Terms of Use for any reason by any party.</span></p>
<p class="c7"><span class="c1">MPOWER does not screen, review or actively monitor any content submitted to the Services by users, and is not responsible for the accuracy or truthfulness of any user-submitted content.</span></p>
<p class="c7"><span class="c1">&nbsp;</span></p>
<h5 class="c9" id="h.7j1dbt6fjjy"><span class="c13">PRIVACY AND COLLECTION OF INFORMATION</span></h5>
<p class="c7"><span class="c17">MPOWER collects information about you through your use of the Services. By using the Services, you agree that MPOWER may retain, use, and publish information collected through your use of the Services in accordance with the MPOWER Privacy Policy, located at</span> <span class="c34 c17"><a class="c35" href="https://www.google.com/url?q=https://mpowerfinancing.com/privacy-policy/&amp;sa=D&amp;source=editors&amp;ust=1696374131579295&amp;usg=AOvVaw20LDMCqK13SRGPcJrcJ8a4">https://mpowerfinancing.com/privacy-policy</a></span></p>
<p class="c7"><span class="c1">&nbsp;</span></p>
<h5 class="c9" id="h.9ocklkrd4hei"><span class="c13">OUR PROPRIETARY RIGHTS</span></h5>
<p class="c7"><span class="c1">MPOWER retains all rights, title, and interest to the Services and any updates that may be provided to you under the Terms of Use. MPOWER reserves all rights not expressly granted to you.</span></p>
<p class="c7"><span class="c1">&nbsp;</span></p>
<h5 class="c9" id="h.cyyh9jfrkzn6"><span class="c13">INDEMNITY</span></h5>
<p class="c7"><span class="c1">You and any business or third party subject to the Terms of Use through your use shall indemnify, defend and hold harmless MPOWER and its officers, agents, and employees from and against any claims, demands or causes of action (a) alleging infringement of any third party intellectual property rights based on (i) your use of the Services, (ii) the use of any other software or hardware that is used in conjunction with the Services, (iii) the unauthorized use of the Services, or (iv) use of the Services not in conformance with the specifications or the requirements of the Terms of Use, (b) based on the unauthorized use of the Services by you, or (c) based on or resulting from a breach of any provision of the Terms of Use by you.</span></p>
<p class="c7"><span class="c1">&nbsp;</span></p>
<h5 class="c9" id="h.v479pylhv44d"><span class="c13">PARTICIPATION INFORMATION</span></h5>
<p class="c7"><span class="c1">None of the information contained in MPOWER&rsquo;s website constitutes a recommendation, solicitation or offer by MPOWER or its affiliates to buy or sell any securities or other financial instruments or other assets or provide any investment advice or service. The information contained in MPOWER&rsquo;s website has been prepared without reference to any particular user&rsquo;s lending or investment requirements or financial situation. The information contained and services offered in MPOWER&rsquo;s website are not provided to, and may not be used by, any person or entity in any jurisdiction where the provision or use thereof would be contrary to applicable laws, rules or regulations of any governmental authority or regulatory or self-regulatory organization or clearing organization or where MPOWER or its authorized partner or agent is not authorized to provide such information or services. Some products and services described in MPOWER&rsquo;s website may not be available in all jurisdictions or to all potential users.</span></p>
<p class="c7"><span class="c1">&nbsp;</span></p>
<h5 class="c9" id="h.1fkk7ezb8zy2"><span class="c13">DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY</span></h5>
<p class="c7"><span class="c1">Other than as specifically set forth herein, the Services is provided &ldquo;AS IS&rdquo; and &ldquo;WITH ALL FAULTS&rdquo; and without warranty of any kind. You agree that the use of the Services is at your risk.</span></p>
<p class="c7"><span class="c1">MPOWER makes no warranty of any kind to you or any third party, express, implied or statutory, with respect to the services, operation of the services, or output of or results obtained from the services, including, without limitation, any implied warranty of merchantability, fitness for a particular purpose, operability, compliance with applicable law or non-infringement and all such warranties are hereby excluded by MPOWER and waived by you.</span></p>
<p class="c7"><span class="c1">Limitation of liability. Other than as specifically set forth herein, in no event shall MPOWER, its agents or employees, have any liability to you or any third party for the cost of substitute goods or any incidental, indirect, punitive, special, exemplary or consequential damages (including lost profits, loss of data, loss of use, loss of business opportunity or claims of third parties) arising in any manner in connection herewith, or out of the terms of use, the performance or breach hereof or the subject matter hereof, however caused, whether by negligence or otherwise, regardless of the form of action, whether for breach of contract, breach of warranty, negligence, strict product liability, infringement, government agency fines or enforcement actions or otherwise, and whether or not MPOWER has been advised of the possibility of such damages. This limitation shall apply notwithstanding any failure of essential purpose of any limited remedy provided herein.</span></p>
<p class="c7"><span class="c1">&nbsp;</span></p>
<h5 class="c9" id="h.l02qfts5qree"><span class="c13">MODIFICATION AND TERMINATION OF THE SERVICES</span></h5>
<p class="c7"><span class="c1">MPOWER may, in its sole discretion, discontinue offering the Services or terminate or suspend your access to the Services at any time.</span></p>
<p class="c7"><span class="c17">MPOWER reserves the right to change or modify any of the terms and conditions contained in the Terms of Use at any time, in its sole discretion, by posting changes at</span> <span class="c34 c17"><a class="c35" href="https://www.google.com/url?q=https://mpowerfinancing.com/terms-service/&amp;sa=D&amp;source=editors&amp;ust=1696374131580771&amp;usg=AOvVaw27pmhtIuAESgPLPD_d2tap">https://mpowerfinancing.com/terms-of-service</a></span><span class="c1">&nbsp;(or another URL that MPOWER may provide from time to time). You are advised to regularly review the policy. You accept modifications of the Terms of Use through online acceptance of the terms or through your continued use of any part of the Services following the posting of any such changes or modifications.</span></p>
<p class="c7"><span class="c1">&nbsp;</span></p>
<h5 class="c9" id="h.lyr5kpskc1e8"><span class="c13">PROVISIONS: ENFORCEABILITY AND SURVIVAL</span></h5>
<p class="c7"><span class="c1">Should any provision of the Terms of Use be held by a court of competent jurisdiction to be illegal, invalid, or unenforceable, that provision shall be deemed amended to achieve as nearly as possible the same economic effect as the original provision, and the legality, validity and enforceability of the remaining provisions of the Terms of Use shall not be affected or impaired thereby.</span></p>
<p class="c7"><span class="c1">The failure of either party to enforce any term or condition of the Terms of Use shall not constitute a waiver of either party&rsquo;s right to enforce each and every term and condition of the Terms of Use. No breach under the Terms of Use shall be deemed waived or excused by either party unless such waiver or consent is in writing signed by the party granting such waiver or consent. The waiver by or consent of a party to a breach of any provision of the Terms of Use shall not operate or be construed as a waiver of or consent to any other or subsequent breach by such other party.</span></p>
<p class="c7"><span class="c1">The parties agree that the Terms of Use states the entire agreement between the parties with respect to its subject matter and supersedes all prior agreements and representations of the parties, oral or written. The Terms of Use shall be binding upon and inure to the benefit of the parties&rsquo; authorized successors, legal representatives, and authorized assigns.</span></p>
<p class="c7"><span class="c1">&nbsp;</span></p>
<h5 class="c9" id="h.7bx8wtroy2lo"><span class="c13">NOTICES</span></h5>
<p class="c7"><span class="c1">All notices, demands, requests, consents or other communications required or permitted by the Terms of Use (&ldquo;Notices&rdquo;) shall be in writing and sent to the parties at their current known addresses, or to such other address as either party may specify in writing. Notices shall be deemed duly served on or delivered (1) when delivered personally, (2) when sent to the other party by certified mail, return receipt requested, (3) when delivered by hand or sent by recognized overnight courier (with acknowledgment received by the courier), or (4) sent by facsimile, electronically confirmed and followed up immediately by standard United States mail.</span></p>
<p class="c7"><span class="c1">&nbsp;</span></p>
<h5 class="c9" id="h.tvge8uevm9dc"><span class="c13">DISPUTES</span></h5>
<p class="c7"><span class="c1">The Terms of Use shall be governed by and construed in accordance with the laws of the State of Delaware without reference to its principles of conflicts or choice of law. The parties hereby opt out of the Uniform Computer Information Transaction Act to the fullest extent permitted by law.</span></p>
<p class="c7"><span class="c1">The parties waive any right to a jury trial in any proceeding arising out of or related to the terms of use or any confidential information, intellectual property rights, or self-hosted services that are the subject of the terms of use.</span></p>
<p class="c7"><span class="c1">Any and all disputes arising under this Agreement shall only be resolved by courts located in the State of Delaware and the parties hereto consent to venue therein, the exclusive personal jurisdiction thereof, and to the sufficiency of service of process by certified or registered mail in connection with any dispute arising out of or in connection with the Terms of Use.</span></p>
<p class="c7"><span class="c1">In the event of any dispute arising out of or related to the Terms of Use, the prevailing party shall be entitled to recover its reasonable attorneys&rsquo; fees and costs.</span></p>
<p class="c7"><span class="c1">&nbsp;</span></p>
<h5 class="c9" id="h.ofugxi9lyvwr"><span class="c13">CONTACTS</span></h5>
<p class="c7"><span class="c1">You agree that we and any of our affiliates, agents, service providers or assignees may call you, leave you a voice, prerecorded, or artificial voice message, or send you a text, e-mail, or other electronic message for any purpose related to your loan with us, our products and services, or surveys or research (each a &ldquo;Communication&rdquo;). You agree that we and any of our affiliates, agents, service providers or assignees may call or text you at any telephone number associated with your loan, including cellular telephone numbers, and may send an e-mail to any email address associated with your loan. You also agree that we and any of our affiliates, agents, service providers or assignees may include your personal information in Communication and may conduct a Communication using an automatic telephone dialing system. We will not charge you for Communication, but your service provider may. In addition, you understand and agree we and any of our affiliates, agents, service providers or assignees may always communicate with you in any manner permissible by law that does not require your prior consent.</span></p>
<p class="c7 c39 c38 title" id="h.elu7rrp6m0b"><span class="c37"></span></p>
<p class="c7 c38 title" id="h.21jcn24972l"><span class="c42">Avanse</span></p>
<h1 class="c36" id="h.fe6nwdiz7g3u"><span class="c27">Terms &amp; Conditions</span></h1>
<h4 class="c51" id="h.8p3d2aitn030"><span class="c4">DATE OF LATEST VERSION: 8th September 2021</span></h4>
<p class="c2"><span class="c17">These Terms and Conditions (&quot;Terms&quot;) are an &quot;electronic records&quot; in terms of the Information Technology Act, 2000 (&quot;IT Act&quot;) and rules thereunder as applicable and amended from time to time (&quot;IT Rules&quot;) and are published by Avanse Financial Services Limited (&quot;Avanse&quot;) in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 (&quot;Intermediary Guidelines&quot;) that require publishing rules and regulations, privacy policy and terms of use for access or usage of Avanse&#39;s computer resources including the</span> <span class="c17"><a class="c35" href="https://www.google.com/url?q=https://avanse.com/&amp;sa=D&amp;source=editors&amp;ust=1696374131582585&amp;usg=AOvVaw1hAPPGuEVJJ25_qDGeehHe">www.avanse.com</a></span><span class="c1">&nbsp;website (&quot;Website&quot;) and Avanse&#39;s mobile applications including but not limited to mobile based Android/iOS applications (&quot;Applications&quot;) (collectively referred to as &quot;Platform&quot; hereafter). It is hereby clarified that Platform shall also include e-mails, social media, messenger, or dashboards of Avanse.</span></p>
<ol class="c5 lst-kix_x6befgd8qxo5-0 start" start="1">
	<li class="c8 li-bullet-0"><span class="c4">ACCEPTANCE OF TERMS AND MODIFICATION</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-1 start" start="1">
	<li class="c12 li-bullet-0"><span class="c4">These Terms along with the Privacy Policy as referred to in Clause 12 of these Terms (&quot;Privacy Policy&quot;) as maybe amended and supplemented, from time to time, constitutes a legally binding financial services end-user license agreement between Avanse and the visitor/user (&quot;User&quot;) for using various financial services provided by Avanse including but not limited to various loan products (&quot;Loans&quot;) and sharing certain data through the Platform (&quot;Services&quot;).</span></li>
	<li class="c12 li-bullet-0"><span class="c4">Avanse reserves the right, in its sole discretion, to make any changes to the Terms and the Services. Any changes to these Terms will only be effective when posted on the Platform, and the User agrees to review the Terms regularly to understand any changes. Avanse shall not be obligated to inform the User of any such change/modifications more than once in a calendar year.</span></li>
	<li class="c12 li-bullet-0"><span class="c15">If the User does not agree with any of the Terms, the User must not access the Platform. The User agrees that on such rejection, the User will not be able to access/ use the Platform/receive Services or seek any information from the Platform whatsoever.</span> <span class="c50 c34 c15">BY CONTINUING TO USE OR ACCESS THE PLATFORM THE USER IS DEEMED TO HAVE READ, UNDERSTOOD AND EXPRESSLY AGREED TO THE TERMS CONTAINED HEREIN AND FURTHER AGREES THAT SUCH TERMS SHALL CONSTITUTE A LEGALLY BINDING AGREEMENT BETWEEN AVANSE AND THE USER.</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-0" start="2">
	<li class="c8 li-bullet-0"><span class="c4">DATA COLLECTION/STORAGE AND PROCESSING By clicking on the &quot;SUBMIT / I AGREE&quot; button or by downloading or accessing the Platform in any mode/manner, the User implies his/her assent to the Terms and further:-</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-1 start" start="1">
	<li class="c12 li-bullet-0"><span class="c4">confirms that he/she has completed 18 (eighteen) years of age and is not prohibited from entering into a valid contract under any applicable laws.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">unconditionally accepts, without limitation or qualification that Avanse shall collect, process, store, authenticate, verify and confirm the User&#39;s personal data including name, e-mail address, gender, date of birth, mobile number, photograph, and any information that the User shares from Facebook and/or LinkedIn accounts to Avanse, financial information such as bank documents, bank statements, PAN card, bank account number, data from credit<br/>
	information companies, data from mobile network operators and other sensitive personal data as defined in the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, data required for Know Your Customer, e-KYC data, requirement and other relevant details, documents and details (&quot;Personal Data&quot;) as may be required by the Avanse from time to time in order to provide any Services including sanction the Loans, including but not limited to the User&#39;s Aadhar data through one time passwords, finger prints or iris scans as may be permitted from time to time under applicable law.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">agrees and acknowledges that any sub-sites (whether belonging to an associate or otherwise) accessed by the User through the Platform, may have their own terms and conditions, which are specific to such sub-site and Avanse should not be liable for any data collection, sharing or processing by such sub-sites.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">declares that all the particulars and information provided by him/her are true, correct, complete and up-to-date in all respects and that he/she have not withheld any information whatsoever.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">authorizes Avanse to exchange, share all Personal Data including information and details as provided by him/her including in relation to any existing loans and/or repayment history to any third party including but not limited to its group companies, service providers, banks, financial institutions, credit information companies, telecommunication companies, statutory bodies, business partners etc. for customer verification, personalization of products or services, credit rating, data enrichment, marketing or promotion of Avanse&#39;s Services or related products or that of its associates/business partners and affiliates or for enforcement of his/her obligations under these Terms and any other documentation executed with Avanse in relation to the Services. He/she shall not hold Avanse (or any of its group companies or its/their agents/representatives/ business partners/service providers) liable for the use/sharing of the information as stated above.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">hereby expressly consents to and authorises Avanse/ its representatives/agents/business partners/group companies/affiliates to send him/her any communication regarding products/services offered by them using various communication channels, such as, telephone, calls/SMS/WhatsApp/bots/emails/post etc.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">understands that, for the purpose of providing the Services, the Platform shall require Personal Data of the User as set out in these Terms, and the User hereby expressly consents, permits and provides the Platform access to any such details as requested by the Platform from time to time.</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-0" start="3">
	<li class="c8 li-bullet-0"><span class="c4">REGISTRATION AND SERVICES</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-1 start" start="1">
	<li class="c12 li-bullet-0"><span class="c4">Access to certain areas of the Platform may only be available to registered Users. The User undertakes to provide correct and valid information/details for registration and requesting for or availing any Services under these Terms. At the time of registration, the User shall be required to share and upload his/her Personal Data and any other details as required by Avanse, pursuant to which the User shall receive a user ID and password. The User agrees and undertakes to be responsible for maintaining the confidentiality of the password and user ID at all times, and shall be fully responsible for all activities that are undertaken by use of such password or user ID. Further, the User agrees not to use any other party&#39;s user ID and password for any purpose whatsoever. The User is responsible for the security of his/her user ID and password and for all transactions undertaken using his/her user ID and password.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">The User also agrees and undertakes to immediately notify Avanse of any unauthorized use of the User&#39;s user ID or password. Avanse shall not be responsible for any, direct or indirect loss or damage arising out of the User&#39;s failure to comply with the requirements laid down in this Clause 3.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">The User represents and warrants that all information/details supplied by the User to Avanse, about the User, are true and accurate and no fact therein has been misrepresented. The User hereby provide its consent to Avanse, to share the information provided by the User with any service providers appointed by Avanse and their sub-contractor(s) if any, strictly for the purpose of providing Services under these Terms.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">If Avanse has reason to believe that any request received from the User for availing Services under these Terms is unauthorized or any information submitted by the User is untrue or false, Avanse in its sole discretion shall have the right to take any action against the User, including cancellation of the Services, revocation of access and use of the Platform, etc. without any prior notice to the User. Avanse shall not be responsible or liable for any loss or damage that may be caused to the User as a consequence of such cancellation of the Services or revocation of access and use of the Platform.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">Once the User uploads and verifies the Personal Data and/or other documents and details, Avanse shall rely on the same and may process applications made by the User, with or without additional due diligence/authentication. Upon successful completion of the document verification by Avanse, Services (including the sanction of the Loan) may be provided by Avanse to the User, subject to the eligibility criteria and any other conditions set forth by Avanse for providing such Services.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">The User understands that Avanse shall disburse the Loan subject to fulfilment of the relevant terms and conditions and other requirements for the Loan and execution of all necessary documentation. The sanctioned Loan shall be disbursed in the designated bank account provided by the User. The User is required to repay the outstanding amount(s) to Avanse on the respective due date(s) mentioned by Avanse. Non-compliance of this provision shall be construed to be a material breach, and shall lead to termination of these Terms, in addition to any other criminal, civil remedy available to Avanse against the User.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">The User shall provide Personal Data only when he/she agrees with its usage and dissemination for the purpose of relevant Services and in accordance with the Terms herein. The User&#39;s withdrawal of consent shall be sent to Avanse in writing (which shall be effective subject to the applicable law and only to such extent practicable to give effect). On receiving such withdrawal of consent Avanse shall have an option to not provide the Services or to recall/withdraw any Services provided earlier for which such Personal Data was sought.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">The User further acknowledges that the User shall adhere to any Know Your Customer guidelines issued by Avanse which shall be in accordance with the Reserve Bank of India (Know Your Customer (KYC) Directions, 2016 as amended or supplemented from time to time. These guidelines shall be displayed on the Platform.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">The User further agrees that on availing the Services from Avanse, he/she shall be contracting with Avanse on a principal to principal basis.</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-0" start="4">
	<li class="c8 li-bullet-0"><span class="c4">PLATFORM CONTENTS AND INTELLECTUAL PROPERTY RIGHTS</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-1 start" start="1">
	<li class="c12 li-bullet-0"><span class="c4">Upon agreeing to comply with these Terms, the User shall be granted a non-exclusive, non-transferable, limited right to access, view and use the Platform. Unless otherwise specified, the Platform is only for personal and non-commercial use by the User.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">All materials displayed on the Platform, including but not limited to text, images, photographs, graphics, audio, video, software, icons, reports generated, trademarks, tradenames or other material (the &quot;Content&quot;) belong to Avanse and form part of Avanse&#39;s intellectual property. Intellectual property laws in all applicable jurisdictions protect the Platform all its Content.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">The User hereby acknowledges that there may be proprietary logos, service marks and trademarks on the Platform that are owned/used by licensors of Avanse and other third party(s) (&quot;Third Party Content&quot;). By displaying them on this Platform, Avanse does not grant any license/authority to the User to utilize any such Third Party Content. Any unauthorized use of the Third Party Content by the User may violate extant laws and regulations that protect such Third Party Content under intellectual property law and may lead to personal liability along with civil and criminal action against the User by such licensors/third parties.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">Avanse and its licensors (where applicable), are the sole owners of the Content and Third Party Content, the software and all source code associated with the Platform including all the trademarks, copyright and any other intellectual property rights of any nature in relation to the Platform.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">The User agrees to abide by all instructions provided on the Platform regarding the use of the Content/Third Party Content and any application thereof.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">The User acknowledges and agrees that the User will not transmit, distribute, show, exchange, modify, sell, upload, post, reproduce, copy, mirror, frame, republish, download, store (in any medium), up-load to a third party, adapt or change in any way the Content/Third Party Content such that the intellectual property rights of Avanse or any third party are affected, or create derivative works of the Content, Third Party Content or the Services for any business, commercial or public purpose without the express written authorization of Avanse or its licensors (where applicable), except to the extent that such copying/printing is necessary for the purposes of availing the Services.</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-0" start="5">
	<li class="c8 li-bullet-0"><span class="c4">PROHIBITED CONDUCT</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-1 start" start="1">
	<li class="c12 li-bullet-0"><span class="c4">The User shall not interrupt or attempt to interrupt the operation of the Platform in any manner whatsoever.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">The User hereby agrees not to use the Platform to:</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-2 start" start="1">
	<li class="c21 li-bullet-0"><span class="c4">Transmit any information or do anything that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libellous, invasive of another&#39;s privacy, hateful, or racially, ethnically or otherwise objectionable;</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with any person or entity;</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Forge headers or otherwise manipulate identifiers in order to disguise the origin of any information transmitted through the Platform;</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Transmit any information that you do not have a right to transmit or which infringes on the rights of Avanse or any of its licensors or any other third party;</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Carry out any activity which constitutes or encourages conduct that would be considered a criminal offence, give rise to civil liability, or otherwise be contrary to the law of or infringe the rights of any third party, in any country in the world;</span></li>
	<li class="c21 li-bullet-0"><span class="c4">transmit any material that contains adware, malware, spyware, software viruses, time bombs, cancel bots, worms, trojan horses, or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware or telecommunications equipment.</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Interfere with or disrupt the Platform/Services or servers or networks connected to the Platform/Services, or violate any requirements, procedures, policies or regulations of networks connected to the Platform, or collect or store Personal Data about other users without their express consent;</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Transmit any content:</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-3 start" start="1">
	<li class="c14 li-bullet-0"><span class="c4">Which exploits children under 18 years of age;</span></li>
	<li class="c14 li-bullet-0"><span class="c4">Which promotes mail fraud, multi-level marketing (pyramid) schemes or other illegal or fraudulent activities;</span></li>
	<li class="c14 li-bullet-0"><span class="c4">Which has been promoted through the sending of spam or mail fraud schemes, or pages that promote or condone the sending of spam. The sending of the same will result in an immediate suspension of the Services availed by the User.</span></li>
	<li class="c14 li-bullet-0"><span class="c4">That is or contains links to nudity, pornography, adult content, materials with sex or foul language.</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-0" start="6">
	<li class="c8 li-bullet-0"><span class="c4">MONITORING SITE CONTENT</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-1 start" start="1">
	<li class="c12 li-bullet-0"><span class="c4">The User permits Avanse in its sole discretion and for any reason deemed fit by Avanse, to: (i) monitor the Content, including any material submitted by the User, on the Platform, including chat rooms, electronic bulletin boards, forums and other communications facilities, to determine compliance with these Terms; and (ii) edit, refuse to post or remove any material submitted by the User.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">Nothing contained in this clause 7 (a) shall have the effect of creating any obligation on Avanse to monitor or censor any Content or material displayed on the Platform.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">Avanse reserves the right to host moderated or un-moderated forums on other web pages to which the Users can post materials (&quot;Forums&quot;). Avanse is not responsible for:</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-2 start" start="1">
	<li class="c21 li-bullet-0"><span class="c4">Materials posted to Forums by third parties, whether or not such Forum is moderated by Avanse;</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Materials altered by Avanse in moderating Forums; or</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Any removal of, or failure to remove, all or any part of such materials.</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-0" start="7">
	<li class="c8 li-bullet-0"><span class="c4">TERMINATION</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-1 start" start="1">
	<li class="c12 li-bullet-0"><span class="c4">Avanse reserves the right to terminate any Services availed by the User, or any access to and use of the Platform by the User forthwith, without any prior notice to the User, in the event:</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-2 start" start="1">
	<li class="c21 li-bullet-0"><span class="c4">The User is determined to be in breach of any of these Terms;</span></li>
	<li class="c21 li-bullet-0"><span class="c4">The use of or access to the Platform or the availing of any Services by the User disrupts Avanse&#39;s business operations or affects or encroaches the rights of any other third party.</span></li>
	<li class="c21 li-bullet-0"><span class="c4">if such access and use results or may result in, or is the subject of, legal action or threatened legal action against Avanse or any of its affiliates or partners, without consideration for whether such legal action or threatened legal action is eventually determined to be with or without merit;</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Such termination is required under any applicable law or by way of any order from an authority having jurisdiction over the Services/Platform.</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Any other reasons at the sole discretion of Avanse.</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-1" start="2">
	<li class="c12 li-bullet-0"><span class="c4">Upon termination of these Terms, the User&#39;s right to use the Platform/ Services shall immediately cease. The User shall have no right and Avanse shall have no obligation thereafter to execute any of the User&#39;s uncompleted tasks or forward any unread or unsent messages to the User or any third party.</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-0" start="8">
	<li class="c8 li-bullet-0"><span class="c4">RESERVATION OF RIGHTS Notwithstanding anything contained in these Terms, Avanse has the sole discretion and reserves the right to:</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-1 start" start="1">
	<li class="c12 li-bullet-0"><span class="c4">censor any Content on the Platform that is deemed inappropriate by Avanse;</span></li>
	<li class="c12 li-bullet-0"><span class="c4">cooperate fully with any law enforcement authority in any jurisdiction in respect of a lawful direction or request to disclose the identity or other information about anyone posting materials which the authority claims violates any applicable law;</span></li>
	<li class="c12 li-bullet-0"><span class="c4">modify, suspend or terminate, temporarily or permanently, the access to the Platform and/or the Services or any portion thereof at any time, without notice, for general maintenance. This includes removing information transmitted by the User to the Platform. The User agrees that it may be necessary for Avanse to temporarily suspend the access and use to the Platform for technical reasons or to maintain network equipment or facilities.</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-0" start="9">
	<li class="c8 li-bullet-0"><span class="c4">INDEMNIFICATION<br/>
	The User agrees to indemnify, defend and hold harmless Avanse, its affiliates, group companies and their directors, officers, employees, representatives, agents, third party service providers, and any other third providing any service to Avanse in relation to the Platform/Services whether directly or indirectly (&quot;Indemnified Parties&quot;), from and against any and all losses, liabilities, claims, damages, costs and expenses (including legal fees and disbursements in connection therewith and interest chargeable thereon) asserted against or incurred by the Indemnified Parties that arise out of, result from, or may be payable by virtue of :</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-1 start" start="1">
	<li class="c12 li-bullet-0"><span class="c4">Any breach or non-performance of any representation, warranty, covenant or agreement made or obligation to be performed by the User pursuant to this agreement.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">Violation of any law, country specific rules and regulations, general code of conduct or rights of a third party by the User; or</span></li>
	<li class="c12 li-bullet-0"><span class="c4">Availing of Services and access and use of the Platform by the User.</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-0" start="10">
	<li class="c8 li-bullet-0"><span class="c4">LIMITATION OF LIABILITY</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-1 start" start="1">
	<li class="c12 li-bullet-0"><span class="c4">Notwithstanding anything contained herein, Avanse, its officers, directors, owners, agents and employees shall in no way be liable to the User or any other person whatsoever for any direct, indirect, incidental or consequential damages or economic loss or injury arising, whether in contract, tort or otherwise from the User&#39;s use or inability to use the Platform, or any of its Contents, or from any action or omission taken as a result of using the Services or any other services or products provided to the User or any other website to which the Platform is linked. This includes (but is not restricted to) loss or damage that the User might suffer as a result of any of the following:</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-2 start" start="1">
	<li class="c21 li-bullet-0"><span class="c4">The User&#39;s reliance on the completeness, accuracy, suitability or currency of the Platform or its Content (including all third party material and advertisements on the Platform), irrespective of any verifying measures taken by Avanse;</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Any failure of performance, error, omission, interruption, deletion, defect, failure to correct defects, delay in operation or transmission, computer virus or other harmful component, loss of data, communication line failure, unlawful third party conduct, or theft, destruction, alteration or unauthorised access to records on the Platform by Avanse or any other third party;</span></li>
	<li class="c21 li-bullet-0"><span class="c4">.Defamatory, threatening, offensive or unlawful conduct of third parties or Avanse&#39;s publication of any materials relating to or constituting such conduct;</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Any damages or economic loss, whatsoever, as a result of notifying any official of potentially illegal content on website, or for providing copies of the User&#39;s data files to the appropriate authorities or cooperating with law enforcement efforts to locate any persons who have posted content that is illegal or promotes illegal conduct.</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-1" start="2">
	<li class="c12 li-bullet-0"><span class="c4">However, nothing contained in this clause shall exclude or limit our liability which cannot be excluded or limited under applicable law.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">The User further agrees and acknowledges that all Services shall be provided subject to and based upon the details and/or information provided by the User. In case the details are inaccurate and do not comply with the guidelines issued by Avanse in this regard, Avanse shall have no liability whatsoever with respect to such details/information.</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-0" start="11">
	<li class="c8 li-bullet-0"><span class="c4">CONFIDENTIALITY Any information specifically mentioned by Avanse as confidential shall be maintained confidentially by the User and shall not be disclosed unless required under any law to the appropriate authorities or to serve the purposes of these Terms and any obligations of the Parties captured herein.</span></li>
	<li class="c8 li-bullet-0"><span class="c4">PRIVACY POLICY</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-1 start" start="1">
	<li class="c12 li-bullet-0"><span class="c15">Avanse is committed to protecting the User&#39;s privacy. Avanse&#39;s Privacy Policy, available at:</span> <span class="c15"><a class="c35" href="https://www.google.com/url?q=https://www.avanse.com/privacy-policy.php&amp;sa=D&amp;source=editors&amp;ust=1696374131588748&amp;usg=AOvVaw1V046bVKk5LaEs7uCx5hkD">https://www.avanse.com/privacy-policy.php</a></span><span class="c4">, and sets out Avanse&#39;s obligations with respect to the safeguarding, collection and use of the Personal Data of the Users. Avanse ensures that only authorized employees, representatives and professionals use any Personal Data collected from individual Users on a need to know basis. Avanse periodically reviews its systems and data to ensure the best possible service to the Users.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">Avanse takes appropriate steps to protect the information the User shares on the Platform, including having effective technology, security features and strict policy guidelines in place to safeguard the privacy of any Personal Data from unauthorized access, misuse and disclosure.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">Avanse will continue to reinforce its security procedures as advanced technology becomes available, to ensure that that its security procedures are compliant with current applicable regulations.</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-0" start="13">
	<li class="c8 li-bullet-0"><span class="c4">DISCLOSURES</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-1 start" start="1">
	<li class="c12 li-bullet-0"><span class="c4">Avanse does not sell, rent, share, lease or otherwise provide Personal Data to third parties, without the User&#39;s prior consent. Without prejudice to the foregoing, Avanse may disclose Personal Data in the following cases:</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-2 start" start="1">
	<li class="c21 li-bullet-0"><span class="c4">Administrators- Avanse shall provide authorized administrative(s) access to the User&#39;s Personal Data for internal business purposes, provided that such authorized administrative(s) shall be under confidentiality obligations towards Avanse.</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Affiliates- Avanse may provide Personal Data to its affiliates. For example, Avanse may disclose Personal Data to its affiliates in order to respond to the User&#39;s requests for information or Services, or to help limit receipt of marketing materials the User has requested not to receive.</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Business Partners-. Avanse may use certain trusted third-party companies and individuals to help provide, analyse, and improve the Services including but not limited to data storage, maintenance services, database management services, credit bureau services, services of rating agencies, web analytics, payment processing, and any other service for the improvement of the Platform&#39;s features. These third parties may have access to the User&#39;s information only for purposes of performing these tasks on Avanse&#39;s behalf and under confidentiality and data protection obligations similar to those in this Terms. Avanse may disclose the User&#39;s Personal Data to partners who perform business functions or hosting services on Avanse&#39;s behalf and may be located outside of India.</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Service Providers- Avanse may share your Personal Data to third party service providers, who are working with Avanse in connection with the operation of the Services or the Platform, so long as such service providers are subject to confidentiality restrictions consistent with these Terms.</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Joint Marketing Arrangements- Where permitted by law, Avanse may share your Personal Data with joint marketers with whom Avanse has a marketing arrangement. Avanse will require all such joint marketers to have written contracts with Avanse that specify appropriate use of the User&#39;s Personal Data, requires the joint marketers to safeguard such Personal Data, and prohibits the joint marketers from making unauthorized or unlawful use of the User&#39;s Personal Data. The User hereby acknowledges and consents to such use and sharing of data.</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Assignee/Acquirer of Avanse&#39;s Business- In the event of a selldown or transfer Avanse&#39;s business or assets, certain Personal Data may be transferred to the person/entity acquiring the business/asset. Avanse will ensure that prior notice is provided to the User before any such selldown.</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Legal and Regulatory Authorities- Avanse may be required to disclose Personal Data due to legal or regulatory requirements. In such instances, Avanse reserves the right to disclose Personal Data as required in order to comply with any legal obligations, including but not limited to complying with court orders, warrants, or discovery requests. Avanse may also disclose Personal Data to (a) any law enforcement officers or other authorized officials having jurisdiction over the Platform; (b) Credit Information Companies; (c) comply with a judicial proceeding, court order, or legal process served on Avanse or the Platform; (d) enforce or apply these Terms or any other policies or agreements executed between the Parties; (e) respond to claims that any Personal Data violates the rights of third-parties; (f) protect the rights, property, or personal safety of Avanse, or the general public. The User agrees and acknowledges that Avanse may not notify the User prior to or after any disclosure made in accordance with this section.</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-1" start="2">
	<li class="c12 li-bullet-0"><span class="c4">Notwithstanding anything mentioned hereinabove, Avanse shall not be responsible for the actions or omissions of the service providers or parties with whom any Personal Data is shared, nor shall Avanse be responsible and/or liable for any additional information the User may choose to provide directly to any service provider or any third party even if the User provides such information after redirection to a third party/service provider website while making use of the Platform.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">Any amendments to the Privacy Policy shall reflect here with a new effective date. The User undertakes to update himself/herself of the Privacy Policy regularly to ensure that the User understand and complies with such updated Privacy Policy.</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-0" start="14">
	<li class="c8 li-bullet-0"><span class="c4">COOKIES The User agrees that the Avanse interactive website uses cookies to enable Avanse to retrieve User details for each visit and to enable additional functionality of the Platform.</span></li>
	<li class="c8 li-bullet-0"><span class="c4">THIRD PARTY ADVERTISEMENTS AND LINKS</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-1 start" start="1">
	<li class="c12 li-bullet-0"><span class="c4">Avanse may provide links to other websites for the User&#39;s convenience. Avanse does not take any responsibility or endorse any content displayed on such third-party websites. The User shall access such website at its own risk and Avanse and will not be liable for their availability or for any loss or damage incurred by the User pursuant to the access to or use of such third-party websites.</span></li>
	<li class="c12 li-bullet-0"><span class="c4">The User acknowledges that the Platform may contain third party advertisement. Avanse is not responsible for the content of any advertising material or any errors or inaccuracy in any advertising or sponsorship. Avanse partners with third-party advertising companies to serve ads and/or collect certain information when the User visit the Platform. These third-party advertising companies may use cookies or web beacons to collect non-personally identifiable information not including your name, address, email address or telephone number while the User is accessing the Platform in order to help show advertisements on other websites likely to be more interesting to the User. The User hereby provides its consent for the above arrangement.</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-0" start="16">
	<li class="c8 li-bullet-0"><span class="c4">TERMS OF TRADE</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-1 start" start="1">
	<li class="c12 li-bullet-0"><span class="c4">The following conditions (in addition to, and to the extent these conditions are consistent with, any terms or conditions relating to the Services appearing elsewhere on our web pages or otherwise the subject of an agreement between the Parties) will be applicable to any User availing Services through the Platform:</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-2 start" start="1">
	<li class="c21 li-bullet-0"><span class="c4">Any application of the User is an offer to avail the Services which Avanse may accept, in whole or in part. Any acknowledgment of the User&#39;s application is only to confirm receipt of transmission, notwithstanding that such acknowledgement might state or imply that such application has been accepted;</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Where the Services offered through the Platform are supplied by third parties, Avanse is only an intermediary and will not responsible for such portion of the Services or their delivery;</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Unless otherwise stated, any fee payable by the User excludes any applicable service tax and delivery and insurance charges;</span></li>
	<li class="c21 li-bullet-0"><span class="c4">The provision of Services to the User does not confer on the User any intellectual property rights (such as marks, designs, copyright or patents) inherent in the Services supplied;</span></li>
	<li class="c21 li-bullet-0"><span class="c4">Services available through this Platform are subject to change at any time without any notice to the User. Services listed on the Platform may not be available immediately or at all.</span></li>
</ol>
<ol class="c5 lst-kix_x6befgd8qxo5-0" start="17">
	<li class="c8 li-bullet-0"><span class="c4">FORCE MAJEURE Avanse shall not be liable for any delay, interruption or failure in the provision of Services and access and use of the Platform if caused by acts of God, declared or undeclared war, fire, flood, storm, slide, earthquake, power failure, the inability to obtain equipment, supplies or other facilities or any other events beyond the control of Avanse that may prevent or delay the provision of Service or access and use to the Platform.</span></li>
	<li class="c8 li-bullet-0"><span class="c4">SEVERABILITY If any provision of these Terms is found to be invalid or unenforceable under any applicable law, such provision will be ineffective to the extent of such invalidity or unenforceability, without affecting the remaining provisions of these Terms in any way.</span></li>
	<li class="c8 li-bullet-0"><span class="c4">AMENDMENT Avanse may, in its sole discretion, change or modify these Terms at any time, with or without notice to the User. Such changes or modifications shall be effective for all Users upon being published on the Platform. The User is responsible for reading the updated Terms from time to time to ensure that the use and access of the Services/Platform remains in compliance with these Terms.</span></li>
	<li class="c8 li-bullet-0"><span class="c4">AGE OF MAJORITY Avanse does not accept agreements and payments from persons below the legal age of 18 years. By submitting an application, the User confirms that he/she is over 18 years of age or the User&#39;s parent or legal guardian have accepted these Terms on his/her behalf.</span></li>
	<li class="c8 li-bullet-0"><span class="c4">WAIVER No waiver of any of the provisions of these Terms will be deemed to constitute a waiver of any other provision nor shall such a waiver constitute a continuing waiver unless otherwise expressly provided in writing and duly executed by the Party to be bound thereby.</span></li>
	<li class="c8 li-bullet-0"><span class="c15">ENTIRE AGREEMENT These Terms as may be updated from time to time and published on</span> <span class="c15"><a class="c35" href="https://www.google.com/url?q=https://avanse.com/&amp;sa=D&amp;source=editors&amp;ust=1696374131591776&amp;usg=AOvVaw0MRPy7SyxyO0o2d6LM_NmD">www.avanse.com</a></span><span class="c4">&nbsp;represent the complete agreement and understanding between the Parties with respect to the Service/the Platform and supersedes any other written or oral agreement between the Parties.</span></li>
	<li class="c8 li-bullet-0"><span class="c4">NOTICES The User agrees that unless updated on the Platform, any notices required to be given under these Terms will be deemed to have been given if delivered by email or fax, or sent by registered mail or courier to each of the Parties in accordance with the contact information the User and Avanse have updated on the Platform. All notices shall be effective upon receipt, except that email and fax notices shall be effective upon transmission.</span></li>
	<li class="c8 li-bullet-0"><span class="c4">GOVERNING LAW AND DISPUTE RESOLUTION The rights and obligations of the Parties pursuant to these Terms are governed by the laws of India. For any dispute or difference, the User irrevocably and unconditionally submits to the non-exclusive jurisdiction of the Courts in Mumbai.</span></li>
	<li class="c8 li-bullet-0"><span class="c4">DISCLAIMER The User agrees that in case the User requires specific advice for individual circumstances, the User will consult an appropriate expert directly and not rely on the general material on this Platform. Avanse will endeavour to assist the User if the User specifically inquiries about matters in which Avanse has expertise, but cannot accept any responsibility for doing this.</span></li>
	<li class="c8 li-bullet-0"><span class="c4">DISCLAIMER NOTICE THIS PLATFORM AND ITS CONTENT ARE ONLY FOR THE NON-COMMERCIAL AND PERSONAL USE OF THE USER. AVANSE MAKES NO REPRESENTATIONS OR WARRANTIES WITH RESPECT TO THIS PLATFORM OR ITS CONTENTS, DOES NOT ASSUME RESPONSIBILITY FOR OR MONITOR CONTENT ON ANY PAGES/WEBSITES THAT ARE NOT PART OF AVANSE, AND ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF MERCHANTABILITY, SATISFACTORY QUALITY AND FITNESS FOR PURPOSE RELATING TO THIS PLATFORM AND/OR ITS CONTENT AND/OR ANY WEBSITE TO WHICH IT IS LINKED ARE HEREBY TO THE FULLEST EXTENT PERMITTED BY LAW EXCLUDED. NO REPRESENTATIONS OR WARRANTIES ARE GIVEN AS TO THE ACCURACY OR COMPLETENESS OF THE INFORMATION PROVIDED ON THIS PLATFORM, OR ANY WEBSITE TO WHICH IT IS LINKED.<br/>
	AVANSE SHALL NOT BE RESPONSIBLE FOR ANY LOSS, LIABILITY, DAMAGE (WHETHER DIRECT, INDIRECT OR CONSEQUENTIAL), PERSONAL INJURY OR EXPENSE OF ANY NATURE WHATSOEVER WHICH MAY BE SUFFERED BY THE USER OR ANY THIRD PARTY AS A RESULT OF OR WHICH MAY ATTRIBUTABLE, DIRECTLY OR INDIRECTLY, TO THE USER&#39;S ACCESS AND USE OF THE SERVICES AND ON ACCOUNT OF THE USER GIVING DELIBERATELY FALSE AND/OR MISLEADING INFORMATION TO AVAIL OF THE SERVICES. ENTERING THIS PLATFORM AND/OR REGISTRATION FOR SERVICES, AVAILING OF THE SERVICES FROM THIS PLATFORM WILL BE TAKEN AS THE USER&#39;S UNDERSTANDING AND ACCEPTANCE OF THIS DISCLAIMER.<br/>
	THE USE BY AVANSE OF ANOTHER&#39;S TRADE MARK ON THIS PLATFORM IS NOT OF ITSELF INTENDED TO INDICATE ANY ASSOCIATION WITH OR ENDORSEMENT BY OR OF THE OWNER OF THAT TRADE MARK.</span></li>
</ol>
<h1 class="c36" id="h.f8p9xuht88x5"><span class="c27">Disclaimer</span></h1>
<p class="c2"><span class="c1">All the information, material, terms and conditions, advices, suggestions, illustrations notifications, circulars etc. as stated in this website are collectively referred to as &quot;said contents&quot;. The said contents obtained or available at/through this site is/are provided on an &quot;as is basis&quot; and not guaranteed or warranted in terms of completeness, accuracy, reliability or otherwise by Avanse Financial Services Limited (the Company) or any of its Directors/ Officials. Any ideas and/or information provided or gained from this site would not necessarily reflect the views of the Company or its Directors or its employees. The Company takes no responsibility and guarantee that the information and data on this site is free from any kind of computer viruses or any such infection.</span></p>
<p class="c2"><span class="c1">Any action on your part on the basis of the said contents is at your own risk and responsibility. In no event the Company or its Directors or its officials shall be liable for any damages, including without limitation direct or indirect, special, incidental, or consequential damages, losses or expenses arising in connection with this site or use thereof or inability to use by any party, or in connection with any failure of performance, error, omission, interruption, defect, delay in operation or transmission, computer virus or line or system failure, even if the Company, or its Directors or its officials thereof, are advised or notified of the possibility of such damages, losses or expenses. Hyperlinks from and to other websites are at your own risk, the content, accuracy opinions expressed, and other links provided by these resources are not investigated, verified, monitored, or endorsed by the Company.</span></p>
<p class="c2"><span class="c1">The said contents obtained at/or through this site is not and should not be construed as an offer to sanction any loan or any other assistance. The said contents are subject to change from time to time by the Company depending upon various factors. While an endeavor is made to update the said contents regularly, the Company does not guarantee that the website reflects updated and accurate said contents.</span></p>
<p class="c2"><span class="c1">Copyright in the pages and in the screens displaying the pages, and in the information and material therein and in their arrangement, is owned by the Company, unless otherwise indicate.</span></p>
<p class="c2 c38 title" id="h.g5z5mpswkt2"><span class="c40">HDFC Credila</span></p>
<p class="c23"><span class="c18 c25">Fair Practices Code</span></p>
<p class="c22"><span class="c10">This Code has been formulated by HDFC Credila Financial Services Limited (&quot;HDFC Credila&quot;) pursuant to Guidelines issued by the Reserve Bank of India (&quot;RBI&quot;) on Fair Practices Code for Non Banking Finance Companies vide the Master Direction - Non-Banking Financial Company - Systemically Important Non-Deposit taking Company and Deposit taking Company (Reserve Bank) Directions, 2016 as amended from time to time.</span></p>
<p class="c22"><span class="c10">It is, and shall be, the policy of HDFC Credila to make all its financial products available to all eligible qualified applicants, without discrimination on the basis of race, caste, color, religion, sex, marital status, age or handicap. HDFC Credila&rsquo;s policy is to treat all the customers fairly. HDFC Credila will also communicate its Fair Practices Code (FPC) to its customers by making the FPC available to everybody on its website and displaying the FPC at all its branches. A copy of the said FPC would be made available on request and would be provided in respective regional language prevalent in the particular state in which HDFC Credila operates in on request.</span></p>
<p class="c22"><span class="c10">HDFC Credila will ensure that the implementation of the FPC is the responsibility of the entire organization. HDFC Credila&#39;s fair lending practices shall apply across all aspects of its operations including marketing, loan origination, processing, servicing and collection activities.</span></p>
<p class="c22"><span class="c10">HDFC Credila&#39;s Board of Directors and the management team are responsible for implementing the fair practices hereinafter detailed, and also ensure that its practices reflect its strong commitment to all the stakeholders for offering, in a fair and equitable manner, the various financial services and products and that all employees are aware of this commitment.</span></p>
<p class="c28"><span class="c3">Key Commitments</span></p>
<p class="c53"><span class="c19">The key commitments which HDFC Credila promises to follow in its dealings with its customers are:</span></p>
<ul class="c5 lst-kix_s7jbyjlp4dkr-0 start">
	<li class="c31 li-bullet-0"><span class="c10">To act fairly and reasonably in all dealings with its customers by ensuring that:</span></li>
</ul>
<ul class="c5 lst-kix_s7jbyjlp4dkr-1 start">
	<li class="c11 li-bullet-0"><span class="c10">Its products, services, procedures and practices will meet the commitments and standards in this FPC</span></li>
	<li class="c11 li-bullet-0"><span class="c10">Its products and services will meet relevant laws and regulations as applicable</span></li>
	<li class="c11 li-bullet-0"><span class="c10">Its dealings with its customers will rest on its ethical principles of honesty, integrity and transparency.</span></li>
</ul>
<ul class="c5 lst-kix_s7jbyjlp4dkr-0">
	<li class="c31 li-bullet-0"><span class="c10">To assist its customers in understanding how its financial products and services work by:</span></li>
</ul>
<ul class="c5 lst-kix_s7jbyjlp4dkr-1 start">
	<li class="c11 li-bullet-0"><span class="c10">Providing information about them in a language and manner as understood by them</span></li>
	<li class="c11 li-bullet-0"><span class="c10">Explaining their financial implications</span></li>
</ul>
<ul class="c5 lst-kix_s7jbyjlp4dkr-0">
	<li class="c31 li-bullet-0"><span class="c10">To ensure its customers have a trouble-free experience in dealing with it and in case of any errors of commission or omission, HDFC Credila would deal with the same quickly and sympathetically.</span></li>
</ul>
<p class="c24 c45"><span class="c3">Applications For Loans &amp; Loan Application Processing</span></p>
<ul class="c5 lst-kix_16jko5t0kjse-0 start">
	<li class="c31 c33 li-bullet-0"><span class="c10">HDFC Credila&#39;s website and loan application forms with supporting documents include necessary information which affects the interest of the borrower, so that a meaningful comparison with the terms and conditions offered by other NBFCs can be made and informed decision can be taken by the borrower. The website and loan application form with supporting documents will also indicate the documents required to be submitted with the application form.</span></li>
	<li class="c31 c33 li-bullet-0"><span class="c10">HDFC Credila will provide appropriate acknowledgement for receipt of loan applications. The time frame within which loan applications will be disposed of will also be indicated in the acknowledgement.</span></li>
</ul>
<p class="c16"><span class="c3">Loan Appraisal &amp; Terms/Conditions</span></p>
<p class="c22"><span class="c10">HDFC Credila will convey in writing to the borrower by means of sanction letter, the amount of loan sanctioned along with the terms and conditions including annualized rate of interest and method of application thereof and keep the acceptance of these terms and conditions by the borrower on its record. HDFC Credila shall also mention the penal interest for late repayment in bold in the loan agreement.</span></p>
<p class="c22"><span class="c10">The aforesaid rate of interest applicable to customers would be based on HDFC Credila&#39;s Benchmark Lending Rate which in turn is dependent on factors such as cost of funds, margin, etc. plus a spread which is determined on the risk profile of the case which vary on account of a number of factors such as student&#39;s academic background, employability of the selected course from a selected college and country of study, financial strength of the co-borrower, loan repayment capability, credit history, collateral offered or not, serviceability of the loan through HDFC Credila&#39;s branch network, cost/s associated with underwriting and servicing the loan, etc.</span></p>
<p class="c16 c24"><span class="c3">Change In Terms &amp; Conditions</span></p>
<ul class="c5 lst-kix_v4f4lfvvc3pc-0 start">
	<li class="c31 c33 li-bullet-0"><span class="c10">HDFC Credila will give notice to the borrower of any change in the terms and conditions including disbursement schedule, interest rates, service charges, prepayment charges etc. HDFC Credila will also ensure that changes in interest rates and charges are effected only prospectively. A suitable condition in this regard has already been incorporated in the loan agreement.</span></li>
	<li class="c31 c33 li-bullet-0"><span class="c10">HDFC Credila will furnish a copy of the loan agreement, either electronically or physical paper copy, to all the borrowers upon disbursement of the loan.</span></li>
	<li class="c31 c33 li-bullet-0"><span class="c10">The decision of HDFC Credila to recall / accelerate payment or performance under the agreement shall be in consonance with the loan agreement.</span></li>
	<li class="c31 c33 li-bullet-0"><span class="c10">HDFC Credila will release all securities on repayment of all dues or on realization of the outstanding amount of loan subject to any legitimate right or lien for any other claim HDFC Credila may have against the borrower. If such right of set off is to be exercised, the borrower shall be given notice about the same with full particulars about the remaining claims and the conditions under which HDFC Credila is entitled to retain the securities till the relevant claim is settled/paid.</span></li>
</ul>
<p class="c16"><span class="c3">General</span></p>
<ul class="c5 lst-kix_telvea705yq-0 start">
	<li class="c31 li-bullet-0"><span class="c10">HDFC Credila will refrain from interference in the affairs of the borrower except for the purposes provided in the terms and conditions of the loan agreement (unless new information, not earlier disclosed by the borrower, has come to the notice of HDFC Credila).</span></li>
	<li class="c31 li-bullet-0"><span class="c10">In case of receipt of request from the borrower for transfer of the loan account, the consent or otherwise i.e. objection of the HDFC Credila, if any, will be conveyed within 21 days from the date of receipt of request. Such transfer shall be as per the contractual terms entered into with the borrower in consonance with law.</span></li>
	<li class="c31 li-bullet-0"><span class="c10">In the matter of recovery of loans, HDFC Credila will resort only to remedies which are legally and legitimately available to it and will not resort to undue harassment viz. persistently bothering the borrowers at odd hours, use of muscle power for recovery of loans, etc. HDFC Credila will make all efforts so that its staff is adequately trained to deal with the customers in an appropriate manner.</span></li>
	<li class="c31 li-bullet-0"><span class="c10">HDFC Credila will not charge foreclosure charges/ pre-payment penalties on any floating rate term loan sanctioned for purposes other than business to individual borrowers, with or without co-obligant(s), in line with the regulatory requirement.</span></li>
</ul>
<p class="c16 c24"><span class="c3">Grievance Redressal Mechanism</span></p>
<p class="c22 c24"><span class="c10">HDFC Credila has laid down the appropriate grievance redressal mechanism within the organization to resolve disputes arising in this regard which ensures that all disputes arising out of the decisions of HDFC Credila&rsquo;s functionaries are heard and disposed of at the next higher level.</span></p>
<p class="c22 c24"><span class="c10">The Board of Directors shall also periodically review the compliance of the Fair Practices Code and the functioning of the grievances redressal mechanism at various levels of management. A consolidated report of such reviews shall be submitted to the Board at periodic intervals.</span></p>
<ul class="c5 lst-kix_ws9okaxezj1h-0 start">
	<li class="c31 c33 li-bullet-0"><span class="c10">HDFC Credila will guide customers who wish to lodge a complaint and also provide guidance on what steps can be taken in case the customer is unhappy with the outcome.</span></li>
	<li class="c31 c33 li-bullet-0"><span class="c10">After examining the matter, HDFC Credila will send a response as soon as possible; HDFC Credila will also guide the customer on how to take the complaint further if the customer is not satisfied.</span></li>
	<li class="c31 c33 li-bullet-0"><span class="c10">A Grievance Redressal Officer shall be appointed for the redressal of grievances of the customers including the borrowers, in connection with any matter pertaining to business practices, lending decisions, credit management and recovery, who would in consultation with senior management officials oversee the Grievance Redressal Mechanism. The name and contact details of the Grievance Redressal Officer shall be displayed on the website of HDFC Credila and for the benefits of its customers, the same shall also be displaced prominently on the notice board at its branches/ offices where business is transacted.</span></li>
	<li class="c31 c33 li-bullet-0"><span class="c10">If the customer&#39;s complaint / dispute is not redressed by the Grievance Redressal Officer within a period of one month, the customer may appeal to the Officer-inCharge of the Regional Office of the Department of Non-Banking Supervision (DNBS) of the Reserve Bank of India (RBI), Mumbai under whose jurisdiction the registered office of HDFC Credila falls. The name and contact details of the Officerin-Charge of the Regional Office of the DNBS, RBI shall be displayed on the website of HDFC Credila and for the benefits of its customers, the same shall also be displaced prominently on the notice board at its branches/ offices where business is transacted.</span></li>
</ul>
<p class="c16"><span class="c3">Ombudsman Scheme</span></p>
<p class="c22"><span class="c10">HDFC Credila will display prominently, for the benefit of their customers, at their branches/ places where business is transacted, the name and contact details (Telephone/ Mobile numbers as also email addresses) of the PNOs/NOs/GROs and the name and contact details of the Ombudsman, who can be approached by the customer.</span></p>
<p class="c22"><span class="c10">HDFC Credila will prominently display the salient features of the Scheme (in English, Hindi and Vernacular language) at all their offices and branches in such a manner that a person visiting the office or branch has easy access to the information.</span></p>
<p class="c16"><span class="c3">Force Majeure</span></p>
<p class="c22"><span class="c56">The various commitments outlined and made by HDFC Credila are applicable under the normal operating environment. In the event of Force Majeure, HDFC Credila will not be able to fulfill the commitments under the FPC to the entire satisfaction of the customers and the other stakeholders.</span></p>
<p class="c49"><span class="c18 c25">Legal &amp; Disclaimers</span></p>
<p class="c22"><span class="c10">Welcome to HDFC Credila&#39;s web site, which is owned and maintained by HDFC Credila as a service to the web site visitors.</span></p>
<ul class="c5 lst-kix_iyw3xcecni0y-0 start">
	<li class="c31 li-bullet-0"><span class="c10">Disclaims any representation or responsibility in relation to any information or services offered, accessed or obtained through the HDFC Credila&#39;s web site.</span></li>
	<li class="c31 li-bullet-0"><span class="c10">Accepts no liability for any use of the information and data on the HDFC Credila&#39;s website.</span></li>
	<li class="c31 li-bullet-0"><span class="c10">Takes no guarantee that the information and data on the HDFC Credila&#39;s website is free of infection by computer viruses or any other problems.</span></li>
	<li class="c31 li-bullet-0"><span class="c10">Will under no circumstances be liable for any direct, indirect, incidental or special loss or damage, whether arising from negligence, breach of contract, defamation, infringement of copyright or other intellectual property rights, caused by any use of the HDFC Credila&#39;s website.</span></li>
	<li class="c31 li-bullet-0"><span class="c10">Shall exercise sole discretion on approval and disbursement of all loans.</span></li>
	<li class="c31 li-bullet-0"><span class="c10">CAUTION NOTICE: Users / Visitors are hereby informed that &quot;www.hdfccredila.com&quot; and &quot;www.credilaonestop.com&quot; are the only official websites of HDFC Credila Financial Services Limited, (the only subsidiary of HDFC Ltd. for education loans) and are hereby Cautioned from using any other website while dealing with HDFC Credila Financial Services Limited</span></li>
</ul>
<p class="c32"><span class="c46"></span></p>

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Container fluid className='secondary-hero section-block  position-relative'>
                <Row className='three-col-row'>
                    <Col>
                        <h1 className='hero-header'> Compare Study Abroad Loan Options!</h1>
                        <p>Fund your study abroad by comparing student loan options now.</p>
                        <p></p>
                    </Col>
                </Row>

                <Row className='mt-5 three-col-row'>
                    <Col>
                    <Button style={{display:'block',width:'fit-content', margin:'auto' }} variant="outline-light" className='extra-pad mt-3 mb-2' href='/users/sign_up?application_type=student_loan'>Compare Lending Partner Options <FontAwesomeIcon icon={faArrowRight} /> </Button>
                    </Col>
                    <Col xs={12}>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                
                                <div  className='compareGrid'>
                                <Image alt='Prodigy Logo' style={{display:'block'}} src='/images/partners/prodigy.png' />

                                    <div className='grid-item'>
                                        Term Length: 
                                        <br/>7-20 years
                                    </div>
                                    <div  className='grid-item with-text'>
                                        Fixed APR
                                        <br />
                                    </div>
                                    <div  className='grid-item with-text'>
                                    Variable APR
                                    <br/>11.18% - No Max
                                    </div>
                                    <div  className='grid-item with-text'>
                                    Balance Range
                                    <br/>$10,000 - $100,000
                                    </div>
                                    <div  className='grid-item with-text'>
                                        <Button href="/users/sign_up?application_type=student_loan" className='more'>Apply Now</Button>
                                    </div>
                                </div>

                            </Accordion.Header>
                            <Accordion.Body>
                                <h3>Qualifications</h3>
                                <ul>
                                    <li>	Must be attending a university supported on the Prodigy platform	</li>
                                    <li>	Must be pursuing a degree supported on the Prodigy platform	</li>
                                    <li>	Must be a resident of a country supported on the Prodigy platform	</li>
                                </ul>
                                <h3>What can they offer?</h3>
                                <ul>
                                    <li>	No co-signer, no collateral	</li>
                                    <li>	Quick, easy online application	</li>
                                    <li>	No hidden fees, no surprises	</li>
                                    <li>	Loans for tuition and living costs	</li>
                                    <li>	Start paying 6 months after classes end	</li>
                                    <li>	Pay early to save on interest, no penalties	</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <div  className='compareGrid'>
                                <Image alt='MPOWER Logo' src='/images/partners/MPOWER.png' />
                                    <div className='grid-item'>
                                        
                                        Term Length: 
                                        <br/>10 years
                                    </div>
                                    <div  className='grid-item with-text'>
                                        Fixed APR
                                        <br />12.74% - 15.01%
                                    </div>
                                    <div  className='grid-item with-text'>
                                    Variable APR
                                    <br/>
                                    </div>
                                    <div  className='grid-item with-text'>
                                    Balance Range
                                    <br/>$2,001 - $100,000
                                    </div>
                                    <div  className='grid-item with-text'>
                                        <Button href="/users/sign_up?application_type=student_loan" className='more'>Apply Now</Button>
                                    </div>
                                </div>

                            </Accordion.Header>
                            <Accordion.Body>
                                <h3>Qualifications</h3>
                                <ul>
                                    <li>	An undergraduate or graduate student within 2 years of graduating or about to begin a 1-year or 2-year program.	</li>
                                    <li>	An international student, DACA recipient, U.S. citizen, refugee, or asylum-seeker.	</li>
                                    <li>	Admitted to or attending one of our 400+ approved schools in the U.S. or Canada.	</li>
                                </ul>
                                <h3>What can they offer?</h3>
                                <ul>
                                    <li>	No fees paid out-of-pocket, pay nothing until your first interest-only loan payment	</li>
                                    <li>	Fund up to 100% of education expenses, including living expenses for schools in the U.S.	</li>
                                    <li>	Get visa support, career services, and build your U.S. credit history by making on-time payments	</li>
                                    <li>	Up to 0.25% in interest rate discounts	</li>
                                    <li>	In just 30 seconds you can see if you’re eligible to apply	</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item> 


                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <div  className='compareGrid'>
                                <Image alt='Avanse' src='/images/partners/avanse.png' />
                                    <div className='grid-item'>
                                        
                                        Term Length: 
                                        <br/>1-15 years
                                    </div>
                                    <div  className='grid-item with-text'>
                                        Fixed APR
                                        <br />
                                    </div>
                                    <div  className='grid-item with-text'>
                                    Variable APR
                                    <br/>14.25% + spread - No Max
                                    </div>
                                    <div  className='grid-item with-text'>
                                    Balance Range
                                    <br/>No Min - No Max
                                    </div>
                                    <div  className='grid-item with-text'>
                                        <Button href="/users/sign_up?application_type=student_loan" className='more'>Apply Now</Button>
                                    </div>
                                </div>

                            </Accordion.Header>
                            <Accordion.Body>
                                <h3>Qualifications</h3>
                                <ul>
                                    <li>Students:
                                        <ul>
                                            <li>	Are Indian citizens who are 18 or older	</li>
                                            <li>	Have a confirmed admission before the final disbursal	</li>
                                            <li>	Have a co-borrower who earns in India	</li>
                                        </ul>
                                    </li>
                                    <li>Cosigners:
                                        <ul>
                                            <li>	Must be an Indian citizen and should be a parent, legal guardian, sibling or other blood relative	</li>
                                            <li>	Must have a bank account in India that allows them to sign checks	</li>
                                            <li>	Must be the primary debtor	</li>
                                        </ul>
                                    </li>
                                </ul>
                                <h3>What can they offer?</h3>
                                <ul>
                                    <li>	100% Financing	</li>
                                    <li>	Flexible Repayments	</li>
                                    <li>	Quick Sanctions	</li>
                                    <li>	Student loans without collateral and with collateral	</li>
                                    <li>	Doorstep service offered	</li>
                                    <li>	Can get funds within 3 business days	</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                <div  className='compareGrid'>
                                <Image alt='HDFC Logo' src='/images/partners/hdfc.png' />
                                    <div className='grid-item'>
                                        
                                        Term Length: 
                                        <br/>10-12 years
                                    </div>
                                    <div  className='grid-item with-text'>
                                        Fixed APR
                                        <br />
                                    </div>
                                    <div  className='grid-item with-text'>
                                    Variable APR
                                    <br />-
                                    {/* <br/>13.30% + spread - No Max */}
                                    </div>
                                    <div  className='grid-item with-text'>
                                    Balance Range
                                    <br/>$10,000 - No Max
                                    </div>
                                    <div  className='grid-item with-text'>
                                        <Button href="/users/sign_up?application_type=student_loan" className='more'>Apply Now</Button>
                                    </div>
                                </div>

                            </Accordion.Header>
                            <Accordion.Body>
                                <h3>Qualifications</h3>
                                <ul>
                                            <li>	Borrower must be an Indian citizen.	</li>
                                            <li>	Co-applicants(s) must be an Indian citizen.	</li>
                                            <li>	Co-borrower(s) must have a bank account in any bank in India with cheque writing facilities.	</li>
                                            <li>	Confirmed admission in the colleges before disbursement.	</li>
                                            <li>	Borrower and Co-applicant(s) to meet HDFC Credila’s credit and underwriting norms as applicable from time to time	</li>
                                        </ul>
                                <h3>What can they offer?</h3>
                                <ul>
                                    <li>	Ease of application: online & doorstep service	</li>
                                    <li>	Attractive tax benefits	</li>
                                    <li>	Up to 100% finance covering tuition fee & living costs	</li>
                                    <li>	Unsecured loan up to INR 75 lakhs	</li>
                                    <li>	Easy EMIs with repayment tenure up to 15 years	</li>
                                    <li>	No margin money, No hidden charges	</li>
                                    <li>	Loan sanction even before admission confirmation	</li>
                                    <li>	Co-borrower flexibility	</li>
                                    <li>	Quick and hassle-free process	</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        
                        </Accordion>
                    </Col>
                    <Col>
                    <Button style={{display:'block',width:'fit-content', margin:'auto' }} variant="outline-light" className='extra-pad mt-3 mb-2' href='/users/sign_up?application_type=student_loan'>Compare Lending Partner Options <FontAwesomeIcon icon={faArrowRight} /> </Button>
                    <Button style={{display:'block',width:'fit-content', margin:'auto' }} variant="outline-light small" className='extra-pad mt-3 mb-2'  onClick={handleShow}> Lender Competitor Disclosures and Disclaimers </Button>
                    </Col>
                </Row>
                
            </Container>
        </>
    )
}
export default StudentLoansLandingCompare