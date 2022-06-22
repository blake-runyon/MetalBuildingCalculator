import AddClient from "./AddClient"
import { ToggleButton } from "primereact/togglebutton"
import { useState, useEffect } from 'react'
import { Button } from 'primereact/button'
import { ClientService } from "../../services/ClientService";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Client } from "../../models/Client";
import { Dialog } from "primereact/dialog";

const Clients = () => {
    const [shown, setShown] = useState(false);
    const [clients, setClients] = useState([])
    const [editing, setEditing] = useState(false)
    const [currClient, setCurrClient] = useState<Client>();
    const clientService = new ClientService()
    const editButtonTemplate = (rowData: Client) => {
        return <Button label="Edit" onClick={() => { 
            setCurrClient(rowData)
            setEditing(!editing)
         }} />
    }

    useEffect(() => {
        clientService.GetClients().then(data => setClients(data))    
    });

    return (
        
        <>
        
        
        <div className={`${shown ? "": "hidden"}`}>
            <AddClient />
        </div>
        <ToggleButton onLabel="Hide Add Client" offLabel="Add Client" checked={shown} onChange={(e) => setShown(e.value)} />

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

        <Dialog visible={editing} header="Client Details" onHide={() => setEditing(!editing)}>
            <p>{currClient?.name}</p>
        </Dialog>  
        
        </>
        
    )
}

export default Clients