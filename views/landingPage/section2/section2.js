
import PaddingLayout from '../../../layouts/paddingLayout/paddingLayout'
import styles from './section2.module.css'
import Image from 'next/image'

export default function Section2(props){
    return(

        <div>
            <div style = {{position: 'relative'}}>
                <Image src = '/../public/landing_sec2_back.png' layout = 'fill' />
            
                <PaddingLayout>
                    <div className = {`${styles.container} d-flex align-items-center justify-content-center`}>
                        <div>
                            <div style = {{position: 'relative'}}>
                                <Image src = '/../public/building.png' width = '1200' height = '480' />
                            </div>
                            <div className = {styles.innerContainer}>
                                <p className = {styles.text}>We provide affordable living and co-workspace culture with a networking essence that makes an aspiring preneur ‘s mindset individual explore the world in a budget-friendly and lavish way boosting business economic tourism between growing Indian and international cities</p>
                            </div>
                        </div>
                    </div>  
                </PaddingLayout>

                <div className = {styles.line}>
                    <Image src = '/../public/landing_sec2_lines.png' width = '120' height = '8' />
                </div>
            </div>
            
        </div>
    )
}