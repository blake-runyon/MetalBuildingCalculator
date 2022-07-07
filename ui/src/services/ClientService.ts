import { Client } from "../models/Client";
import axios from "axios";

export class ClientService {
    GetClients() {
        return axios.get('http://localhost:8080/client/').then(d => d.data)
    }

    GetClient(id: string) {
        return axios.get('http://localhost:8080/client/' + id).then(d => d.data)
    }

    PostClient(client: Client) {
        return axios.post(`http://localhost:8080/client`, client).then(res => console.log(res))
    }

    DeleteClient(id: string) {
        return axios.delete(`http://localhost:8080/client/${id}`)
    }

    EditClient(id: string, client: Client) {
        return axios.patch(`http://localhost:8080/client/${id}`, client)
    }
}