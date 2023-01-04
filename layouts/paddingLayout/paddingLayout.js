
import styles from './paddingLayout.module.css'

export default function PaddingLayout(props){
    return(
        <div className = {styles.container}>
            {props.children}
        </div>
    )
}