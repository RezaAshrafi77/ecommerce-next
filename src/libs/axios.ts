import axios from "axios"

const instance = axios.create({
    baseURL: "https://dummyjson.com",
})

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Error:", error)
        return Promise.reject(error)
    }
)

export default instance
