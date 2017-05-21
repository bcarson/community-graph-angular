import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {
  transform(array: Array<any>, args: any): Array<any> {
      if(!array || !args){
            return array;
        } else {
            return array.filter(a => a.language === args);
        }

  }
}