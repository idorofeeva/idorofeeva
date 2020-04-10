import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class UsersService {

    constructor(private httpClient: HttpClient) { }

    public getUsers() {
        return this.httpClient.get('http://localhost:3000/users');
    }

    public getUser() {
        return this.httpClient.get(`http://localhost:3000/users/${window.location.pathname.slice(6)}`);
    }

    public getUserUpdate(userId) {
        return this.httpClient.get(`http://localhost:3000/users/${userId}`);
    }

    public updateUser(formData, userId) {
        const body = formData;
        return this.httpClient.put(`http://localhost:3000/users/${userId}`, body);
    }
}
