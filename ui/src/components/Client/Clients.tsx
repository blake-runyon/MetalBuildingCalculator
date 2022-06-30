import AddClient from "./AddClient"
import { useState, useEffect } from 'react'
import { Button } from 'primereact/button'
import { ClientService } from "../../services/ClientService";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Client } from "../../models/Client";
import { Dialog } from "primereact/dialog";
import EditClient from "./EditClient"

const Clients = () => {
    
    const [shown, setShown] = useState(false);
    const [clients, setClients] = useState([])
    const [editing, setEditing] = useState(false)
    const clientService = new ClientService()
    const editButtonTemplate = (rowData: Client) => {
        return <Button label="Edit" onClick={() => { 
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
        return (
            <>
                <Button className="p-button-danger p-button-rounded" label="Delete" onClick={() => {
                    clientService.DeleteClient(`${client?._id}`);
                    setEditing(!editing)
                }} />
            </>
        )
    }

    useEffect(() => {
        clientService.GetClients().then(data => setClients(data))    
    });

    return (
        
        <>

        <Dialog visible={editing} footer={footer} header="Client Details" onHide={() => setEditing(!editing)}>
            <EditClient client={client!} setEditing={setEditing} />
        </Dialog>

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
        
        </>
        
    )
}

export default Clients