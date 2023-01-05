
import PaddingLayout from '../../../layouts/paddingLayout/paddingLayout'
import styles from './section5.module.css'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

export default function Section5(props){
    return(
        <div className = {styles.container}>
            <Image src = '/../public/landing_sec5_back.png' layout = 'fill' />
            <div style = {{position: 'absolute', left: '0', bottom: '0'}}>
                <Image src = '/../public/landing_sec5_des.png' width = '606' height = '617' />
            </div>
            <PaddingLayout>
                <div style = {{position: 'relative'}} className='d-flex align-items-start justify-content-between'>
                    <div>
                        <Fade duration = {2000} left>
                            <div>
                                <Image src = '/../public/landing_sec5_title.png' width = '380' height = '100' />
                            </div>
                        </Fade>
                    </div>
                    <Fade duration = {2000} right>
                        <div style = {{width: '666px'}}>
                            <p className = {styles.rightTitle}>“Business+ leisure = <span style = {{color: '#D1AB49'}}>Bleisure</span> Win business to enjoy leisure at your travel”</p>
                            <p className = {styles.rightText}>Our Goal is to help early-stage business enthusiasts & professionals to ease business & leisure  making it a packed bleisure trip  through our bays to help them achieve the value of Live,Work,Explore at a single place.</p>

                            <div style = {{position: 'relative'}}>
                                <p className = {styles.subHeading}>Bizz or Liesure</p>
                                <div className = {styles.yellowBorder}></div>
                            </div>
                            <p className = {styles.rightText}>Choosing Business trips over leisure trips Business Growth is Our Priority, We Believe Leisure comes in a trip once you had a good business deal in hand so you can enjoy the real essence of the b-leisure trip Always remember! Leisure time is enjoyed In a stress-free environment. </p>

                            <div style = {{position: 'relative'}}>
                                <p className = {styles.subHeading}>Here are some facts</p>
                                <div className = {styles.yellowBorder}></div>
                            </div>
                            <p className = {styles.rightText}><span style = {{color: '#D1AB49'}}>90% of professionals</span> believe that business travel is valuable to the company and professional growth.<br/>Approximately 28% of current business would be lost if employees didn't travel.<br/>Companies gain $12.50 in revenue for every dollar invested in business travel.</p>
                        </div>
                    </Fade>
                </div>  
            </PaddingLayout>
        </div>
    )
}