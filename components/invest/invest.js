
import styles from './invest.module.css'
import Image from 'next/image'

export default function Invest(props){
    return(
        <div className = {styles.container}>
            <div className = {styles.box}>
                <div onClick={()=>{props.setContact(false)}} style = {{position: 'absolute', top: '20px', right: '20px', cursor: 'pointer'}}>
                    <Image src = '/contact_cross.png' width = '40' height = '40'/>
                </div>

                {/* <p style = {{width: 'fit-content', margin: 'auto'}}><mark>GET IN TOUCH</mark></p> */}
                <p className = {styles.title}>Invest in us</p>

                <p className = {styles.label}>Full Name<span style = {{color: 'red'}}>*</span></p>
                <input className = {styles.input} />

                <p className = {styles.label}>How much are you willing to invest<span style = {{color: 'red'}}>*</span></p>
                <input className = {styles.input} placeholder = "$1500" />

                <p className = {styles.label}>Mobile Number</p>
                <input className = {styles.input} placeholder = "+91 000 000 0000" />

                <p className = {styles.label}>Location</p>
                <textarea style = {{resize: 'none'}} className = {styles.input} placeholder = "Street, City, Country" ></textarea>

                <p className = {styles.send}>Send</p>
            </div>
        </div>
    )
}