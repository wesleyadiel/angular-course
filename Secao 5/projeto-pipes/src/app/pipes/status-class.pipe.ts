import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusClass',
  standalone: false,
})
export class StatusClassPipe implements PipeTransform {
  transform(status: number): string {
    const objStatus: { [key: number]: string } = {
      1: 'active',
      2: 'partial',
      3: 'blocked',
    };

    return objStatus[status];
  }
}
