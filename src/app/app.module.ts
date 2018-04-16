import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './services/modal.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, ModalComponent, HomeComponent],
  imports: [BrowserModule, FormsModule],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
