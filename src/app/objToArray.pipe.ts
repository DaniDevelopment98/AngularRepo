import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name: 'objToArray'
})

export class objToArrayPipe implements PipeTransform{
    transform(object: any=[]):  any{
        return Object.values(object);
    }

}