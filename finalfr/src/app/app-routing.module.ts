import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';


const routes: Routes = [
  {
    path: 'registerUser',
    component: RegisterUserComponent
  },
  {
    path: '',
    redirectTo: '/registerUser',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
