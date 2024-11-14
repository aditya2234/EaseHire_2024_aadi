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
    // this.getNavLinksById(1);
    // this.showIntervieweeOptions()
    this.showPMOoptions()
  }

  // ngAfterContentChecked():void{
  //   this.showPMOoptions()

  // }

//   getNavLinksById(roleId:number) {
//     this.selectedNavLinks = this.navbarService.getNavLinks(roleId).items1;
//     console.log(this.selectedNavLinks);
//  }

  

  showPMOoptions(): void {
    const id:any = localStorage.getItem('role_id')
    let storedUserName: string | null = localStorage.getItem('user_name');
    if (storedUserName) {
      this.userName = storedUserName.replace(/"/g, '');
    }
    console.log(this.userName);
    
    console.log("The PMO ID" + id);
    if(id===null){
      this.isLoggedIn=false;
    }else{
      this.navbarService.getNavLinksById(id).subscribe(d=>{
        this.selectedNavLinks=d.items;
        
      })
      this.isLoggedIn=true
    }
    
    
    // if(id === '1'){
    //   this.isPMO=true;
    //   this.isLoggedIn = true;
    // }
    
  }

  // showIntervieweeOptions(): void {
  //   if (this.isInterviewee && this.isLoggedIn) {
  //     this.navbarOptions = this.navbarService.navbar_options.option1;
  //   }
  //   // else{
  //   //   this.navbarOptions = this.navbarService.navbar_options.option3
  //   // }
  // }
  // showIntervieweeOptions(): void {
  //   const id:any = localStorage.getItem('role_id')
  //   console.log("The Interviewer ID" + id);
  //   if(id === '2'){
  //     this.isInterviewee=true;
  //     this.isLoggedIn = true;
  //   }
    
  // }

  isLoggedOut(){
    localStorage.removeItem('role_id')
    localStorage.removeItem('user_name')
    // this.selectedNavLinks=[]
    this.isLoggedIn = false
    this.router.navigate(['/home'])
    window.location.reload();
  }

  


}

