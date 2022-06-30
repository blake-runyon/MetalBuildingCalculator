import { InputNumber } from 'primereact/inputnumber'
import { Dropdown } from 'primereact/dropdown'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'
import { useState } from 'react'

const OtherForm = (props:{type: string}) => {
    const [height, setHeight] = useState(0)
    const [windows, setWindows] = useState(false)
    const [windowAmt, setWindowAmt] = useState(0)
    const [windowSize, setWindowSize] = useState([0, 0])

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
            <div className={`${windows ? "" : "hidden"}`}>
                <div className="field col-12">
                    <label htmlFor="windowAmt" className="ml-3 mr-3">Amount of Windows:</label>
                    <InputNumber value={windowAmt} showButtons min={0} max={150} onValueChange={(e) => setWindowAmt(e.value!)}/>
                </div>
                <div className="field col-12">
                    <label htmlFor="windowSize" className="ml-3 mr-3">Size of Windows:</label>
                    <InputNumber value={windowSize[0]} buttonLayout="vertical" showButtons min={0} max={150} onValueChange={(e) => setWindowSize([e.value!, windowSize[1]])}/>
                    x
                    <InputNumber value={windowSize[0]} buttonLayout="vertical" showButtons min={0} max={150} onValueChange={(e) => setWindowSize([windowSize[0], e.value!])}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default OtherForm