import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-kriteriji-weight',
  templateUrl: './kriteriji-weight.component.html',
  styleUrls: ['./kriteriji-weight.component.css']
})
export class KriterijiWeightComponent implements OnInit{
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    
  }
  kriterijiWeightForm: FormGroup = this.fb.group({
    godina_studija_weight: new FormControl(),
    uspjeh_weight: new FormControl(),
    ciklus_weight: new FormControl(),
    broj_clanova_weight: new FormControl(),
    invalidnost_roditelja_weight: new FormControl(),
    bolest_clanova_bez_rjesenja_weight: new FormControl(),
    student_bez_jednog_roditelja_weight: new FormControl(),
    student_neutvrdenog_ocinstva_weight: new FormControl(),
    rastavljeni_samohrani_roditelj_weight: new FormControl(),
    broj_studenata_iz_domacinstva_weight: new FormControl(),
    broj_ucenika_weight: new FormControl(),
    mjesecni_prihod_weight: new FormControl(),
  })
  get godina_studija_weight() {return this.kriterijiWeightForm?.get('godina_studija_weight');}
  get uspjeh_weight() {return this.kriterijiWeightForm?.get('uspjeh_weight');}
  get ciklus_weight() {return this.kriterijiWeightForm?.get('ciklus_weight');}
  get broj_clanova_weight() {return this.kriterijiWeightForm?.get('broj_clanova_weight');}
  get invalidnost_roditelja_weight() {return this.kriterijiWeightForm?.get('invalidnost_roditelja_weight');}
  get bolest_clanova_bez_rjesenja_weight() {return this.kriterijiWeightForm?.get('bolest_clanova_bez_rjesenja_weight');}
  get student_bez_jednog_roditelja_weight() {return this.kriterijiWeightForm?.get('student_bez_jednog_roditelja_weight');}
  get student_neutvrdenog_ocinstva_weight() {return this.kriterijiWeightForm?.get('student_neutvrdenog_ocinstva_weight');}
  get rastavljeni_samohrani_roditelj_weight() {return this.kriterijiWeightForm?.get('rastavljeni_samohrani_roditelj_weight');}
  get broj_studenata_iz_domacinstva_weight() {return this.kriterijiWeightForm?.get('broj_studenata_iz_domacinstva_weight');}
  get broj_ucenika_weight() {return this.kriterijiWeightForm?.get('broj_ucenika_weight');}
  get mjesecni_prihod_weight() {return this.kriterijiWeightForm?.get('mjesecni_prihod_weight');}
}
