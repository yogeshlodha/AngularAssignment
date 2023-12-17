import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { UserList } from './userList/userlist.component';
import { Home } from './home/home.component';
import { AddUser } from './addUser/adduser.component';

@NgModule({
  declarations: [
    AppComponent,
    UserList,
    Home,
    AddUser,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: Home, pathMatch: 'full' },
      { path: 'userlist', component: UserList },
      { path: 'adduser', component: AddUser },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
