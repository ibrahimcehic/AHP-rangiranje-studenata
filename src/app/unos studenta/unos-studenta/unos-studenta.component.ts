import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-unos-studenta',
  templateUrl: './unos-studenta.component.html',
  styleUrls: ['./unos-studenta.component.css']
})
export class UnosStudentaComponent {
constructor( private fb: FormBuilder){}
studetForm: FormGroup = this.fb.group({
  student: new FormGroup({
  ime: new FormControl(),
  prezime: new FormControl(),
  univerzitet: new FormControl(),
  fakultet: new FormControl(),
  prijava_bez_bodovanja: new FormControl(),
  deficitarno_zanimanje: new FormControl(),
  kriteriji: new FormControl(),
  godina_studija: new FormControl(),
  uspjeh: new FormControl(),
  broj_clanova: new FormControl(),
  invalidnost_roditelja: new FormControl(),
  bolest_clanova_bez_rjesenja: new FormControl(),
  student_bez_jednog_roditelja: new FormControl(),
  student_neutvrdenog_ocinstva: new FormControl(),
  rastavljeni_samohrani_roditelj: new FormControl(),
  broj_studenata_iz_domacinstva: new FormControl(),
  broj_ucenika: new FormControl(),
  mjesecni_prihod: new FormControl(),
  }),
  
 
  
})
}
