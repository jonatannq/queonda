import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Chat from '../components/chat'

function Home(){

    const navigate = useNavigate()
    const user = ""

    useEffect(()=> {
        if(!user){
            //nave
        }

    },[])

    return(
        <main>
            <h1>Que onda</h1>
            
            <Chat />
        </main>
    )
}
export default Home