
import Image from 'next/image'
import PaddingLayout from '../../../layouts/paddingLayout/paddingLayout'
import styles from './section1.module.css'
import Fade from 'react-reveal/Fade'
import { useEffect, useState } from 'react'

export default function Section1(props){

    const [tag, setTag] = useState(0)

    useEffect(() => {
      setInterval(()=>{
        setTag(prev => (prev+1)%5)
      }, 2000)
    }, [])

    useEffect(()=>{
        document.getElementById("solotags").scroll(0, 64*tag)
        // document.getElementById("solotagsmob").scroll(0, 64*tag)
    }, [tag])
    

    return(
        <PaddingLayout>

            <div id = "home" className = {`${styles.container} d-flex align-items-start justify-content-between`}>
                <Fade duration = {2000} left>
                    <div className = {styles.pre1}>
                        <p className = {styles.title}>PreneurBay</p>
                        <p className = {styles.live}>Live- Work -Explore</p>
                        <p className = {styles.exec}>Travel World In Executive Way</p>
                        {/* <div style = {{flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.mob}`}>
                            <p style = {{width : 'auto', marginLeft: '0', marginRight: '0'}} className = {styles.solo}>Are you a&nbsp;</p>
                            <div style = {{width : 'auto', marginLeft: '0', marginRight: '0', overflow: 'hidden', height: '64px', scrollBehavior: 'smooth'}} id = "solotagsmob">
                                <p className = {styles.solo}><mark>Solopreneur</mark></p>
                                <p className = {styles.solo}><mark>Enterpreneur</mark></p>
                                <p className = {styles.solo}><mark>Investor</mark></p>
                                <p className = {styles.solo}><mark>Professional</mark></p>
                                <p className = {styles.solo}><mark>Digital Nomad</mark></p>
                            </div>
                            <p style = {{width : 'auto', marginLeft: '0', marginRight: '0'}} className = {styles.solo}>&nbsp;?</p>
                        </div> */}
                        <p className = {styles.text}>We are creating a community where preneur's meet hands to leverage businesses.</p>
                    </div>
                </Fade>
                <Fade duration = {2000} right>
                    <div className = {styles.pre2}>
                        <div style = {{flexWrap: 'nowrap'}} className={`d-flex align-items-center justify-content-start ${styles.pc}`}>
                            <p style = {{width : 'auto', marginLeft: '0', marginRight: '0'}} className = {styles.solo}>Are you a&nbsp;</p>
                            <div style = {{width : 'auto', marginLeft: '0', marginRight: '0', overflow: 'hidden', height: '64px', scrollBehavior: 'smooth'}} id = "solotags">
                                <p className = {styles.solo}><mark>Solopreneur</mark></p>
                                <p className = {styles.solo}><mark>Enterpreneur</mark></p>
                                <p className = {styles.solo}><mark>Investor</mark></p>
                                <p className = {styles.solo}><mark>Professional</mark></p>
                                <p className = {styles.solo}><mark>Digital Nomad</mark></p>
                            </div>
                            <p style = {{width : 'auto', marginLeft: '0', marginRight: '0'}} className = {styles.solo}>&nbsp;?</p>
                        </div>
                        <p className = {styles.rightText}>Willing to cross boundaries across world by creating impact through your ideas  !!<br/><br/>You landed at the right space.👍</p>
                    </div>
                </Fade>
            </div>
        </PaddingLayout>
    )
}