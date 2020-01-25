import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from '../component/nav-bar/nav-bar.component';
import { MaterialDesignModule } from '../module/material-design/material-design.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  LoginAndRegisterDialogComponent,
  LoginDialogComponent,
  RegisterDialogComponent
} from '../component/login-and-register-dialog/login-and-register-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginAndRegisterDialogComponent,
    LoginDialogComponent,
    RegisterDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    FlexLayoutModule
  ],
  entryComponents: [
    LoginAndRegisterDialogComponent,
    LoginDialogComponent,
    RegisterDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
