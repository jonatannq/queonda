import {  ChevronDown } from 'lucide-react'
import { userStore } from '../../../../store/userStore'
import styles from './card.module.scss'

function CardMsg({msg}){

    const { user } = userStore()

    return(
        <div className={
                `${styles.message} 
                ${user.id !== msg.sender_id && styles.other}`
        }>
            <p>
                {msg.msg}
            </p>
            <span className={styles.span}>
                {msg.send_at}
            </span>
            <button className={styles.btn}>
                <ChevronDown className={styles.icon} />
            </button>
        </div>
    )
}
export default CardMsg