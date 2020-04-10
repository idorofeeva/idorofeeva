import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { NewsComponent } from './news/news.component';

@Pipe({
 name: 'searchFilterSearch'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
 transform(news: object[], searchFilter: string, searchText: string): object[] {
    if (!news) { return []; }
    if (!searchText) { return news; }
    if (searchFilter === 'author') {
        return news.filter(item => item['author'].firstName.includes(searchText) || item['author'].lastName.includes(searchText));
    }
    if (searchFilter === 'all') {
        return news.filter(item => item['tags'].includes(searchText) ||
        item['title'].includes(searchText) ||
        item['text'].includes(searchText) ||
        item['author'].firstName.includes(searchText) ||
        item['author'].lastName.includes(searchText));
    }
    return news.filter(item =>item[searchFilter].includes(searchText));
 }
}
