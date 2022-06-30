import { InputNumber } from 'primereact/inputnumber'
import { Dropdown } from 'primereact/dropdown'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'
import { useState } from 'react'

const OtherForm = (props:{type: string}) => {
    const [height, setHeight] = useState(0)
    const [windows, setWindows] = useState(false)
    
    return (
        <>
        <div className="formgrid grid">
            <div className="col-12">
                <h1>{props.type} Form</h1>
            </div>
            <div className="field col-12">
                <label htmlFor="height" className='mr-3'>Height</label>
                <InputNumber value={height} showButtons min={0} max={150} onValueChange={(e) => setHeight(e.value!)}/>
            </div>
            <div className="field col-12">
                <label htmlFor="windows" className='mr-3'>Windows?</label>
                <Checkbox checked={windows} onChange={(e) => setWindows(e.checked)}/>

            </div>
        </div>
        </>
    )
}

export default OtherForm