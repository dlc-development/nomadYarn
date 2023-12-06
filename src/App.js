import {lazy} from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css';
import './css/App.scss';
import { Router, Link, Redirect } from "@reach/router";
const Topnav = lazy(() => import('./Components/Topnav'));
const Test2 = lazy(() => import('./Components/Test2'));
const Home = lazy(() => import('./Views/Home'));
// const Helmet = lazy(() => import('react-helmet-async'));
// const HelmetProvider = lazy(() => import('react-helmet-async'));



function App() {
  
  const landingPages = ['/admissions-landing', '/student-loans-landing', '/student-loans-landing/', '/student-loans-landing-australia', '/student-loans-landing-canada','/student-loans-landing-uk', '/student-loans-landing-us', '/student-loans-landing-canada/','/student-loans-landing-uk/', '/student-loans-landing-us/','/student-loans-landing-australia', '/student-loans-landing-australia/', '/student-loans-landing-linkedin', '/student-loans-landing-linkedin/', '/student-loans-landing-mobile', '/student-loans-landing-mobile/', 'student-loans-landing-match', 'student-loans-landing-match/', '/student-loans-landing-prodigy', '/student-loans-landing-prodigy/', '/student-loans-landing-andromeda', '/student-loans-landing-andromeda/', '/admissions-landing-2023', '/admissions-landing-2023/', '/admissions-landing-profile-evaluation', '/admissions-landing-profile-evaluation/', '/admissions-ielts-toefl-landing', '/admissions-ielts-toefl-landing/', '/admission-landing-engineering-and-masters', 'admission-landing-engineering-and-masters/', '/student-loans-landing-prodigy-3', '/student-loans-landing-prodigy-3/', '/student-loans-landing-mpower', '/student-loans-landing-mpower/', '/student-loans-landing-avanse', '/student-loans-landing-avanse/', '/student-loans-landing-usc-partner-collateral', '/student-loans-landing-usc-partner-collateral/', '/student-loans-landing-compare', '/student-loans-landing-compare/' ];

  const portalPages = ['new-options', 'options', 'new-dashboard', 'dashboard', 'new-my-documents', 'my-documents','new-edit', 'edit', 'new-new'];
  const thisContext = {landingPages:landingPages, portalPages: portalPages}

  return (
    <HelmetProvider>
      <Helmet>
        <title>Education Loans for International Students USA</title>

      </Helmet>
        <Topnav  thisContext={thisContext} />
        <Router>
          <Home path='/' />
          <Test2 path='/asd' />
        </Router>
    </HelmetProvider>
  );
}

export default App;
