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

