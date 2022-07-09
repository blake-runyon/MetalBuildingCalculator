import ClientDetails from '../Client/ClientDetails'
import { useEffect, useState } from 'react'
import { Client } from '../../models/Client'
import { ClientService } from '../../services/ClientService'
import { QuoteService } from '../../services/QuoteService'
import { Dropdown } from 'primereact/dropdown'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'
import { BuildingTypeLogic } from '../../services/BuildingTypeLogic'
import CarportForm from './BuildingForms/Carport'
import OtherForm from './BuildingForms/Other'

const CreateQoute = () => {
    const clientService = new ClientService()
    const quoteService = new QuoteService()
    const buildingType = new BuildingTypeLogic();
    const [selectedSize, setSelectedSize] = useState(null)
    const [sizes, setSizes] = useState([""])
    const [sides, setSides] = useState<any>([])
    const [type, setType] = useState<string>("")
    const [garageDoor, setGarageDoor] = useState<boolean>(false)
    const [leanTo, setLeanTo] = useState<boolean>(false)
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
    })

    quoteService.GetSizes().then(sizes => {
      // eslint-disable-next-line @typescript-eslint/no-array-constructor
      var sizeString = new Array();
      for(let i = 0; i < sizes.length; i++) {
        let sString = `${sizes[i].length}x${sizes[i].width}`
        sizeString.push({"label": sString, "value": sString})
      }
      setSizes(sizeString)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const onSideChange = (e: any) => {
    let selectedSides: any = [...sides]
    
    if(e.checked) {
      selectedSides.push(e.value)
    } else {
      selectedSides.splice(selectedSides.indexOf(e.value), 1)
    }

    setSides(selectedSides)

  }

  const handleFormDisplay = async (e: any) => {
    e.preventDefault()
    let front, back, side;
    front = sides.includes('front')
    back = sides.includes('back')
    if(sides.includes('left') || sides.includes('right')) {
      side = true
    } else {
      side = false
    }

    await buildingType.GetType(front, back, side, garageDoor, leanTo).then(d => {setType(d.data)})
  }

  return (
    <>
    <div className="mt-5">
      <ClientDetails client={client!} />
    </div>
    <div className="mt-5 formgrid grid">
      <div className="field col-12 md:col-4">
        <label htmlFor="Size" className="mr-2 block">Choose a Size</label>
        <Dropdown placeholder="All Sizes" options={sizes} value={selectedSize} onChange={(e) => setSelectedSize(e.value)}/>
        
        <label htmlFor="garageDoor" className="block mt-5">Garage Door?</label>
        <Checkbox inputId='garageDoor' name='garageDoor' value="garageDoor" checked={garageDoor} onChange={() => setGarageDoor(!garageDoor)} />

        <label htmlFor="leanTo" className='block mt-5'>Lean To? </label>
        <Checkbox inputId='leanTo' name='leanTo' value="leanTo" checked={leanTo} onChange={() => setLeanTo(!leanTo)} />
      </div>
      <div className="field col-12 md:col-4">
        <h3>Select What Sides Are Enclosed</h3>
        <div className="block mt-2">
          <Checkbox inputId='front' name='front' value="front" checked={sides.indexOf('front') !== -1} onChange={onSideChange} />
          <label htmlFor="front" className="m-2">Front</label>
        </div>
        <div className="block mt-2">
          <Checkbox inputId='left' name='left' value="left" checked={sides.indexOf('left') !== -1} onChange={onSideChange} />
          <label htmlFor="left" className="m-2">Left Side</label>
        </div>
        <div className="block mt-2">
          <Checkbox inputId='right' name='right' value="right" checked={sides.indexOf('right') !== -1} onChange={onSideChange} />
          <label htmlFor="right" className="m-2">Right Side</label>
        </div>
        <div className="block mt-2">
          <Checkbox inputId='back' name='back' value="back" checked={sides.indexOf('back') !== -1} onChange={onSideChange} />
          <label htmlFor="back" className="m-2">Back</label>
        </div>

        <Button label="Next" onClick={handleFormDisplay} className="mt-2" />
      </div>
      <div className="col-12 md:col-4">
      { type === "Carport" ? <CarportForm /> : type === "" ? "" : <OtherForm type={type}/>}
      </div>
    </div>
    
  
    </>
    
  );
}

export default CreateQoute;