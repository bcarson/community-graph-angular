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
    /*
    *   In order to use this handy 'transform' method, 
    *   you must import and implement 'PipeTransform'
    */
    transform(array: Array<any>, args: any): Array<any> {
        if(!array || !args){
            /*
            *   If either array or args are null, 
            *   just return array without filtering.
            */
            return array;
        } else {
            /*
            *   Define an empty array, then check 
            *   each item in the array and each
            *   property on each object. If the 
            *   substring is found anywhere, add
            *   that item to the new array.   
            */
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
            /*
            *   After checking each item, return 
            *   the new array containing matches.
            */
            return newArray;
        }
    }
}