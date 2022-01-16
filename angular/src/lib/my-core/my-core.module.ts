import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { PIPES_CALCULADORA } from './pipes/calculadora.pipe';
import { SizerComponent } from './components/sizer.component';



@NgModule({
  declarations: [
    PIPES_CADENAS, PIPES_CALCULADORA, SizerComponent,
  ],
  exports: [
    PIPES_CADENAS, PIPES_CALCULADORA, SizerComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
