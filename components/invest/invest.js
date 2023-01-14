
import styles from './invest.module.css'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import axios from 'axios';

export default function Invest(props){


    const nameRef = useRef(null)
    const howRef = useRef(null)
    const numberRef = useRef(null)
    const locationRef = useRef(null)

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
             subject:"PrenuerBay Company -- Investment",
             htmlContent:`<html><head></head><body><p><b>Name<b/>: ${nameRef.current.value}</p><p><b>Funding<b/>: ${howRef.current.value}</p>${numberRef != "" ? `<b>Number<b/>: ${numberRef.current.value}</p>` : ``}<p><b>Location<b/>: ${locationRef.current.value}</p></body></html>`
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
            howRef.current.value = ""
            locationRef.current.value = ""
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
                <p className = {styles.title}>Invest in us</p>

                
                {status != 1 &&
                    <React.Fragment>
                        <p className = {styles.label}>Full Name<span style = {{color: 'red'}}>*</span></p>
                        <input ref = {nameRef} className = {styles.input} />

                        <p className = {styles.label}>How much are you willing to invest<span style = {{color: 'red'}}>*</span></p>
                        <input ref = {howRef} className = {styles.input} placeholder = "$1500" />

                        <p className = {styles.label}>Mobile Number</p>
                        <input ref = {numberRef} className = {styles.input} placeholder = "+91 000 000 0000" />

                        <p className = {styles.label}>Location</p>
                        <textarea ref = {locationRef}  style = {{resize: 'none'}} className = {styles.input} placeholder = "Street, City, Country" ></textarea>
                    </React.Fragment>
                }


                {status == 1 &&
                    <p style = {{backgroundColor: 'green'}} className = {styles.send}>Thanks, We will get back to you shortly.</p>
                }

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