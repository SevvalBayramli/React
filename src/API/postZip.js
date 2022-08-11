import axios from 'axios';

const  postZip=async(data)=>{
    
    try{
        
        const config={
            baseURL:'http://localhost:8080',
            url:"/jiraZipAPI",
            method:"POST",
            data:data
        }
        console.log(data)
    const {status}=(await axios(config)).data
        return status

    }catch(e){

        console.log(e)
    
    }

}
export default postZip;
//async await promise obje kullanımı 