
import PaddingLayout from '../../../layouts/paddingLayout/paddingLayout'
import styles from './section3.module.css'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import { useState } from 'react'

export default function Section3(props){

    const [tab, setTab] = useState(1)

    const [sec, setSec] = useState(1)

    return(

        <PaddingLayout>
            <div className = {styles.container}>
                <Fade duration = {2000} bottom>
                    <p className = {styles.our} style = {{margin: 'auto', width: 'fit-content'}}><mark>Our Bay Terminal</mark></p>
                    <div className = {`${styles.tabsContainer} d-flex align-items-center justify-content-between`}>
                        <div onClick={()=>{setTab(1)}} className = {`${styles.tabContainer} ${tab == 1 ? styles.tabContainerActive : null}`}>
                            <p className = {styles.tabText}>Aligarh - Hudson</p>
                        </div>
                        <div onClick={()=>{setTab(2)}} className = {`${styles.tabContainer} ${tab == 2 ? styles.tabContainerActive : null}`}>
                            <p className = {styles.tabText}>Agra - New York</p>
                        </div>
                        <div onClick={()=>{setTab(3)}} className = {`${styles.tabContainer} ${tab == 3 ? styles.tabContainerActive : null}`}>
                            <p className = {styles.tabText}>Lucknow - Chicago</p>
                        </div>
                    </div>
                </Fade>

                <div style = {{marginTop: '30px'}} className = {`d-flex align-items-start justify-content-between`}>
                    <Fade duration = {2000} left>
                        <div className = {styles.leftContainer}>
                            <div onClick={()=>{setSec(1)}} className = {`${styles.leftBox} ${sec == 1 ? styles.firstLeftBox : null}`}>
                                <p className = {styles.leftTitle}>Live</p>
                                <p className = {styles.leftSubText}>A stay where you feel energetic & motivated</p>
                                <p style = {{height: sec == 1 ? 'auto' : '20px', overflow: 'hidden'}} className = {styles.leftText}>We had build luxurious pleasant stay for our preneur's to help them feel there true worth of being an executive and advocate of future economy so we always tries to give you best experiences ever of an executive class of living</p>
                                {sec == 1 &&
                                    <div className = {styles.yellowBorder}></div>
                                }
                            </div>

                            <div className = {`${styles.hotelsCon} ${styles.mobHotelsCon} show_in_mobile`}>
                                {sec == 1 &&
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
                                }
                            </div>

                            <div onClick={()=>{setSec(2)}} className = {`${styles.leftBox} ${sec == 2 ? styles.firstLeftBox : null}`}>
                                <p className = {styles.leftTitle}>Work</p>
                                <p className = {styles.leftSubText}>An Office Where Great Minds Meet</p>
                                <p style = {{height: sec == 2 ? 'auto' : '20px', overflow: 'hidden'}} className = {styles.leftText}>We had build luxurious pleasant stay for our preneur's to help them feel there true worth of being an executive and advocate of future economy so we always tries to give you best experiences ever of an executive class of living</p>
                                {sec == 2 &&
                                    <div className = {styles.yellowBorder}></div>
                                }
                            </div>

                            <div className = {`${styles.hotelsCon} ${styles.mobHotelsCon} show_in_mobile`}>
                                {sec == 2 &&
                                    <div className = {`${styles.rightContainer} d-flex`}>
                                        <div className = {styles.card}>
                                            <Image src = '/landing_sec3_hotel1.png' layout = 'fill' />
                                            <p className = {styles.coming}>Coming Soon</p>
                                            <p className = {styles.cardInfo}>Aligarh</p>
                                            <p className = {styles.book}>Book Now</p> 
                                        </div>
                                    </div>
                                }
                            </div>

                            <div onClick={()=>{setSec(3)}} className = {`${styles.leftBox} ${sec == 3 ? styles.firstLeftBox : null}`}>
                                <p className = {styles.leftTitle}>Explore</p>
                                <p className = {styles.leftSubText}>Preneur's network- a community to engage  leaders</p>
                                <p style = {{height: sec == 3 ? 'auto' : '20px', overflow: 'hidden'}} className = {styles.leftText}>We had build luxurious pleasant stay for our preneur's to help them feel there true worth of being an executive and advocate of future economy so we always tries to give you best experiences ever of an executive class of living</p>
                                {sec == 3 &&
                                    <div className = {styles.yellowBorder}></div>
                                }
                            </div>

                            <div className = {`${styles.hotelsCon} ${styles.mobHotelsCon} show_in_mobile`}>
                                {sec == 3 &&
                                    <div className = {styles.bndeCon}>
                                        <div style = {{flexWrap: 'wrap'}} className = {`d-flex align-items-center justify-content-center ${styles.single}`}>
                                            <div className = {styles.single}>
                                                <div style = {{borderRadius: '8px'}}>
                                                    <Image src = '/im1.png' width = '220' height = '150' />
                                                </div>
                                                <p className = {styles.name}>Mr. John</p>
                                                <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                    <Image src = '/business_logo.png' width = '20' height = '20'/>
                                                    <p className = {styles.labe}>Founder of Borgfy</p>
                                                </div>
                                                <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                    <Image src = '/location_logo.png' width = '20' height = '20'/>
                                                    <p className = {styles.labe}>Boston, OH</p>
                                                </div>
                                            </div>
                                            <div className = {styles.single}>
                                                <div style = {{borderRadius: '8px'}}>
                                                    <Image src = '/im2.png' width = '220' height = '150' />
                                                </div>
                                                <p className = {styles.name}>Mr. John</p>
                                                <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                    <Image src = '/business_logo.png' width = '20' height = '20'/>
                                                    <p className = {styles.labe}>Founder of Borgfy</p>
                                                </div>
                                                <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                    <Image src = '/location_logo.png' width = '20' height = '20'/>
                                                    <p className = {styles.labe}>Boston, OH</p>
                                                </div>
                                            </div>
                                            <div className = {styles.single}>
                                                <div style = {{borderRadius: '8px'}}>
                                                    <Image src = '/im3.png' width = '220' height = '150' />
                                                </div>
                                                <p className = {styles.name}>Mr. John</p>
                                                <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                    <Image src = '/business_logo.png' width = '20' height = '20'/>
                                                    <p className = {styles.labe}>Founder of Borgfy</p>
                                                </div>
                                                <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                    <Image src = '/location_logo.png' width = '20' height = '20'/>
                                                    <p className = {styles.labe}>Boston, OH</p>
                                                </div>
                                            </div>
                                            <div className = {styles.single}>
                                                <div style = {{borderRadius: '8px'}}>
                                                    <Image src = '/im4.png' width = '220' height = '150' />
                                                </div>
                                                <p className = {styles.name}>Mr. John</p>
                                                <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                    <Image src = '/business_logo.png' width = '20' height = '20'/>
                                                    <p className = {styles.labe}>Founder of Borgfy</p>
                                                </div>
                                                <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                    <Image src = '/location_logo.png' width = '20' height = '20'/>
                                                    <p className = {styles.labe}>Boston, OH</p>
                                                </div>
                                            </div>
                                            <div className = {styles.single}>
                                                <div style = {{borderRadius: '8px'}}>
                                                    <Image src = '/im5.png' width = '220' height = '150' />
                                                </div>
                                                <p className = {styles.name}>Mr. John</p>
                                                <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                    <Image src = '/business_logo.png' width = '20' height = '20'/>
                                                    <p className = {styles.labe}>Founder of Borgfy</p>
                                                </div>
                                                <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                    <Image src = '/location_logo.png' width = '20' height = '20'/>
                                                    <p className = {styles.labe}>Boston, OH</p>
                                                </div>
                                            </div>
                                            <div className = {styles.single}>
                                                <div style = {{borderRadius: '8px'}}>
                                                    <Image src = '/im7.png' width = '220' height = '150' />
                                                </div>
                                                <p className = {styles.name}>Mr. John</p>
                                                <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                    <Image src = '/business_logo.png' width = '20' height = '20'/>
                                                    <p className = {styles.labe}>Founder of Borgfy</p>
                                                </div>
                                                <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                    <Image src = '/location_logo.png' width = '20' height = '20'/>
                                                    <p className = {styles.labe}>Boston, OH</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </Fade>
                    <Fade duration = {2000} right>
                        <div className = {`${styles.hotelsCon} hide_in_mobile`}>
                            {sec == 1 &&
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
                            }
                            {sec == 2 &&
                                <div className = {`${styles.rightContainer} d-flex`}>
                                    <div className = {styles.card}>
                                        <Image src = '/landing_sec3_hotel1.png' layout = 'fill' />
                                        <p className = {styles.coming}>Coming Soon</p>
                                        <p className = {styles.cardInfo}>Aligarh</p>
                                        <p className = {styles.book}>Book Now</p> 
                                    </div>
                                </div>
                            }
                            {sec == 3 &&
                                <div className = {styles.bndeCon}>
                                    <div style = {{flexWrap: 'wrap'}} className = {`d-flex align-items-center justify-content-center ${styles.single}`}>
                                        <div className = {styles.single}>
                                            <div style = {{borderRadius: '8px'}}>
                                                <Image src = '/im1.png' width = '220' height = '150' />
                                            </div>
                                            <p className = {styles.name}>Mr. John</p>
                                            <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                <Image src = '/business_logo.png' width = '20' height = '20'/>
                                                <p className = {styles.labe}>Founder of Borgfy</p>
                                            </div>
                                            <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                <Image src = '/location_logo.png' width = '20' height = '20'/>
                                                <p className = {styles.labe}>Boston, OH</p>
                                            </div>
                                        </div>
                                        <div className = {styles.single}>
                                            <div style = {{borderRadius: '8px'}}>
                                                <Image src = '/im2.png' width = '220' height = '150' />
                                            </div>
                                            <p className = {styles.name}>Mr. John</p>
                                            <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                <Image src = '/business_logo.png' width = '20' height = '20'/>
                                                <p className = {styles.labe}>Founder of Borgfy</p>
                                            </div>
                                            <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                <Image src = '/location_logo.png' width = '20' height = '20'/>
                                                <p className = {styles.labe}>Boston, OH</p>
                                            </div>
                                        </div>
                                        <div className = {styles.single}>
                                            <div style = {{borderRadius: '8px'}}>
                                                <Image src = '/im3.png' width = '220' height = '150' />
                                            </div>
                                            <p className = {styles.name}>Mr. John</p>
                                            <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                <Image src = '/business_logo.png' width = '20' height = '20'/>
                                                <p className = {styles.labe}>Founder of Borgfy</p>
                                            </div>
                                            <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                <Image src = '/location_logo.png' width = '20' height = '20'/>
                                                <p className = {styles.labe}>Boston, OH</p>
                                            </div>
                                        </div>
                                        <div className = {styles.single}>
                                            <div style = {{borderRadius: '8px'}}>
                                                <Image src = '/im4.png' width = '220' height = '150' />
                                            </div>
                                            <p className = {styles.name}>Mr. John</p>
                                            <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                <Image src = '/business_logo.png' width = '20' height = '20'/>
                                                <p className = {styles.labe}>Founder of Borgfy</p>
                                            </div>
                                            <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                <Image src = '/location_logo.png' width = '20' height = '20'/>
                                                <p className = {styles.labe}>Boston, OH</p>
                                            </div>
                                        </div>
                                        <div className = {styles.single}>
                                            <div style = {{borderRadius: '8px'}}>
                                                <Image src = '/im5.png' width = '220' height = '150' />
                                            </div>
                                            <p className = {styles.name}>Mr. John</p>
                                            <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                <Image src = '/business_logo.png' width = '20' height = '20'/>
                                                <p className = {styles.labe}>Founder of Borgfy</p>
                                            </div>
                                            <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                <Image src = '/location_logo.png' width = '20' height = '20'/>
                                                <p className = {styles.labe}>Boston, OH</p>
                                            </div>
                                        </div>
                                        <div className = {styles.single}>
                                            <div style = {{borderRadius: '8px'}}>
                                                <Image src = '/im7.png' width = '220' height = '150' />
                                            </div>
                                            <p className = {styles.name}>Mr. John</p>
                                            <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                <Image src = '/business_logo.png' width = '20' height = '20'/>
                                                <p className = {styles.labe}>Founder of Borgfy</p>
                                            </div>
                                            <div style = {{width: 'fit-content', flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.labeCon}`}>
                                                <Image src = '/location_logo.png' width = '20' height = '20'/>
                                                <p className = {styles.labe}>Boston, OH</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            }
                            <div style = {{width: 'fit-content'}}>
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