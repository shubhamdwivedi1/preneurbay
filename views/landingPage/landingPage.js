
import StandardLayout from '../../layouts/standardLayout/standardLayout'
import styles from './landingPage.module.css'
import Section1 from './section1/section1'
import Section10 from './section10/section10'
import Section2 from './section2/section2'
import Section3 from './section3/section3'
import Section4 from './section4/section4'
import Section5 from './section5/section5'
import Section6 from './section6/section6'
import Section7 from './section7/section7'
import Section8 from './section8/section8'
import Section9 from './section9/section9'


export default function LandingPage(props){
    return(
        <StandardLayout>

            <div>
                <Section1/>
            </div>

            <div>
                <Section2/>
            </div>

            <div>
                <Section3/>
            </div>

            <div>
                <Section4/>
            </div>

            <div>
                <Section5/>
            </div>

            <div>
                <Section6/>
            </div>

            <div>
                <Section7/>
            </div>

            <div>
                <Section8/>
            </div>

            <div>
                <Section9/>
            </div>

            <div>
                <Section10/>
            </div>

        </StandardLayout>
    )
}