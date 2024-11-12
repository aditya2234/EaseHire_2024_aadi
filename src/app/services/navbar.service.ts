import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor() {}
  navbar_options = {
    items: [
      { name: 'Home', url: '/home' },
      { name: 'Skill-Management', url: '/skill-management' },
      { name: 'CustomerView', url: '/customer-view' },
      { name: 'Profile', url: '/#' },
    ],
  };

  getNavLinks(roleId:number){
    //http req mein role id jayega
    return this.navbar_options;
  }
}
