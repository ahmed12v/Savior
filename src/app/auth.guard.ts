import { inject } from '@angular/core';

import { CanActivateFn, Router } from '@angular/router';
import { } from '@angular/router';
import { LogInService } from './shared/services/athountocation/log-in.service';

export const authGuard: CanActivateFn = (route, state) => {
   let _login:LogInService =inject(LogInService)
   let _router:Router=inject(Router)
   if(_login.UserDataAfterDecoded.getValue()!=null){
    return true;
   }
  _router.navigate(['/login'])
    return false ;
  
};
