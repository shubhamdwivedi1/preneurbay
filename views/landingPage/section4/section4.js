
import styles from './section4.module.css'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

export default function Section4(props){
    return(
        <Fade duration = {2000} bottom>
            <div className = {`${styles.container} d-flex align-items-center justify-content-center`}>
                <div className = {`d-flex align-items-center `}>
                    <div style = {{marginRight: '52px'}}>
                        <Image src = '/../public/landing_sec4_comma.png' width = '174' height = '174' />
                    </div>
                    <div>
                        <div style = {{marginBottom: '24px'}}>
                            <Image src = '/../public/landing_sec4_title.png' width = '731' height = '50' />
                        </div>
                        <p className = {styles.text}>Our Goal is to help early-stage business enthusiasts & professionals to ease business & leisure  making it a packed bleisure trip  through our bays to help them achieve the value of Live,Work,Explore at a single place.</p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}