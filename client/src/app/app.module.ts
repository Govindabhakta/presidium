import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { UserService } from '../app/services/user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { PresidiumComponent } from './pages/presidium/presidium.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { DirectiveService } from './services/directive.service';
import { BackroomComponent } from './pages/backroom/backroom.component';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    NavbarComponent,
    DirectivesComponent,
    PresidiumComponent,
    UserProfileComponent,
    BackroomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [UserService, DirectiveService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
