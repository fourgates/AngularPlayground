import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HighlightTextDirective } from './highligh-text/highlight-text.directive'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HighlightTextDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
