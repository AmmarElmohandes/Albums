import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'user/:id', component: UserinfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
