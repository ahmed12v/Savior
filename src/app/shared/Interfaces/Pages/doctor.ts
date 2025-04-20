export type Doctor = DoctorCome[]

export interface DoctorCome {
  doctorID: number
  fullName: string
  specialty: string
  hospitalName: string
  hospitalAddress: string
  imageUrl: string
  description: string
  clinicName?: string
  clinicAddress?: string
  clinicPhone?: string
  weeklyDays: string[]
  dailyDays: string[]
  dailyTime?: string
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


