import {Pipe, PipeTransform} from '@angular/core'

@Pipe({ 
    name: 'order_by' 
})

export class SortPipe implements PipeTransform{
   
    transform(array = [], propName: number, goal = '098404') {

        const aproximacao = (arr, n) =>
        arr.sort((a, b) => 
        Math.abs(a[propName] - n) - Math.abs(b[propName] - n));

        const close = aproximacao(array, goal)

        return close    

    }

}