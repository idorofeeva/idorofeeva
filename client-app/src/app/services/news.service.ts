import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class NewsService {

    constructor(private httpClient: HttpClient) { }

    public getNews() {
        return this.httpClient.get('http://localhost:3000/news');
    }

    public getUsers() {
        return this.httpClient.get('http://localhost:3000/users');
    }

    public postData(formData) {
        const body = formData;
        return this.httpClient.post('http://localhost:3000/news/', body);
    }

    public logout() {
        return this.httpClient.get('http://localhost:3000/auth/logout', { withCredentials: true });
    }

}
