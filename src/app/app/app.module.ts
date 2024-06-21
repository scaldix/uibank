import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { EmailService} from "../service/email.service";
import { AProposComponent} from "../components/a-propos/a-propos.component";
import {AppComponent} from "../app.component";

@NgModule({
  declarations: [
    AppComponent,
    AProposComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [EmailService],
  bootstrap: []
})
export class AppModule { }
