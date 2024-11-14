import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'easyHire';
  isModalVisible = true;
  isLoggedIn:boolean;
  
  constructor(private loginService:LoginService, private router:Router){
    this.isLoggedIn=false;
    setTimeout(() => {
      this.hideModal()
    }, 4000);
    router.events.subscribe(
      event=>{
        if(event instanceof NavigationEnd)
        {
          this.loadFlags();
        }
      }
    )
  }

  showModal() {
    this.isModalVisible = true;
  }

  hideModal() {
    this.isModalVisible = false;
  }


  loadFlags()
  {
    this.isLoggedIn = this.loginService.isLoggedIn();
    
  }

  ngOnInit()
  {
    this.loadFlags();
  }

}
