export type Gatogoery = Doctors[]

export interface Doctors {
  doctorID: number
  fullName: string
  specialty: string
  hospitalName: string
  hospitalAddress: string
  imageUrl: string
  description: string
  city: string
  clinicName?: string
  clinicAddress?: string
  clinicPhone?: string
  weeklyDays: string[]
  dailyDays: string[]
  dailyTime?: string
}
