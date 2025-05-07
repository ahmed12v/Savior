export type Phahrmacy =getAllmed[]

export interface getAllmed
{
    id:number
    name:string
    description:string
    stripPrice:number
    boxPrice:number
    image:string
}

export interface AddToCart{
    userID: string,
    medicineID:string,
    quantity: string,
    priceType: string
}

export interface Cart {
    userID: number
    items: Item[]
    totalPrice: number
  }
  
  export interface Item {
    medicineID: number
    medicineName: any
    quantity: number
    price: number
    priceType: string
    totalPrice: number
  }

export interface CheckOut{
  userID:string
  userLatitude:string
  useruserLongitudeID:string
  userPhone:string
}