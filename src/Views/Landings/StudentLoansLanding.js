import StudentLoansLandingA from '../ABTests/StudentLoanLandingA';
import StudentLoansLandingB from '../ABTests/StudentLoanLandingB';
import { useFeatureFlagVariantKey } from 'posthog-js/react';
 

const tertiarySwitch = (variant, props) => {
    switch(variant){
        case 'test':
            return(
                <StudentLoansLandingA path={props.path} href={props.href} />
            )
            break;
        case 'test2':
            return(
                <StudentLoansLandingA path={props.path} href={props.href} />
            )
            break;
        default:
            return(<StudentLoansLandingA path={props.path} href={props.href} />)
    }

}

const StudentLoansLanding = (props) => {
    // const {variant} = props;
    const variant = useFeatureFlagVariantKey('student_loan_main_landing_variant')
    if(variant) console.log('StudentLoansLanding variant', variant)

    return(
        <>
        {variant  
            ? tertiarySwitch(variant, props)
            : <StudentLoansLandingA path={props.path} href={props.href} />
        }
        </>
        
    )
}
export default StudentLoansLanding