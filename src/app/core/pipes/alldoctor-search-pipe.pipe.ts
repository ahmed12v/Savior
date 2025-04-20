import { Pipe, PipeTransform } from '@angular/core';
import { Doctor, DoctorCome } from '../../shared/Interfaces/Pages/doctor';

@Pipe({
  name: 'alldoctorSearchPipe',
  standalone: true
})
export class AlldoctorSearchPipePipe implements PipeTransform {

  transform(allDoctor:DoctorCome[] , userWord:string): DoctorCome[] {
    return allDoctor.filter((item)=>item.fullName.toLocaleLowerCase().includes(userWord.toLocaleLowerCase()));
  }

}
