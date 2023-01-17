
import PaddingLayout from '../../../layouts/paddingLayout/paddingLayout'
import styles from './section10.module.css'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

export default function Section10(props){
    return(
        <PaddingLayout>
            <Fade duration = {2000} bottom>
                <div className = {styles.container}>
                    <Image src = '/landing_sec10_back.png' layout = 'fill' />

                    <div style = {{position: 'relative'}} className = 'd-flex align-items-center justify-content-between'>
                        <div>
                            <div className = 'd-flex align-items-center justify-content-center'>
                                <p style = {{marginRight: '10px'}} className = {styles.heading}>Join our</p>
                                <div style = {{marginBottom: '9px'}}>
                                    <Image src = '/facebook_icon.png' width = '30' height = '30' />
                                </div>
                                <p style = {{marginLeft: '10px'}} className = {styles.heading}>community</p>
                            </div>
                            <p className = {styles.text}>Connect With Our Community of Preneur's</p>
                        </div>
                        <div>
                            <a href = 'https://www.facebook.com/groups/685969796192496'><p className = {styles.join}>Join Now</p></a>
                        </div>
                    </div>
                </div>
            </Fade>


            
        </PaddingLayout>
    )
}