import { Component } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  selectedNavLinks:any[]=[];
  navbarOptions: any = {};
  isLoggedIn: boolean = true;
  isAdmin: boolean = false;
  isInterviewee: boolean = true;
  isInterviewer: boolean = false;

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.getNavLinks(1);
  }

  // showAdminOptions(): void {
  //   if (this.isAdmin && this.isLoggedIn) {
  //     this.navbarOptions = this.navbarService.navbar_options.option2;
  //   }
  //   // else{
  //   //   this.navbarOptions = this.navbarService.navbar_options.option3
  //   // }
  // }

  // showIntervieweeOptions(): void {
  //   if (this.isInterviewee && this.isLoggedIn) {
  //     this.navbarOptions = this.navbarService.navbar_options.option1;
  //   }
  //   // else{
  //   //   this.navbarOptions = this.navbarService.navbar_options.option3
  //   // }
  // }
  // showInterviewerOptions(): void {
  //   if (this.isInterviewer && this.isLoggedIn) {
  //     this.navbarOptions = this.navbarService.navbar_options.option3;
  //   }
  //   // else{
  //   //   this.navbarOptions = this.navbarService.navbar_options.option3
  //   // }
  // }

  isLoggedOut(){
    this.isLoggedIn = false
  }

  

   getNavLinks(roleId:number) {
     this.selectedNavLinks = this.navbarService.getNavLinks(roleId).items;
     console.log(this.selectedNavLinks);
  }
}

