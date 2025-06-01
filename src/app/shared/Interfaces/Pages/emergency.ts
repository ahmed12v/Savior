export interface emergency {
    userID:string,
    location:string,
    phone:string,
    type:string,
    isConfirmed:string,
}

export type reqUserCome=UserRequest[]

export interface UserRequest{
    userID:string
    location:string
    duration:string
    type:string
    isConfirmed:string
    createdAt:string
}
export type MedicalReCome=medicalmember[]

export interface medicalmember{
    requestDate:string
    notes:string
    location:string
    userId:string
    medicalStaffMemberId:string
    isConfirmed:string
}

export interface SendMember{
    userId:string
    fullName:string
    phoneNumber:string
    location:string
    medicalStaffMemberId:string
    requestDate:string
    notes:string
}

export type Members = MedicalMember[]

export interface MedicalMember {
  id: number
  name: string
  role: string
  phone: string
  price: number
  location: string
  availability: any[]
  requests: any[]
}

