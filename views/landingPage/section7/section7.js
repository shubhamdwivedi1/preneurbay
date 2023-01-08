
import PaddingLayout from "../../../layouts/paddingLayout/paddingLayout";
import styles from './section7.module.css'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

export default function Section7(props){
    return(
        <PaddingLayout>
            <Fade duration = {2000} bottom>
                <div className = {styles.container}>
                    <div className = {styles.mapCon} style = {{position: 'relative'}}>
                        <Image src = '/../public/landing_sec7_maps.png' layout = 'fill'/>
                    </div>
                </div>
            </Fade>
        </PaddingLayout>
    )
} 