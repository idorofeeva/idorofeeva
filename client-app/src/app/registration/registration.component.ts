import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import { NewsService } from '../services/news.service';
import { User } from '../userClass/user';
import { AuthRegService } from '../services/auth-reg.service';
import * as EmailValidator from 'email-validator';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
    user: User = new User();

    receivedUser: User;
    done = false;
    userName: string = '';
    token: string;


    imageUrl: string = '../assets/Upload.png';
    fileToUpload: File = null;
    // valid = "[a-zA-Z0-9_%+-]+@[a-zA-Z0-9-]{2,}+\.[a-zA-Z0-9.-]"

    uploadedFiles: Array <File>;

    file: File;
    fileInputValue: any;

    errorBoolean = false;

    constructor(private authRegService: AuthRegService) {}

    ngOnInit(): void {
        this.user.firstName = '';
        this.user.lastName = '';
        this.user.email = '';
        this.user.password = '';
        this.file = null;
        this.errorBoolean = false;
    }

    submit(user: User): void {
        const formData = new FormData();
        formData.append('file', this.file);
        formData.append('firstName', user.firstName.trim());
        formData.append('lastName', user.lastName.trim());
        formData.append('email', user.email.trim());
        formData.append('password', user.password.trim());
        // let validation = user.email.match(/@/);
        // let validation2 = user.email.match(/\./);
        // console.log(validation)
        // console.log(validation2)

        
        this.errorBoolean = false;

        if (user.firstName.trim().length == 0 || user.lastName.trim().length == 0 || user.email.trim().length == 0 || user.password.trim().length == 0) {
            this.badInfo();
            this.errorBoolean = true;
        }

        if (!EmailValidator.validate(user.email.trim())) {
            this.badInfo();
            this.errorBoolean = true;
        } else 
        {this.authRegService.postData(formData)
            .subscribe(
                (data: User) => {
                    this.receivedUser = data;
                    this.done = true;
                    localStorage.setItem('jwtToken', JSON.stringify(data.token));
                    localStorage.setItem('user', JSON.stringify(data));
                    const alert = document.getElementById('alert-good-reg');
                    alert.className = 'show';
                    const modal = document.getElementById('id02');
                    setTimeout(() => { alert.className = alert.className.replace('show', ''); }, 1500);
                    setTimeout(() => {
                        modal.style.display = 'none';
                        window.location.href = '/';
                    }, 1000);
                },
                error => {
                    console.log(error);
                    if (this.errorBoolean == false) {
                        this.invInfo()
                    }
                }
            );}
    }

    handleFileInput(event: any): void {
        this.fileToUpload = event.target.files[0];

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
        const alert = document.getElementById('alert-bad-reg');
        alert.className = 'show';
        setTimeout(() => { alert.className = alert.className.replace('show', ''); }, 3000);
    }

    goodInfo(): void {
        const alert = document.getElementById('alert-good-reg');
        alert.className = 'show';
        const modal = document.getElementById('id02');
        setTimeout(() => { alert.className = alert.className.replace('show', ''); }, 1500);
        setTimeout(() => { modal.style.display = 'none'; }, 1500);
    }

    invInfo(): void {
        const alert = document.getElementById('alert-inv-reg');
        alert.className = 'show';
        setTimeout(() => { alert.className = alert.className.replace('show', ''); }, 3000);
    }

    clearInput(): void {
        this.user['firstName'] = '';
        this.user['lastName'] = '';
        this.user['email'] = '';
        this.user['password'] = '';
        this.imageUrl = '../assets/Upload.png';
        this.file = null;
        this.fileInputValue = null;
    }
}

