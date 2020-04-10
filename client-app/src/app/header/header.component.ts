import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Post } from '../postClass/postClass';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    token: string;

    currentUser: object;

    post: Post = new Post();
    receivedPost: Post;
    done = false;

    imageUrl = '../assets/Upload.png';
    loaderUrl = '../assets/classic1.webp';
    fileToUpload: File = null;

    uploadedFiles: Array <File>;

    file: File;
    fileInputValue: any;

    users;

    constructor(private newsService: NewsService) {
    }

    ngOnInit(): void {
        this.token = localStorage.getItem('jwtToken');
        this.userInfo();
        this.post.title = '';
        this.post.tags = '';
        this.post.text = '';
        this.file = null;
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('user');
        this.newsService.logout().subscribe((data: object[]) => {
            this.users = data;
        });
        window.location.href = '/';
    }

    userInfo(): void {
        if (this.token != null) {
            this.currentUser = JSON.parse(localStorage.getItem('user'));
        }
    }

    submit(post: Post, userId): void {
        const formData = new FormData();
        formData.append('file', this.file);
        formData.append('text', post.text.trim());
        formData.append('tags', post.tags.trim());
        formData.append('title', post.title.trim());
        formData.append('userId', userId);

        if (post.text.trim().length == 0 || post.tags.trim().length == 0 || post.title.trim().length == 0) {
            // const alert = document.getElementById('alert-bad-head');
            // alert.className = 'show';
            // setTimeout(() => { alert.className = alert.className.replace('show', ''); }, 3000);
            this.badInfo();
        }

        this.newsService.postData(formData)
            .subscribe(
                (data: Post) => {
                    this.receivedPost = data;
                    this.currentUser['news'].push(this.receivedPost);
                    localStorage.setItem('user', JSON.stringify(this.currentUser));
                    const alert = document.getElementById('alert-good-head');
                    alert.className = 'show';
                    const modal = document.getElementById('id04');
                    setTimeout(() => { alert.className = alert.className.replace('show', ''); }, 1500);
                    setTimeout(() => {
                          modal.style.display = 'none';
                          if (`${window.location.pathname}` === '/') {
                            window.location.href = '/';
                          } else {
                            window.location.href = '/user';
                          }
                      }, 1000);
                },
                error => console.log(error)
            );
    }

    handleFileInput(file: FileList): void {
        this.fileToUpload = file.item(0);

        const reader = new FileReader();
        reader.onload = (event: any) => {
            this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
    }

    selectImage(event): void {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.file = file;
        }
    }

    badInfo(): void {
        const alert = document.getElementById('alert-bad-head');
        alert.className = 'show';
        setTimeout(() => { alert.className = alert.className.replace('show', ''); }, 3000);
      }

    goodInfo(): void {
        const alert = document.getElementById('alert-good-head');
        alert.className = 'show';
        const modal = document.getElementById('id04');
        setTimeout(() => { alert.className = alert.className.replace('show', ''); }, 1500);
        setTimeout(() => {
              modal.style.display = 'none';
              if (`${window.location.pathname}` === '/') {
                window.location.href = '/';
              } else {
                window.location.href = '/user';
              }
          }, 1000);
    }

    clearInput(): void {
        this.post['title'] = '';
        this.post['tags'] = '';
        this.post['text'] = '';
        this.imageUrl = '../assets/Upload.png';
        this.file = null;
        this.fileInputValue = null;
    }
}
