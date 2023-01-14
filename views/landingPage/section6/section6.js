
import PaddingLayout from '../../../layouts/paddingLayout/paddingLayout'
import styles from './section6.module.css'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

export default function Section6(props){
    return(
        <div id = "about" className = {styles.container}>
                <PaddingLayout>
                    <Fade duration = {2000} bottom>
                        <p className = {styles.title} style = {{margin: 'auto', width: 'fit-content'}}><mark>How do we work?</mark></p>
                    </Fade>

                    <Fade duration = {2000} left>
                        <p style = {{marginTop: '71px'}} className = {styles.yellowBox}>PreneurBay's Terminal</p>
                    </Fade>

                    
                    <div className = 'd-flex align-items-start justify-content-between'>
                        <Fade duration = {2000} left>
                            <div style = {{width: '396px'}}>
                                <p className = {styles.title}>Connecting Cities Internationally</p>
                            </div>
                        </Fade>
                        <Fade duration = {2000} right>
                            <div style = {{width: '666px'}}>
                                <p className = {styles.text}>PreneurBay's concept connects two individual cities through our platform, allowing individuals to learn more about each other and promoting economic, educational and cultural growth between international cities.<br/>PreneurBay's Terminal is an innovative concept that connects two different cities through our platform, allowing individuals to learn more about each other and promoting economic, educational and cultural growth between international cities. Our platform provides a unique opportunity for individuals to explore and connect with different cultures and communities, fostering mutually beneficial relationships between the two cities</p>
                            </div>
                        </Fade>
                    </div>
                </PaddingLayout>

                <div style = {{marginTop: '50px'}} className = 'd-flex align-items-start justify-content-between'>
                    <Fade duration = {2000} right>
                        <div className = {`${styles.imgCont} show_in_mobile`}>
                            <Image src = '/workinh.jpg' layout='fill'/>
                        </div>
                    </Fade>
                    <div style = {{width: '100%'}}>
                        <PaddingLayout >
                            <div style={{width: '100%'}} className = 'd-flex align-items-start justify-content-between'>
                                    <Fade duration = {2000} left>
                                        <div className = {styles.point} style = {{width: '728px'}}>
                                        <ul className = {styles.points}>
                                            <li>Our Unique Selling Point is Connecting International Entrepreneurs and Professional Travelers with Local Entrepreneur Communities.</li>
                                            <li>Our Co-working Spaces provide opportunities for engagement and building connections with co-workers and the international community.</li>
                                            <li>We strive to establish a robust Network of Research and Development to drive innovation and foster collaboration between corporate leaders and educational institutions.</li>
                                            <li>Our Modern Living Spaces offer a peaceful environment for business travel, allowing you to stay focused and refreshed.</li>
                                            <li>Our App provides in-depth networking opportunities to explore more about our members and connect with people internationally.</li>
                                            <li>The "Gig on Travel" feature allows you to take on jobs posted by members, reducing your travel costs.</li>
                                            <li>Attend Local and In-House Events to expand your network and knowledge.</li>
                                            <li>We understand the challenges of starting a business, that's why we make our services as affordable as possible to leave positive memories during your early entrepreneurial journey.</li>
                                            <li>We understand the financial challenges that come with starting a business, which is why we strive to make our services as affordable as possible for early stage entrepreneurs. Our goal is to provide a positive and memorable experience during this important phase of your entrepreneurial journey.</li>
                                        </ul>
                                        </div>
                                    </Fade>
                                    <Fade duration = {2000} right>
                                        <div className = {`${styles.imgCont} hide_in_mobile`}>
                                            <Image src = '/workinh.jpg' layout='fill'/>
                                        </div>
                                    </Fade>
                            </div>
                        </PaddingLayout>
                    </div>
                </div>
            </div>
    )
}