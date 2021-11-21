import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUploadComponent } from './components/app-upload/app-upload.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {path:'landing',component:LandingComponent},
  {path:'appUpload',component:AppUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
