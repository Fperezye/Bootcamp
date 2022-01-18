import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosAddComponent, ContactosEditComponent, ContactosListComponent, ContactosViewComponent } from './contactos/componente.component';

const routes: Routes = [{ path: 'contactos', children: [
  { path: '', component: ContactosListComponent},
  { path: 'add', component: ContactosAddComponent},
  { path: ':id/edit', component: ContactosEditComponent},
  { path: ':id', component: ContactosViewComponent},
  { path: ':id/:kk', component: ContactosViewComponent},
  ]},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
