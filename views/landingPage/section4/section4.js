
import styles from './section4.module.css'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

export default function Section4(props){
    return(
        <Fade duration = {2000} bottom>
            <div className = {`${styles.container} d-flex align-items-center justify-content-center`}>
                <div style = {{flexWrap: 'nowrap'}} className = {`d-flex align-items-center `}>
                    <div className = {styles.commaImage} style = {{marginRight: '52px'}}>
                        <Image src = '/landing_sec4_comma.svg' layout='fill' />
                    </div>
                    <div>
                        <p className = {styles.title} style = {{marginBottom: '24px'}}><mark>Build Great things @ PreneurBay</mark></p>
                        <p className = {styles.text}>Our mission is to assist early-stage business enthusiasts and professionals in seamlessly combining business and leisure, creating a unique "bleisure" experience through our destinations. Our goal is to provide a one-stop destination for individuals to Live, Work and Explore.</p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}