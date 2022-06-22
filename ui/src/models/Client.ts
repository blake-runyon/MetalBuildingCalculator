export interface Client {
    _id?: string,
    name: string,
    email: string,
    phone: string,
    address: {
        street: string,
        city: string,
        state: string,
        zipcode: string
    },
    quotes?: any[]
}