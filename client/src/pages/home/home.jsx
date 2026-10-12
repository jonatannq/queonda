import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Chat from '../../components/chat/chat'
import { userStore } from '../../../store/userStore'


function Home(){

    const navigate = useNavigate()
    const { user } = userStore()


    useEffect(()=> {
        if(!user){
            navigate("/auth")
        }
        
    },[])

    return(
        <main>
            <Chat />
        </main>
    )
}
export default Home