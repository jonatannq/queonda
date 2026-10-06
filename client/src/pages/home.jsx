import Contact from '../components/contact'
import Chat from '../components/chat'
import {userStore} from '../store/userStore'
import { useEffect } from 'react'
function Home(){

    const { user } = userStore()

    return(
        <main>
            <h1>QueOnda {user.username}</h1>
            {/**/}
            {/*
            <Contact /> */}
            <Chat />
        </main>
    )
}

export default Home