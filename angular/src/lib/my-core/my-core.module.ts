import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { PIPES_CALCULADORA } from './pipes/calculadora.pipe';
import { SizerComponent } from './components/sizer.component';
import { MIS_VALIDADORES } from './directives/validadores.directive';
import { ShowDirective } from './directives/atributo.directive';



@NgModule({
  declarations: [
    PIPES_CADENAS, PIPES_CALCULADORA, MIS_VALIDADORES, ShowDirective, SizerComponent,
  ],
  exports: [
    PIPES_CADENAS, PIPES_CALCULADORA, MIS_VALIDADORES, ShowDirective, SizerComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
