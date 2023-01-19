
import PaddingLayout from '../../../layouts/paddingLayout/paddingLayout'
import styles from './section2.module.css'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

export default function Section2(props){
    return(
        
        <div>
            <div style = {{position: 'relative'}}>
                {/* <Image src = '/landing_sec2_back.png' layout = 'fill' /> */}
            
                <PaddingLayout>
                    <div className = {`${styles.container} d-flex align-items-center justify-content-center`}>
                        <Fade duration = {2000}>
                            <div>
                                <div className = {`${styles.buildingCon} `} style = {{position: 'relative'}}>
                                    <Image src = '/house.jpg' layout='fill' />
                                </div>
                                <p style = {{fontSize: '12', color: 'black', textAlign: 'center', fontStyle: 'italic'}}>Image is just for illustration</p>
                                <div className = {styles.innerContainer}>
                                    <p className = {styles.text}>We offer cost-effective housing and coworking spaces with a networking focus that allows aspiring entrepreneurs to explore the world in a lavish yet budget-friendly manner, promoting business and economic tourism between developing Indian and international cities</p>
                                </div>
                            </div>
                        </Fade>
                    </div>  
                </PaddingLayout>
                
                <div className = {styles.line}>
                    <Image src = '/landing_sec2_lines.png' width = '120' height = '8' />
                </div>
            </div>
            
        </div>
    )
}