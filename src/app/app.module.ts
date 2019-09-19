// Module Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MymaterialModule } from './mymaterial/mymaterial.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


// Component Imports
import { AppComponent } from './app.component';
import { ActorlistComponent } from './components/actorlist/actorlist.component';
import { PostdemoComponent } from './components/postdemo/postdemo.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';

// Service Imports
import { ActordataService } from './services/actordata.service';
import { PostService } from './services/post.service';

// Pipe imports
import { ReversetextPipe } from './pipes/reversetext.pipe';
import { PiglatinPipe } from './pipes/piglatin.pipe';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorlistComponent,
    PostdemoComponent,
    ParentComponent,
    ChildComponent,
    PipedemoComponent,
    ReversetextPipe,
    PiglatinPipe,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MymaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ActordataService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
