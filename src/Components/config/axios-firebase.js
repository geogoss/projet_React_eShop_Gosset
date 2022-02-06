import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://eshop-react-87fa4-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default instance
