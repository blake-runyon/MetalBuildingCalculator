import { Client } from "../../models/Client";
import { ClientService } from "../../services/ClientService";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

const EditClient = (props:{ client: Client}) => {

    const clientService = new ClientService();
    const [client, setClient] = useState<Client>(props.client);
    const [editing, setEditing] = useState(false);
    return (
        <>
        
        <div className="field">
            <label htmlFor="name" className="block">Full Name</label>
            <InputText id="name" value={client.name} onChange={(e) => setClient({...client, name: e.target.value})} />
        </div>
        <div className="field">
            <label htmlFor="email" className="block">Email</label>
            <InputText id="email" value={client.email} onChange={(e) => setClient({...client, email: e.target.value})} />
        </div>
        <div className="field">
            <label htmlFor="phone" className="block">Phone Number</label>
            <InputText id="phone" value={client.phone} onChange={(e) => setClient({...client, phone: e.target.value})} />
        </div>
        <div className="field">
            <label htmlFor="street" className="block">Street</label>
            <InputText id="street" value={client.address.street} onChange={(e) => setClient(prevClient => {
                return {
                    ...prevClient,
                    address: { street: e.target.value, city: prevClient.address.city, state: prevClient.address.state, zipcode: prevClient.address.zipcode }
                }
            })} />
        </div>
        <div className="field">
            <label htmlFor="city" className="block">City</label>
            <InputText id="city" value={client.address.city} onChange={(e) => setClient(prevClient => {
                return {
                    ...prevClient,
                    address: { street: prevClient.address.street, city: e.target.value, state: prevClient.address.state, zipcode: prevClient.address.zipcode }
                }
            })} />
        </div>
        <div className="field">
            <label htmlFor="state" className="block">State</label>
            <InputText id="state" value={client.address.state} onChange={(e) => setClient(prevClient => {
                return {
                    ...prevClient,
                    address: { street: prevClient.address.street, city: prevClient.address.city, state: e.target.value, zipcode: prevClient.address.zipcode }
                }
            })} />
        </div>
        <div className="field">
            <label htmlFor="zipcode" className="block">Zip Code</label>
            <InputText id="zipcode" value={client.address.zipcode} onChange={(e) => setClient(prevClient => {
                return {
                    ...prevClient,
                    address: { street: prevClient.address.street, city: prevClient.address.city, state: prevClient.address.state, zipcode: e.target.value }
                }
            })} />
        </div>
        
        </>
    )
}

export default EditClient;