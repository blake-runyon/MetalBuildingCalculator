import { User } from '../models/User'
import axios from 'axios'

export class UserService {
    GetUsers() {
        return axios.get('http://localhost:8080/user').then(d => d.data)
    }
    
    PostUser(user: User) {
         return axios.post(`http://localhost:8080/user`, user).then(res => console.log(res))
    }
}