import { Pipe, PipeTransform } from '@angular/core';

import { Twimp } from './twimp/twimp.model';

@Pipe({
  name: 'sortBy',
  pure: false
  //false because we use this.twimpList.push(twimp)
})
export class SortByPipe implements PipeTransform {

  transform(array: Array<Twimp>): any {
    if (array) {
      return array.sort((a: Twimp, b: Twimp) => {
        const [aDay, aMonth, aYear] = a.timestamp.split("-");
        const [bDay, bMonth, bYear] = b.timestamp.split("-");
        const aDate = new Date(parseInt(aYear), parseInt(aMonth) + 1, parseInt(aDay));
        const bDate = new Date(parseInt(bYear), parseInt(bMonth) + 1, parseInt(bDay));
        return aDate.getTime() - bDate.getTime();
      });
    } else {
      return array;
    }
  }

}
