
import PaddingLayout from "../../../layouts/paddingLayout/paddingLayout";
import styles from './section7.module.css'
import Image from 'next/image'

export default function Section7(props){
    return(
        <PaddingLayout>
            <div className = {styles.container}>
                <div style = {{position: 'relative'}}>
                    <Image src = '/../public/landing_sec7_maps.png' width = '1100' height = '582'/>
                </div>
            </div>
        </PaddingLayout>
    )
} 