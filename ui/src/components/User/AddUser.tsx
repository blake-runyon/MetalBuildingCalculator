import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { useState } from 'react'
import { User } from '../../models/User'
import { UserService} from '../../services/UserService'


const AddUser = () => {
    var [user, setUser] = useState<User>({username: "", email: "", password: ""})
    const userService = new UserService()

    const u: User = {
        username: user.username,
        email: user.email,
        password: user.password
    }

    return (
        <>
        <h3>Desired User Name</h3>
        <InputText value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
        <h3>Personal Email Address</h3>
        <InputText value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
        <h3>Password</h3>
        <Password value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
        <br />
        <Button 
        label="Add User" 
        type='submit'
        onClick={() => {
            userService.PostUser(u)
        }}
        />
        </>
    )
}

export default AddUser