/*
* Filter Pipe
* Currently specific to language
* (this pipe is only used in one place)
* Return item if item.language matches args
*/
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