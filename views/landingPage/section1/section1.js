
import Image from 'next/image'
import PaddingLayout from '../../../layouts/paddingLayout/paddingLayout'
import styles from './section1.module.css'

export default function Section1(props){
    return(
        <PaddingLayout>

            <div  className = {`${styles.container} d-flex align-items-start justify-content-between`}>
                <div>
                    <p className = {styles.title}>PreneurBay</p>
                    <p className = {styles.live}>Live- Work -Explore</p>
                    <p className = {styles.text}>We are Building a place where people <span style = {{color: '#03254C', fontWeight: 'bold'}}>Speak Business</span>, Live- Work Explore - Connect World In An Executive Way.</p>
                </div>
                <div>
                    <div style = {{marginBottom: '35px'}}>
                        <Image src = '/../public/solopreneur.png' width = '395' height = '35' />
                    </div>
                    <p className = {styles.rightText}>Willing to cross boundaries across world by creating impact through your ideas  !!<br/><br/>You landed at the right space.👍</p>
                </div>
            </div>
        </PaddingLayout>
    )
}