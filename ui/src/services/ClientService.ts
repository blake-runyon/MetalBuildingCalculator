import { Client } from "../models/Client";
import axios from "axios";

export class ClientService {
    GetClients() {
        return axios.get('http://localhost:8080/clients').then(d => d.data)
    }

    PostClient(client: Client) {
        return axios.post(`http://localhost:8080/add-client`, client).then(res => console.log(res))
    }
}