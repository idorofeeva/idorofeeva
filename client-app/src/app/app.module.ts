import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFilterPipe } from './search.pipe';
import { SanitizerPipe } from './url.pipe';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsComponent } from './news/news.component';
import { AuthComponent } from './auth/auth.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { User } from './userClass/user';
import { Post } from './postClass/postClass';
import { NotFoundComponent } from './notFound/notFound.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material';
import { AuthGuard } from './auth/auth.guard';
import { AuthLogService } from './services/auth-log.service';
import { AuthRegService } from './services/auth-reg.service';
import { NewsService } from './services/news.service';
import { UsersService } from './services/users.service';

const appRoutes: Routes = [
  { path: '', component: NewsComponent },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/:id',
    component: UserComponent,
    canActivate: [AuthGuard]
   },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    AuthComponent,
    RegistrationComponent,
    User,
    Post,
    UserComponent,
    HeaderComponent,
    NotFoundComponent,
    SearchFilterPipe,
    SanitizerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    Ng2SearchPipeModule,
    NgxPaginationModule,
    LayoutModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    AuthGuard,
    AuthLogService,
    AuthRegService,
    NewsService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
