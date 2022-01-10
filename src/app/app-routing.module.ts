import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { AppUploadComponent } from './components/app-upload/app-upload.component';
import { AppView1Component } from './components/app-view1/app-view1.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {path:'landing',component:LandingComponent},
  {path:'adminTable',component:AdminTableComponent},
  {path:'appUpload',component:AppUploadComponent},
  {path:'appView1',component:AppView1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
