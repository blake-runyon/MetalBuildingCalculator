import AddUser from "./AddUser"
import { useState, useEffect } from "react";
import { ToggleButton } from 'primereact/togglebutton'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { UserService } from "../../services/UserService";

const Users = () => {
    const [shown, setShown] = useState(false);
    const [users, setUsers] = useState([])
    const userService = new UserService()

    useEffect(() => {
        userService.GetUsers().then(data => setUsers(data))    
    });

    return (
        <>
        <div className={`${shown ? "": "hidden"}`}>
            <AddUser />
        </div>
        <ToggleButton onLabel="Hide Add User" offLabel="Add User" checked={shown} onChange={(e) => setShown(e.value)} />
        
        <DataTable value={users} responsiveLayout="scroll">
            <Column field="username" header="Username"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="password" header="Edit"></Column>
        </DataTable>
        </>
    )
}

export default Users