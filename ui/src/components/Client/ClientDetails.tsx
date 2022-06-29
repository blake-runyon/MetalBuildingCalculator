import { Client } from '../../models/Client';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

const ClientDetails = (props:{client: Client}) => {
    return (
        <>
        <Card title="Client Details" className='clientDetailsCard border-2 border-primary'>
            <div className="formgrid grid">
                <div className="field col-12 md:col-4">
                    <label htmlFor="name" className="block">Full Name</label>
                    <InputText id="name" className="block w-full" disabled value={props.client.name} />
                </div>
                <div className="field col-12 md:col-4">
                    <label htmlFor="name" className="block">Email</label>
                    <InputText id="name" className="block w-full" disabled value={props.client.email} />
                </div>
                <div className="field col-12 md:col-4">
                    <label htmlFor="name" className="block">Phone Number</label>
                    <InputText id="name" className="block w-full" disabled value={props.client.phone} />
                </div>

                <div className="field col-12">
                    <label htmlFor="name" className="block">Street</label>
                    <InputTextarea id="name" className="block w-full" disabled value={props.client.address.street} />
                </div>
                <div className="field col-12 md:col-4">
                    <label htmlFor="name" className="block">City</label>
                    <InputText id="name" className="block w-full" disabled value={props.client.address.city} />
                </div>
                <div className="field col-12 md:col-4">
                    <label htmlFor="name" className="block">State</label>
                    <InputText id="name" className="block w-full" disabled value={props.client.address.state} />
                </div>
                <div className="field col-12 md:col-4">
                    <label htmlFor="name" className="block">Zip Code</label>
                    <InputText id="name" className="block w-full" disabled value={props.client.address.zipcode} />
                </div>
            </div>
        </Card>
        </>
    )
}

export default ClientDetails;