import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Navbar, Nav, Image, NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../css/components/Topnav.scss';

const Topnav = (props) => {
  const [isLanding, setIsLanding] = useState(false);
  const [showDd, setShowDd] = useState({});
  const setThisLanding = (torf) => {
    setIsLanding(torf)
  }

  const setDdShow = (id, reset) => {
    let thisShowDd = {...showDd};
    if(reset){
      Object.keys(thisShowDd).map(key => {
        thisShowDd[key] = false;
      })

    }else {
      Object.keys(thisShowDd).map(key => {
        if(key === id) thisShowDd[key] = true
        else thisShowDd[key] = false;
      })
    }
    
    setShowDd(thisShowDd)
  }

  //fromLanding
  const urlParams = new URLSearchParams(window.location.search);
  const fromLanding = urlParams.get('fromLanding');

  const [isPortal, setIsPortal] = useState(false);
  const setThisPortal = (torf) => {
    setIsPortal(torf)
  }
  const thisContext = useContext(props.ThemeContext);

  const items = [
    // {
    //   label: 'Sign Up',
    //   href:'/sign-up'
    // },
    {
      label: 'Finances',
      href: '/student-loans',
      items: [
        {
          label: 'Education Loan ',
          href:'/student-loans'
        },
      ],
    },
    {
      label: 'Admissions',
      href: '/admissions',
      items: [
        {
          label: 'Start Abroad Journey ',
          href:'/admissions'
        },
        {
          label: 'Study Visa ',
          href:'/visa-made-easy'
        },
        {
          label: 'Admit Predictor ',
          href:'/admit-predictor'
        },
        {
          label: 'College Finder ',
          href:'/college-finder'
        },
      ],
    },
    {
      label: 'How It Works',
      href:'/how-it-works'
    },
    {
      label: 'FAQs',
      href:'/faqs'
    },
    {
      label: 'Testimonials',
      href:'/testimonials'
    },
    {
      label: 'Articles',
      href:'https://blog.nomadcredit.com/',
      target:'_blank'
    },
  ];



  useEffect(() => {
    let thisShowDd = {};
    items.forEach((e,i) => {
      thisShowDd[`ddl1${i}`] = false;
    })
  
    setShowDd(thisShowDd)
  }, [])

  const makeMenu = (mobile) => {
    if(mobile){

    } else {
      return(
        <Navbar className={isLanding ? `` : 'top-nav '}  expand="lg">
          <Container className=''>
          <Navbar.Brand href='/index' style={logoStyle}><Image  alt='Nomad Credit Logo' style={{maxWidth:'200px', margin:'auto'}} fluid={true} src="/images/logo-2.0.webp"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='' id={`basic-navbar-nav`}>
              <div className='menu-holder d-none d-md-block d-lg-block d-xl-block d-xxl-block'>
                <Nav className={`me-auto `}>
                {items.map((item, i) => {
                  return(
                    <div key={`ddl1${i}`} >
                      {item.items ? 
                      
                      <NavDropdown  title={item.label} id={`ddl1${i}`}  show={showDd[`ddl1${i}`]} onMouseEnter={(e) => {
                        setDdShow(`ddl1${i}`)
                      }} 
                      onMouseLeave={() => {
                        setDdShow(`ddl1${i}`, true)
                      }}
                      >
                      {item.items.map((item, i) => {
                        return(
                          <NavDropdown.Item key={'ddl2'+i} href={item.href}>{item.label}</NavDropdown.Item>
                        )
                      })}
                      </NavDropdown>
                     
                      
                      :<Nav.Link key={`ddl1${i}`} href={item.href ? item.href : ''} target={item.target ? item.target : ''}>{item.label}</Nav.Link> }
                    </div>
                  )
                  
                })}
              </Nav>

              </div>
              <div className='d-sm-block d-md-none'>
                <Nav className={`me-auto `}>
                  {items.map((item, i) => {
                    return(
                      <div key={'nl'+i} >
                      <Nav.Link key={'nl'+i} href={item.href ? item.href : ''} target={item.target ? item.target : ''}>{item.label}</Nav.Link>
                        {item.items ? 
                        
                        item.items.map((item, i) => {
                          return(
                            <Nav.Link key={'nnl'+i} href={item.href ? item.href : ''} target={item.target ? item.target : ''}>{item.label}</Nav.Link>
                          )
                        })
                        
                        
                        :'' }
                      </div>
                    )
                    
                  })}
                </Nav>
              </div>
           
          </Navbar.Collapse>
          </Container>
        </Navbar>
        )
    }

    
  }

  useEffect(() => {
    fetch(`/api/v1/whoami`)
            .then(response => response.json())
            .then(response => {
                if(response.logged_in) setThisPortal(true);
            })
            .catch(error => {
                console.log('error', ""+error);
            });

    if(!thisContext.landingPages) return;
    if(thisContext.landingPages.includes(window.location.pathname)){
      setThisLanding(true);
    }
  }, [])

  useEffect(() => {
    let thisPath = window.location.pathname.split('/');
    if(!thisContext.portalPages) return;
    if(thisContext.portalPages.includes(thisPath[1])){
      setThisPortal(true);
    }
  }, [])

      let btnStyle = { padding:'8px 50px'};
      let logoStyle = {};
      if(!isLanding && !isPortal){
        return(
          <>
            {makeMenu()}
            <Nav className='top-nav-login'>
              <div>
                <a style={{fontSize:'small'}} href='/contact-us'>Contact Us</a> | <a style={{fontSize:'small'}} href='/sign-in'>Log In</a></div>
              <Button style={btnStyle} href='/sign-up' variant="outline-danger" size="lg">Sign Up</Button>
            </Nav>

          {/* <Navbar className={isLanding ? `` : 'top-nav '}  expand="lg">
          <Container className=''>
            <Navbar.Brand href='/' style={logoStyle}><Image  alt='Nomad Credit Logo' fluid={true} src="/images/logo-2.0.webp"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id={`basic-navbar-nav`}>
              <Nav className={`me-auto`}>
                <Nav.Link href="/contact-us" className='mobile-link'>Contact Us</Nav.Link>
                <Nav.Link href="/sign-in" className='mobile-link'>Log In</Nav.Link>
                <Nav.Link href="/sign-up" className='mobile-link'>Sign Up</Nav.Link>
                <Nav.Link href="/student-loans">Student Loans</Nav.Link>
                <Nav.Link href="/admissions">Admissions</Nav.Link>
                <Nav.Link href="/how-it-works">How It Works</Nav.Link>
                <Nav.Link href="/faqs">FAQs</Nav.Link>
                <Nav.Link href="/testimonials">Testimonials</Nav.Link>
                <Nav.Link href="https://blog.nomadcredit.com/" target='_blank'>Blog</Nav.Link>

              </Nav>

            </Navbar.Collapse>
            <Nav className='top-nav-login'>
                  <div>
                    <a style={{fontSize:'small'}} href='/contact-us'>Contact Us</a> | <a style={{fontSize:'small'}} href='/sign-in'>Log In</a></div>
                  <Button style={btnStyle} href='/sign-up' variant="outline-danger" size="lg">Sign Up</Button>
                </Nav>
          </Container>
        </Navbar> */}
        </>
        )
      }
      if(isLanding){
        btnStyle = { padding:'8px 50px', marginTop:'30px'};
        logoStyle ={margin:'auto'};
        return(
          <Navbar className={isLanding ? `top-nav is-landing` : 'top-nav '}  expand="lg">
            <Container className=''>
              <Navbar.Brand className={isLanding ? 'landing-logo' : ''} style={logoStyle}><Image fluid={true}  alt='Nomad Credit Logo' src="/images/logo-2.0.webp"/></Navbar.Brand>
              <Navbar.Collapse id={`basic-navbar-nav`}>
                <Nav className={`me-auto`}>
                  <Nav.Link href="/contact-us" className='mobile-link'>Contact Us</Nav.Link>
                  <Nav.Link href="/sign-in" className='mobile-link'>Log In</Nav.Link>
                  <Nav.Link href="#secondaryForm" className='mobile-link'>Sign Up</Nav.Link>

                </Nav>

              </Navbar.Collapse>
              <Nav className='top-nav-login'>
                    <Button style={btnStyle} href='/sign-up' variant="outline-danger" size="lg">Sign Up</Button>
                  </Nav>
            </Container>
          </Navbar>
        )
      }

      if(isPortal){
        if(fromLanding) { 
          logoStyle ={width:'100%', marginRight: '0',textAlign:'center'};
          return(
            <Navbar expand="lg">
              <Container className=''>
                <Navbar.Brand style={logoStyle}><Image alt='Nomad Credit Logo' src="/images/logo-2.0.webp"/></Navbar.Brand>
                
              </Container>
            </Navbar>
          );
        }
        btnStyle = { padding:'8px 50px', marginTop:'30px'};
        logoStyle ={margin:'auto'};
        return(
          <Navbar   expand="lg">
            <Container className=''>
              <Navbar.Brand style={logoStyle}><Image  alt='Nomad Credit Logo' style={{maxWidth:'200px', margin:'auto'}} fluid={true} src="/images/logo-2.0.webp"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id={`basic-navbar-nav`}>
                <Nav className={`me-auto`}>
                  <Nav.Link href="/contact-us" className='mobile-link'>Contact Us</Nav.Link>
                  <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link href="/faqs">FAQs</Nav.Link>
                  <Nav.Link href="/my-documents">My Docs</Nav.Link>
                  <Nav.Link  href="https://blog.nomadcredit.com/" target='_blank'>Blog</Nav.Link>

                </Nav>

              </Navbar.Collapse>
              <Nav className='top-nav-login'>
                    <Button style={btnStyle} href='/users/sign_out' variant="outline-danger" size="lg">Log Out</Button>
                  </Nav>
            </Container>
          </Navbar>
        );
      }



}

export default Topnav
