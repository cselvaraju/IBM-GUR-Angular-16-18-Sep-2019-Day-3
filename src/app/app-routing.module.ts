import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostdemoComponent } from './components/postdemo/postdemo.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'posts', component: PostdemoComponent},
  {path: 'pipes', component: PipedemoComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
