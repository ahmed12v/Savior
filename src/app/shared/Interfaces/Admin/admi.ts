export type Docreq = reqcome[]

export interface reqcome {
  doctorID: number
  firstName: string
  lastName: string
  medicalLicenseNumber: string
  specialty: string
  hospitalName: string
  hospitalAddress: string
  city: string
  phoneNumber: string
  ssn: string
  clinicName: string
  email: string
  rating: number
  bookingPrice: number
  isApproved: boolean
  imageUrl: string
  description: string
  weeklySchedules: any
  dailySchedules: any
  worksAts: any
}

export type AdminFeed = FeedAdmin[]

export interface FeedAdmin {
  name: string
  feedback: string
}
export interface Ai {
  message: string
}

