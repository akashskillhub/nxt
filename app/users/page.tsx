import getAllUsers from "@/lib/getAllUsers"
import axios from "axios"
export const metadata = {
    title: "users page",
    description: "Build by SKILLHUB"
}
export default async function page() {


    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
    const CONTENT = <ul>
        {data.map((item: any) => <li key={item.id}>
            {item.name}
        </li>)}
    </ul>
    return CONTENT
}
