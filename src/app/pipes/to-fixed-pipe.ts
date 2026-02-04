import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFixed',
})
export class ToFixedPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value === 'number' && !Number.isNaN(+value)) {
      const decimalPlaces = (args[0] as number) || 2;
      return +value.toFixed(decimalPlaces);
    }
    return null;
  }
}
