import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CreditCardMask'
})
export class CreditCardMaskPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
