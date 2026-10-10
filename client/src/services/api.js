import axios from 'axios'


const baseURL = import.meta.env.mode === "development"
? 'http://localhost:3000'
: import.meta.env.VITE_API_URL

const api = axios.create({
    baseURL: baseURL
})

export default api