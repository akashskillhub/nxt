import axios from 'axios'
const getAllUsers = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
    return data
}

export default getAllUsers