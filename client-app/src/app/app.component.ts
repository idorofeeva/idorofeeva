import { Component, OnInit } from '@angular/core';
import { User } from './userClass/user';
import { AuthLogService } from './services/auth-log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client-app';

  token: string;

  constructor(private authLogService: AuthLogService) {
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('jwtToken');
  }
}
