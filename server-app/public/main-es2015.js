(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <app-header></app-header>   \n</header>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button onclick=\"document.getElementById('id01').style.display='block'\">Login</button>\n\n<div id=\"id01\" class=\"modal\">\n  <form class=\"modal-content animate\">\n    <div class=\"imgcontainer\">\n      <span (click)=\"clearInput()\" onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"Close\">&times;</span>\n    </div>\n\n    <div class=\"container\">\n      <label for=\"email\"><b>Email</b></label>\n      <input type=\"text\" autocomplete=\"off\" placeholder=\"Enter Email\" name=\"uname\" [(ngModel)]=\"user.email\" required>\n\n      <label for=\"psw\"><b>Password</b></label>\n      <input type=\"password\" autocomplete=\"off\" placeholder=\"Enter Password\" name=\"psw\" [(ngModel)]=\"user.password\" required>\n\n      \n      <div *ngIf=\"user.email == '' || user.password == '';else buttonOk\">\n        <button type=\"submit\" (click)=\"badInfo()\" class=\"signinbtn\" style=\"background-color:grey\" >Login</button>\n      </div>\n\n      <ng-template #buttonOk>\n        <button type=\"submit\" (click)=\"submit(user)\"  class=\"signinbtn\" >Login</button>\n      </ng-template>\n\n    </div>\n\n    <div id=\"alert-bad\">\n      <strong>Attention!</strong> Enter all user data!\n    </div>\n\n    <div id=\"alert-good\">\n      <strong>Success!</strong> You are authorized! This window will close automatically.\n    </div>\n\n    <div id=\"alert-inv\">\n      <strong>Warning!</strong> Invalid email or password.\n    </div>\n\n    <div class=\"container\" style=\"background-color:#f1f1f1\">\n      <button type=\"button\" (click)=\"clearInput()\" onclick=\"document.getElementById('id01').style.display='none'\" class=\"cancelbtn\">Cancel</button>\n    </div>\n  </form>\n</div>\n\n<div id=\"id00\" class=\"modal\">\n  <form class=\"modal-content animate\">\n    <div class=\"imgcontainer\">\n      <span (click)=\"clearInput()\" onClick='location.href=\"/\"' class=\"close\" title=\"Close\">&times;</span>\n    </div>\n\n    <div class=\"container\">\n      <label for=\"email\"><b>Email</b></label>\n      <input type=\"text\" autocomplete=\"off\" placeholder=\"Enter Email\" name=\"uname\" [(ngModel)]=\"user.email\" required>\n\n      <label for=\"psw\"><b>Password</b></label>\n      <input type=\"password\" autocomplete=\"off\" placeholder=\"Enter Password\" name=\"psw\" [(ngModel)]=\"user.password\" required>\n\n      \n      <div *ngIf=\"user.email == '' || user.password == '';else buttonOk\">\n        <button type=\"submit\" (click)=\"badInfo()\" class=\"signinbtn\" style=\"background-color:grey\" >Login</button>\n      </div>\n\n      <ng-template #buttonOk>\n        <button type=\"submit\" (click)=\"submit(user)\"  class=\"signinbtn\" >Login</button>\n      </ng-template>\n\n    </div>\n\n    <div id=\"alert-bad-2\">\n      <strong>Attention!</strong> Enter all user data!\n    </div>\n\n    <div id=\"alert-good-2\">\n      <strong>Success!</strong> You are authorized! This window will close automatically.\n    </div>\n\n    <div id=\"alert-inv-2\">\n      <strong>Warning!</strong> Invalid email or password.\n    </div>\n\n    <div class=\"container\" style=\"background-color:#f1f1f1\">\n      <button type=\"button\" (click)=\"clearInput()\" class=\"cancelbtn\" onClick='location.href=\"/\"'>Cancel</button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-button-block\" *ngIf=\"token\">\n    <button onclick=\"document.location='user/'\">{{currentUser.firstName}}</button>\n    <button onclick=\"document.getElementById('id04').style.display='block'\">Add post</button>\n    <button onclick=\"document.location='/'\">News</button>\n    <button (click)=\"logout()\" class=\"logout\">Logout ({{currentUser.firstName}})</button>\n    <!-- onclick=\"document.location='/'\" -->\n</div>\n\n<div class=\"header-button-block-auth\" *ngIf=\"token==null\">\n  <app-auth></app-auth>\n  <app-registration></app-registration> \n</div> \n\n<div id=\"id04\" class=\"modal\">\n  <form #imageForm=ngForm id=\"newPost\" class=\"modal-content animate\" action=\"/action_page.php\">\n    <span (click)=\"clearInput()\" onclick=\"document.getElementById('id04').style.display='none'\" class=\"close\" title=\"Close\">&times;</span>\n    <div class=\"container\">\n      <h1>Add post</h1>\n      <p>Please fill in this form to create a post.</p>\n      <hr>\n      <label for=\"title\"><b>Title</b></label>\n      <input type=\"text\" autocomplete=\"off\" placeholder=\"Enter title\" name=\"title\" [(ngModel)]=\"post.title\" required>\n\n      <label for=\"tags\"><b>Tags</b></label>\n      <input type=\"text\" autocomplete=\"off\" placeholder=\"Enter tags\" name=\"tags\" [(ngModel)]=\"post.tags\" required>\n\n      <label for=\"text\"><b>Text</b></label>\n      <!-- <input type=\"text\" autocomplete=\"off\" placeholder=\"Enter text\" name=\"text\" [(ngModel)]=\"post.text\" required> -->\n\n      <textarea autocomplete=\"off\" placeholder=\"Enter text\" name=\"text\" [(ngModel)]=\"post.text\" cols=\"40\" rows=\"5\"></textarea>\n\n      <img [src]='imageUrl' style=\"width:30%; height:30%\">\n      <input #fileInput type=\"file\" [(ngModel)]=\"fileInputValue\" (change)=\"selectImage($event)\" (change)=\"handleFileInput($event.target.files)\" class=\"file-upload\" name=\"image\" required>\n\n        <div *ngIf=\"post.title == '' || post.tags == '' || post.text == '' || file == null;else buttonOk\">  \n          <button type=\"submit\" (click)=\"badInfo()\" style=\"background-color:grey\" class=\"createbtn\">Add post</button>\n        </div>\n      \n        <ng-template #buttonOk>\n          <button type=\"submit\" (click)=\"submit(post, currentUser.id)\" class=\"createbtn\" >Add post</button>\n        </ng-template>\n    </div>\n\n    <div id=\"alert-bad-head\">\n      <strong>Attention!</strong> Enter all post data!\n    </div>\n\n    <div id=\"alert-good-head\">\n      <strong>Success!</strong> You are awesome! This window will close automatically.\n    </div>\n\n    <div class=\"container\" style=\"background-color:#f1f1f1\">\n      <button type=\"button\" (click)=\"clearInput()\" onclick=\"document.getElementById('id04').style.display='none'\" style=\"width:auto\" class=\"cancelbtn\">Cancel</button>\n    </div>\n\n  </form>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <h1>Greetings stranger</h1>\n<h2>News</h2>\n\n<div class=\"search-news\">\n    <select [(ngModel)]=\"searchFilter\" name=\"filter\" id=\"search_options\" class=\"news__select search-select btn btn-danger\">\n        <option ngValue=\"all\">all</option>\n        <option ngValue=\"author\">author</option>\n        <option ngValue=\"tags\">tags</option>\n        <option ngValue=\"title\">title</option>\n    </select>\n    <input class=\"form-control\" id=\"searchText\" type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" autocomplete=\"off\" placeholder=\"&#61442;  Start searching for a new by tag or title or text\">\n    <span (click)=\"clearSearchInput()\" class=\"close\" title=\"Close\">&times;</span>\n</div>\n\n<div class=\"news-block\">\n    <div *ngFor=\"let item of news | searchFilterSearch : searchFilter : searchText | paginate: { itemsPerPage: 3, currentPage: page }\" class=\"news-block__item\">\n        <h3 class=\"news-block__title\">{{item.title}}</h3>\n        <p class=\"news-block__tags\">{{item.tags}}</p>\n        <div class=\"news-block__image\">\n            <img class=\"news-block__image-image\" [src]=\"(returnImage + item.image) | sanitizer\" alt=\"\">\n        </div>\n        <p class=\"news-block__text\">{{item.text}}</p>\n        <a href='/user/{{item.userId}}' (click)=\"authorId(item.userId)\" class=\"news-block__author\">Author: {{item.author.firstName}} {{item.author.lastName}}</a>\n    </div>    \n</div>\n\n<div class=\"pagination\">\n    <pagination-controls (pageChange)=\"page = $event\" class=\"pagination\"></pagination-controls>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notFound/notFound.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notFound/notFound.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"notfound\">\n    <div class=\"notfound-404\">\n        <h1>4<span>0</span>4</h1>\n    </div>\n    <h2>Oops! This Page Could Not Be Found</h2>\n    <p>Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable.</p>\n    <a href=\"/\">Go To Homepage</a>\n</div>    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/postClass/postClass.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/postClass/postClass.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button onclick=\"document.getElementById('id02').style.display='block'\">Sign Up</button>\n\n<div id=\"id02\" class=\"modal\">\n  \n  <form class=\"modal-content animate\">\n    <span (click)=\"clearInput()\" onclick=\"this.form.reset()\" onclick=\"document.getElementById('id02').style.display='none'\" class=\"close\" title=\"Close\">&times;</span>\n    <div class=\"container\">\n      <h1>Sign Up</h1>\n      <p>Please fill in this form to create an account.</p>\n      <hr>\n      <label for=\"first-name\"><b>First name</b></label>\n      <input type=\"text\" autocomplete=\"off\" placeholder=\"Enter first name\" name=\"fname\" [(ngModel)]=\"user.firstName\" required>\n\n      <label for=\"last-name\"><b>Last name</b></label>\n      <input type=\"text\" autocomplete=\"off\" placeholder=\"Enter last name\" name=\"lname\" [(ngModel)]=\"user.lastName\" required>\n\n      <label for=\"email\"><b>Email</b></label>\n      <input type=\"email\" autocomplete=\"off\" placeholder=\"Enter Email\" name=\"email\" [(ngModel)]=\"user.email\"  required>\n\n      <label for=\"password\"><b>Password</b></label>\n      <input type=\"password\" autocomplete=\"off\" placeholder=\"Enter Password\" name=\"password\" [(ngModel)]=\"user.password\" required>\n\n      <img [src]='imageUrl' style=\"width:30%; height:30%\">\n      <input #fileInput type=\"file\" [(ngModel)]=\"fileInputValue\"  (change)=\"selectImage($event)\" (change)=\"handleFileInput($event)\" class=\"file-upload\" name=\"image\" required>\n\n\n      <p>By creating an account you agree to our <a href=\"#\" style=\"color:dodgerblue\">Terms & Privacy</a>.</p>\n\n      <div *ngIf=\"user.firstName == '' || user.lastName == '' || user.email == '' || user.password == '' || file == null;else buttonOk\">\n        <button type=\"submit\" (click)=\"badInfo()\" class=\"signupbtn\" style=\"background-color:grey\" >Sign Up</button>\n      </div>\n\n      <ng-template #buttonOk>\n        <button type=\"submit\" (click)=\"submit(user)\" class=\"signupbtn\" >Sign Up</button>\n      </ng-template>\n    </div>\n\n    <div id=\"alert-bad-reg\">\n      <strong>Attention!</strong> Enter all user data!\n    </div>\n    \n    <div id=\"alert-good-reg\">\n      <strong>Success!</strong> You will be logged in automatically! This window will close automatically.\n    </div>\n\n    <div id=\"alert-inv-reg\">\n      <strong>Warning!</strong> This email already in use.\n    </div>\n\n    <div class=\"container\" style=\"background-color:#f1f1f1\">\n      <button type=\"button\" (click)=\"clearInput()\" onclick=\"this.form.reset()\" onclick=\"document.getElementById('id02').style.display='none'\" style=\"width:auto\" class=\"cancelbtn\">Cancel</button>\n    </div>\n  </form>\n  \n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-info\">\n  <div class=\"user-info__card\">\n    <div *ngFor=\"let user of users\">\n      <div *ngIf=\"user.id==id && isUser==true\">\n        <img [src]=\"user.image\" alt=\"Avatar\" style=\"width:100%\">\n        <div class=\"container\">\n          <h4><b>{{user.firstName}} {{user.lastName}}</b></h4> \n          <p>{{user.email}}</p> \n        </div>\n      </div> \n    </div>\n    <div *ngIf=\"isUser==false\">\n      <img [src]=\"currentUser.image\" alt=\"Avatar\" style=\"width:100%\">\n      <div class=\"container\">\n        <h4><b>{{currentUser.firstName}} {{currentUser.lastName}}</b></h4> \n        <p>{{currentUser.email}}</p> \n      </div>\n      <button type=\"button\" onclick=\"document.getElementById('id05').style.display='block'\" class=\"updatebtn\">Update information</button>\n    </div>\n  </div>\n\n  <div class=\"user-info__news\">\n    <div *ngFor=\"let user of users\" class=\"user-info__news-block\">\n      <div *ngIf=\"user.id==id && isUser==true\">\n        <div *ngFor=\"let item of user.news\">\n          <div class=\"news-block__item\">   \n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  {{item.title}}\n                </mat-panel-title>\n              </mat-expansion-panel-header>\n                <p>{{item.tags}}</p>\n                <div class=\"news-block__image\">\n                  <img class=\"news-block__image-image\" [src]=\"(returnImage + item.image) | sanitizer\" alt=\"\">\n                </div>\n                <p class=\"news-block__text\">{{item.text}}</p>\n            </mat-expansion-panel> \n          </div> \n        </div>\n        <div *ngIf=\"user.news.length==0\" class=\"no-news\">This user has no posts.</div>\n      </div>\n    </div>\n    <div *ngIf=\"isUser==false\">\n      <div *ngFor=\"let item of currentUser.news\">\n        <div class=\"news-block__item\">   \n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                {{item.title}}\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n              <p>{{item.tags}}</p>\n              <div class=\"news-block__image\">\n                <img class=\"news-block__image-image\" [src]=\"(returnImage + item.image) | sanitizer\" alt=\"\">\n              </div>\n              <p class=\"news-block__text\">{{item.text}}</p>\n          </mat-expansion-panel> \n        </div> \n      </div>\n      <div *ngIf=\"currentUser.news.length==0\" class=\"no-news\">You have no posts.</div>\n    </div>\n  </div>\n</div>\n\n<div id=\"id05\" class=\"modal\">\n  \n    <form class=\"modal-content animate\">\n      <span (click)=\"clearInput()\" onclick=\"document.getElementById('id05').style.display='none'\" class=\"close\" title=\"Close\">&times;</span>\n      <div class=\"container\">\n        <h1>Update</h1>\n        <p>Update information about yourself.</p>\n        <hr>\n        <label for=\"first-name\"><b>First name</b></label>\n        <input type=\"text\" autocomplete=\"off\" [placeholder]=\"currentUser.firstName\" [(ngModel)]=\"userData.firstName\" name=\"fname\">\n  \n        <label for=\"last-name\"><b>Last name</b></label>\n        <input type=\"text\" autocomplete=\"off\" [placeholder]=\"currentUser.lastName\" [(ngModel)]=\"userData.lastName\" name=\"lname\">\n  \n        <label for=\"password\"><b>Password</b></label>\n        <input type=\"password\" autocomplete=\"off\" placeholder=\"Enter new password\" [(ngModel)]=\"userData.password\" name=\"password\">\n  \n        <img [src]=\"imageUrl\" style=\"width:30%; height:30%\">\n        <input #fileInput type=\"file\" [(ngModel)]=\"fileInputValue\" (change)=\"selectImage($event)\" (change)=\"handleFileInput($event.target.files)\" class=\"file-upload\" name=\"image\" required>\n\n        <div class=\"button-block\">\n          <button type=\"submit\" (click)=\"submit(userData)\" (click)=\"goodInfo()\" class=\"signupbtn\" >Update</button>\n          <button type=\"button\" (click)=\"clearInput()\" onclick=\"document.getElementById('id05').style.display='none'\" class=\"cancelbtn\">Cancel</button>\n        </div>\n\n      </div>\n      \n      <div id=\"alert-good-user\">\n        <strong>Success!</strong> You are updated information about yourself! This window will close automatically.\n      </div>\n  \n    </form>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/userClass/userClass.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userClass/userClass.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding-top: 3rem;\n}\n\napp-header {\n    display: flex;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy10b3A6IDNyZW07XG59XG5cbmFwcC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth-log.service */ "./src/app/services/auth-log.service.ts");



let AppComponent = class AppComponent {
    constructor(authLogService) {
        this.authLogService = authLogService;
        this.title = 'client-app';
    }
    ngOnInit() {
        this.token = localStorage.getItem('jwtToken');
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_log_service__WEBPACK_IMPORTED_MODULE_2__["AuthLogService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.pipe */ "./src/app/search.pipe.ts");
/* harmony import */ var _url_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./url.pipe */ "./src/app/url.pipe.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _userClass_user__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./userClass/user */ "./src/app/userClass/user.ts");
/* harmony import */ var _postClass_postClass__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./postClass/postClass */ "./src/app/postClass/postClass.ts");
/* harmony import */ var _notFound_notFound_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./notFound/notFound.component */ "./src/app/notFound/notFound.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _services_auth_log_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/auth-log.service */ "./src/app/services/auth-log.service.ts");
/* harmony import */ var _services_auth_reg_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/auth-reg.service */ "./src/app/services/auth-reg.service.ts");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");

































const appRoutes = [
    { path: '', component: _news_news_component__WEBPACK_IMPORTED_MODULE_11__["NewsComponent"] },
    {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_14__["UserComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'user/:id',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_14__["UserComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    { path: '**', component: _notFound_notFound_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _news_news_component__WEBPACK_IMPORTED_MODULE_11__["NewsComponent"],
            _auth_auth_component__WEBPACK_IMPORTED_MODULE_12__["AuthComponent"],
            _registration_registration_component__WEBPACK_IMPORTED_MODULE_13__["RegistrationComponent"],
            _userClass_user__WEBPACK_IMPORTED_MODULE_16__["User"],
            _postClass_postClass__WEBPACK_IMPORTED_MODULE_17__["Post"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_14__["UserComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
            _notFound_notFound_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"],
            _search_pipe__WEBPACK_IMPORTED_MODULE_5__["SearchFilterPipe"],
            _url_pipe__WEBPACK_IMPORTED_MODULE_6__["SanitizerPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes),
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_19__["Ng2SearchPipeModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"]
        ],
        providers: [
            _auth_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"],
            _services_auth_log_service__WEBPACK_IMPORTED_MODULE_29__["AuthLogService"],
            _services_auth_reg_service__WEBPACK_IMPORTED_MODULE_30__["AuthRegService"],
            _services_news_service__WEBPACK_IMPORTED_MODULE_31__["NewsService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_32__["UsersService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Full-width input fields */\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  background-color: #f1f1f1;\n}\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n/* Set a style for all buttons */\nbutton {\n  background-color: #2199e8;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  margin-right: 1.0625rem;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\nbutton:hover {\n  opacity: 0.8;\n}\n/* Extra styles for the cancel button */\n.cancelbtn {\n  width: auto;\n  padding: 10px 18px;\n  background-color: #f44336;\n}\n/* Center the image and position the close button */\n.container {\n  padding: 16px;\n}\nspan.psw {\n  float: right;\n  padding-top: 16px;\n}\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  padding-top: 60px;\n}\n/* Modal Content/Box */\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n/* The Close Button (x) */\n.close {\n  position: absolute;\n  right: 25px;\n  top: 8px;\n  color: #000;\n  font-size: 35px;\n  font-weight: bold;\n}\n.close:hover,\n.close:focus {\n  color: red;\n  cursor: pointer;\n}\n/* Add Zoom Animation */\n.animate {\n  -webkit-animation: animatezoom 0.6s;\n  animation: animatezoom 0.6s\n}\n@-webkit-keyframes animatezoom {\n  from {-webkit-transform: scale(0)} \n  to {-webkit-transform: scale(1)}\n}\n@keyframes animatezoom {\n  from {transform: scale(0)} \n  to {transform: scale(1)}\n}\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n  span.psw {\n     display: block;\n     float: none;\n  }\n  .cancelbtn {\n     width: 100%;\n  }\n}\n#alert-bad {\n  visibility: hidden;\n  padding: 20px;\n  width: 79.1%;\n  margin-left: 10%;\n  margin-bottom: 3%;\n  background-color: #f44336;\n  color: white;\n  /* position: fixed; */\n  z-index: 1;\n}\n#alert-bad.show {\n  visibility: visible;\n  /* -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; */\n}\n#alert-good {\n  visibility: hidden;\n  padding: 20px;\n  width: 79.1%;\n  margin-left: 10%;\n  margin-bottom: 3%;\n  background-color: #4CAF50;\n  color: white;\n  /* position: fixed; */\n  z-index: 1;\n}\n#alert-good.show {\n  visibility: visible;\n  /* -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; */\n}\n#alert-inv {\n  visibility: hidden;\n  padding: 20px;\n  width: 79.1%;\n  margin-left: 10%;\n  margin-bottom: 3%;\n  background-color: #ff9800;\n  color: white;\n  /* position: fixed; */\n  z-index: 1;\n}\n#alert-inv.show {\n  visibility: visible;\n  /* -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; */\n}\n@-webkit-keyframes fadein {\n  from {bottom: 0; opacity: 0;} \n  to {bottom: 30px; opacity: 1;}\n}\n@keyframes fadein {\n  from {bottom: 0; opacity: 0;}\n  to {bottom: 30px; opacity: 1;}\n}\n@-webkit-keyframes fadeout {\n  from {bottom: 30px; opacity: 1;} \n  to {bottom: 0; opacity: 0;}\n}\n@keyframes fadeout {\n  from {bottom: 30px; opacity: 1;}\n  to {bottom: 0; opacity: 0;}\n}\n#alert-bad-2 {\n  visibility: hidden;\n  padding: 20px;\n  width: 79.1%;\n  margin-left: 10%;\n  margin-bottom: 3%;\n  background-color: #f44336;\n  color: white;\n  /* position: fixed; */\n  z-index: 1;\n}\n#alert-bad-2.show {\n  visibility: visible;\n  /* -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; */\n}\n#alert-good-2 {\n  visibility: hidden;\n  padding: 20px;\n  width: 79.1%;\n  margin-left: 10%;\n  margin-bottom: 3%;\n  background-color: #4CAF50;\n  color: white;\n  /* position: fixed; */\n  z-index: 1;\n}\n#alert-good-2.show {\n  visibility: visible;\n  /* -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; */\n}\n#alert-inv-2 {\n  visibility: hidden;\n  padding: 20px;\n  width: 79.1%;\n  margin-left: 10%;\n  margin-bottom: 3%;\n  background-color: #ff9800;\n  color: white;\n  /* position: fixed; */\n  z-index: 1;\n}\n#alert-inv-2.show {\n  visibility: visible;\n  /* -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCO0FBQzVCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmO0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUEsdUNBQXVDO0FBQ3ZDO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7QUFFQSxtREFBbUQ7QUFFbkQ7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0IsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0VBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtFQUN4RCxpQkFBaUI7QUFDbkI7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCLEVBQUUsc0RBQXNEO0VBQ2hGLHNCQUFzQjtFQUN0QixVQUFVLEVBQUUsb0RBQW9EO0FBQ2xFO0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLG1DQUFtQztFQUNuQztBQUNGO0FBRUE7RUFDRSxNQUFNLDJCQUEyQjtFQUNqQyxJQUFJLDJCQUEyQjtBQUNqQztBQUVBO0VBQ0UsTUFBTSxtQkFBbUI7RUFDekIsSUFBSSxtQkFBbUI7QUFDekI7QUFFQSxvRUFBb0U7QUFDcEU7RUFDRTtLQUNHLGNBQWM7S0FDZCxXQUFXO0VBQ2Q7RUFDQTtLQUNHLFdBQVc7RUFDZDtBQUNGO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25COzhDQUM0QztBQUM5QztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQjs4Q0FDNEM7QUFDOUM7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsVUFBVTtBQUNaO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkI7OENBQzRDO0FBQzlDO0FBRUE7RUFDRSxNQUFNLFNBQVMsRUFBRSxVQUFVLENBQUM7RUFDNUIsSUFBSSxZQUFZLEVBQUUsVUFBVSxDQUFDO0FBQy9CO0FBRUE7RUFDRSxNQUFNLFNBQVMsRUFBRSxVQUFVLENBQUM7RUFDNUIsSUFBSSxZQUFZLEVBQUUsVUFBVSxDQUFDO0FBQy9CO0FBRUE7RUFDRSxNQUFNLFlBQVksRUFBRSxVQUFVLENBQUM7RUFDL0IsSUFBSSxTQUFTLEVBQUUsVUFBVSxDQUFDO0FBQzVCO0FBRUE7RUFDRSxNQUFNLFlBQVksRUFBRSxVQUFVLENBQUM7RUFDL0IsSUFBSSxTQUFTLEVBQUUsVUFBVSxDQUFDO0FBQzVCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25COzhDQUM0QztBQUM5QztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQjs4Q0FDNEM7QUFDOUM7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsVUFBVTtBQUNaO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkI7OENBQzRDO0FBQzlDIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5OWU4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgbWFyZ2luLXJpZ2h0OiAxLjA2MjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXG4uY2FuY2VsYnRuIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cblxuLyogQ2VudGVyIHRoZSBpbWFnZSBhbmQgcG9zaXRpb24gdGhlIGNsb3NlIGJ1dHRvbiAqL1xuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuc3Bhbi5wc3cge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cblxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXG59XG5cbi8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNXB4O1xuICB0b3A6IDhweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbG9zZTpob3Zlcixcbi5jbG9zZTpmb2N1cyB7XG4gIGNvbG9yOiByZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogQWRkIFpvb20gQW5pbWF0aW9uICovXG4uYW5pbWF0ZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlem9vbSAwLjZzO1xuICBhbmltYXRpb246IGFuaW1hdGV6b29tIDAuNnNcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV6b29tIHtcbiAgZnJvbSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApfSBcbiAgdG8gey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKX1cbn1cbiAgXG5Aa2V5ZnJhbWVzIGFuaW1hdGV6b29tIHtcbiAgZnJvbSB7dHJhbnNmb3JtOiBzY2FsZSgwKX0gXG4gIHRvIHt0cmFuc2Zvcm06IHNjYWxlKDEpfVxufVxuXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBzcGFuIGFuZCBjYW5jZWwgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gIHNwYW4ucHN3IHtcbiAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgIGZsb2F0OiBub25lO1xuICB9XG4gIC5jYW5jZWxidG4ge1xuICAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4jYWxlcnQtYmFkIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogNzkuMSU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG4gIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cbiAgei1pbmRleDogMTtcbn1cblxuI2FsZXJ0LWJhZC5zaG93IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLyogLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7ICovXG59XG5cbiNhbGVydC1nb29kIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogNzkuMSU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG4gIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cbiAgei1pbmRleDogMTtcbn1cblxuI2FsZXJ0LWdvb2Quc2hvdyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIC8qIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XG4gIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzOyAqL1xufVxuXG4jYWxlcnQtaW52IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogNzkuMSU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwO1xuICBjb2xvcjogd2hpdGU7XG4gIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cbiAgei1pbmRleDogMTtcbn1cblxuI2FsZXJ0LWludi5zaG93IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLyogLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7ICovXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fSBcbiAgdG8ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cbiAgdG8ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgZnJvbSB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO30gXG4gIHRvIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xuICBmcm9tIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fVxuICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cbn1cblxuI2FsZXJ0LWJhZC0yIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogNzkuMSU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG4gIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cbiAgei1pbmRleDogMTtcbn1cblxuI2FsZXJ0LWJhZC0yLnNob3cge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAvKiAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xuICBhbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41czsgKi9cbn1cblxuI2FsZXJ0LWdvb2QtMiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDc5LjElO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXG4gIHotaW5kZXg6IDE7XG59XG5cbiNhbGVydC1nb29kLTIuc2hvdyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIC8qIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XG4gIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzOyAqL1xufVxuXG4jYWxlcnQtaW52LTIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiA3OS4xJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk4MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xuICB6LWluZGV4OiAxO1xufVxuXG4jYWxlcnQtaW52LTIuc2hvdyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIC8qIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XG4gIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzOyAqL1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _userClass_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userClass/user */ "./src/app/userClass/user.ts");
/* harmony import */ var _services_auth_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth-log.service */ "./src/app/services/auth-log.service.ts");




let AuthComponent = class AuthComponent {
    constructor(authLogService) {
        this.authLogService = authLogService;
        this.user = new _userClass_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.userName = '';
        this.googleOauth = false;
    }
    ngOnInit() {
        this.user.email = '';
        this.user.password = '';
        this.getAuthUser();
    }
    submit(user) {
        this.done = false;
        this.authLogService.postData(user)
            .subscribe((data) => {
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
        }, error => {
            console.log(error);
            const alert = document.getElementById('alert-inv');
            alert.className = 'show';
            const alert2 = document.getElementById('alert-inv-2');
            alert2.className = 'show';
            setTimeout(() => {
                alert.className = alert.className.replace('show', '');
                alert2.className = alert2.className.replace('show', '');
            }, 3000);
        });
    }
    badInfo() {
        const alert = document.getElementById('alert-bad');
        const alert2 = document.getElementById('alert-bad-2');
        alert.className = 'show';
        alert2.className = 'show';
        setTimeout(() => {
            alert.className = alert.className.replace('show', '');
            alert2.className = alert2.className.replace('show', '');
        }, 3000);
    }
    getAuthUser() {
        this.authLogService.getAuthUser().subscribe((data) => {
            if (data) {
                this.user = data;
                localStorage.setItem('jwtToken', JSON.stringify(data.token));
                localStorage.setItem('user', JSON.stringify(data));
                window.location.href = '/';
            }
        });
    }
    clearInput() {
        this.user['email'] = '';
        this.user['password'] = '';
    }
};
AuthComponent.ctorParameters = () => [
    { type: _services_auth_log_service__WEBPACK_IMPORTED_MODULE_3__["AuthLogService"] }
];
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")).default]
    })
], AuthComponent);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthGuard = class AuthGuard {
    constructor() {
        this.token = '';
    }
    ngOnInit() {
        this.token = localStorage.getItem('jwtToken');
    }
    canActivate(next, state) {
        this.token = localStorage.getItem('jwtToken');
        if (this.token == null) {
            const modalAuth = document.getElementById('id00');
            modalAuth.style.display = 'block';
            return false;
        }
        else {
            return true;
        }
    }
};
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-button-block {\n  display: flex;\n  justify-content: space-between;\n  width: 100%\n}\n\n.header-button-block-auth {\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n}\n\n.button {\n    background-color: #2199e8;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    margin-right: 1.0625rem;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\nbutton:hover {\n    opacity: 0.8;\n}\n\n.file-upload {\n  margin-left: 11%;\n}\n\n/* Full-width input fields */\n\ninput[type=text], input[type=password], textarea {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* Add a background color when the inputs get focus */\n\ninput[type=text]:focus, input[type=password]:focus, textarea:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for all buttons */\n\nbutton {\n  background-color: #2199e8;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  margin-right: 1.0625rem;\n  margin-left: 1.0625rem;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n\nbutton:hover {\n  opacity: 0.8;\n}\n\n/* Extra styles for the cancel button */\n\n.cancelbtn {\n  padding: 10px 18px;\n  background-color: #f44336;\n  margin-left: 0;\n}\n\n/* Float cancel and signup buttons and add an equal width */\n\n.createbtn {\n  float: left;\n  width: 100%;\n  margin-left: 0;\n}\n\n/* Add padding to container elements */\n\n.container {\n  padding: 16px;\n}\n\n/* The Modal (background) */\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgba(0,0,0,0.4);\n  padding-top: 50px;\n}\n\n/* Modal Content/Box */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button (x) */\n\n.close {\n  position: absolute;\n  right: 25px;\n  top: 8px;\n  color: #000;\n  font-size: 35px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: red;\n  cursor: pointer;\n}\n\n/* Style the horizontal ruler */\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n/* Clear floats */\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n/* Add Zoom Animation */\n\n.animate {\n  -webkit-animation: animatezoom 0.6s;\n  animation: animatezoom 0.6s\n}\n\n@-webkit-keyframes animatezoom {\n  from {-webkit-transform: scale(0)} \n  to {-webkit-transform: scale(1)}\n}\n\n@keyframes animatezoom {\n  from {transform: scale(0)} \n  to {transform: scale(1)}\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n\n@media screen and (max-width: 300px) {\n  .cancelbtn, .signupbtn {\n     width: 100%;\n  }\n}\n\n.button-block {\n  display: flex;\n}\n\n#alert-bad-head {\n  visibility: hidden;\n  padding: 20px;\n  width: 79.1%;\n  margin-left: 10%;\n  margin-bottom: 3%;\n  background-color: #f44336;\n  color: white;\n  /* position: fixed; */\n  z-index: 1;\n}\n\n#alert-bad-head.show {\n  visibility: visible;\n  /* -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; */\n}\n\n#alert-good-head {\n  visibility: hidden;\n  padding: 20px;\n  width: 79.1%;\n  margin-left: 10%;\n  margin-bottom: 3%;\n  background-color: #4CAF50;\n  color: white;\n  /* position: fixed; */\n  z-index: 1;\n}\n\n#alert-good-head.show {\n  visibility: visible;\n  /* -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSw0QkFBNEI7O0FBQzVCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUEscURBQXFEOztBQUNyRDtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUEsZ0NBQWdDOztBQUNoQztFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBLHVDQUF1Qzs7QUFDdkM7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUEsMkRBQTJEOztBQUMzRDtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQSxzQ0FBc0M7O0FBQ3RDO0VBQ0UsYUFBYTtBQUNmOztBQUVBLDJCQUEyQjs7QUFDM0I7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0IsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsaUNBQWlDO0VBQ2pDLGlCQUFpQjtBQUNuQjs7QUFFQSxzQkFBc0I7O0FBQ3RCO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QixFQUFFLHNEQUFzRDtFQUNoRixzQkFBc0I7RUFDdEIsVUFBVSxFQUFFLG9EQUFvRDtBQUNsRTs7QUFFQSx5QkFBeUI7O0FBRXpCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUEsK0JBQStCOztBQUMvQjtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUEsaUJBQWlCOztBQUNqQjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQSx1QkFBdUI7O0FBQ3ZCO0VBQ0UsbUNBQW1DO0VBQ25DO0FBQ0Y7O0FBRUE7RUFDRSxNQUFNLDJCQUEyQjtFQUNqQyxJQUFJLDJCQUEyQjtBQUNqQzs7QUFFQTtFQUNFLE1BQU0sbUJBQW1CO0VBQ3pCLElBQUksbUJBQW1CO0FBQ3pCOztBQUVBLDZFQUE2RTs7QUFDN0U7RUFDRTtLQUNHLFdBQVc7RUFDZDtBQUNGOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkI7OENBQzRDO0FBQzlDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkI7OENBQzRDO0FBQzlDIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1idXR0b24tYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlXG59XG5cbi5oZWFkZXItYnV0dG9uLWJsb2NrLWF1dGgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk5ZTg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIG1hcmdpbi1yaWdodDogMS4wNjI1cmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4gIFxuYnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG5cbi5maWxlLXVwbG9hZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMSU7XG59XG5cbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4vKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gdGhlIGlucHV0cyBnZXQgZm9jdXMgKi9cbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTllODtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIG1hcmdpbi1yaWdodDogMS4wNjI1cmVtO1xuICBtYXJnaW4tbGVmdDogMS4wNjI1cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xuLmNhbmNlbGJ0biB7XG4gIHBhZGRpbmc6IDEwcHggMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi8qIEZsb2F0IGNhbmNlbCBhbmQgc2lnbnVwIGJ1dHRvbnMgYW5kIGFkZCBhbiBlcXVhbCB3aWR0aCAqL1xuLmNyZWF0ZWJ0biB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXG59XG5cbi8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXG5cbi5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI1cHg7XG4gIHRvcDogOHB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsb3NlOmhvdmVyLFxuLmNsb3NlOmZvY3VzIHtcbiAgY29sb3I6IHJlZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBTdHlsZSB0aGUgaG9yaXpvbnRhbCBydWxlciAqL1xuaHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4vKiBDbGVhciBmbG9hdHMgKi9cbi5jbGVhcmZpeDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi8qIEFkZCBab29tIEFuaW1hdGlvbiAqL1xuLmFuaW1hdGUge1xuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZXpvb20gMC42cztcbiAgYW5pbWF0aW9uOiBhbmltYXRlem9vbSAwLjZzXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlem9vbSB7XG4gIGZyb20gey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKX0gXG4gIHRvIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSl9XG59XG4gIFxuQGtleWZyYW1lcyBhbmltYXRlem9vbSB7XG4gIGZyb20ge3RyYW5zZm9ybTogc2NhbGUoMCl9IFxuICB0byB7dHJhbnNmb3JtOiBzY2FsZSgxKX1cbn1cblxuLyogQ2hhbmdlIHN0eWxlcyBmb3IgY2FuY2VsIGJ1dHRvbiBhbmQgc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAuY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcbiAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmJ1dHRvbi1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNhbGVydC1iYWQtaGVhZCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDc5LjElO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXG4gIHotaW5kZXg6IDE7XG59XG5cbiNhbGVydC1iYWQtaGVhZC5zaG93IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLyogLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7ICovXG59XG5cbiNhbGVydC1nb29kLWhlYWQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiA3OS4xJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xuICB6LWluZGV4OiAxO1xufVxuXG4jYWxlcnQtZ29vZC1oZWFkLnNob3cge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAvKiAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xuICBhbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41czsgKi9cbn0iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _postClass_postClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../postClass/postClass */ "./src/app/postClass/postClass.ts");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(newsService) {
        this.newsService = newsService;
        this.post = new _postClass_postClass__WEBPACK_IMPORTED_MODULE_2__["Post"]();
        this.done = false;
        this.imageUrl = '../assets/Upload.png';
        this.loaderUrl = '../assets/classic1.webp';
        this.fileToUpload = null;
    }
    ngOnInit() {
        this.token = localStorage.getItem('jwtToken');
        this.userInfo();
        this.post.title = '';
        this.post.tags = '';
        this.post.text = '';
        this.file = null;
    }
    logout() {
        this.token = null;
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('user');
        this.newsService.logout().subscribe((data) => {
            this.users = data;
        });
        window.location.href = '/';
    }
    userInfo() {
        if (this.token != null) {
            this.currentUser = JSON.parse(localStorage.getItem('user'));
        }
    }
    submit(post, userId) {
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
            .subscribe((data) => {
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
                }
                else {
                    window.location.href = '/user';
                }
            }, 1000);
        }, error => console.log(error));
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
        const reader = new FileReader();
        reader.onload = (event) => {
            this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
    }
    selectImage(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.file = file;
        }
    }
    badInfo() {
        const alert = document.getElementById('alert-bad-head');
        alert.className = 'show';
        setTimeout(() => { alert.className = alert.className.replace('show', ''); }, 3000);
    }
    goodInfo() {
        const alert = document.getElementById('alert-good-head');
        alert.className = 'show';
        const modal = document.getElementById('id04');
        setTimeout(() => { alert.className = alert.className.replace('show', ''); }, 1500);
        setTimeout(() => {
            modal.style.display = 'none';
            if (`${window.location.pathname}` === '/') {
                window.location.href = '/';
            }
            else {
                window.location.href = '/user';
            }
        }, 1000);
    }
    clearInput() {
        this.post['title'] = '';
        this.post['tags'] = '';
        this.post['text'] = '';
        this.imageUrl = '../assets/Upload.png';
        this.file = null;
        this.fileInputValue = null;
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/news/news.component.css":
/*!*****************************************!*\
  !*** ./src/app/news/news.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Safari */\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\nh1 {\n    text-align: center;\n}\nh2 {\n    text-align: center;\n}\n.search-news {\n    display: flex;\n    position: relative;\n    max-width: 65%;\n    padding-bottom: 6.5%;\n    margin:auto;\n}\n.form-control {\n    box-shadow: 0 10px 7px 0 #B0C1D9;\n    display: block;\n    width: 100%;\n    height: 34px;\n    padding: 1.2% 2.4%;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n.form-control::-webkit-input-placeholder  {\n    font-family: FontAwesome;\n}\n.form-control::-moz-placeholder  {\n    font-family: FontAwesome;\n}\n.form-control::-ms-input-placeholder  {\n    font-family: FontAwesome;\n}\n.form-control::placeholder  {\n    font-family: FontAwesome;\n}\n.news-block__item {\n    margin-bottom: .5rem;\n    padding: .5rem 1rem;\n    border: 1px dashed #ccc;\n}\n.news-block__title {\n    margin-bottom: .5rem;\n    word-break: break-all;\n}\n.news-block__image {\n    display: flex;\n    justify-content: center;\n}\n.news-block__image-image {\n    width: 30%;\n    height: 30%;\n}\n.news-block__tags {\n    opacity: 0.5;\n    font-size: 11px;\n    word-break: break-all;\n}\n.news-block__text {\n    word-break: break-all;\n}\n.news-block__author {\n    -moz-text-align-last: end;\n         text-align-last: end;\n    font-size: 11px;\n}\n.pagination {\n    justify-content: center;\n}\n.btn-danger {\n    box-shadow: 0 10px 7px 0 #B0C1D9;\n    height: 34px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n.btn-danger:not(:disabled):not(.disabled).active, .btn-danger:not(:disabled):not(.disabled):active, .show>.btn-danger.dropdown-toggle {\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n}\n.btn-danger:not(:disabled):not(.disabled).active:focus, .btn-danger:not(:disabled):not(.disabled):active:focus, .show>.btn-danger.dropdown-toggle:focus {\n    box-shadow: 0 10px 7px 0 #B0C1D9;\n}\nselect > option:checked{\n    box-shadow: 0 0 10px 100px #fff inset;\n    outline:none;\n}\n.close {\n  position: absolute;\n  right: 3%;\n  top: 2%;\n  color: #000;\n  font-size: 35px;\n  font-weight: bold;\n}\n.close:hover,\n.close:focus {\n  color: red;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVztBQUNYO0VBQ0UsS0FBSywrQkFBK0IsRUFBRTtFQUN0QyxPQUFPLGlDQUFpQyxFQUFFO0FBQzVDO0FBRUE7RUFDRSxLQUFLLHVCQUF1QixFQUFFO0VBQzlCLE9BQU8seUJBQXlCLEVBQUU7QUFDcEM7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsV0FBVztBQUNmO0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBRkE7SUFDSSx3QkFBd0I7QUFDNUI7QUFGQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUZBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0kseUJBQW9CO1NBQXBCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25CO0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGdDQUFnQztBQUNwQztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLFlBQVk7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBRUE7O0VBRUUsVUFBVTtFQUNWLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNhZmFyaSAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbmgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWFyY2gtbmV3cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiA2NSU7XG4gICAgcGFkZGluZy1ib3R0b206IDYuNSU7XG4gICAgbWFyZ2luOmF1dG87XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCA3cHggMCAjQjBDMUQ5O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzRweDtcbiAgICBwYWRkaW5nOiAxLjIlIDIuNCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbiAgXG4uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciAge1xuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbn1cblxuLm5ld3MtYmxvY2tfX2l0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNjY2M7XG59XG5cbi5uZXdzLWJsb2NrX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4ubmV3cy1ibG9ja19faW1hZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5uZXdzLWJsb2NrX19pbWFnZS1pbWFnZSB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDMwJTtcbn1cblxuLm5ld3MtYmxvY2tfX3RhZ3Mge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4ubmV3cy1ibG9ja19fdGV4dCB7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4ubmV3cy1ibG9ja19fYXV0aG9yIHtcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGVuZDtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ0bi1kYW5nZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCA3cHggMCAjQjBDMUQ5O1xuICAgIGhlaWdodDogMzRweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYnRuLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIC5idG4tZGFuZ2VyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLnNob3c+LmJ0bi1kYW5nZXIuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLmJ0bi1kYW5nZXI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLCAuYnRuLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5zaG93Pi5idG4tZGFuZ2VyLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDdweCAwICNCMEMxRDk7XG59XG5cbnNlbGVjdCA+IG9wdGlvbjpjaGVja2Vke1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDEwMHB4ICNmZmYgaW5zZXQ7XG4gICAgb3V0bGluZTpub25lO1xufVxuXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzJTtcbiAgdG9wOiAyJTtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbG9zZTpob3Zlcixcbi5jbG9zZTpmb2N1cyB7XG4gIGNvbG9yOiByZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");



let NewsComponent = class NewsComponent {
    constructor(newsService) {
        this.newsService = newsService;
        this.news = [];
        this.users = [];
        this.page = 1;
        this.searchFilter = 'all';
        this.searchText = '';
        this.returnImage = 'http://localhost:3000/';
    }
    ngOnInit() {
        this.getNews();
        this.getUsers();
    }
    getNews() {
        this.newsService.getNews().subscribe((data) => {
            this.news = data;
            this.newsLength = data.length;
            this.returnImage = 'http://localhost:3000/';
        });
    }
    getUsers() {
        this.newsService.getUsers().subscribe((data) => {
            this.users = data;
        });
    }
    authorId(id) {
        localStorage.removeItem('id');
        localStorage.setItem('id', JSON.stringify(id));
    }
    clearSearchInput() {
        this.searchText = '';
    }
};
NewsComponent.ctorParameters = () => [
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] }
];
NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news.component.css */ "./src/app/news/news.component.css")).default]
    })
], NewsComponent);



