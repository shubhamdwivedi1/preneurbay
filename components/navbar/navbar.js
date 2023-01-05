
import styles from './navbar.module.css'
import Image from 'next/image'
import PaddingLayout from '../../layouts/paddingLayout/paddingLayout'

export default function Navbar(props){
    return(
        <PaddingLayout>
            <div className = {`${styles.container} d-flex align-items-center justify-content-between`}>
                <div>
                    <Image src = "/../public/logo.png" width = '223' height = '45' />
                </div>
                <div className='d-flex'>
                    <p style = {{cursor: 'pointer'}} className = {`${styles.label} ${styles.active}`}>Home</p>
                    <p style = {{cursor: 'pointer'}} className = {`${styles.label}`}>About</p>
                    <p style = {{cursor: 'pointer'}} className = {`${styles.label}`}>Mission</p>
                    <p style = {{cursor: 'pointer'}} className = {`${styles.label}`}>Vision</p>
                    <p onClick={()=>{props.setContact(true)}} style = {{cursor: 'pointer'}} className = {`${styles.label}`}>Contact</p>
                </div>
            </div>
        </PaddingLayout>
    )
}