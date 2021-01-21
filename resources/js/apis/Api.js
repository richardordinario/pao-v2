import axios from 'axios'

const base_url = window.location.origin

let Api = axios.create({
    baseURL: base_url
})

export default Api
