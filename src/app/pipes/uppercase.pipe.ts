import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'uppercase'
})

export class UppercasePipe implements PipeTransform {
  transform(value: string) {
    // return value.toUpperCase()
    return value.toUpperCase()
  };
}