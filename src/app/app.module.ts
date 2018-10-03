import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SideBarComponent } from './layouts/side-bar/side-bar.component';
import { LoginComponent } from './modules/login/login.component';
import { ApiService } from './commons/api.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    HeaderComponent,
    SideBarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
