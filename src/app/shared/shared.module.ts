import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
@NgModule({
  declarations: [NavBarComponent, InputComponent, ModalComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [NavBarComponent, InputComponent, ModalComponent],
})
export class SharedModule {}
