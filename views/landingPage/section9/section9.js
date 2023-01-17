
import PaddingLayout from '../../../layouts/paddingLayout/paddingLayout'
import styles from './section9.module.css'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import { useState } from 'react'

export default function Section9(props){

    const [active, setActive] = useState(1)

    return(
        <PaddingLayout>
            <Fade duration = {2000} bottom>
                <div className = {styles.container}>
                    <div onClick={()=>{setActive(1)}} onMouseEnter={()=>{setActive(1)}} className = {`${active == 1 ? styles.rightContainer : styles.innerContainer}`}>
                        <div className = {styles.ttop}>
                            <div style = {{margin: 'auto', marginBottom: '38px', width: 'fit-content'}}>
                            {active == 2 ? 
                                <Image priority src = '/landing_sec9_img1.svg' width = '100' height = '100' />
                                :
                                <Image priority src = '/landing_sec9_img1_in.svg' width = '100' height = '100' />
                            }
                            </div>
                            <p className = {`${active == 1 ? styles.rightText : styles.leftText}`}>Interested In Joining the Waitlist of Co Space Working and living?</p>
                            <p onClick={()=>{props.setConnect(true)}} className = {`${active == 1 ? styles.rightInvite : styles.connect}`}>Connect</p>
                        </div>


                        {/* Right Container */}
                    </div>

                    <div onClick={()=>{setActive(2)}} onMouseEnter={()=>{setActive(2)}} className = {`${active == 2 ? styles.rightContainer : styles.innerContainer}`}>
                        <div style = {{margin: 'auto', marginBottom: '38px', width: 'fit-content'}}>
                            {active == 2 ? 
                                <Image priority src = '/landing_sec9_img2.svg' width = '128' height = '128'/>
                                :
                                <Image priority src = '/landing_sec9_img2_in.svg' width = '128' height = '128'/>
                            }
                        </div>
                        <p className = {`${active == 2 ? styles.rightText : styles.leftText}`}>We are Actively Looking for an Investor</p>
                        <p onClick={()=>{props.setInvest(true)}}  className = {`${active == 2 ? styles.rightInvite : styles.connect}`}>Invest in Us</p>
                    </div>
                </div>
            </Fade>
        </PaddingLayout>
    )
}