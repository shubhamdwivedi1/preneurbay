
import PaddingLayout from '../../../layouts/paddingLayout/paddingLayout'
import styles from './section8.module.css'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

export default function Section8(props){
    return(
        <PaddingLayout>
            <Fade duration = {2000} bottom>
                <div className = {styles.container}>
                    <div id = "mission" className = {styles.card}>
                        <div className = {styles.imgCon} style = {{marginTop: '-80px'}}>
                            <Image src = '/landing_sec8_img1.svg' layout='fill' />
                        </div>
                        <div className = {styles.cardRight}>
                            <p className = {styles.title} style = {{marginBottom: '24px'}}><mark>Our Mission</mark></p>
                            <p className = {styles.text}>We strive to promote entrepreneurship and business tourism in tier 2 and 3 cities of India by fostering cultural and economic connections between international cities, promoting parallel growth.</p>
                        </div>
                    </div>
                    <div id = "vision" className = {styles.card}>
                        <div className = {styles.imgCon} style = {{marginTop: '-80px'}}>
                            <Image src = '/landing_sec8_img2.svg' layout='fill' />
                        </div>
                        <div className = {styles.cardRight}>
                            <p className = {styles.title} style = {{marginBottom: '24px'}}><mark>Our Vision</mark></p>
                            <p className = {styles.text}>Our vision is to transform India into a leading producer economy within the next decade through a connected ecosystem of innovative companies, research and development units connected with local universities, and driving significant economic growth.</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </PaddingLayout>
    )
}