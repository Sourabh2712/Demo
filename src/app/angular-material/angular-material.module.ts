import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
    
  ],
  exports: [
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class AngularMaterialModule { }
