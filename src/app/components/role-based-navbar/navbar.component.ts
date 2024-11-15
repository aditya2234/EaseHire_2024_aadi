import { Component } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  selectedNavLinks:any[]=[];
  navbarOptions: any = {};
  userName:string | any='';
  isLoggedIn: boolean = false;
  isPMO: boolean = false;
  isInterviewee: boolean = false;
  isInterviewer: boolean = false;

  constructor(private navbarService: NavbarService,private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {

    this.showPMOoptions()
  }

 

  showPMOoptions(): void {
    const id:any = localStorage.getItem('role_id')
    let storedUserName: string | null = localStorage.getItem('user_name');
    if (storedUserName) {
      this.userName = storedUserName.replace(/"/g, '');
    }
    console.log(this.userName);
    
    console.log("The PMO ID" + id);
      this.navbarService.getNavLinksById(id).subscribe(d=>{
        this.selectedNavLinks=d.items;        
      })
      this.isLoggedIn=true
    
    

  }


  isLoggedOut(){
    localStorage.removeItem('role_id')
    localStorage.removeItem('user_name')
    // this.selectedNavLinks=[]
    this.isLoggedIn = false
    this.router.navigate(['/home'])
    window.location.reload();
  }



}

