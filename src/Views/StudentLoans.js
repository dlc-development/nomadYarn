import {useEffect} from 'react';
import StudentLoansA from './ABTests/StudentLoansA';
import StudentLoansB from './ABTests/StudentLoansB';
import { useFeatureFlagVariantKey } from 'posthog-js/react';

const StudentLoans = (props) => {
    const variant = useFeatureFlagVariantKey('student_loan_main_page_variant')
    if(variant) console.log('StudentLoans AB variant', variant)

    useEffect(() => {
        fetch(`/api/v1/whoami`)
            .then(response => response.json())
            .then(response => {
                if(response.logged_in) window.location.href = 'dashboard'
            })
            .catch(error => {
                console.log('error', ""+error);
            });
      }, [])
    return(
        <>
        {
            variant && variant === 'test' ? 
            <StudentLoansB  path={props.path} href={props.href} /> 
            :
            <StudentLoansA path={props.path} href={props.href} />
        }
        </>
        
    )
}
export default StudentLoans