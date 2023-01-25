
import PaddingLayout from '../../../layouts/paddingLayout/paddingLayout'
import styles from './section5.module.css'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import {Swiper, SwiperSlide} from 'swiper/react'
import { addEvent, removeEvent } from './funtions'

export default function Section5(props){

    let oldScroll = 0

    return(
        <div style = {{overflow: 'hidden'}} className = {styles.container}>
            <Image src = '/landing_sec5_back.png' layout = 'fill' />
            <div className = 'hide_in_mobile'  style = {{position: 'absolute', left: '0', bottom: '0'}}>
                <Image src = '/landing_sec5_des.png' width = '606' height = '617' />
            </div>
            <PaddingLayout>
                <div className={`d-flex align-items-start justify-content-between`}>
                    <div>
                        <Fade duration = {2000} left>
                            <p id = "whypre" className = {`${styles.title}`}><mark>Why Do You Need PreneurBay ?</mark></p>
                        </Fade>
                    </div>
                    <Fade duration = {2000} right>
                        <div id = "myslides" style = {{width: '666px'}}>
                            <div id = "pre1">
                                <p className = {styles.rightTitle}>“Business+ leisure = <span style = {{color: '#D1AB49'}}>Bleisure</span> Win business to enjoy leisure at your travel”</p>
                                <p className = {styles.rightText}>"Combine business and leisure for a winning bleisure experience" <br/> Our objective is to assist early-stage business enthusiasts and professionals in seamlessly blending business and leisure, creating a unique "bleisure" experience through our destinations. Our goal is to provide a one-stop destination for individuals to Live, Work and Explore.</p>
                            </div>
                        
                            <div id = "pre2">
                                <div style = {{position: 'relative'}}>
                                    <p className = {styles.subHeading}>Bizz or Liesure</p>
                                    <div className = {styles.yellowBorder}></div>
                                </div>
                                <p className = {styles.rightText}>At PreneurBay, we prioritize business growth and understand that leisure comes as a result of successful business deals. Our goal is to create a stress-free environment for our clients to truly enjoy the b-leisure experience.</p>
                            </div>
                            <div id = "pre3">
                                <div style = {{position: 'relative'}}>
                                    <p className = {styles.subHeading}>Here are some facts</p>
                                    <div className = {styles.yellowBorder}></div>
                                </div>
                                
                                <p className = {styles.rightText}><span style = {{color: '#D1AB49'}}>90% of professionals</span> believe that business travel is valuable to the company and professional growth.<br/>Approximately 28% of current business would be lost if employees didn't travel.<br/>Companies gain $12.50 in revenue for every dollar invested in business travel.</p>
                            </div>
                        </div>
                    </Fade>
                </div>  
            </PaddingLayout>
        </div>
    )
}