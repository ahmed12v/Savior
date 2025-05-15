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

export type getNear =NearCome[]

export interface  NearCome
{
  id:string
  name:string
  fullAddress:string
  hasDelivery:string
  distanceInKm:string
}

export interface ClearAll{
  userID:string
}

export type MyOrder = Orders[]

export interface Orders {
  orderID: number
  userLatitude: number
  userLongitude: number
  duration: string
  paymentWay: number
  deliveryName: string
  deliveryPhone: string
  orderDate: string
  medicinesSubtotal: number
  shippingPrice: number
  totalPrice: number
  orderItems: any[]
}