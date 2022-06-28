import AddClient from "./AddClient"
import { ToggleButton } from "primereact/togglebutton"
import { useState, useEffect } from 'react'
import { Button } from 'primereact/button'
import { ClientService } from "../../services/ClientService";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Client } from "../../models/Client";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

const Clients = () => {
    const [shown, setShown] = useState(false);
    const [clients, setClients] = useState([])
    const [editing, setEditing] = useState(false)
    const [currClient, setCurrClient] = useState<Client>();
    const clientService = new ClientService()
    const editButtonTemplate = (rowData: Client) => {
        return <Button label="Edit" onClick={() => { 
            setCurrClient(rowData)
            setClient(rowData)
            setEditing(!editing)
         }} />
    }
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

    const footer = () => {
        return <Button className="p-button-danger p-button-rounded" label="Delete" onClick={() => {
            clientService.DeleteClient(`${currClient?._id}`);
            setEditing(!editing)
        }} />
    }

    useEffect(() => {
        clientService.GetClients().then(data => setClients(data))    
    });

    return (
        
        <>
        
        
        <Dialog header="Create A Client" visible={shown} onHide={() => { setShown(!shown)}}>
            <AddClient />
        </Dialog>
        <Button label="Create A Client" onClick={() => { setShown(!shown) }} />

        <DataTable value={clients} responsiveLayout="scroll">
            <Column field="name" header="Name"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="phone" header="Phone"></Column>
            <Column field="address.street" header="Street"></Column>
            <Column field="address.city" header="City"></Column>
            <Column field="address.state" header="State"></Column>
            <Column field="address.zipcode" header="Zipcode"></Column>
            <Column header="EDIT" body={editButtonTemplate}></Column>
        </DataTable>

        <Dialog visible={editing} header="Client Details" onHide={() => setEditing(!editing)} footer={footer}>
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
        <Button label="Save" onClick={() => {
            clientService.EditClient(client._id!, client)
            setEditing(false)
            }}/>
        </Dialog>  
        
        </>
        
    )
}

export default Clients