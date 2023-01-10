
import { useState } from 'react'
import Connect from '../../components/connect/connect'
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import Invest from '../../components/invest/invest'
import Navbar from '../../components/navbar/navbar'
import styles from './standardLayout.module.css'

export default function StandardLayout(props){

    const [contact, setContact] = useState(false)

    return(
        <div>
            {contact && 
                <Contact setContact = {setContact} contact = {contact}/>
            }
            {props.connect && 
                <Connect setContact = {props.setConnect} contact = {props.connect}/>
            }
            {props.invest && 
                <Invest setContact = {props.setInvest} contact = {props.invest}/>
            }
            <Navbar setContact = {setContact}/>
            {props.children}
            <Footer/>
        </div>
    )
}