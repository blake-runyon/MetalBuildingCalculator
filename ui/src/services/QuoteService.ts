import axios from "axios";

export class QuoteService {
    GetSizes() { 
        return axios.get('http://localhost:8080/size').then(d => d.data)
    }
}