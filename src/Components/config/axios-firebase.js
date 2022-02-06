import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://eshop-react-88a5a-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default instance