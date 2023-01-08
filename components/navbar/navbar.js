
import styles from './navbar.module.css'
import Image from 'next/image'
import PaddingLayout from '../../layouts/paddingLayout/paddingLayout'
import { useState } from 'react'

export default function Navbar(props){

    const [menu, setMenu] = useState(false)

    return(
        <PaddingLayout>
            <div className = {`${styles.container} d-flex align-items-center justify-content-between`}>
                <div className='d-flex align-items-center justify-content-start'>
                    <div onClick={()=>{setMenu(true)}} style = {{width: 'fit-content', margin: '0', marginRight: '10px', cursor: 'pointer'}} className='show_in_mobile'>
                        <Image src = '/../public/menu_icon.png' width = '20' height = '20' />
                    </div>
                    <div className = {styles.logoConMM}>
                        <Image src = "/../public/logo.png" layout='fill' />
                    </div>
                </div>
                <div className={`d-flex ${styles.menu}`}>
                    <p style = {{cursor: 'pointer'}} className = {`${styles.label} ${styles.active}`}>Home</p>
                    <p style = {{cursor: 'pointer'}} className = {`${styles.label}`}>About</p>
                    <p style = {{cursor: 'pointer'}} className = {`${styles.label}`}>Mission</p>
                    <p style = {{cursor: 'pointer'}} className = {`${styles.label}`}>Vision</p>
                    <p onClick={()=>{props.setContact(true)}} style = {{cursor: 'pointer'}} className = {`${styles.label}`}>Contact</p>
                </div>

            </div>

            <div style = {{left: menu ? '0' : '-150px'}} className = {styles.mobMenu}>
                <div onClick={()=>{setMenu(false)}} style = {{position: 'absolute', top: '5px', left: '5px', cursor: 'pointer'}}>
                    <Image src = '/../public/cross.png' width = '24' height = '24' />
                </div>
                <p style = {{cursor: 'pointer', marginLeft: '40px'}} className = {`${styles.label} ${styles.active}`}>Home</p>
                <p style = {{cursor: 'pointer'}} className = {`${styles.label}`}>About</p>
                <p style = {{cursor: 'pointer'}} className = {`${styles.label}`}>Mission</p>
                <p style = {{cursor: 'pointer'}} className = {`${styles.label}`}>Vision</p>
                <p onClick={()=>{setMenu(false);props.setContact(true)}} style = {{cursor: 'pointer'}} className = {`${styles.label}`}>Contact</p>
            </div>

        </PaddingLayout>
    )
}