import { Pipe, PipeTransform } from '@angular/core';

import { formatDistanceToNow } from 'date-fns'

@Pipe({
  name: 'timeAgo'
})
export class TimeAgo implements PipeTransform {

  transform(value: Date): string {
    if(value) {
      return formatDistanceToNow(value)
    }
    return ''
  }

}
