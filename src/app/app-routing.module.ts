import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestroComponent } from './add-restro/add-restro.component';
import { ListRestroComponent } from './list-restro/list-restro.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateRestroComponent } from './update-restro/update-restro.component';
const routes: Routes = [
{
  component:AddRestroComponent,
  path:'add'
},
{
  component:UpdateRestroComponent,
  path:'updateStudent/:id'
},
{
  component:ListRestroComponent,
  path:'list'
},
{
  component:LoginComponent,
  path:'login'
},
{
  component:RegisterComponent,
  path:'register'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
