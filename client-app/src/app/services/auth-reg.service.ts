import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../userClass/user';

@Injectable({
 providedIn: 'root'
})
export class AuthRegService {
    public response: any;

    constructor(private http: HttpClient) { }

    public postData(formData) {
        const body = formData;
        return this.http.post('http://localhost:3000/auth/signup', body);
    }
}
