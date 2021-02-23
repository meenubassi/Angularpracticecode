import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverGuard implements Resolve<any> {
  userobj={
    id: 0,
    name: 'meenu'
  };
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //throw new Error('Method not implemented.');
    return this.userobj;
  }
  
  
}
