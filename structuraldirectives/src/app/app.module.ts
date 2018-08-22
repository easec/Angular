import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SwitchComponent } from './switch/switch.component';
import { ForlComponent } from './forl/forl.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SwitchComponent,
    ForlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
