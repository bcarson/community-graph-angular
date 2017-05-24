/*
*   OrderBy Pipe
*   Sorts an array of objects by selected param
*/
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(array: Array<any>, args: any): Array<any> {
      if(array && args){
        array.sort((a: any, b: any) => {
        if (a[args] < b[args]) {
            return 1;
        } else if (a[args] > b[args]) {
            return -1;
        } else {
            return 0;
        }
        });
      }
    return array;
  }
}