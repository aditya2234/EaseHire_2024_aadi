import { Component } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navbarOptions: any = {};
  isLoggedIn: boolean = true;
  isAdmin: boolean = false;
  isInterviewee: boolean = true;

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarOptions = this.navbarService.navbar_options;
  }

  showAdminOptions(): void {
    if (this.isAdmin) {
      this.navbarOptions = this.navbarService.navbar_options.option2;
    }
  }

  showInterviewOptions(): void {
    if (this.isInterviewee) {
      this.navbarOptions = this.navbarService.navbar_options.option1;
    }
  }

  

}
