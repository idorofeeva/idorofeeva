import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../userClass/user';

@Injectable({
 providedIn: 'root'
})
export class AuthLogService {
    public response: any;

    constructor(private http: HttpClient) { }

    public postData(user: User) {
        const body = {email: user.email, password: user.password};
        return this.http.post('http://localhost:3000/auth/signin', body);
    }

    public getAuthUser() {
        return this.http.get(`http://localhost:3000/auth/getAuthUser`, { withCredentials: true });
    }
}
