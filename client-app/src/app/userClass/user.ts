import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-class',
    templateUrl: './userClass.component.html',
    styleUrls: ['./userClass.component.css']
})
export class User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    image: string;
    token: string;
}
