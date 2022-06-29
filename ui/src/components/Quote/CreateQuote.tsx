import ClientDetails from '../Client/ClientDetails'
import { useEffect, useState } from 'react'
import { Client } from '../../models/Client'
import { ClientService } from '../../services/ClientService'
import { QuoteService } from '../../services/QuoteService'
import { Dropdown } from 'primereact/dropdown'
import { Checkbox } from 'primereact/checkbox'

const CreateQoute = () => {
    const clientService = new ClientService()
    const quoteService = new QuoteService()
    const [selectedSize, setSelectedSize] = useState(null)
    const [sizes, setSizes] = useState([""])
    const [sides, setSides] = useState<any>([])
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
      var sizeString = new Array();
      for(let i = 0; i < sizes.length; i++) {
        let sString = `${sizes[i].length}x${sizes[i].width}`
        sizeString.push({"label": sString, "value": sString})
      }
      setSizes(sizeString)
    })
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

    return (
    <>
    <div className="mt-5">
      <ClientDetails client={client!} />
    </div>
    <div className="mt-5 formgrid grid">
      <div className="field col-12 md:col-6">
        <label htmlFor="Size" className="mr-2">Choose a Size</label>
        <Dropdown placeholder="All Sizes" options={sizes} value={selectedSize} onChange={(e) => setSelectedSize(e.value)}/>
      </div>
      <div className="field col-12 md:col-6">
        <label htmlFor="front" className="m-2">Front</label>
        <Checkbox inputId='front' name='front' value="front" checked={sides.indexOf('front') !== -1} onChange={onSideChange} />
        <label htmlFor="back" className="m-2">Back</label>
        <Checkbox inputId='back' name='back' value="back" checked={sides.indexOf('back') !== -1} onChange={onSideChange} />
        <label htmlFor="left" className="m-2">Left Side</label>
        <Checkbox inputId='left' name='left' value="left" checked={sides.indexOf('left') !== -1} onChange={onSideChange} />
        <label htmlFor="right" className="m-2">Right Side</label>
        <Checkbox inputId='right' name='right' value="right" checked={sides.indexOf('right') !== -1} onChange={onSideChange} />
      </div>
    </div>
    </>
    
  );
}

export default CreateQoute;