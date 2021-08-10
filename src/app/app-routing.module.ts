import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TodoStatsComponent } from './components/todo-stats/todo-stats.component';
import { TodoTaskComponent } from './components/todo-task/todo-task.component';

const routes: Routes = [
  { path:  'taskStaste', component: TodoStatsComponent},
  { path:  'tasks', component: TodoTaskComponent},
  { path:  'signup', component: SignUpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
