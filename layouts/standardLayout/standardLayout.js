
import { useState } from 'react'
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import styles from './standardLayout.module.css'

export default function StandardLayout(props){

    const [contact, setContact] = useState()

    return(
        <div>
            {contact && 
                <Contact setContact = {setContact} contact = {contact}/>
            }
            <Navbar setContact = {setContact}/>
            {props.children}
            <Footer/>
        </div>
    )
}