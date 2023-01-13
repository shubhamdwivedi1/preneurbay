
import PaddingLayout from "../../../layouts/paddingLayout/paddingLayout";
import styles from './section7.module.css'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import React from "react";

export default function Section7(props){
    return(
        <React.Fragment>
            <PaddingLayout>
                <Fade duration = {2000} bottom>
                    <div className = {`${styles.container}`}>
                        <div className = {styles.mapCon} style = {{position: 'relative'}}>
                            <Image src = '/landing_sec7_maps.svg' layout = 'fill'/>
                        </div>
                    </div>
                </Fade>
            </PaddingLayout>

            <div className = {`${styles.mobContainer}`}>
                <div className = {styles.mapCon} style = {{position: 'relative'}}>
                    <Image src = '/landing_sec7_maps.svg' layout = 'fill'/>
                </div>
            </div>
        </React.Fragment>
    )
} 