import { Pipe, PipeTransform } from '@angular/core';
import { ISpaceSystem } from '../Models/Interface/ISpaceSystem';

@Pipe({
  name: 'serchSystem'
})
export class SerchSystemPipe implements PipeTransform {

  transform(systems: ISpaceSystem[],search: string): ISpaceSystem[] {
    return systems.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  }

}
