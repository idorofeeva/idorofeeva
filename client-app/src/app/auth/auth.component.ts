import { Component, OnInit } from '@angular/core';
import { User } from '../userClass/user';
import { AuthLogService } from '../services/auth-log.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    user: User = new User();
    token: string;
    userName = '';
    receivedUser: User;
    done: boolean;
    googleOauth = false;

    constructor(private authLogService: AuthLogService) {
    }

    ngOnInit(): void {
        this.user.email = '';
        this.user.password = '';
        this.getAuthUser();
    }

    submit(user: User): void {
        this.done = false;
        this.authLogService.postData(user)
            .subscribe(
                (data: User) => {
                    this.done = true;
                    this.receivedUser = data;
                    this.userName = data.firstName;
                    localStorage.setItem('jwtToken', JSON.stringify(data.token));
                    localStorage.setItem('user', JSON.stringify(data));
                    const alert = document.getElementById('alert-good');
                    alert.className = 'show';
                    const alert2 = document.getElementById('alert-good-2');
                    alert2.className = 'show';
                    const modal = document.getElementById('id01');
                    const modalUser = document.getElementById('id00');
                    setTimeout(() => { 
                        alert.className = alert.className.replace('show', '');
                        alert2.className = alert2.className.replace('show', '');
                     }, 1500);
                    setTimeout(() => {
                        modal.style.display = 'none';
                        modalUser.style.display = 'none';
                        window.location.href = '/';
                    }, 1000);
                 },
                error => {
                    console.log(error);
                    const alert = document.getElementById('alert-inv');
                    alert.className = 'show';
                    const alert2 = document.getElementById('alert-inv-2');
                    alert2.className = 'show';
                    setTimeout(() => { 
                        alert.className = alert.className.replace('show', '');
                        alert2.className = alert2.className.replace('show', '');
                     }, 3000);
                }
            );
    }

    badInfo(): void {
        const alert = document.getElementById('alert-bad');
        const alert2 = document.getElementById('alert-bad-2');
        alert.className = 'show';
        alert2.className = 'show';
        setTimeout(() => { 
            alert.className = alert.className.replace('show', '');
            alert2.className = alert2.className.replace('show', '');
         }, 3000);
      }

    getAuthUser(): void {
      this.authLogService.getAuthUser().subscribe((data: User) => {
          if (data) {
          this.user = data;
          localStorage.setItem('jwtToken', JSON.stringify(data.token));
          localStorage.setItem('user', JSON.stringify(data));
          window.location.href = '/';
      }
      });
    }

    clearInput(): void {
        this.user['email'] = '';
        this.user['password'] = '';
    }
}

