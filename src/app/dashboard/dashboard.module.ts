import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PanelComponent } from './panel/panel.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CuerpoComponent,
    PanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CuerpoComponent,
    PanelComponent
  ]
})
export class DashboardModule { }