/***/ }),

/***/ "./src/app/notFound/notFound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notFound/notFound.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".notfound {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.notfound {\n    max-width: 767px;\n    width: 100%;\n    line-height: 1.4;\n    padding: 0px 15px;\n}\n\n.notfound-404 h1 {\n    font-family: 'Roboto', sans-serif;\n    position: absolute;\n    left: 50%;\n    top: -64%;\n    transform: translate(-50%, -50%);\n    font-size: 165px;\n    font-weight: 700;\n    margin: 0px;\n    color: #262626;\n    text-transform: uppercase;\n}\n\n.notfound-404 h1>span {\n    color: #2199e8;\n}\n\n.notfound h2 {\n    font-family: 'Titillium Web', sans-serif;\n    font-size: 26px;\n    font-weight: 700;\n    margin: 0;\n}\n\n.notfound p {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 14px;\n    font-weight: 500;\n    margin-bottom: 0px;\n    text-transform: uppercase;\n}\n\n.notfound a {\n    font-family: 'Titillium Web', sans-serif;\n    display: inline-block;\n    text-transform: uppercase;\n    color: #fff;\n    text-decoration: none;\n    border: none;\n    background: #2199e8;\n    padding: 10px 40px;\n    font-size: 14px;\n    font-weight: 700;\n    border-radius: 1px;\n    margin-top: 15px;\n    transition: 0.2s all;\n}\n\n.notfound a:hover {\n    opacity: 0.8;\n}\n\na:-webkit-any-link {\n    color: -webkit-link;\n    cursor: pointer;\n    text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90Rm91bmQvbm90Rm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUdSLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFHVCxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFFaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvbm90Rm91bmQvbm90Rm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3Rmb3VuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLm5vdGZvdW5kIHtcbiAgICBtYXgtd2lkdGg6IDc2N3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi5ub3Rmb3VuZC00MDQgaDEge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogLTY0JTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBmb250LXNpemU6IDE2NXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6ICMyNjI2MjY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm5vdGZvdW5kLTQwNCBoMT5zcGFuIHtcbiAgICBjb2xvcjogIzIxOTllODtcbn1cblxuLm5vdGZvdW5kIGgyIHtcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLm5vdGZvdW5kIHAge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5ub3Rmb3VuZCBhIHtcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogIzIxOTllODtcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbn1cblxuLm5vdGZvdW5kIGE6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbn1cblxuYTotd2Via2l0LWFueS1saW5rIHtcbiAgICBjb2xvcjogLXdlYmtpdC1saW5rO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/notFound/notFound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notFound/notFound.component.ts ***!
  \************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notFound.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notFound/notFound.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notFound.component.css */ "./src/app/notFound/notFound.component.css")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/postClass/postClass.component.css":
/*!***************************************************!*\
  !*** ./src/app/postClass/postClass.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RDbGFzcy9wb3N0Q2xhc3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/postClass/postClass.ts":
/*!****************************************!*\
  !*** ./src/app/postClass/postClass.ts ***!
  \****************************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Post = class Post {
};
Post = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-сlass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./postClass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/postClass/postClass.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./postClass.component.css */ "./src/app/postClass/postClass.component.css")).default]
    })
], Post);



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Full-width input fields */\ninput[type=text], input[type=password], input[type=email] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n/* Add a background color when the inputs get focus */\ninput[type=text]:focus, input[type=password]:focus, input[type=email]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n/* Set a style for all buttons */\nbutton {\n  background-color: #2199e8;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  margin-right: 1.0625rem;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\nbutton:hover {\n  opacity: 0.8;\n}\n/* Extra styles for the cancel button */\n.cancelbtn {\n  padding: 10px 18px;\n  background-color: #f44336;\n}\n/* Float cancel and signup buttons and add an equal width */\n.signupbtn {\n  float: left;\n  width: 100%;\n}\n/* Add padding to container elements */\n.container {\n  padding: 16px;\n}\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgba(0,0,0,0.4);\n  padding-top: 50px;\n}\n/* Modal Content/Box */\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n/* The Close Button (x) */\n.close {\n  position: absolute;\n  right: 25px;\n  top: 8px;\n  color: #000;\n  font-size: 35px;\n  font-weight: bold;\n}\n.close:hover,\n.close:focus {\n  color: red;\n  cursor: pointer;\n}\n/* Style the horizontal ruler */\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n/* Clear floats */\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n/* Add Zoom Animation */\n.animate {\n  -webkit-animation: animatezoom 0.6s;\n  animation: animatezoom 0.6s\n}\n@-webkit-keyframes animatezoom {\n  from {-webkit-transform: scale(0)} \n  to {-webkit-transform: scale(1)}\n}\n@keyframes animatezoom {\n  from {transform: scale(0)} \n  to {transform: scale(1)}\n}\n/* Change styles for cancel button and signup button on extra small screens */\n@media screen and (max-width: 300px) {\n  .cancelbtn, .signupbtn {\n     width: 100%;\n  }\n}\n#alert-bad-reg {\n  visibility: hidden;\n  padding: 20px;\n  width: 79.1%;\n  margin-left: 10%;\n  margin-bottom: 3%;\n  background-color: #f44336;\n  color: white;\n  /* position: fixed; */\n  z-index: 1;\n}\n#alert-bad-reg.show {\n  visibility: visible;\n  /* -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; */\n}\n#alert-good-reg {\n  visibility: hidden;\n  padding: 20px;\n  width: 79.1%;\n  margin-left: 10%;\n  margin-bottom: 3%;\n  background-color: #4CAF50;\n  color: white;\n  /* position: fixed; */\n  z-index: 1;\n}\n#alert-good-reg.show {\n  visibility: visible;\n  /* -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; */\n}\n.button-block {\n  display: flex;\n  flex-direction: row-reverse;\n}\n#alert-inv-reg {\n  visibility: hidden;\n  padding: 20px;\n  width: 79.1%;\n  margin-left: 10%;\n  margin-bottom: 3%;\n  background-color: #ff9800;\n  color: white;\n  /* position: fixed; */\n  z-index: 1;\n}\n#alert-inv-reg.show {\n  visibility: visible;\n  /* -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; */\n}\n.file-upload {\n  margin-left: 11%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QjtBQUM1QjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBRUEscURBQXFEO0FBQ3JEO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjtBQUVBLGdDQUFnQztBQUNoQztFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBLHVDQUF1QztBQUN2QztFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7QUFFQSwyREFBMkQ7QUFDM0Q7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiO0FBRUEsc0NBQXNDO0FBQ3RDO0VBQ0UsYUFBYTtBQUNmO0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsYUFBYSxFQUFFLHNCQUFzQjtFQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxlQUFlO0VBQzNCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLGlDQUFpQztFQUNqQyxpQkFBaUI7QUFDbkI7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCLEVBQUUsc0RBQXNEO0VBQ2hGLHNCQUFzQjtFQUN0QixVQUFVLEVBQUUsb0RBQW9EO0FBQ2xFO0FBRUEseUJBQXlCO0FBRXpCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxtQ0FBbUM7RUFDbkM7QUFDRjtBQUVBO0VBQ0UsTUFBTSwyQkFBMkI7RUFDakMsSUFBSSwyQkFBMkI7QUFDakM7QUFFQTtFQUNFLE1BQU0sbUJBQW1CO0VBQ3pCLElBQUksbUJBQW1CO0FBQ3pCO0FBRUEsNkVBQTZFO0FBQzdFO0VBQ0U7S0FDRyxXQUFXO0VBQ2Q7QUFDRjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQjs4Q0FDNEM7QUFDOUM7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsVUFBVTtBQUNaO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkI7OENBQzRDO0FBQzlDO0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25COzhDQUM0QztBQUM5QztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDVweCAwIDIycHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi8qIEFkZCBhIGJhY2tncm91bmQgY29sb3Igd2hlbiB0aGUgaW5wdXRzIGdldCBmb2N1cyAqL1xuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMsIGlucHV0W3R5cGU9ZW1haWxdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5OWU4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgbWFyZ2luLXJpZ2h0OiAxLjA2MjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXG4uY2FuY2VsYnRuIHtcbiAgcGFkZGluZzogMTBweCAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cbi5zaWdudXBidG4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXG59XG5cbi8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXG5cbi5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI1cHg7XG4gIHRvcDogOHB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsb3NlOmhvdmVyLFxuLmNsb3NlOmZvY3VzIHtcbiAgY29sb3I6IHJlZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBTdHlsZSB0aGUgaG9yaXpvbnRhbCBydWxlciAqL1xuaHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4vKiBDbGVhciBmbG9hdHMgKi9cbi5jbGVhcmZpeDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi8qIEFkZCBab29tIEFuaW1hdGlvbiAqL1xuLmFuaW1hdGUge1xuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZXpvb20gMC42cztcbiAgYW5pbWF0aW9uOiBhbmltYXRlem9vbSAwLjZzXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlem9vbSB7XG4gIGZyb20gey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKX0gXG4gIHRvIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSl9XG59XG4gIFxuQGtleWZyYW1lcyBhbmltYXRlem9vbSB7XG4gIGZyb20ge3RyYW5zZm9ybTogc2NhbGUoMCl9IFxuICB0byB7dHJhbnNmb3JtOiBzY2FsZSgxKX1cbn1cblxuLyogQ2hhbmdlIHN0eWxlcyBmb3IgY2FuY2VsIGJ1dHRvbiBhbmQgc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAuY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcbiAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuI2FsZXJ0LWJhZC1yZWcge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiA3OS4xJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xuICB6LWluZGV4OiAxO1xufVxuXG4jYWxlcnQtYmFkLXJlZy5zaG93IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLyogLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7ICovXG59XG5cbiNhbGVydC1nb29kLXJlZyB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDc5LjElO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXG4gIHotaW5kZXg6IDE7XG59XG5cbiNhbGVydC1nb29kLXJlZy5zaG93IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLyogLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7ICovXG59XG5cbi5idXR0b24tYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5cbiNhbGVydC1pbnYtcmVnIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogNzkuMSU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwO1xuICBjb2xvcjogd2hpdGU7XG4gIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cbiAgei1pbmRleDogMTtcbn1cblxuI2FsZXJ0LWludi1yZWcuc2hvdyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIC8qIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XG4gIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzOyAqL1xufVxuXG4uZmlsZS11cGxvYWQge1xuICBtYXJnaW4tbGVmdDogMTElO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _userClass_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userClass/user */ "./src/app/userClass/user.ts");
/* harmony import */ var _services_auth_reg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth-reg.service */ "./src/app/services/auth-reg.service.ts");
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! email-validator */ "./node_modules/email-validator/index.js");
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_4__);


