import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = typeof searchText == 'string' ? searchText.toLowerCase() : searchText;
return items.filter( it => {
      return it.stop_name.toLowerCase().includes(searchText);
    });
   }
}