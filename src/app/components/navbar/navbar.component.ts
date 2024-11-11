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
  isInterviewer: boolean = false;

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarOptions = this.navbarService.navbar_options;
  }

  showAdminOptions(): void {
    if (this.isAdmin && this.isLoggedIn) {
      this.navbarOptions = this.navbarService.navbar_options.option2;
    }
    // else{
    //   this.navbarOptions = this.navbarService.navbar_options.option3
    // }
  }

  showIntervieweeOptions(): void {
    if (this.isInterviewee && this.isLoggedIn) {
      this.navbarOptions = this.navbarService.navbar_options.option1;
    }
    // else{
    //   this.navbarOptions = this.navbarService.navbar_options.option3
    // }
  }
  showInterviewerOptions(): void {
    if (this.isInterviewer && this.isLoggedIn) {
      this.navbarOptions = this.navbarService.navbar_options.option3;
    }
    // else{
    //   this.navbarOptions = this.navbarService.navbar_options.option3
    // }
  }

  isLoggedOut(){
    this.isLoggedIn = false
  }

  

}
