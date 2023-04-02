import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { KriterijiWeightComponent } from './unos studenta/unos-studenta/unos-kriterija/kriteriji-weight/kriteriji-weight.component';
import { UnosStudentaComponent } from './unos studenta/unos-studenta/unos-studenta.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'unos-studenata', component: UnosStudentaComponent },
  { path: 'kriteriji', component: KriterijiWeightComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
