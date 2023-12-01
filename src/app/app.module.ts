import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoComponent } from './components/todo/todo.component';
import { DoneComponent } from './components/done/done.component';
const routes: Route[] = [
  {
    path: '',
    component: TodoComponent,
  },
  {
    path: 'completed',
    component: DoneComponent,
  },
];
@NgModule({
  declarations: [AppComponent, NavbarComponent, TodoComponent, DoneComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
