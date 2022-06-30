import { Button } from 'primereact/button';

const Logout = () => {
    function handleClick() {
        sessionStorage.clear();
        window.location.reload();
    }

    return (
        <>
        <Button label='Logout' className='p-button-danger' onClick={handleClick}/>
        </>
    )
}

export default Logout;