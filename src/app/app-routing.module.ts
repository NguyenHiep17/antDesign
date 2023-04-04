import { WelcomeComponent } from "./pages/welcome/welcomeComponent";
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitorComponent } from './pages/welcome/monitor/monitor.component';
import { EmployeeManagerComponent } from './pages/welcome/employee-manager/employee-manager.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/login'},
  {path:'login', component:LoginComponent},
  {path:'welcome', component:WelcomeComponent, children:[
    {path: 'nhanvien', component:EmployeeManagerComponent},
    {path:'monitor', component:MonitorComponent},
  ]},
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
