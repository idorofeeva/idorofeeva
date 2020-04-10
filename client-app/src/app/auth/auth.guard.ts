import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  token = '';

  ngOnInit(): void {
    this.token = localStorage.getItem('jwtToken');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    this.token = localStorage.getItem('jwtToken');
    if (this.token == null) {
      const modalAuth = document.getElementById('id00');
      modalAuth.style.display = 'block';
      return false;
    } else {
      return true;
    }
  }

}
