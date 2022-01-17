import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { PIPES_CALCULADORA } from './pipes/calculadora.pipe';
import { SizerComponent } from './components/sizer.component';
import { MIS_VALIDADORES } from './directives/validadores.directive';



@NgModule({
  declarations: [
    PIPES_CADENAS, PIPES_CALCULADORA, MIS_VALIDADORES, SizerComponent,
  ],
  exports: [
    PIPES_CADENAS, PIPES_CALCULADORA, MIS_VALIDADORES, SizerComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
