import { NewPasswordComponent } from './core/Athountcation/new-password/new-password.component';
import { VerifyCodeComponent } from './core/Athountcation/verify-code/verify-code.component';
import { ForgetPasswordComponent } from './core/Athountcation/forget-password/forget-password.component';
import { LoginComponent } from './core/Athountcation/login/login.component';
import { SigninComponent } from './core/Athountcation/signin/signin.component';
import { UpdatepassComponent } from './pages/UserAccount/updatepass/updatepass.component';
import { UpdatHisDataComponent } from './pages/UserAccount/updat-his-data/updat-his-data.component';
import { ProfileComponent } from './pages/UserAccount/profile/profile.component';
import { NotFoundComponent } from './core/importantCompnent/not-found/not-found.component';
import { MedicalTeamComponent } from './pages/medical-team/medical-team.component';
import { FirstaidComponent } from './pages/firstaid/firstaid.component';
import { PharmcyComponent } from './pages/pharmcy/pharmcy.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { AboutSaviorComponent } from './pages/about-savior/about-savior.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [

    { path: '', redirectTo: 'about', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(
        (c) => c.HomeComponent),
  },

  {
  path: 'about',
    loadComponent: () =>
      import('./pages/about-savior/about-savior.component').then(
        (c) => c.AboutSaviorComponent
      ),
  },

  {
    path:'doctor',
    loadComponent :()=>
        import('./pages/doctor/doctor.component').then(
            (C) =>C.DoctorComponent
        ) ,
    
  },

  {
    path:'pharmcy',
    loadComponent:()=>
        import('./pages/pharmcy/pharmcy.component').then(
            (C)=>C.PharmcyComponent
        ),
 },

 {
    path:'firstaid',
    loadComponent:()=>
        import('./pages/firstaid/firstaid.component').then(
            (C)=> C.FirstaidComponent
        ),
 },
  
 {
   path:'medicalTeam',
    loadComponent:()=>
        import('./pages/medical-team/medical-team.component').then(
            (C)=> C.MedicalTeamComponent
        ),
 },

 

 {
    path:'profile',
     loadComponent:()=>
        import('./pages/UserAccount/profile/profile.component').then(
            (C)=>C.ProfileComponent
        ),
 },

 {
    path:'updatData',
     loadComponent:()=>
        import('./pages/UserAccount/updat-his-data/updat-his-data.component').then(
            (C)=>C.UpdatHisDataComponent
        ),
 },

{
    path:'updatPass',
     loadComponent:()=>
        import('./pages/UserAccount/updatepass/updatepass.component').then(
            (C)=> C.UpdatepassComponent
        ),
},


 
 // Athountction Routing

  {
    path:'SignIn',
      loadComponent:()=>
        import('./core/Athountcation/signin/signin.component').then(
            (C)=> C.SigninComponent
        )
  },

  {
    path:'login',
     loadComponent:()=>
        import('./core/Athountcation/login/login.component').then(
            (C)=>C.LoginComponent
        )
  },

  {
    path:'Forget',
     loadComponent:()=>
        import('./core/Athountcation/forget-password/forget-password.component').then(
            (C)=>C.ForgetPasswordComponent
        )
  },

  {
    path:'codeVirefy',
     loadComponent:()=>
        import('./core/Athountcation/verify-code/verify-code.component').then(
            (C)=>C.VerifyCodeComponent
        )
  },

  {
    path:'newPass',
     loadComponent:()=>
        import('./core/Athountcation/new-password/new-password.component').then(
            (C)=>C.NewPasswordComponent
        )
  },


  {
    path:"**",
      loadComponent:()=>
         import('./core/importantCompnent/not-found/not-found.component').then(
             (C)=>C.NotFoundComponent
         ),
  },

];
