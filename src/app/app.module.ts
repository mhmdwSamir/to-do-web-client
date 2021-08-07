import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from  "./shared/shared.module";
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoTaskComponent } from './components/todo-task/todo-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoTaskComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
