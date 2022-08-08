import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HelloComponent } from './hello.component';
import { CommonModule } from '@angular/common';
import { HelloRoutingModule } from './hello-routing.module';
import { TestRouteComponent } from './TestRoute/test-route.component';

@NgModule({
  imports: [CommonModule, FormsModule, HelloRoutingModule],
  declarations: [HelloComponent, TestRouteComponent],
  exports: [HelloComponent, TestRouteComponent],
})
export class HelloModule {}
