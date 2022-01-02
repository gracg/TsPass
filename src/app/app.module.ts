import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/header/header.component';
import { FormComponent } from './comps/form/form.component';
import { GeneratorService } from './service/generator.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [GeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
