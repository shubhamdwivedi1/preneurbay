
import Navbar from '../../components/navbar/navbar'
import styles from './standardLayout.module.css'

export default function StandardLayout(props){
    return(
        <div>
            <Navbar/>
            {props.children}
        </div>
    )
}