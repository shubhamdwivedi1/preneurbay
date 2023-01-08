
import PaddingLayout from '../../../layouts/paddingLayout/paddingLayout'
import styles from './section9.module.css'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

export default function Section9(props){
    return(
        <PaddingLayout>
            <Fade duration = {2000} bottom>
                <div className = {styles.container}>
                    <div className = {styles.innerContainer}>
                        <div className = {styles.ttop} style = {{width: '376px'}}>
                            <div style = {{margin: 'auto', marginBottom: '28px', width: 'fit-content'}}>
                                <Image src = '/../public/landing_sec9_img1.png' width = '100' height = '100' />
                            </div>
                            <p className = {styles.leftText}>Interested In Joining the Waitlist of Co Space Working and living?</p>
                            <p className = {styles.connect}>Connect</p>
                        </div>



                        {/* Right Container */}

                        <div className = {styles.rightContainer}>
                            <div style = {{margin: 'auto', marginBottom: '38px', width: 'fit-content'}}>
                                <Image src = '/../public/landing_sec9_img2.png' width = '128' height = '128'/>
                            </div>
                            <p className = {styles.rightText}>We are Actively Looking for an Investor</p>
                            <p className = {styles.rightInvite}>Invest in Us</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </PaddingLayout>
    )
}