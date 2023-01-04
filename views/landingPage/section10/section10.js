
import PaddingLayout from '../../../layouts/paddingLayout/paddingLayout'
import styles from './section10.module.css'
import Image from 'next/image'

export default function Section10(props){
    return(
        <PaddingLayout>
            <div className = {styles.container}>
                <Image src = '/../public/landing_sec10_back.png' layout = 'fill' />

                <div style = {{position: 'relative'}} className = 'd-flex align-items-center justify-content-between'>
                    <div>
                        <p className = {styles.heading}>Join our Facebook community</p>
                        <p className = {styles.text}>Lorem ipsum dolor it</p>
                    </div>
                    <div>
                        <p className = {styles.join}>Join Now</p>
                    </div>
                </div>
            </div>
        </PaddingLayout>
    )
}