export type Doctor = DoctorCome[]

export interface DoctorCome {
  doctorID: number
  bookingPrice: number
  fullName: string
  specialty: string
  hospitalName: string
  hospitalAddress: string
  imageUrl: string
  description: string
  city: string
  clinicName: string
  clinicAddress: string
  clinicPhone: string
  weeklyDays: string[]
  dailyDays: string[]
  dailyTime?: string
  rating:number
}

export interface DoctorDetials {
  doctorID: number
  bookingPrice: number
  fullName: string
  specialty: string
  hospitalName: string
  hospitalAddress: string
  imageUrl: string
  description: string
  city: string
  clinicName: string
  clinicAddress: string
  clinicPhone: string
  weeklyDays: string[]
  dailyDays: string[]
  dailyTime: string
  rating:number

}

export interface DoctorRegester {
  fName: string
  lName: string
  phoneNumber: string
  specialty: string
  medicalLicenseNumber: string
  ssn: string
  email: string
  city: string
  clinicName: string
}
export type Days = string[]

export interface BookNowDoctor {
  doctorId: number
  day: string
  phoneNumber: string
}
export interface ResponsSendBook {
  userName: string
  doctorName: string
  phoneNumber: string
  bookingPrice: number
  paymentMethod: string
  day: string
  time: string
  clinicLocation: string
}


