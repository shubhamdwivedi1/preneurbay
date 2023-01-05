
import styles from './contact.module.css'
import Image from 'next/image'

export default function Contact(props){
    return(
        <div className = {styles.container}>
            <div className = {styles.box}>
                <div onClick={()=>{props.setContact(false)}} style = {{position: 'absolute', top: '20px', right: '20px', cursor: 'pointer'}}>
                    <Image src = '/../public/contact_cross.png' width = '40' height = '40'/>
                </div>

                <div style = {{width: 'fit-content', margin: 'auto'}}>
                    <Image src = '/../public/contact_sub.png' width = '104' height = '14' />
                </div>
                <p className = {styles.title}>Contact us</p>

                <p className = {styles.label}>Full Name<span style = {{color: 'red'}}>*</span></p>
                <input className = {styles.input} />

                <p className = {styles.label}>Email<span style = {{color: 'red'}}>*</span></p>
                <input className = {styles.input} placeholder = "james.carton@gmail.com" />

                <p className = {styles.label}>Phone Number</p>
                <input className = {styles.input} placeholder = "+91 000 000 0000" />

                <p className = {styles.label}>Message</p>
                <textarea style = {{resize: 'none'}} className = {styles.input} placeholder = "Leave us a message..." ></textarea>

                <p className = {styles.send}>Send</p>
            </div>
        </div>
    )
}