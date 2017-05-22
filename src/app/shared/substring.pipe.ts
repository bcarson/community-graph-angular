/*
* Substring Pipe:
*   Check each item in the array    
*   Check each attribute of each item 
*   Return item if args string is found.
*/

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'substring',
  pure: true
})
export class SubstringPipe implements PipeTransform {
  transform(array: Array<any>, args: any): Array<any> {
      if(!array || !args){
            return array;
        } else {
            let newArray = [];
            array.forEach(item => {
                Object.keys(item).forEach(key => {
                    if(item[key]){
                        if(item[key].toString().indexOf(args) !== -1 && newArray.indexOf(item) === -1){
                            newArray.push(item);
                        }
                    }
                })
            });
            return newArray;
        }

  }
}