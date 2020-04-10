import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NewsService } from '../services/news.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    public news: object[] = [];

    public users: object[] = [];

    page = 1;

    searchFilter = 'all';

    newsLength: number;

    searchText = '';

    returnImage = 'http://localhost:3000/';

    constructor(private newsService: NewsService) {
    }

    ngOnInit(): void {
        this.getNews();
        this.getUsers();
    }

    public getNews(): void {
        this.newsService.getNews().subscribe((data: object[]) => {
          this.news = data;
          this.newsLength = data.length;
          this.returnImage = 'http://localhost:3000/';
        });
    }

    getUsers(): void {
        this.newsService.getUsers().subscribe((data: object[]) => {
            this.users = data;
        });
    }

    authorId(id): void {
        localStorage.removeItem('id');
        localStorage.setItem('id', JSON.stringify(id));
    }

    clearSearchInput(): void {
        this.searchText = '';
    }

}
