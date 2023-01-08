
import PaddingLayout from '../../layouts/paddingLayout/paddingLayout'
import styles from './footer.module.css'
import Image from 'next/image'

export default function Footer(props){
    return(
        <div className = {styles.container}>
            <PaddingLayout>
                <div className = 'd-flex align-items-center justify-content-between'>
                    <div>
                        <p className = {styles.text}>Copyrght 2022 all right reserved</p>
                    </div>
                    <div>
                        <div className = 'd-flex align-items-center'>
                            <p className = {styles.text}>Build by</p>
                            <div className = {styles.imm} style = {{marginLeft: '16px'}}>
                                <Image src = '/../public/footer_logo.png' width = '100' height = '62'/>
                            </div>
                        </div>
                    </div>
                </div>
            </PaddingLayout>
        </div>
    )
}