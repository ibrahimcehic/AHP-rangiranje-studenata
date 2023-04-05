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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaStudenataComponent } from './lista-studenata/lista-studenata/lista-studenata.component';
import { TableModule } from 'primeng/table';
import { RangiranjeStudenataComponent } from './rangiranje-studenata/rangiranje-studenata/rangiranje-studenata.component';
import { RangiranjeJednakeVaznostiComponent } from './rangiranje-studenata/rangiranje-jednake-vaznosti/rangiranje-jednake-vaznosti.component';
import { TabViewModule } from 'primeng/tabview';
import { RangiranjeTezinskiComponent } from './rangiranje-studenata/rangiranje-tezinski/rangiranje-tezinski.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnosStudentaComponent,
    UnosKriterijaComponent,
    ListaStudenataComponent,
    RangiranjeStudenataComponent,
    RangiranjeJednakeVaznostiComponent,
    RangiranjeTezinskiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ButtonModule,
    InputSwitchModule,
    InputNumberModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    TableModule,
    TabViewModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