// import { NewsService } from '../services/news.service';



let RegistrationComponent = class RegistrationComponent {
    constructor(authRegService) {
        this.authRegService = authRegService;
        this.user = new _userClass_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.done = false;
        this.userName = '';
        this.imageUrl = '../assets/Upload.png';
        this.fileToUpload = null;
        this.errorBoolean = false;
    }
    ngOnInit() {
        this.user.firstName = '';
        this.user.lastName = '';
        this.user.email = '';
        this.user.password = '';
        this.file = null;
        this.errorBoolean = false;
    }
    submit(user) {
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
        if (!email_validator__WEBPACK_IMPORTED_MODULE_4__["validate"](user.email.trim())) {
            this.badInfo();
            this.errorBoolean = true;
        }
        else {
            this.authRegService.postData(formData)
                .subscribe((data) => {
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
            }, error => {
                console.log(error);
                if (this.errorBoolean == false) {
                    this.invInfo();
                }
            });
        }
    }
    handleFileInput(event) {
        this.fileToUpload = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
    }
    selectImage(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.file = file;
        }
    }
    badInfo() {
        const alert = document.getElementById('alert-bad-reg');
        alert.className = 'show';
        setTimeout(() => { alert.className = alert.className.replace('show', ''); }, 3000);
    }
    goodInfo() {
        const alert = document.getElementById('alert-good-reg');
        alert.className = 'show';
        const modal = document.getElementById('id02');
        setTimeout(() => { alert.className = alert.className.replace('show', ''); }, 1500);
        setTimeout(() => { modal.style.display = 'none'; }, 1500);
    }
    invInfo() {
        const alert = document.getElementById('alert-inv-reg');
        alert.className = 'show';
        setTimeout(() => { alert.className = alert.className.replace('show', ''); }, 3000);
    }
    clearInput() {
        this.user['firstName'] = '';
        this.user['lastName'] = '';
        this.user['email'] = '';
        this.user['password'] = '';
        this.imageUrl = '../assets/Upload.png';
        this.file = null;
        this.fileInputValue = null;
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _services_auth_reg_service__WEBPACK_IMPORTED_MODULE_3__["AuthRegService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput', { static: false })
], RegistrationComponent.prototype, "fileInput", void 0);
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")).default]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/search.pipe.ts":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterPipe", function() { return SearchFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchFilterPipe = class SearchFilterPipe {
    transform(news, searchFilter, searchText) {
        if (!news) {
            return [];
        }
        if (!searchText) {
            return news;
        }
        if (searchFilter === 'author') {
            return news.filter(item => item['author'].firstName.includes(searchText) || item['author'].lastName.includes(searchText));
        }
        if (searchFilter === 'all') {
            return news.filter(item => item['tags'].includes(searchText) ||
                item['title'].includes(searchText) ||
                item['text'].includes(searchText) ||
                item['author'].firstName.includes(searchText) ||
                item['author'].lastName.includes(searchText));
        }
        return news.filter(item => item[searchFilter].includes(searchText));
    }
};
SearchFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'searchFilterSearch'
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SearchFilterPipe);



