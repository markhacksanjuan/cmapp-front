import axios from 'axios'

const http = axios.create({
    baseURL: 'https://cm-app-back.herokuapp.com/client'
})

async function getAllClients (){
        const response = await http.get('/all')
        return response.data
}
async function getClientId(id){
    try{
        const response = await http.get(`/one/${id}`)
        return response.data
    }
    catch(err){
        console.error(err)
    }
}

export default {
    getAllClients,
    getClientId
}