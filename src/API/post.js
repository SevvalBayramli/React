import axios from 'axios'

const post = (data) => {

    try {
        const config = {
            baseURL: 'http://localhost:8080',
            url: "/jiraAPI",
            method: "POST",
            data: data
        }
        console.log(data)
        const { status } = (axios(config)).data
        return status

    } catch (e) {

        console.log(e)

    }
}
export default post;
//async await promise obje kullanımı


