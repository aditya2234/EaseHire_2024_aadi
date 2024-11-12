import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
userForm: FormGroup | undefined;
onSubmit() {
throw new Error('Method not implemented.');
}

}
