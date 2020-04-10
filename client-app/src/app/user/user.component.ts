import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../userClass/user';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    image: string;
    token: string;

    userNews: object[];

    users: object[] = [];

    user: User = new User();

    userId;

    userData: User = new User();

    id: string;

    idCur: string;

    updateUser;

    imageCur: string;

    isUser: boolean;

    currentUser: object;

    returnImage = 'http://localhost:3000/';

    receivedData;

    imageUrl = '../assets/Upload.png';
    fileToUpload: File = null;

    uploadedFiles: Array <File>;

    file: File;
    fileInputValue: any;

    constructor(private userService: UsersService) {
    }

    ngOnInit(): void {
        this.token =  localStorage.getItem('jwtToken');
        this.userInfo();
        this.getUsers();
        this.getUser();
        this.getUserId();
        this.returnImage = 'http://localhost:3000/';
    }

    userInfo(): void {
        if (this.token != null) {
            this.currentUser = JSON.parse(localStorage.getItem('user'));
        }
    }

    getUsers(): void {
        this.userService.getUsers().subscribe((data: object[]) => {
            this.users = data;
        });
    }

    getUser(): void {
        this.userService.getUser().subscribe((data: User) => {
            this.user = data;
            
        });
    }

    getUserUpdate(userId): void {
        this.userService.getUserUpdate(userId).subscribe((data: User) => {
            this.updateUser = data;
        });
    }

    getUserId(): void {
        localStorage.removeItem('id');
        localStorage.setItem('id', window.location.pathname.slice(6));
        this.id = localStorage.getItem('id');
        if (!this.id) {
            this.isUser = false;
        } else {
            this.isUser = true;
        }
    }

    goodInfo(): void {
        const alert = document.getElementById('alert-good-user');
        alert.className = 'show';
        const modal = document.getElementById('id05');
        this.idCur = localStorage.getItem('user');
        this.getUserUpdate(this.idCur['id']);
        localStorage.setItem('user', JSON.stringify(this.updateUser));
        setTimeout(() =>  { alert.className = alert.className.replace('show', ''); }, 1500);
        setTimeout(() =>  {
            modal.style.display = 'none';
            window.location.href = '/user';
        }, 1000);
    }

    submit(userData): void {
        const formData = new FormData();
        
        if (userData.firstName === undefined || userData.firstName.trim().length == 0) {
            formData.append('firstName', this.currentUser['firstName']);
        } else {
            formData.append('firstName', userData.firstName);
        }

        if (userData.lastName === undefined || userData.lastName.trim().length == 0) {
            formData.append('lastName', this.currentUser['lastName']);
        } else {
            formData.append('lastName', userData.lastName);
        }

        if (this.file == null) {
            formData.append('image', this.currentUser['image']);
        } else {
            formData.append('file', this.file);
        }

        if (this.isUser === false) {
            this.userId = this.currentUser['id'];
        } else {
            this.userId = localStorage.getItem('id');
        }

        this.userService.updateUser(formData, this.userId)
            .subscribe(
                (userData) => {
                    this.receivedData = userData;
                    localStorage.setItem('user', JSON.stringify(userData));
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

    clearInput(): void {
        this.userData['firstName'] = '';
        this.userData['lastName'] = '';
        this.userData['password'] = '';
        this.imageUrl = '../assets/Upload.png';
        this.file = null;
        this.fileInputValue = null;
    }
}



