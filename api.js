import axios from 'axios'


const baseUrl = 'https://warm-gorge-78297.herokuapp.com/'

export const test = () => {
   return axios.get('https://warm-gorge-78297.herokuapp.com/').then((res) => {
    return res.data
}) 
}

export const login = () => {
    return axios.get('https://bird-brain-nc-project.herokuapp.com/').then((res) => {
        return res.data
    })
}

