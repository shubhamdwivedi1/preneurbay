
import PaddingLayout from "../../../layouts/paddingLayout/paddingLayout";
import styles from './section7.module.css'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import React, { useEffect, useState } from "react";

export default function Section7(props){

    const [marker, setMarker] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setMarker(prev => (prev+1)%9)
        }, 2000)
    }, [marker])


    return(
        <React.Fragment>
            <PaddingLayout>
                <Fade duration = {2000} bottom>
                    <div className = {`${styles.container}`}>
                        <div style = {{zIndex: '10', position: 'absolute', top: '186px', left: '103px'}}>
                            {marker == 0 ?
                                <div className = {styles.marker}>
                                    <Image src = '/marker_green.png' width = '36' height = '36'/> 
                                </div>
                            :
                                <Image src = '/marker_blue.png' width = '36' height = '36'/> 
                            }
                        </div>
                        <div style = {{zIndex: '10', position: 'absolute', top: '244px', left: '222px'}}>
                            {marker == 1 ?
                                <div className = {styles.marker}>
                                    <Image src = '/marker_green.png' width = '36' height = '36'/> 
                                </div>
                            :
                                <Image src = '/marker_blue.png' width = '36' height = '36'/> 
                            }
                        </div>
                        <div style = {{zIndex: '10', position: 'absolute', top: '108px', left: '456px'}}>
                            {marker == 2 ?
                                <div className = {styles.marker}>
                                    <Image src = '/marker_green.png' width = '36' height = '36'/> 
                                </div>
                            :
                                <Image src = '/marker_blue.png' width = '36' height = '36'/> 
                            }
                        </div>
                        <div style = {{zIndex: '10', position: 'absolute', top: '280px', left: '562px'}}>
                            {marker == 3 ?
                                <div className = {styles.marker}>
                                    <Image src = '/marker_green.png' width = '36' height = '36'/> 
                                </div>
                            :
                                <Image src = '/marker_blue.png' width = '36' height = '36'/> 
                            }
                        </div>
                        <div style = {{zIndex: '10', position: 'absolute', top: '410px', left: '604px'}}>
                            {marker == 4 ?
                                <div className = {styles.marker}>
                                    <Image src = '/marker_green.png' width = '36' height = '36'/> 
                                </div>
                            :
                                <Image src = '/marker_blue.png' width = '36' height = '36'/> 
                            }
                        </div>
                        <div style = {{zIndex: '10', position: 'absolute', top: '344px', left: '812px'}}>
                            {marker == 5 ?
                                <div className = {styles.marker}>
                                    <Image src = '/marker_green.png' width = '36' height = '36'/> 
                                </div>
                            :
                                <Image src = '/marker_blue.png' width = '36' height = '36'/> 
                            }
                        </div>
                        <div style = {{zIndex: '10', position: 'absolute', top: '255px', left: '850px'}}>
                            {marker == 6 ?
                                <div className = {styles.marker}>
                                    <Image src = '/marker_green.png' width = '36' height = '36'/> 
                                </div>
                            :
                                <Image src = '/marker_blue.png' width = '36' height = '36'/> 
                            }
                        </div>
                        <div style = {{zIndex: '10', position: 'absolute', top: '295px', left: '920px'}}>
                            {marker == 7 ?
                                <div className = {styles.marker}>
                                    <Image src = '/marker_green.png' width = '36' height = '36'/> 
                                </div>
                            :
                                <Image src = '/marker_blue.png' width = '36' height = '36'/> 
                            }
                        </div>
                        <div style = {{zIndex: '10', position: 'absolute', top: '172px', left: '1000px'}}>
                            {marker == 8 ?
                                <div className = {styles.marker}>
                                    <Image src = '/marker_green.png' width = '36' height = '36'/> 
                                </div>
                            :
                                <Image src = '/marker_blue.png' width = '36' height = '36'/> 
                            }
                        </div>
                        <div className = {styles.mapCon} style = {{position: 'relative'}}>
                            <Image src = '/landing_sec7_maps.png' layout = 'fill'/>
                        </div>
                    </div>
                </Fade>
            </PaddingLayout>

            <div className = {`${styles.mobContainer}`}>
                <div className = {styles.mapCon} style = {{position: 'relative'}}>
                    <Image src = '/landing_sec7_maps.png' layout = 'fill'/>
                </div>
            </div>
        </React.Fragment>
    )
} 