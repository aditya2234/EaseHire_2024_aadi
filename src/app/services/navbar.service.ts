import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor() {}
  navbar_options = {
    items: [
      { name: 'Home', url: '/pmo-home' },
      { name: 'service', url: '/#' },
      { name: 'contact', url: '/#' },
      { name: 'Profile', url: '/#' },
    ],
  };

  getNavLinks(roleId:number){
    //http req mein role id jayega
    return this.navbar_options;
  }
}
