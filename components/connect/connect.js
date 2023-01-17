
import styles from './connect.module.css'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import axios from 'axios';

export default function Connect(props){

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const numberRef = useRef(null)
    const occupationRef = useRef(null)

    const [status, setStatus] = useState(0)
    const [process, setProcess] = useState(false)


    let sendEmail = ()=>{

        setStatus(0)
        setProcess(true)

        axios.post("https://api.sendinblue.com/v3/smtp/email", {
            sender:{  
                name:"PreneurBay",
                email:"mintoadil@gmail.com"
             },
             replyTo: {
                name: "PrenuerBay",
                email: "mintoadil@gmail.com"
             },
             to:[{  
                   email:"info@preneurbay.com",
                   name:"PrenuerBay Mail"
                }],
             subject:"PrenuerBay Company -- Connect",
             htmlContent:`<html><head></head><body><p><b>Name<b/>: ${nameRef.current.value}</p><p><b>Email<b/>: ${emailRef.current.value}</p>${numberRef != "" ? `<b>Number<b/>: ${numberRef.current.value}</p>` : ``}<p><b>Occupation<b/>: ${occupationRef.current.value}</p></body></html>`
          },
          {
            headers: {
                "api-key": `${process.env.NEXT_PUBLIC_APIKEY}`,
                "Content-Type": "application/json",
                "accept": "application/json"
            }
          }
        )
        .then((res)=>{
            setStatus(1)
            setProcess(false)
            nameRef.current.value = ""
            emailRef.current.value = ""
            occupationRef.current.value = ""
            numberRef.current.value = ""
        })
        .catch((err)=>{
            setStatus(-1)
            setProcess(false)
        })
    }


    return(
        <div className = {styles.container}>
            <div className = {styles.box}>
                <div onClick={()=>{props.setContact(false)}} style = {{position: 'absolute', top: '20px', right: '20px', cursor: 'pointer'}}>
                    <Image src = '/contact_cross.png' width = '40' height = '40'/>
                </div>

                {/* <p style = {{width: 'fit-content', margin: 'auto'}}><mark>GET IN TOUCH</mark></p> */}
                <p className = {styles.title}>Connect with us</p>

                {status != 1 &&
                    <React.Fragment>
                        <p className = {styles.label}>Full Name<span style = {{color: 'red'}}>*</span></p>
                        <input ref = {nameRef} className = {styles.input} />

                        <p className = {styles.label}>Email<span style = {{color: 'red'}}>*</span></p>
                        <input ref = {emailRef} className = {styles.input} placeholder = "james.carton@gmail.com" />

                        <p className = {styles.label}>Mobile Number</p>
                        <input ref = {numberRef} className = {styles.input} placeholder = "+91 000 000 0000" />


                        <p className = {styles.label}>Occupation</p>
                        <input ref = {occupationRef} className = {styles.input} />
                    </React.Fragment>
                }

                {status == 1 &&
                    <p style = {{backgroundColor: 'green'}} className = {styles.send}>Thanks, We will get back to you shortly.</p>
                }

                {/* <p className = {styles.label}>Location</p> */}
                {/* <textarea style = {{resize: 'none'}} className = {styles.input} placeholder = "Street, City, Country" ></textarea> */}
                {status == -1 &&
                    <p style = {{backgroundColor: 'red'}} className = {styles.send}>Send Failed, Try Again</p>
                }
                {status != 1 &&
                    <p onClick={()=>{if(!process)sendEmail();}} style = {{background: !process ? 'linear-gradient(180deg, #D1AB49 0%, #D19C15 100%)' : 'gray'}} className = {styles.send}>Send</p>
                }
            </div>
        </div>
    )
}