import axios from 'axios'


const baseUrl = 'https://warm-gorge-78297.herokuapp.com/'

export const test = axios.get(`${baseUrl}`).then((res) => {
    return res.data
})

