import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { PresidiumComponent } from './pages/presidium/presidium.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { BackroomComponent } from './pages/backroom/backroom.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'news',
    component: NewsComponent
  }, 
  {
    path: 'directive',
    component: DirectivesComponent,
    canActivate: [AuthGuard]
  }, 
  {
    path: 'user',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  }, 
  {
    path: 'presidium',
    component: PresidiumComponent
  },
  {
    path: 'backroom',
    component: BackroomComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
