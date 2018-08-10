import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  exports: [HomeComponent],
  declarations: [
    HomeComponent, HeaderComponent],
  providers: []
})
export class HomeModule { }
