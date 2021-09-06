import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoTaskComponent } from './components/todo-task/todo-task.component';
import { TodoStatsComponent } from './components/todo-stats/todo-stats.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TodoWrapperComponent } from './todo-wrapper/todo-wrapper.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpConfigInterceptor } from './core/interceptors/http-config.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoTaskComponent,
    TodoStatsComponent,
    SignUpComponent,
    TodoWrapperComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    NgbModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
