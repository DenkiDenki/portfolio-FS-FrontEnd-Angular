import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'inicio', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
