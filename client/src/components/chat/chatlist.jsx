import { useEffect, useRef } from 'react'
import CardMsg from './card/cardmsg'
import styles from './chat.module.scss'

function ChatList({list}){

    const divRef = useRef(null)

    useEffect(() => {
        divRef.current?.scrollIntoView({behavior: 'auto'})
    }, [list])

    return (
        <div className={styles.container}>
            {list.map((msg) => ( 
                <CardMsg key={msg.id} msg={msg} />
            ))}
            <div ref={divRef}/>
        </div>  
    )
}

export default ChatList
