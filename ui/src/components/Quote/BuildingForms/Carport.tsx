import { InputNumber } from 'primereact/inputnumber'
import { Dropdown } from 'primereact/dropdown'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'
import { useState } from 'react'
import { roofTypes } from '../../../data/options/roofTypes'

const CarportForm = () => {
    const [height, setHeight] = useState(0)
    const roofs = roofTypes
    const [selectedRoof, setSelectedRoof] = useState()
    const [advancedCarport, setAdvancedCarport] = useState(false)

    const submitForm = () => {
        console.log(`Height: ${height} \nRoof: ${selectedRoof} \nAdvanced Carport: ${advancedCarport}`)
    }

    return (
        <>
        <h2>Carport Form</h2>
        <div className="formgrid grid">
            <div className="field col-12">
                <label htmlFor="roofType" className='block'>Roof Type</label>
                <Dropdown value={selectedRoof} options={roofs} placeholder="Select a Roof Type" onChange={(e) => {setSelectedRoof(e.value)}}/>
            </div>  
            <div className="field col-12">
                <label htmlFor="height" className='block'>Height</label>
                <InputNumber value={height} placeholder="Enter a Height Value" showButtons min={0} onValueChange={(e) => setHeight(e.value!)} />
            </div>
            <div className="field col-12">
                <label htmlFor="advanced" className='block'>Advanced Carport?</label>
                <Checkbox onChange={e => setAdvancedCarport(e.checked)} checked={advancedCarport} />
            </div>
            <div className="col-12">
                <Button label='Submit' onClick={submitForm} />
            </div>
        </div>
        </>
    )
}

export default CarportForm