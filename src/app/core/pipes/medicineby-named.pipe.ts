import { Pipe, PipeTransform } from '@angular/core';
import { getAllmed, NearCome } from '../../shared/Interfaces/Pages/phahrmacy';

@Pipe({
  name: 'medicinebyNamed',
  standalone: true
})
export class MedicinebyNamedPipe implements PipeTransform {

 
  transform(allDoctor:getAllmed[] , userWord:string): getAllmed[] {
    return allDoctor.filter((item)=>item.name.toLocaleLowerCase().includes(userWord.toLocaleLowerCase()));
  }
}
