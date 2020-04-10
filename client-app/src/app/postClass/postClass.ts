import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-post-сlass',
    templateUrl: './postClass.component.html',
    styleUrls: ['./postClass.component.css']
})
export class Post {
    title: string;
    tags: string;
    text: string;
}
