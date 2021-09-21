import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { TestDirective } from './directives/test.directive';

@NgModule({
  declarations: [UserComponent, ModalComponent, UserinfoComponent, TestDirective],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule],
})
export class UserModule {}
