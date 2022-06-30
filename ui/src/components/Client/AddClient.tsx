import { InputText } from "primereact/inputtext"
import { Client } from "../../models/Client"
import { useState } from 'react'
import { Button } from 'primereact/button'
import { ClientService } from "../../services/ClientService"

const AddClient = () => {
    const [client, setClient] = useState<Client>(
        {
            name: "", 
            email: "", 
            phone: "", 
            address: { 
                street: "", 
                city: "", 
                state: "", 
                zipcode: ""
            }
        }
    )

    const clientService = new ClientService();
    
    return (
        <>
        <div className="formgrid grid">
            <div className="field col-12 md:col-4">
                <label htmlFor="name" className="block">Full Name</label>
                <InputText className="w-full" id="name" value={client.name} onChange={(e) => setClient({...client, name: e.target.value})} />
            </div>
            <div className="field col-12 md:col-4">
                <label htmlFor="email" className="block">Email</label>
                <InputText className="w-full" id="email" value={client.email} onChange={(e) => setClient({...client, email: e.target.value})} />
            </div>
            <div className="field col-12 md:col-4">
                <label htmlFor="phone" className="block">Phone Number</label>
                <InputText className="w-full" id="phone" value={client.phone} onChange={(e) => setClient({...client, phone: e.target.value})} />
            </div>
            <div className="field col-12">
                <label htmlFor="street" className="block">Street</label>
                <InputText className="w-full" id="street" value={client.address.street} onChange={(e) => setClient(prevClient => {
                    return {
                        ...prevClient,
                        address: { street: e.target.value, city: prevClient.address.city, state: prevClient.address.state, zipcode: prevClient.address.zipcode }
                    }
                })} />
            </div>
            <div className="field col-12 md:col-4">
                <label htmlFor="city" className="block">City</label>
                <InputText className="w-full" id="city" value={client.address.city} onChange={(e) => setClient(prevClient => {
                    return {
                        ...prevClient,
                        address: { street: prevClient.address.street, city: e.target.value, state: prevClient.address.state, zipcode: prevClient.address.zipcode }
                    }
                })} />
            </div>
            <div className="field col-12 md:col-4">
                <label htmlFor="state" className="block">State</label>
                <InputText className="w-full" id="state" value={client.address.state} onChange={(e) => setClient(prevClient => {
                    return {
                        ...prevClient,
                        address: { street: prevClient.address.street, city: prevClient.address.city, state: e.target.value, zipcode: prevClient.address.zipcode }
                    }
                })} />
            </div>
            <div className="field col-12 md:col-4">
                <label htmlFor="zipcode" className="block">Zip Code</label>
                <InputText className="w-full" id="zipcode" value={client.address.zipcode} onChange={(e) => setClient(prevClient => {
                    return {
                        ...prevClient,
                        address: { street: prevClient.address.street, city: prevClient.address.city, state: prevClient.address.state, zipcode: e.target.value }
                    }
                })} />
            </div>
            <div className="col-12">
                <Button label="Submit" onClick={() => clientService.PostClient(client)}/>
            </div>
        </div>
        </>
    )
}

export default AddClient