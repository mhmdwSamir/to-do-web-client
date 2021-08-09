import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TodoStatsComponent } from './components/todo-stats/todo-stats.component';
import { TodoTaskComponent } from './components/todo-task/todo-task.component';

const routes: Routes = [
  { path:  'taskStaste', component: TodoStatsComponent},
  { path:  'tasks', component: TodoTaskComponent},
  { path:  'signup', component: SignUpComponent},
  { path:  'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
