import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ListaStudenataComponent } from './lista-studenata/lista-studenata/lista-studenata.component';
import { RangiranjeStudenataComponent } from './rangiranje-studenata/rangiranje-studenata/rangiranje-studenata.component';
import { RangiranjeTezinskiComponent } from './rangiranje-studenata/rangiranje-tezinski/rangiranje-tezinski.component';
import { UnosStudentaComponent } from './unos studenta/unos-studenta/unos-studenta.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'unos-studenata', component: UnosStudentaComponent },
  { path: 'criteria-weight', component: RangiranjeTezinskiComponent },
  { path: 'lista-studenata', component: ListaStudenataComponent },
  { path: 'rang-lista', component: RangiranjeStudenataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
