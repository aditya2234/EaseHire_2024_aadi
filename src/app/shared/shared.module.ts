import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { SaveButtonComponent } from './save-button/save-button.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [ButtonComponent, EditButtonComponent, DeleteButtonComponent, SaveButtonComponent, CardComponent, ModalComponent, AlertComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, EditButtonComponent, DeleteButtonComponent, SaveButtonComponent, CardComponent, AlertComponent, ModalComponent]
})
export class SharedModule {}
