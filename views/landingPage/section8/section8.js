
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
                            <Image src = '/landing_sec8_img1.png' layout='fill' />
                        </div>
                        <div className = {styles.cardRight}>
                            <p className = {styles.title} style = {{marginBottom: '24px'}}><mark>Our Mission</mark></p>
                            <p className = {styles.text}>We had an entrepreneurship mindset leveraging Business tourism in tier ,2,3 cities of India, by sharing cultural and economic bonding between the two international cities hubs for parallel growth.</p>
                        </div>
                    </div>
                    <div id = "vision" className = {styles.card}>
                        <div className = {styles.imgCon} style = {{marginTop: '-80px'}}>
                            <Image src = '/landing_sec8_img2.png' layout='fill' />
                        </div>
                        <div className = {styles.cardRight}>
                            <p className = {styles.title} style = {{marginBottom: '24px'}}><mark>Our Vision</mark></p>
                            <p className = {styles.text}>Our Vision is to bring an India a producer economy in the next decade through the Connected Ecosystem of Innovative companies making products within, RnD Unit Attached With Local Universities Boosting Tremendous Economic Growth</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </PaddingLayout>
    )
}