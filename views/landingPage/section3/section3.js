
import PaddingLayout from '../../../layouts/paddingLayout/paddingLayout'
import styles from './section3.module.css'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

export default function Section3(props){
    return(

        <PaddingLayout>
            <div className = {styles.container}>
                <Fade duration = {2000} bottom>
                    <div style = {{margin: 'auto', width: 'fit-content'}}>
                        <Image src = '/landing_sec3_title.png' width = '358' height = '44' />
                    </div>
                    <div className = {`${styles.tabsContainer} d-flex align-items-center justify-content-between`}>
                        <div className = {`${styles.tabContainer} ${styles.tabContainerActive}`}>
                            <p className = {styles.tabText}>Aligarh - Hudson</p>
                        </div>
                        <div className = {`${styles.tabContainer}`}>
                            <p className = {styles.tabText}>Agra - New York</p>
                        </div>
                        <div className = {`${styles.tabContainer}`}>
                            <p className = {styles.tabText}>Lucknow - Chicago</p>
                        </div>
                    </div>
                </Fade>

                <div style = {{marginTop: '30px'}} className = {`d-flex align-items-start justify-content-between`}>
                    <Fade duration = {2000} left>
                        <div className = {styles.leftContainer}>
                            <div style = {{borderBottom: '2px solid #f2e3be', position :'relative'}} className = {`${styles.leftBox} ${styles.firstLeftBox}`}>
                                <p className = {styles.leftTitle}>Live</p>
                                <p className = {styles.leftSubText}>A stay where you feel energetic & motivated</p>
                                <p className = {styles.leftText}>We had build luxurious pleasant stay for our preneur’s to help them feel there true worth of being an executive and advocate of future economy so we always tries to give you best experiences ever of an executive class of living</p>
                                <div className = {styles.yellowBorder}></div>
                            </div>

                            <div className = {styles.leftBox}>
                                <p className = {styles.leftTitle}>Work</p>
                                <p className = {styles.leftSubText}>An Office Where Great Minds Meet</p>
                                <p className = {styles.leftText}>We had build luxurious pleasant stay for our preneur’s to help them feel there true worth of being an executive and advocate of future economy so we always tries to give you best experiences ever of an executive class of living</p>
                            </div>

                            <div className = {styles.leftBox}>
                                <p className = {styles.leftTitle}>Explore</p>
                                <p className = {styles.leftSubText}>Preneur’s network- a community to engage  leaders</p>
                                <p className = {styles.leftText}>We had build luxurious pleasant stay for our preneur’s to help them feel there true worth of being an executive and advocate of future economy so we always tries to give you best experiences ever of an executive class of living</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade duration = {2000} right>
                        <div style = {{marginLeft: '30px'}}>
                            <div className = {`${styles.rightContainer} d-flex`}>
                                <div className = {styles.card}>
                                    <Image src = '/landing_sec3_hotel1.png' layout = 'fill' />
                                    <p className = {styles.coming}>Coming Soon</p>
                                    <p className = {styles.cardInfo}>Aligarh</p>
                                    <p className = {styles.book}>Book Now</p> 
                                </div>

                                <div className = {styles.card}>
                                    <Image src = '/landing_sec3_hotel2.png' layout = 'fill' />
                                    <p className = {styles.coming}>Coming Soon</p>
                                    <p className = {styles.cardInfo}>Aligarh</p>
                                    <p className = {styles.book}>Book Now</p> 
                                </div>
                            </div>
                            <div>
                                <p className = {styles.guestText}>Guest checkin</p>
                                <div className = {`d-flex align-items-center`}>
                                    <div className = {`${styles.guestContainer} d-flex`}>
                                        <div style = {{width: 'fit-content'}}>
                                            <div style = {{width: '56px',  height: '56px', borderRadius: '50%', overflow: 'hidden', position: 'relative', margin: 'auto'}}>
                                                <Image src = '/guest1.png' layout = 'fill' />
                                            </div>
                                            <p className = {styles.guestLabel} style = {{background: 'linear-gradient(180deg, #D1AB49 0%, #D19C15 100%)'}}>Traveler</p>
                                        </div>

                                        <div style = {{width: 'fit-content'}}>
                                            <div style = {{width: '56px',  height: '56px', borderRadius: '50%', overflow: 'hidden', position: 'relative', margin: 'auto'}}>
                                                <Image src = '/guest2.png' layout = 'fill' />
                                            </div>
                                            <p className = {styles.guestLabel} style = {{background: '#03254C'}}>Entrepreneur</p>
                                        </div>

                                        <div style = {{width: 'fit-content'}}>
                                            <div style = {{width: '56px',  height: '56px', borderRadius: '50%', overflow: 'hidden', position: 'relative', margin: 'auto'}}>
                                                <Image src = '/guest3.png' layout = 'fill' />
                                            </div>
                                            <p className = {styles.guestLabel} style = {{background: '#376BF9'}}>Investor</p>
                                        </div>

                                        <div style = {{width: 'fit-content'}}>
                                            <div className='d-flex align-items-center justify-content-center' style = {{width: '66px',  height: '66px', borderRadius: '50%', overflow: 'hidden', position: 'relative', margin: 'auto', background: 'black'}}>
                                                <div style = {{opacity: '0.4'}}>
                                                    <Image src = '/guest1.png' layout = 'fill' />
                                                </div>
                                                <p className = {styles.plus}>+4</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </PaddingLayout>
    )
}