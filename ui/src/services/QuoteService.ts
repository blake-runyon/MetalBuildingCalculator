import axios from "axios";

export class QuoteService {
    GetSizes() { 
        return axios.get('http://localhost:8080/get-sizes').then(d => d.data)
    }
}