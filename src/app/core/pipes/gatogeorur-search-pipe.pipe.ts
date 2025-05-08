import { Pipe, PipeTransform } from '@angular/core';
import { Doctors } from '../../shared/Interfaces/Pages/doctor-gatogery';

@Pipe({
  name: 'gatogeorurSearchPipe',
  standalone: true
})
export class GatogeorurSearchPipePipe implements PipeTransform {

  transform(inGato:Doctors[] , userWord:string ): Doctors[]{
    return inGato.filter((item)=>item.fullName.toLocaleLowerCase().includes(userWord.toLocaleLowerCase()));
  }

}
