import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterLimit'
})
export class CharacterLimitPipe implements PipeTransform {

  transform(value: string, limit: number,): string {
    if (!value || value.length < limit) {
      return value;
    }
    else {
      return value.substring(0,limit)+'...';
    }
  }

}
