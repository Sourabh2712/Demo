import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material/angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { TabsDirective } from './tabs.directive';
import { PortalModule } from '@angular/cdk/portal';
import { ExampleDirective } from './example.directive';
import { FormDirective } from './form.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    TabsDirective,
    ExampleDirective,
    FormDirective,
  ],
  entryComponents: [CardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    MatCardModule,
    PortalModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
