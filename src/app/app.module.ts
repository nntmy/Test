import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//componenet
import { AppComponent } from './app.component';
import { ColorComponent } from './components/color/color.component';
import { SizeComponent } from './components/size/size.component';
import { ResetComponent } from './components/reset/reset.component';
import { TextComponent } from './components/text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    SizeComponent,
    ResetComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