/***/ }),

/***/ "./src/app/services/auth-log.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/auth-log.service.ts ***!
  \**********************************************/
/*! exports provided: AuthLogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLogService", function() { return AuthLogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AuthLogService = class AuthLogService {
    constructor(http) {
        this.http = http;
    }
    postData(user) {
        const body = { email: user.email, password: user.password };
        return this.http.post('http://localhost:3000/auth/signin', body);
    }
    getAuthUser() {
        return this.http.get(`http://localhost:3000/auth/getAuthUser`, { withCredentials: true });
    }
};
AuthLogService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AuthLogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthLogService);



/***/ }),

/***/ "./src/app/services/auth-reg.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/auth-reg.service.ts ***!
  \**********************************************/
/*! exports provided: AuthRegService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRegService", function() { return AuthRegService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AuthRegService = class AuthRegService {
    constructor(http) {
        this.http = http;
    }
    postData(formData) {
        const body = formData;
        return this.http.post('http://localhost:3000/auth/signup', body);
    }
};
AuthRegService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AuthRegService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthRegService);



/***/ }),

/***/ "./src/app/services/news.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/news.service.ts ***!
  \******************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let NewsService = class NewsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getNews() {
        return this.httpClient.get('http://localhost:3000/news');
    }
    getUsers() {
        return this.httpClient.get('http://localhost:3000/users');
    }
    postData(formData) {
        const body = formData;
        return this.httpClient.post('http://localhost:3000/news/', body);
    }
    logout() {
        return this.httpClient.get('http://localhost:3000/auth/logout', { withCredentials: true });
    }
};
NewsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
NewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], NewsService);



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let UsersService = class UsersService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getUsers() {
        return this.httpClient.get('http://localhost:3000/users');
    }
    getUser() {
        return this.httpClient.get(`http://localhost:3000/users/${window.location.pathname.slice(6)}`);
    }
    getUserUpdate(userId) {
        return this.httpClient.get(`http://localhost:3000/users/${userId}`);
    }
    updateUser(formData, userId) {
        const body = formData;
        return this.httpClient.put(`http://localhost:3000/users/${userId}`, body);
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ "./src/app/url.pipe.ts":
/*!*****************************!*\
  !*** ./src/app/url.pipe.ts ***!
  \*****************************/
/*! exports provided: SanitizerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizerPipe", function() { return SanitizerPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SanitizerPipe = class SanitizerPipe {
    constructor(dom) {
        this.dom = dom;
    }
    transform(value, args) {
        return this.dom.bypassSecurityTrustResourceUrl(value);
    }
};
SanitizerPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SanitizerPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sanitizer'
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SanitizerPipe);



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-info__card {\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  transition: 0.3s;\n  width: 30%;\n}\n.user-info__card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n.container {\n  padding: 2px 16px;\n}\n.user-info__news-block {\n    /* margin-top: 1%; */\n}\n.news-block__item{\n    margin-top: 1%;\n    margin-bottom: 1%;\n}\n.news-block__title {\n    margin-bottom: .5rem;\n    word-break: break-all;\n}\n.news-block__image {\n    display: flex;\n    justify-content: center;\n}\n.news-block__image-image {\n    width: 30%;\n    height: 30%;\n}\n.news-block__tags {\n    opacity: 0.5;\n    font-size: 11px;\n    word-break: break-all;\n}\n.news-block__text {\n  word-break: break-all;\n}\n.no-news {\n  text-align: center;\n  font-size: 2.5rem;\n  padding-top: 5%;\n}\n/* Full-width input fields */\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n/* Add a background color when the inputs get focus */\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n/* Set a style for all buttons */\nbutton {\n  background-color: #2199e8;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  margin-right: 1.0625rem;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\nbutton:hover {\n  opacity: 0.8;\n}\n/* Extra styles for the cancel button */\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336;\n}\n/* Float cancel and signup buttons and add an equal width */\n.cancelbtn, .signupbtn {\n  float: left;\n  width: 50%;\n}\n/* Add padding to container elements */\n.container {\n  padding: 7%;\n}\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgba(0,0,0,0.4);\n  padding-top: 50px;\n}\n/* Modal Content/Box */\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n/* The Close Button (x) */\n.close {\n  position: absolute;\n  right: 25px;\n  top: 8px;\n  color: #000;\n  font-size: 35px;\n  font-weight: bold;\n}\n.close:hover,\n.close:focus {\n  color: red;\n  cursor: pointer;\n}\n/* Style the horizontal ruler */\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n/* Clear floats */\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n/* Add Zoom Animation */\n.animate {\n  -webkit-animation: animatezoom 0.6s;\n  animation: animatezoom 0.6s\n}\n@-webkit-keyframes animatezoom {\n  from {-webkit-transform: scale(0)} \n  to {-webkit-transform: scale(1)}\n}\n@keyframes animatezoom {\n  from {transform: scale(0)} \n  to {transform: scale(1)}\n}\n/* Change styles for cancel button and signup button on extra small screens */\n@media screen and (max-width: 300px) {\n  .cancelbtn, .signupbtn {\n     width: 100%;\n  }\n}\n#alert-bad-user {\n  visibility: hidden;\n  padding: 20px;\n  width: 79.1%;\n  margin-left: 10%;\n  margin-bottom: 3%;\n  background-color: #f44336;\n  color: white;\n  /* position: fixed; */\n  z-index: 1;\n}\n#alert-bad-user.show {\n  visibility: visible;\n  /* -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; */\n}\n#alert-good-user {\n  visibility: hidden;\n  padding: 20px;\n  width: 79.1%;\n  margin-left: 10%;\n  margin-bottom: 3%;\n  background-color: #4CAF50;\n  color: white;\n  /* position: fixed; */\n  z-index: 1;\n}\n#alert-good-user.show {\n  visibility: visible;\n  /* -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; */\n}\n.button-block {\n  display: flex;\n  flex-direction: row-reverse;\n}\n.file-upload {\n  margin-left: 11%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7RUFDdkMsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFFQSxxREFBcUQ7QUFDckQ7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmO0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUEsdUNBQXVDO0FBQ3ZDO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjtBQUVBLDJEQUEyRDtBQUMzRDtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFFQSxzQ0FBc0M7QUFDdEM7RUFDRSxXQUFXO0FBQ2I7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0IsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsaUNBQWlDO0VBQ2pDLGlCQUFpQjtBQUNuQjtBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0IsRUFBRSxzREFBc0Q7RUFDaEYsc0JBQXNCO0VBQ3RCLFVBQVUsRUFBRSxvREFBb0Q7QUFDbEU7QUFFQSx5QkFBeUI7QUFFekI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUVBOztFQUVFLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLG1DQUFtQztFQUNuQztBQUNGO0FBRUE7RUFDRSxNQUFNLDJCQUEyQjtFQUNqQyxJQUFJLDJCQUEyQjtBQUNqQztBQUVBO0VBQ0UsTUFBTSxtQkFBbUI7RUFDekIsSUFBSSxtQkFBbUI7QUFDekI7QUFFQSw2RUFBNkU7QUFDN0U7RUFDRTtLQUNHLFdBQVc7RUFDZDtBQUNGO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25COzhDQUM0QztBQUM5QztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQjs4Q0FDNEM7QUFDOUM7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItaW5mb19fY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgd2lkdGg6IDMwJTtcbn1cbi51c2VyLWluZm9fX2NhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnB4IDE2cHg7XG59XG5cbi51c2VyLWluZm9fX25ld3MtYmxvY2sge1xuICAgIC8qIG1hcmdpbi10b3A6IDElOyAqL1xufVxuXG4ubmV3cy1ibG9ja19faXRlbXtcbiAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcbn1cblxuLm5ld3MtYmxvY2tfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5uZXdzLWJsb2NrX19pbWFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5ld3MtYmxvY2tfX2ltYWdlLWltYWdlIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMzAlO1xufVxuXG4ubmV3cy1ibG9ja19fdGFncyB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5uZXdzLWJsb2NrX190ZXh0IHtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4ubm8tbmV3cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciB3aGVuIHRoZSBpbnB1dHMgZ2V0IGZvY3VzICovXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTllODtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIG1hcmdpbi1yaWdodDogMS4wNjI1cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xuLmNhbmNlbGJ0biB7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cblxuLyogRmxvYXQgY2FuY2VsIGFuZCBzaWdudXAgYnV0dG9ucyBhbmQgYWRkIGFuIGVxdWFsIHdpZHRoICovXG4uY2FuY2VsYnRuLCAuc2lnbnVwYnRuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDclO1xufVxuXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIG1hcmdpbjogNSUgYXV0byAxNSUgYXV0bzsgLyogNSUgZnJvbSB0aGUgdG9wLCAxNSUgZnJvbSB0aGUgYm90dG9tIGFuZCBjZW50ZXJlZCAqL1xuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xufVxuXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICh4KSAqL1xuXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNXB4O1xuICB0b3A6IDhweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbG9zZTpob3Zlcixcbi5jbG9zZTpmb2N1cyB7XG4gIGNvbG9yOiByZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogU3R5bGUgdGhlIGhvcml6b250YWwgcnVsZXIgKi9cbmhyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLyogQ2xlYXIgZmxvYXRzICovXG4uY2xlYXJmaXg6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4vKiBBZGQgWm9vbSBBbmltYXRpb24gKi9cbi5hbmltYXRlIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGV6b29tIDAuNnM7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZXpvb20gMC42c1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZXpvb20ge1xuICBmcm9tIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCl9IFxuICB0byB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpfVxufVxuICBcbkBrZXlmcmFtZXMgYW5pbWF0ZXpvb20ge1xuICBmcm9tIHt0cmFuc2Zvcm06IHNjYWxlKDApfSBcbiAgdG8ge3RyYW5zZm9ybTogc2NhbGUoMSl9XG59XG5cbi8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XG4gICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbiNhbGVydC1iYWQtdXNlciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDc5LjElO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXG4gIHotaW5kZXg6IDE7XG59XG5cbiNhbGVydC1iYWQtdXNlci5zaG93IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLyogLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7ICovXG59XG5cbiNhbGVydC1nb29kLXVzZXIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiA3OS4xJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xuICB6LWluZGV4OiAxO1xufVxuXG4jYWxlcnQtZ29vZC11c2VyLnNob3cge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAvKiAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xuICBhbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41czsgKi9cbn1cblxuLmJ1dHRvbi1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuLmZpbGUtdXBsb2FkIHtcbiAgbWFyZ2luLWxlZnQ6IDExJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _userClass_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../userClass/user */ "./src/app/userClass/user.ts");




let UserComponent = class UserComponent {
    constructor(userService) {
        this.userService = userService;
        this.users = [];
        this.user = new _userClass_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.userData = new _userClass_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.returnImage = 'http://localhost:3000/';
        this.imageUrl = '../assets/Upload.png';
        this.fileToUpload = null;
    }
    ngOnInit() {
        this.token = localStorage.getItem('jwtToken');
        this.userInfo();
        this.getUsers();
        this.getUser();
        this.getUserId();
        this.returnImage = 'http://localhost:3000/';
    }
    userInfo() {
        if (this.token != null) {
            this.currentUser = JSON.parse(localStorage.getItem('user'));
        }
    }
    getUsers() {
        this.userService.getUsers().subscribe((data) => {
            this.users = data;
        });
    }
    getUser() {
        this.userService.getUser().subscribe((data) => {
            this.user = data;
        });
    }
    getUserUpdate(userId) {
        this.userService.getUserUpdate(userId).subscribe((data) => {
            this.updateUser = data;
        });
    }
    getUserId() {
        localStorage.removeItem('id');
        localStorage.setItem('id', window.location.pathname.slice(6));
        this.id = localStorage.getItem('id');
        if (!this.id) {
            this.isUser = false;
        }
        else {
            this.isUser = true;
        }
    }
    goodInfo() {
        const alert = document.getElementById('alert-good-user');
        alert.className = 'show';
        const modal = document.getElementById('id05');
        this.idCur = localStorage.getItem('user');
        this.getUserUpdate(this.idCur['id']);
        localStorage.setItem('user', JSON.stringify(this.updateUser));
        setTimeout(() => { alert.className = alert.className.replace('show', ''); }, 1500);
        setTimeout(() => {
            modal.style.display = 'none';
            window.location.href = '/user';
        }, 1000);
    }
    submit(userData) {
        const formData = new FormData();
        if (userData.firstName === undefined || userData.firstName.trim().length == 0) {
            formData.append('firstName', this.currentUser['firstName']);
        }
        else {
            formData.append('firstName', userData.firstName);
        }
        if (userData.lastName === undefined || userData.lastName.trim().length == 0) {
            formData.append('lastName', this.currentUser['lastName']);
        }
        else {
            formData.append('lastName', userData.lastName);
        }
        if (this.file == null) {
            formData.append('image', this.currentUser['image']);
        }
        else {
            formData.append('file', this.file);
        }
        if (this.isUser === false) {
            this.userId = this.currentUser['id'];
        }
        else {
            this.userId = localStorage.getItem('id');
        }
        this.userService.updateUser(formData, this.userId)
            .subscribe((userData) => {
            this.receivedData = userData;
            localStorage.setItem('user', JSON.stringify(userData));
        }, error => console.log(error));
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
        const reader = new FileReader();
        reader.onload = (event) => {
            this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
    }
    selectImage(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.file = file;
        }
    }
    clearInput() {
        this.userData['firstName'] = '';
        this.userData['lastName'] = '';
        this.userData['password'] = '';
        this.imageUrl = '../assets/Upload.png';
        this.file = null;
        this.fileInputValue = null;
    }
};
UserComponent.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")).default]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/userClass/user.ts":
/*!***********************************!*\
  !*** ./src/app/userClass/user.ts ***!
  \***********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let User = class User {
};
User = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-class',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userClass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/userClass/userClass.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userClass.component.css */ "./src/app/userClass/userClass.component.css")).default]
    })
], User);



/***/ }),

/***/ "./src/app/userClass/userClass.component.css":
/*!***************************************************!*\
  !*** ./src/app/userClass/userClass.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJDbGFzcy91c2VyQ2xhc3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ИННА\учеба\4 курс\Новая папка\angular-application\angular-application\client-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map