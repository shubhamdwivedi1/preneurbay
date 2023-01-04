
import StandardLayout from '../../layouts/standardLayout/standardLayout'
import styles from './landingPage.module.css'
import Section1 from './section1/section1'
import Section2 from './section2/section2'


export default function LandingPage(props){
    return(
        <StandardLayout>

            <div>
                <Section1/>
            </div>

            <div>
                <Section2/>
            </div>

        </StandardLayout>
    )
}