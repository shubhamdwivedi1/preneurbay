
import styles from './section4.module.css'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

export default function Section4(props){
    return(
        <Fade duration = {2000} bottom>
            <div className = {`${styles.container} d-flex align-items-center justify-content-center`}>
                <div style = {{flexWrap: 'nowrap'}} className = {`d-flex align-items-center `}>
                    <div className = {styles.commaImage} style = {{marginRight: '52px'}}>
                        <Image src = '/landing_sec4_comma.png' layout='fill' />
                    </div>
                    <div>
                        <p className = {styles.title} style = {{marginBottom: '24px'}}><mark>Build Great things @ PreneurBay</mark></p>
                        <p className = {styles.text}>Our Goal is to help early-stage business enthusiasts & professionals to ease business & leisure  making it a packed bleisure trip  through our bays to help them achieve the value of Live,Work,Explore at a single place.</p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}