
import Image from 'next/image'
import PaddingLayout from '../../../layouts/paddingLayout/paddingLayout'
import styles from './section1.module.css'
import Fade from 'react-reveal/Fade'

export default function Section1(props){
    return(
        <PaddingLayout>

            <div  className = {`${styles.container} d-flex align-items-start justify-content-between`}>
                <Fade duration = {2000} left>
                    <div className = {styles.pre1}>
                        <p className = {styles.title}>PreneurBay</p>
                        <p className = {styles.live}>Live- Work -Explore</p>
                        <p className = {styles.text}>We are Building a place where people <span style = {{color: '#03254C', fontWeight: 'bold'}}>Speak Business</span>, Live- Work Explore - Connect World In An Executive Way.</p>
                    </div>
                </Fade>
                <Fade duration = {2000} right>
                    <div className = {styles.pre2}>
                        <div className={styles.areyou} style = {{marginBottom: '35px'}}>
                            <Image src = '/../public/solopreneur.png' layout='fill' />
                        </div>
                        <p className = {styles.rightText}>Willing to cross boundaries across world by creating impact through your ideas  !!<br/><br/>You landed at the right space.👍</p>
                    </div>
                </Fade>
            </div>
        </PaddingLayout>
    )
}