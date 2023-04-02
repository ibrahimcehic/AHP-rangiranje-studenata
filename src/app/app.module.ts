import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { UnosStudentaComponent } from './unos studenta/unos-studenta/unos-studenta.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { UnosKriterijaComponent } from './unos studenta/unos-studenta/unos-kriterija/unos-kriterija.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';
import { KriterijiWeightComponent } from './unos studenta/unos-studenta/unos-kriterija/kriteriji-weight/kriteriji-weight.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnosStudentaComponent,
    UnosKriterijaComponent,
    KriterijiWeightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputSwitchModule,
    InputNumberModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
