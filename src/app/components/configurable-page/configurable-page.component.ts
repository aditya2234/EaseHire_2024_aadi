import { Component } from '@angular/core';
import { ConfigurablePageService } from '../../services/configurable-page.service';

@Component({
  selector: 'app-configurable-page',
  templateUrl: './configurable-page.component.html',
  styleUrl: './configurable-page.component.css'
})
export class ConfigurablePageComponent {
  roles:any=[]

  constructor(private configurableService:ConfigurablePageService){

  }

  ngOnInit():void{
    this.getRoles()
    
  }

  getRoles():void{
    this.configurableService.getRoles().subscribe((data:any) => {
      console.log(data); 
      this.roles = data.items || data; 
    });
  }

}
