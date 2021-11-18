import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmailPipe } from './pipes/email.pipe';
import { ColorDirective } from './directives/color.directive';



@NgModule({
  declarations: [
    NavbarComponent,
    EmailPipe,
    ColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    EmailPipe,
    ColorDirective
  ]
})
export class SharedModule { }
