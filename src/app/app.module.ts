import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HelloModule } from './hello/hello.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HelloModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
