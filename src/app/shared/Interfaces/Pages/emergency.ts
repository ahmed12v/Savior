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
