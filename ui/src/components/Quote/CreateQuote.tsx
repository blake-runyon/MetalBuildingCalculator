import ClientDetails from '../Client/ClientDetails'
import { useEffect, useState } from 'react'
import { Client } from '../../models/Client'
import { ClientService } from '../../services/ClientService'

const CreateQoute = () => {
    const clientService = new ClientService()
   
    const id = "62bb2bd4cf0a5db23254d38a"
    
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
    })
    
   useEffect(() => {
     clientService.GetClient(id).then(client => {
       setClient(client)
     }
   )})
   

    return (
    <>
    <ClientDetails client={client!} />
    </>
    
  );
}

export default CreateQoute;