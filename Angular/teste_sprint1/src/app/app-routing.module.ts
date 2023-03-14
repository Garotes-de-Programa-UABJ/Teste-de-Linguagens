import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { SignupComponent } from './paginas/signup/signup.component';
import { AgendamentoComponent } from './paginas/agendamento/agendamento.component';

const routes: Routes = [

  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'agendamento', component:AgendamentoComponent},
  {path:'principal', component:PrincipalComponent},
  {path:'**', redirectTo:'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
