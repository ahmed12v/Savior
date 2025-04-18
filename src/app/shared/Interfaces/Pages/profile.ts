export interface Profile {
    fname:string
    lname:string
    email:string
    phone:string
    Password:string

}
  
export interface UpdateUserPassword{
    oldPassword:string,
    newPassword:string,
    confirmNewPassword:string
}

export interface UpdateUserDAte{
    fname:string,
    lname:string,
    email:string,
    phone:string,
}